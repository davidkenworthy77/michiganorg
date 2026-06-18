import { motion } from 'framer-motion'
import { Slide } from '../components/Slide'
import { Sparkle } from '../components/Sparkle'
import { SLIDES } from '../lib/slides'

const ease = [0.22, 1, 0.36, 1] as const

/**
 * Scene-setting transition into the solution — pivots from the problem
 * (the shift) to the answer. Eyebrow "How do we win".
 */
export default function SlideFuture() {
  const meta = SLIDES[9]
  return (
    <Slide
      meta={meta}
      bare
      backdrop={
        <div
          className="ember-orb"
          style={{ left: '50%', top: '58%', transform: 'translate(-50%, -50%)', opacity: 0.14 }}
        />
      }
    >
      <div className="flex-1 flex flex-col justify-center max-w-5xl lg:max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
          className="flex items-center gap-3 mb-8"
        >
          <Sparkle className="w-3 h-3 text-ember-500" />
          <span className="font-mono text-xs tracking-looser uppercase text-ember-500">
            How do we win
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.35 }}
          className="font-display font-medium text-display-sm md:text-display tracking-tighter text-bone-50 leading-[0.98]"
        >
          What does the future of{' '}
          <span className="bg-gradient-to-r from-ember-500 via-ember-400 to-glow-500 bg-clip-text text-transparent">
            michigan.org
          </span>{' '}
          look like?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.9 }}
          className="mt-10 max-w-2xl text-base md:text-lg text-bone-100/65 leading-snug"
        >
          Here's how a destination wins from here — and what that means for the site itself.
        </motion.p>
      </div>
    </Slide>
  )
}
