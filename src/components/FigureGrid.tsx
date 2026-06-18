import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

/** Simple human glyph — head + shoulders. Inherits currentColor. */
function HumanGlyph({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="7" r="4.2" />
      <path d="M3.5 22c0-5 3.8-8.5 8.5-8.5S20.5 17 20.5 22Z" />
    </svg>
  )
}

/** Simple bot glyph — antenna + square head with eyes. Inherits currentColor. */
function BotGlyph({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <rect x="11.1" y="1.5" width="1.8" height="3.2" rx="0.9" />
      <circle cx="12" cy="4.4" r="1.5" />
      <rect x="4" y="6.5" width="16" height="13" rx="3.2" />
      <circle cx="9" cy="12.4" r="1.7" fill="#0A0A0B" />
      <circle cx="15" cy="12.4" r="1.7" fill="#0A0A0B" />
      <rect x="9" y="16" width="6" height="1.6" rx="0.8" fill="#0A0A0B" />
    </svg>
  )
}

interface FigureGridProps {
  /** Total figures (default 100). */
  total?: number
  /** How many are shaded "bots". */
  shaded: number
  /** Columns in the grid (default 10). */
  columns?: number
  /** Tailwind text color class for the shaded (bot) figures. */
  shadedClass?: string
  /** Tailwind text color class for the plain (human) figures. */
  plainClass?: string
  /** Use bot glyphs for shaded and human glyphs for the rest. */
  glyphs?: boolean
  /** Stagger start delay (s). */
  baseDelay?: number
  /** Per-figure stagger increment (s). */
  stagger?: number
  className?: string
}

/**
 * Reusable figure grid — 100 small figures, N shaded.
 * Used on the "bots outnumber humans" slide and again on the security slide.
 * Reads in a second: the shaded majority IS the message.
 */
export function FigureGrid({
  total = 100,
  shaded,
  columns = 10,
  shadedClass = 'text-ember-500',
  plainClass = 'text-bone-100/20',
  glyphs = true,
  baseDelay = 0,
  stagger = 0.012,
  className = '',
}: FigureGridProps) {
  const cells = Array.from({ length: total }, (_, i) => i < shaded)
  return (
    <div
      className={`grid gap-[3px] md:gap-1.5 ${className}`}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {cells.map((isShaded, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease, delay: baseDelay + i * stagger }}
          className={`aspect-square flex items-center justify-center ${isShaded ? shadedClass : plainClass}`}
        >
          {glyphs ? (
            isShaded ? (
              <BotGlyph className="w-full h-full" />
            ) : (
              <HumanGlyph className="w-[78%] h-[78%]" />
            )
          ) : (
            <div className="w-2/3 h-2/3 rounded-full bg-current" />
          )}
        </motion.div>
      ))}
    </div>
  )
}

export { HumanGlyph, BotGlyph }
