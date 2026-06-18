import { motion } from 'framer-motion'
import { Slide } from '../components/Slide'
import { Sparkle } from '../components/Sparkle'
import { SLIDES } from '../lib/slides'

const ease = [0.22, 1, 0.36, 1] as const

const values = [
  { n: '01', word: 'Care.' },
  { n: '02', word: 'Drive innovation.' },
  { n: '03', word: 'Get better every day.' },
]

export default function Slide04TeamValues() {
  const meta = SLIDES[3]
  const T_EYEBROW = 0.2
  const T_VALUES = 0.7
  const T_FLIP = T_VALUES + values.length * 0.45 + 0.5

  return (
    <Slide
      meta={meta}
      backdrop={
        <div
          className="ember-orb"
          style={{ left: '50%', top: '55%', transform: 'translate(-50%, -50%)', opacity: 0.13 }}
        />
      }
    >
      <div className="flex-1 flex flex-col justify-center max-w-5xl lg:max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: T_EYEBROW }}
          className="flex items-center gap-3 mb-10"
        >
          <Sparkle className="w-3 h-3 text-ember-500" />
          <span className="font-mono text-xs tracking-looser uppercase text-ember-500">
            A team of people who
          </span>
        </motion.div>

        <div className="flex flex-col gap-3 md:gap-4">
          {values.map((v, i) => (
            <motion.div
              key={v.n}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease, delay: T_VALUES + i * 0.45 }}
              className="flex items-baseline gap-5 md:gap-8"
            >
              <span className="font-mono text-sm tracking-looser text-ember-500/70 tabular-nums">
                {v.n}
              </span>
              <span className="font-display font-medium text-display-sm md:text-display tracking-tighter text-bone-50 leading-[0.95]">
                {v.word}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: T_FLIP }}
          className="mt-14 border-t border-bone-100/15 pt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <p className="font-display font-medium text-2xl md:text-3xl tracking-tight text-bone-50 max-w-xl leading-tight">
            For Michigan, that means{' '}
            <span className="text-ember-500">no brand drift, less risk, more economic impact.</span>
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
