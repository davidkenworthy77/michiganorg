import { motion } from 'framer-motion'
import { Slide } from '../components/Slide'
import { Sparkle } from '../components/Sparkle'
import { SLIDES } from '../lib/slides'

const ease = [0.22, 1, 0.36, 1] as const

interface Fact {
  value: string
  unit?: string
  headline: string
  sub: string
}

const facts: Fact[] = [
  {
    value: '2021',
    headline: 'Agency of record',
    sub: 'Pure Michigan since 2021 – strategy, paid media, creative, brand, research and analytics. Five years in.',
  },
  {
    value: '5',
    headline: 'Michigan DMOs',
    sub: 'Pure Michigan, Visit Detroit, Destination Ann Arbor, Traverse City Tourism and Experience Grand Rapids – plus more than 20 Pure Michigan partner collaborations. We know the regional dynamics.',
  },
  {
    value: '30',
    headline: 'On this account',
    sub: 'Talented people right here in the state, on Michigan today.',
  },
]

export default function Slide02WeKnowMichigan() {
  const meta = SLIDES[1]
  const T_TITLE = 0.2
  const T_CARDS = 0.9

  return (
    <Slide meta={meta}>
      <div className="flex-1 flex flex-col">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: T_TITLE }}
          className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tight text-ink-900 leading-tight mx-auto text-center max-w-5xl"
        >
          A partner that{' '}
          <span className="text-ember-500">knows you.</span>
        </motion.h2>

        <div className="flex-1 flex items-center mt-10 md:mt-12">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto w-full items-stretch">
          {facts.map((f, i) => {
            const base = T_CARDS + i * 0.25
            return (
              <motion.div
                key={f.headline}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: base }}
                className="flex flex-col bg-white/60 border border-ink-900/10 rounded-3xl p-8 md:p-10 shadow-[0_1px_0_rgba(10,10,11,0.04)]"
              >
                <Sparkle className="w-4 h-4 text-ember-500 mb-6" />
                <div className="font-display font-medium text-ink-900 leading-none tracking-tightest text-[5rem] md:text-[6.5rem]">
                  {f.value}
                </div>
                <div className="font-display font-medium text-xl md:text-2xl tracking-tight text-ink-900 mt-4">
                  {f.headline}
                </div>
                <div className="text-sm md:text-base text-ink-700/75 leading-snug mt-3">
                  {f.sub}
                </div>
              </motion.div>
            )
          })}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: T_CARDS + 1.0 }}
          className="font-display font-medium text-xl md:text-2xl tracking-tight text-ink-900 text-center max-w-3xl mx-auto mt-12"
        >
          No ramp. No learning curve. Now we take it{' '}
          <span className="text-ember-500">into what's next.</span>
        </motion.p>
      </div>
    </Slide>
  )
}
