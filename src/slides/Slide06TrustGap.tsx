import { motion } from 'framer-motion'
import { Slide } from '../components/Slide'
import { Sparkle } from '../components/Sparkle'
import { HumanGlyph, BotGlyph } from '../components/FigureGrid'
import { SLIDES } from '../lib/slides'

const ease = [0.22, 1, 0.36, 1] as const

/** Small semicircular trust gauge, low needle. value 0..1 */
function Gauge({ value, label, delay }: { value: number; label: string; delay: number }) {
  const r = 46
  const cx = 60
  const cy = 56
  // semicircle from 180deg → 0deg
  const angle = Math.PI - value * Math.PI
  const nx = cx + r * Math.cos(angle)
  const ny = cy - r * Math.sin(angle)
  return (
    <div className="flex flex-col items-center">
      <svg width="120" height="68" viewBox="0 0 120 68" aria-hidden="true">
        <path d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`} fill="none" stroke="rgb(245 242 236 / 0.14)" strokeWidth="6" strokeLinecap="round" />
        <motion.path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${nx} ${ny}`}
          fill="none" stroke="rgb(255 74 28)" strokeWidth="6" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, ease, delay }}
        />
        <circle cx={cx} cy={cy} r="3.5" fill="rgb(245 242 236 / 0.6)" />
      </svg>
      <div className="font-mono text-[10px] tracking-looser uppercase text-bone-100/55 -mt-1">
        {label}
      </div>
      <div className="font-display font-medium text-ember-500 text-lg mt-0.5">Low</div>
    </div>
  )
}

function EndNode({ glyph, title, delay }: { glyph: React.ReactNode; title: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease, delay }}
      className="flex flex-col items-center gap-4"
    >
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl border border-bone-100/15 bg-bone-100/[0.04] flex items-center justify-center text-bone-100/75">
        {glyph}
      </div>
      <div className="font-display font-medium text-xl md:text-2xl text-bone-50">{title}</div>
    </motion.div>
  )
}

/** A broken connection line with a gap + break mark in the middle. */
function BrokenLink({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      className="relative flex-1 flex items-center justify-center min-w-[80px]"
    >
      <svg className="w-full h-8" viewBox="0 0 200 32" preserveAspectRatio="none" aria-hidden="true">
        <line x1="0" y1="16" x2="78" y2="16" stroke="rgb(245 242 236 / 0.3)" strokeWidth="1.5" strokeDasharray="2 5" vectorEffect="non-scaling-stroke" />
        <line x1="122" y1="16" x2="200" y2="16" stroke="rgb(245 242 236 / 0.3)" strokeWidth="1.5" strokeDasharray="2 5" vectorEffect="non-scaling-stroke" />
      </svg>
      {/* break mark */}
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-ember-500 font-mono text-lg leading-none">
        ⚡
      </span>
    </motion.div>
  )
}

export default function Slide06TrustGap() {
  const meta = SLIDES[5]
  const T_TITLE = 0.2
  const T_CENTER = 0.9
  const T_LINKS = 1.5
  const T_ENDS = 1.7
  const T_GAUGE = 2.4

  return (
    <Slide meta={meta}>
      <div className="flex-1 flex flex-col">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: T_TITLE }}
          className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tight text-bone-50 leading-tight mx-auto text-center max-w-5xl"
        >
          It all comes down to one word:{' '}
          <span className="text-ember-500">trust.</span>
        </motion.h2>

        <div className="flex-1 flex items-center justify-center mt-6">
          <div className="w-full max-w-5xl flex items-center justify-between gap-3 md:gap-6">
            {/* Left end: travelers */}
            <div className="flex flex-col items-center gap-5">
              <EndNode glyph={<HumanGlyph className="w-10 h-10" />} title="Travelers" delay={T_ENDS} />
              <Gauge value={0.22} label="Trust in DMOs" delay={T_GAUGE} />
            </div>

            <BrokenLink delay={T_LINKS} />

            {/* Center: Pure Michigan */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease, delay: T_CENTER }}
              className="flex flex-col items-center gap-3 shrink-0"
            >
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-ink-800 border border-ember-500/30 flex flex-col items-center justify-center gap-1.5 shadow-[0_0_50px_rgba(255,74,28,0.18)]">
                <Sparkle className="w-5 h-5 text-ember-500" />
                <div className="font-display font-medium text-bone-50 text-sm md:text-base leading-tight text-center">
                  Pure
                  <br />
                  Michigan
                </div>
              </div>
            </motion.div>

            <BrokenLink delay={T_LINKS + 0.15} />

            {/* Right end: AI systems */}
            <div className="flex flex-col items-center gap-5">
              <EndNode glyph={<BotGlyph className="w-11 h-11" />} title="AI systems" delay={T_ENDS + 0.15} />
              <Gauge value={0.18} label="Pull from the DMO" delay={T_GAUGE + 0.2} />
            </div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: T_GAUGE + 0.8 }}
          className="font-display font-medium text-xl md:text-2xl tracking-tight text-bone-50 text-center max-w-3xl mx-auto mt-6"
        >
          A trust gap on two fronts at once –{' '}
          <span className="text-ember-500">the people, and the machines.</span>
        </motion.p>
      </div>
    </Slide>
  )
}
