import { motion } from 'framer-motion'
import { Slide } from '../components/Slide'
import { SLIDES } from '../lib/slides'

const ease = [0.22, 1, 0.36, 1] as const
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

export default function Slide01Cover() {
  const meta = SLIDES[0]
  return (
    <Slide
      meta={meta}
      bare
      backdrop={
        <>
          {/* Off-screen ember orb, lower-right */}
          <div className="ember-orb" style={{ right: '-25vmax', bottom: '-30vmax' }} />
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />
        </>
      }
    >
      <div className="flex-1 flex flex-col justify-between max-w-[1400px] py-2">
        {/* Top lockup: Pure Michigan × MMGY — real logos, no background. */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="self-start inline-flex items-center gap-5 md:gap-6"
        >
          <img
            src="/logos/purem_white.png"
            alt="Pure Michigan"
            className="h-7 md:h-9 w-auto"
          />
          <span className="text-bone-100/25 text-xl">×</span>
          <img
            src="/logos/MMGY_white.png"
            alt="MMGY"
            className="h-8 md:h-10 w-auto"
          />
        </motion.div>

        {/* Center: the title */}
        <div className="flex flex-col justify-center flex-1 py-10">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease, delay: 0.25 }}
            className="font-mono text-xs tracking-looser uppercase text-ember-500 mb-7"
          >
            RFP-CASE-449952
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.9, ease, delay: 0.35 }}
            className="font-display font-medium text-display-lg tracking-tightest text-bone-50"
          >
            The next chapter
            <br />
            for{' '}
            <span className="bg-gradient-to-r from-ember-500 via-ember-400 to-glow-500 bg-clip-text text-transparent">
              michigan.org.
            </span>
          </motion.h1>
        </div>

        {/* Bottom lockup */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, ease, delay: 0.6 }}
          className="flex border-t border-bone-100/15 pt-8"
        >
          <div className="flex gap-8 md:gap-12 font-display text-base md:text-lg text-bone-100/90">
            <span><span className="text-ember-400">·</span> Intro</span>
            <span><span className="text-ember-400">·</span> What's next</span>
            <span><span className="text-ember-400">·</span> Demo</span>
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}
