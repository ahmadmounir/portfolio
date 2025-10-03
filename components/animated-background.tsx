"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Reduced to 2 blobs and lighter effects for better performance */}
      <div className="absolute top-0 -left-4 w-64 h-64 bg-gradient-to-br from-emerald-500/12 to-teal-500/12 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
      <div className="absolute -bottom-8 right-20 w-64 h-64 bg-gradient-to-br from-green-500/12 to-emerald-500/12 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000" />

      {/* Simplified grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
    </div>
  )
}
