import { motion } from 'framer-motion'
import { Slide } from '../components/Slide'
import { SLIDES } from '../lib/slides'

const ease = [0.22, 1, 0.36, 1] as const

// Grey component lines: each a surface that adds to total visibility.
const components = [
  { label: 'Website traffic', d: 'M 20 100 C 150 110, 320 150, 452 170', endY: 170, falling: true },
  { label: 'LLM citations', d: 'M 20 180 C 150 170, 320 140, 452 120', endY: 120 },
  { label: 'Agent traffic', d: 'M 20 200 C 150 194, 320 170, 452 146', endY: 146 },
]
// The ember sum line — visibility is the sum of every surface.
const visibility = 'M 20 124 C 150 102, 320 70, 452 40'

const metrics = [
  { k: 'Share of voice', v: 'Own the discovery conversations.' },
  { k: 'Perception', v: 'Own how Michigan is understood.' },
  { k: 'Presence', v: 'Be wherever the traveler is asking.' },
  { k: 'Authority', v: 'Fund the knowledge and the point of view.' },
]

export default function SlideVisibility() {
  const meta = SLIDES[12]
  const T_TITLE = 0.2
  const T_SUB = 0.6
  const T_CHART = 1.1
  const T_METRICS = 2.0

  return (
    <Slide meta={meta}>
      <div className="flex-1 flex flex-col">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: T_TITLE }}
          className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tight text-ink-900 leading-tight mx-auto text-center max-w-5xl"
        >
          Visibility is{' '}
          <span className="text-ember-500">the new traffic.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: T_SUB }}
          className="text-center text-ink-700/75 max-w-2xl mx-auto mt-4 text-base md:text-lg leading-snug"
        >
          Old metrics measured your website. New metrics measure your destination's
          presence in the world.
        </motion.p>

        {/* Chart: grey component lines summing into the ember visibility line */}
        <div className="flex-1 flex items-center mt-4">
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative w-full" style={{ aspectRatio: '24/9' }}>
              <svg viewBox="0 0 560 230" className="absolute inset-0 w-full h-full overflow-visible">
                {/* baseline */}
                <line x1="20" y1="212" x2="540" y2="212" stroke="rgb(10 10 11 / 0.12)" strokeWidth="1" />

                {/* area under visibility */}
                <defs>
                  <linearGradient id="visGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgb(255 74 28 / 0.16)" />
                    <stop offset="100%" stopColor="rgb(255 74 28 / 0)" />
                  </linearGradient>
                </defs>
                <motion.path
                  d={`${visibility} L 452 212 L 20 212 Z`}
                  fill="url(#visGrad)"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ duration: 1.0, delay: T_CHART + 0.7 }}
                />

                {/* grey component lines */}
                {components.map((c, i) => (
                  <g key={c.label}>
                    <motion.path
                      d={c.d} fill="none" stroke="rgb(10 10 11 / 0.3)" strokeWidth="1.5"
                      strokeDasharray={c.falling ? '4 3' : undefined}
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                      transition={{ duration: 1.1, ease, delay: T_CHART + i * 0.12 }}
                    />
                    <motion.text
                      x="458" y={c.endY + 3.5}
                      className="fill-ink-700/70"
                      style={{ font: '500 10px JetBrains Mono, monospace' }}
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: T_CHART + 0.9 + i * 0.1 }}
                    >
                      {c.label}{c.falling ? ' ↓' : ''}
                    </motion.text>
                  </g>
                ))}

                {/* ember visibility line */}
                <motion.path
                  d={visibility} fill="none" stroke="rgb(255 74 28)" strokeWidth="3" strokeLinecap="round"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: [0.6, 0, 0.4, 1], delay: T_CHART + 0.4 }}
                />
                <motion.circle
                  cx="452" cy="40" r="4.5" fill="rgb(255 74 28)"
                  initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: T_CHART + 1.6 }}
                  style={{ filter: 'drop-shadow(0 0 6px rgba(255,74,28,0.5))' }}
                />
                <motion.text
                  x="458" y="38"
                  className="fill-ember-500"
                  style={{ font: '600 15px Inter Tight, sans-serif' }}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: T_CHART + 1.7 }}
                >
                  Visibility
                </motion.text>
                <motion.text
                  x="458" y="52"
                  className="fill-ink-700/55"
                  style={{ font: '500 9px JetBrains Mono, monospace', letterSpacing: '0.08em' }}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: T_CHART + 1.85 }}
                >
                  = every surface, summed
                </motion.text>
              </svg>
            </div>
          </div>
        </div>

        {/* New metrics */}
        <div className="max-w-5xl mx-auto w-full mt-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: T_METRICS - 0.15 }}
            className="font-mono text-[11px] tracking-looser uppercase text-ember-500 mb-3"
          >
            The changing expectations of the DMO
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {metrics.map((m, i) => (
            <motion.div
              key={m.k}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: T_METRICS + i * 0.12 }}
              className="rounded-xl border border-ink-900/10 bg-white/50 px-4 py-3"
            >
              <div className="font-display font-medium text-ink-900 text-sm md:text-base">{m.k}</div>
              <div className="text-ink-700/70 text-xs leading-snug mt-0.5">{m.v}</div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </Slide>
  )
}
