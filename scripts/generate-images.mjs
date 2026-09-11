// Generates responsive WebP variants for everything in public/images.
//
// The site served one full-size JPEG to every device: 5.2MB of source images,
// the largest 689KB, with the homepage shipping 20 img tags of which 14 were
// eager. While rendering was client-side this was partly masked - React added
// images to the DOM progressively, staggering the fetches. Prerendering put
// them all in the initial HTML, the browser requested them at once, and mobile
// LCP went from 4.7s to 6.9s on a 4,180KiB page.
//
// Run with: npm run images
// Output is committed, so builds stay fast and deterministic.

import sharp from 'sharp'
import { readdir, mkdir, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SRC = path.join(__dirname, '..', 'public', 'images')
const OUT = path.join(SRC, 'r')

// 640/1024 cover most phones; 1200 exists because a 390px viewport at DPR 3
// needs ~1170px, and without a candidate that large the browser reaches past
// the WebP set for the full-size JPEG. 1440 covers desktop. Quality tapers
// with width because artefacts are less visible per-pixel on larger variants.
const WIDTHS = [640, 1024, 1200, 1440]
const QUALITY = { 640: 78, 1024: 74, 1200: 62, 1440: 58 }

async function walk(dir, base = '') {
  const out = []
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.name === 'r') continue
    const rel = base ? `${base}/${e.name}` : e.name
    if (e.isDirectory()) out.push(...(await walk(path.join(dir, e.name), rel)))
    else if (/\.(jpe?g|png)$/i.test(e.name)) out.push(rel)
  }
  return out
}

async function main() {
  await mkdir(OUT, { recursive: true })
  const files = await walk(SRC)

  let before = 0
  let after = 0
  const manifest = {}

  for (const rel of files) {
    const base = rel.replace(/\.(jpe?g|png)$/i, '')
    const srcPath = path.join(SRC, rel)
    before += (await stat(srcPath)).size

    const meta = await sharp(srcPath).metadata()
    // Intrinsic dimensions travel with the widths so <img> can carry
    // width/height and reserve the right box before the file lands.
    manifest[base] = { widths: [], w: meta.width || 0, h: meta.height || 0 }

    await mkdir(path.join(OUT, path.dirname(base)), { recursive: true })

    for (const w of WIDTHS) {
      // Never upscale: a 1200px source has no business being written at 1440.
      if (meta.width && meta.width < w && w !== WIDTHS[0]) continue
      const target = Math.min(w, meta.width || w)
      const outPath = path.join(OUT, `${base}-${w}.webp`)
      await sharp(srcPath).resize(target).webp({ quality: QUALITY[w] ?? 74 }).toFile(outPath)
      after += (await stat(outPath)).size
      manifest[base].widths.push(w)
    }
  }

  // Widths are skipped when the source is narrower, so the component cannot
  // assume every width exists: advertising one that was never written makes
  // the browser request a file that is not there.
  await writeFile(
    path.join(__dirname, '..', 'src', 'data', 'image-manifest.json'),
    JSON.stringify(manifest, null, 2) + '\n',
    'utf-8'
  )

  const kb = (n) => `${Math.round(n / 1024)} KB`
  console.log(`  sources : ${files.length} files, ${kb(before)}`)
  console.log(`  variants: ${kb(after)} across ${WIDTHS.join('/')}px WebP`)
  console.log(`  manifest: ${Object.keys(manifest).length} images`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
