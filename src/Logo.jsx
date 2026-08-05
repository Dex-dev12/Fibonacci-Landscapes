// The actual Fibonacci Landscape Construction icon mark, cropped from the
// client-supplied logo file (background keyed transparent so it drops onto
// any surface color). The wordmark is set as live text next to it, not baked
// into this image.
export default function FibonacciMark({ className = 'h-9 w-9' }) {
  return <img src="/logo-mark.png" alt="" className={`${className} object-contain`} />
}
