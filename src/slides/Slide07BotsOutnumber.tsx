import { motion } from 'framer-motion'
import { Slide } from '../components/Slide'
import { FigureGrid } from '../components/FigureGrid'
import { SLIDES } from '../lib/slides'

const ease = [0.22, 1, 0.36, 1] as const

/** The "line off the top" growth chart — flat, then rockets off the frame. */
function RocketLine({ delay }: { delay: number }) {
  const d = 'M 10 200 L 120 196 C 175 192, 210 170, 235 110 C 252 70, 262 20, 270 -30'
  return (
    <div className="relative w-full max-w-[440px]" style={{ aspectRatio: '3/2' }}>
      <svg viewBox="0 0 290 230" className="absolute inset-0 w-full h-full overflow-visible">
        <line x1="10" y1="210" x2="280" y2="210" stroke="rgb(245 242 236 / 0.15)" strokeWidth="1" />
        <motion.path
          d={d}
          fill="none"
          stroke="rgb(255 74 28)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.3, ease: [0.6, 0, 0.4, 1], delay }}
        />
        <motion.circle
          cx="270" cy="-30" r="5" fill="rgb(255 74 28)"
          initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: delay + 1.2 }}
          style={{ filter: 'drop-shadow(0 0 8px rgba(255,74,28,0.8))' }}
        />
      </svg>
      {/* label sits in the empty upper-left, clear of the curve */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: delay + 0.9 }}
        className="absolute top-0 left-0 text-left"
      >
        <div className="font-display font-medium text-ember-500 leading-none tracking-tightest text-[3rem] md:text-[3.8rem]">
          ≈8,000%
        </div>
        <div className="font-mono text-[10px] tracking-looser uppercase text-bone-100/55 mt-1">
          AI agent traffic · 12 months
        </div>
      </motion.div>
    </div>
  )
}

export default function Slide07BotsOutnumber() {
  const meta = SLIDES[14]
  const T_TITLE = 0.2
  const T_GRID = 0.8
  const T_RIGHT = 1.6

  return (
    <Slide meta={meta}>
      <div className="flex-1 flex flex-col">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: T_TITLE }}
          className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tight text-bone-50 leading-tight mx-auto text-center max-w-5xl"
        >
          Bots now{' '}
          <span className="text-ember-500">outnumber humans.</span>
        </motion.h2>

        <div className="flex-1 grid md:grid-cols-2 gap-8 lg:gap-14 items-center mt-4 max-w-6xl mx-auto w-full">
          {/* LEFT: 53/100 figure grid */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[300px]">
              <FigureGrid shaded={53} baseDelay={T_GRID} />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: T_GRID + 1.2 }}
              className="flex items-baseline gap-3 mt-5"
            >
              <span className="font-display font-medium text-ember-500 leading-none tracking-tightest text-4xl md:text-5xl">
                53%
              </span>
              <span className="text-bone-100/65 text-sm leading-snug max-w-[200px]">
                of web traffic was automated in 2025 – second year running.
              </span>
            </motion.div>
          </div>

          {/* RIGHT: rocket line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: T_RIGHT - 0.2 }}
            className="flex items-center justify-center"
          >
            <RocketLine delay={T_RIGHT} />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: T_RIGHT + 1.4 }}
          className="font-display font-medium text-base md:text-lg tracking-tight text-bone-50 text-center max-w-3xl mx-auto mt-3"
        >
          AI is now a primary audience for{' '}
          <span className="text-ember-500">destination content.</span>
        </motion.p>
      </div>
    </Slide>
  )
}
