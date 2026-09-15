// The actual Fibonacci Landscape Construction icon mark, cropped from the
// client-supplied logo file (background keyed transparent so it drops onto
// any surface color). The wordmark is set as live text next to it, not baked
// into this image.
//
// Served as a 120px WebP: the source PNG was 491px and 15.7 KB for a mark that
// renders at 40px at most, on every page. 120px covers the largest render at 3x
// DPR. Width and height are intrinsic dimensions so the box is reserved before
// the file arrives; the className still decides the rendered size.
export default function FibonacciMark({ className = 'h-9 w-9' }) {
  return (
    <img
      src="/logo-mark.webp"
      width={120}
      height={120}
      alt=""
      decoding="async"
      className={`${className} object-contain`}
    />
  )
}
