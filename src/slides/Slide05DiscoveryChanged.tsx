import { motion } from 'framer-motion'
import { Slide } from '../components/Slide'
import { SLIDES } from '../lib/slides'

const ease = [0.22, 1, 0.36, 1] as const

interface Surface {
  label: string
  x: number // % within the right panel
  y: number
  size?: 'lg' | 'md' | 'sm'
}

const surfaces: Surface[] = [
  { label: 'ChatGPT', x: 30, y: 26, size: 'lg' },
  { label: 'Gemini', x: 64, y: 16, size: 'md' },
  { label: 'Perplexity', x: 78, y: 44, size: 'md' },
  { label: 'Google AI Overview', x: 44, y: 52, size: 'lg' },
  { label: 'AI Agents', x: 20, y: 62, size: 'md' },
  { label: 'Social', x: 70, y: 74, size: 'sm' },
  { label: 'PR', x: 40, y: 84, size: 'sm' },
  { label: 'Reddit', x: 88, y: 64, size: 'sm' },
  { label: 'Maps', x: 13, y: 34, size: 'sm' },
]

const sizeClass: Record<NonNullable<Surface['size']>, string> = {
  lg: 'text-sm md:text-base px-4 py-2',
  md: 'text-xs md:text-sm px-3.5 py-1.5',
  sm: 'text-[11px] md:text-xs px-3 py-1.5',
}

export default function Slide05DiscoveryChanged() {
  const meta = SLIDES[4]
  const T_TITLE = 0.2
  const T_LEFT = 0.8
  const T_ARROW = 1.3
  const T_NODES = 1.7

  return (
    <Slide meta={meta}>
      <div className="flex-1 flex flex-col">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: T_TITLE }}
          className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tight text-bone-50 leading-tight mx-auto text-center max-w-5xl"
        >
          One front door{' '}
          <span className="text-ember-500">became many.</span>
        </motion.h2>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-[minmax(180px,260px)_40px_1fr] gap-6 md:gap-4 items-center mt-10 md:mt-12">
          {/* THEN — the homepage, small and grey */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: T_LEFT }}
            className="mx-auto w-full max-w-[240px]"
          >
            <div className="font-mono text-[10px] tracking-looser uppercase text-bone-100/40 mb-3 text-center">
              Then
            </div>
            <div className="rounded-xl border border-bone-100/15 bg-bone-100/[0.03] p-3 opacity-60">
              <div className="flex gap-1.5 mb-3">
                <span className="w-2 h-2 rounded-full bg-bone-100/25" />
                <span className="w-2 h-2 rounded-full bg-bone-100/25" />
                <span className="w-2 h-2 rounded-full bg-bone-100/25" />
              </div>
              <div className="space-y-2">
                <div className="h-2 rounded bg-bone-100/15 w-3/4" />
                <div className="h-2 rounded bg-bone-100/10 w-full" />
                <div className="h-2 rounded bg-bone-100/10 w-5/6" />
                <div className="h-12 rounded bg-bone-100/[0.07] w-full mt-3" />
              </div>
            </div>
            <div className="font-mono text-[10px] tracking-looser uppercase text-bone-100/45 mt-3 text-center">
              One homepage
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease, delay: T_ARROW }}
            className="hidden md:flex items-center justify-center text-ember-500"
          >
            <svg width="34" height="14" viewBox="0 0 34 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="1" y1="7" x2="31" y2="7" />
              <polyline points="25,1.5 32,7 25,12.5" />
            </svg>
          </motion.div>

          {/* NOW — the constellation */}
          <div className="relative w-full h-[clamp(320px,46vh,460px)]">
            <div className="font-mono text-[10px] tracking-looser uppercase text-ember-500/80 mb-2 absolute -top-1 left-0">
              Now
            </div>

            {/* faint connecting lines from a central point */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              {surfaces.map((s, i) => (
                <motion.line
                  key={`l-${i}`}
                  x1="50" y1="50" x2={s.x} y2={s.y}
                  stroke="rgb(255 74 28 / 0.18)" strokeWidth="0.2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease, delay: T_NODES + i * 0.08 }}
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>

            {/* the traveler at the center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease, delay: T_NODES - 0.2 }}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
              style={{ left: '50%', top: '50%' }}
            >
              <span className="w-3 h-3 rounded-full bg-ember-500 shadow-[0_0_24px_rgba(255,74,28,0.7)]" />
            </motion.div>

            {/* surface chips */}
            {surfaces.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease, delay: T_NODES + 0.2 + i * 0.09 }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-ember-500/30 bg-ink-800/90 text-bone-50 font-medium whitespace-nowrap ${sizeClass[s.size ?? 'md']}`}
                style={{ left: `${s.x}%`, top: `${s.y}%` }}
              >
                {s.label}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: T_NODES + 1.3 }}
          className="font-display text-base md:text-lg text-bone-100/70 text-center max-w-3xl mx-auto mt-2"
        >
          Trips start in AI now — and travelers arrive expecting a conversation built for them.
        </motion.p>
      </div>
    </Slide>
  )
}
