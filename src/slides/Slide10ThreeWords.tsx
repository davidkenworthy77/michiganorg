import { motion } from 'framer-motion'
import { Slide } from '../components/Slide'
import { SLIDES } from '../lib/slides'

const ease = [0.22, 1, 0.36, 1] as const

const words = [
  { word: 'Trust', def: 'You become the source the answers are built from.', kicker: 'gets you cited' },
  { word: 'Taste', def: "Only Michigan can sound like Michigan — the one thing AI can't fake.", kicker: 'gets you chosen' },
  { word: 'Ownability', def: 'Claim the questions that are yours to win — and own them.', kicker: 'keeps you the answer' },
]

export default function Slide10ThreeWords() {
  const meta = SLIDES[11]
  const T_TITLE = 0.2
  const T_WORDS = 0.8
  const STEP = 0.9
  const T_FOOT = T_WORDS + words.length * STEP + 0.3

  return (
    <Slide
      meta={meta}
      backdrop={
        <div className="ember-orb" style={{ right: '-20vmax', top: '50%', transform: 'translateY(-50%)', opacity: 0.12 }} />
      }
    >
      <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: T_TITLE }}
          className="font-mono text-xs tracking-looser uppercase text-ember-500 mb-8 md:mb-10"
        >
          How a destination wins — three words
        </motion.div>

        <div className="flex flex-col divide-y divide-bone-100/10 border-y border-bone-100/10">
          {words.map((w, i) => {
            const base = T_WORDS + i * STEP
            return (
              <div key={w.word} className="grid md:grid-cols-[minmax(0,0.9fr)_1.1fr] gap-2 md:gap-10 items-baseline py-5 md:py-6">
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease, delay: base }}
                  className="font-display font-medium text-display-sm md:text-display tracking-tightest leading-[0.9]"
                >
                  <span className="bg-gradient-to-r from-ember-500 via-ember-400 to-glow-500 bg-clip-text text-transparent">
                    {w.word}.
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease, delay: base + 0.25 }}
                  className="text-bone-100/75 text-base md:text-lg lg:text-xl leading-snug md:pb-2"
                >
                  {w.def}
                </motion.div>
              </div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: T_FOOT }}
          className="font-display font-medium text-xl md:text-2xl lg:text-3xl tracking-tight text-bone-50 mt-10 leading-snug"
        >
          Trust gets you cited. Taste gets you chosen.{' '}
          <span className="text-ember-500">Ownability keeps you the answer.</span>
        </motion.p>
      </div>
    </Slide>
  )
}
