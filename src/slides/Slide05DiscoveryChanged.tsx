import { motion } from 'framer-motion'
import { Slide } from '../components/Slide'
import { SLIDES } from '../lib/slides'

const ease = [0.22, 1, 0.36, 1] as const

// The "now" — the surfaces a trip can start on. Abundance is the point.
const surfaces = [
  'ChatGPT',
  'Gemini',
  'Perplexity',
  'Google AI Overviews',
  'Copilot',
  'AI Agents',
  'Social',
  'Reddit',
  'Maps',
]

export default function Slide05DiscoveryChanged() {
  const meta = SLIDES[4]
  const T_TITLE = 0.2
  const T_THEN = 0.8
  const T_ARROW = 1.3
  const T_NOW = 1.6

  return (
    <Slide meta={meta}>
      <div className="flex-1 flex flex-col">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: T_TITLE }}
          className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tight text-bone-50 leading-tight mx-auto text-center max-w-5xl"
        >
          Discovery used to have one door.{' '}
          <span className="text-ember-500">Now it has dozens.</span>
        </motion.h2>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-[minmax(220px,300px)_56px_1fr] gap-6 md:gap-2 items-center mt-8 md:mt-10 max-w-6xl mx-auto w-full">
          {/* THEN — one website */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: T_THEN }}
            className="flex flex-col"
          >
            <div className="font-mono text-[10px] tracking-looser uppercase text-bone-100/40 mb-3">
              Then
            </div>
            <div className="rounded-xl border border-bone-100/15 bg-bone-100/[0.03] p-4">
              <div className="flex gap-1.5 mb-3">
                <span className="w-2 h-2 rounded-full bg-bone-100/25" />
                <span className="w-2 h-2 rounded-full bg-bone-100/25" />
                <span className="w-2 h-2 rounded-full bg-bone-100/25" />
              </div>
              <div className="space-y-2">
                <div className="h-2.5 rounded bg-bone-100/15 w-3/4" />
                <div className="h-2.5 rounded bg-bone-100/10 w-full" />
                <div className="h-2.5 rounded bg-bone-100/10 w-5/6" />
                <div className="h-14 rounded bg-bone-100/[0.07] w-full mt-3" />
              </div>
            </div>
            <div className="font-display text-base md:text-lg text-bone-50 mt-4 leading-snug">
              One website.
            </div>
            <div className="text-sm text-bone-100/55 leading-snug mt-1">
              One set of pages, for everyone.
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease, delay: T_ARROW }}
            className="hidden md:flex items-center justify-center text-ember-500"
          >
            <svg width="40" height="16" viewBox="0 0 40 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="2" y1="8" x2="36" y2="8" />
              <polyline points="29,2 37,8 29,14" />
            </svg>
          </motion.div>

          {/* NOW — a dense grid of surfaces */}
          <div className="flex flex-col">
            <div className="font-mono text-[10px] tracking-looser uppercase text-ember-500/80 mb-3">
              Now
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 md:gap-3">
              {surfaces.map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, ease, delay: T_NOW + i * 0.08 }}
                  className="flex items-center gap-2 rounded-lg border border-ember-500/25 bg-ink-800/80 px-3.5 py-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-ember-500 shrink-0" />
                  <span className="text-bone-50 text-sm md:text-[15px] leading-tight">{s}</span>
                </motion.div>
              ))}
              {/* + more, to imply the list keeps growing */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease, delay: T_NOW + surfaces.length * 0.08 }}
                className="flex items-center gap-2 rounded-lg border border-dashed border-bone-100/20 px-3.5 py-2.5"
              >
                <span className="text-bone-100/50 text-sm md:text-[15px] leading-tight">+ and counting</span>
              </motion.div>
            </div>
            <div className="text-sm text-bone-100/55 leading-snug mt-4">
              Trips now start in the answer — and travelers arrive expecting a conversation built for them.
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
