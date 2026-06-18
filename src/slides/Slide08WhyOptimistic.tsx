import { motion } from 'framer-motion'
import { Slide } from '../components/Slide'
import { Sparkle } from '../components/Sparkle'
import { SLIDES } from '../lib/slides'

const ease = [0.22, 1, 0.36, 1] as const

const points = [
  'Destination knowledge sits at the center of all of it.',
  'We optimize brand perception — not just rankings.',
  "We've already moved the needle on discoverability.",
]

/** First-mover divergence curve: the pack stays flat, one line breaks away. */
function DivergenceCurve({ delay }: { delay: number }) {
  const packLines = [
    'M 30 175 C 130 172, 250 178, 450 172',
    'M 30 188 C 130 190, 250 184, 450 190',
    'M 30 202 C 130 200, 250 206, 450 204',
  ]
  // first-mover: tracks the pack, then diverges up at the "now" marker (x≈225)
  const leader = 'M 30 190 C 120 186, 190 184, 225 178 C 290 166, 340 96, 450 36'
  const divergeX = 225
  return (
    <div className="relative w-full" style={{ aspectRatio: '16/10' }}>
      <svg viewBox="0 0 480 230" className="absolute inset-0 w-full h-full overflow-visible">
        {/* axes */}
        <line x1="30" y1="214" x2="465" y2="214" stroke="rgb(10 10 11 / 0.15)" strokeWidth="1" />
        {/* "you are here" marker */}
        <motion.line
          x1={divergeX} y1="20" x2={divergeX} y2="214"
          stroke="rgb(10 10 11 / 0.2)" strokeWidth="1" strokeDasharray="3 4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.6 }}
        />
        {/* pack */}
        {packLines.map((d, i) => (
          <motion.path
            key={i} d={d} fill="none" stroke="rgb(10 10 11 / 0.28)" strokeWidth="1.5"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 1.0, ease, delay: delay + i * 0.1 }}
          />
        ))}
        {/* leader */}
        <motion.path
          d={leader} fill="none" stroke="rgb(255 74 28)" strokeWidth="3" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: [0.6, 0, 0.4, 1], delay: delay + 0.3 }}
        />
        <motion.circle
          cx="450" cy="36" r="5" fill="rgb(255 74 28)"
          initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: delay + 1.6 }}
          style={{ filter: 'drop-shadow(0 0 6px rgba(255,74,28,0.6))' }}
        />
        <motion.circle
          cx={divergeX} cy="178" r="4" fill="none" stroke="rgb(10 10 11)" strokeWidth="1.5"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: delay + 0.7 }}
        />
      </svg>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.8 }}
        className="absolute font-mono text-[10px] tracking-looser uppercase text-ink-700/70"
        style={{ left: `${(divergeX / 480) * 100}%`, top: '4%', transform: 'translateX(-50%)' }}
      >
        You are here
      </motion.div>
      <div className="absolute left-[6%] bottom-[2%] font-mono text-[10px] tracking-looser uppercase text-ink-700/45">
        AI discovery →
      </div>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 1.7 }}
        className="absolute right-[2%] top-[8%] font-display font-medium text-sm text-ember-500"
      >
        First movers
      </motion.div>
    </div>
  )
}

export default function Slide08WhyOptimistic() {
  const meta = SLIDES[7]
  const T_TITLE = 0.2
  const T_LEFT = 0.7
  const T_CHART = 1.2

  return (
    <Slide meta={meta}>
      <div className="flex-1 flex flex-col">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: T_TITLE }}
          className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tight text-ink-900 leading-tight mx-auto text-center max-w-5xl"
        >
          The window is open right now —{' '}
          <span className="text-ember-500">and we're optimistic.</span>
        </motion.h2>

        <div className="flex-1 grid md:grid-cols-2 gap-10 lg:gap-16 items-center mt-10 md:mt-12 max-w-6xl mx-auto w-full">
          {/* LEFT: the case */}
          <div className="flex flex-col gap-5 md:pl-6">
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease, delay: T_LEFT + i * 0.18 }}
                className="flex items-start gap-3"
              >
                <Sparkle className="w-3 h-3 mt-1.5 text-ember-500 flex-shrink-0" />
                <span className="font-display text-lg md:text-xl text-ink-900 leading-snug">
                  {p}
                </span>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: divergence curve */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: T_CHART - 0.2 }}
            className="flex items-center justify-center"
          >
            <DivergenceCurve delay={T_CHART} />
          </motion.div>
        </div>
      </div>
    </Slide>
  )
}
