'use client'

interface MarqueeBarProps {
  text: string
  className?: string
}

export default function MarqueeBar({ text, className = '' }: MarqueeBarProps) {
  const repeatedText = Array(20).fill(text).join('     ')

  return (
    <div className={`w-full bg-brand-green py-4 overflow-hidden relative ${className}`}>
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="inline-block text-black font-metal text-2xl md:text-4xl uppercase tracking-[0.5em] px-8">
          {repeatedText}
        </span>
        <span
          aria-hidden
          className="inline-block text-black font-metal text-2xl md:text-4xl uppercase tracking-[0.5em] px-8"
        >
          {repeatedText}
        </span>
      </div>
    </div>
  )
}
