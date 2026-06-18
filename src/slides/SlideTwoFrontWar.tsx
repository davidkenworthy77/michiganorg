import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Slide } from '../components/Slide'
import { Sparkle } from '../components/Sparkle'
import { HumanGlyph, BotGlyph } from '../components/FigureGrid'
import { SLIDES } from '../lib/slides'

const ease = [0.22, 1, 0.36, 1] as const

interface ColumnProps {
  icon: ReactNode
  caption: string
  verdict: string
  points: string[]
  /** When this column starts its reveal, in seconds */
  baseDelay: number
}

function Column({ icon, caption, verdict, points, baseDelay }: ColumnProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease, delay: baseDelay - 0.2 }}
      className="flex flex-col items-center text-center gap-6 justify-center bg-bone-100/[0.035] border border-bone-100/10 rounded-3xl p-8 md:p-10 lg:p-12 h-full"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease, delay: baseDelay - 0.05 }}
        className="w-16 h-16 rounded-2xl border border-bone-100/12 bg-bone-100/[0.04] flex items-center justify-center text-ember-500/85"
      >
        {icon}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: baseDelay + 0.1 }}
        className="font-mono text-xs md:text-sm font-medium tracking-looser uppercase text-ember-500 -mt-1"
      >
        {caption}
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: baseDelay + 0.25 }}
        className="font-display font-medium text-4xl md:text-5xl tracking-tighter text-bone-50 leading-[1.02]"
      >
        {verdict}
      </motion.h3>

      <ul className="flex flex-col gap-3 max-w-sm mt-1">
        {points.map((p, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: baseDelay + 0.5 + i * 0.12 }}
            className="flex items-start gap-3 text-left"
          >
            <Sparkle className="w-2.5 h-2.5 mt-2 text-ember-500/75 flex-shrink-0" />
            <span className="text-bone-100/70 leading-snug text-[15px] md:text-base">
              {p}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function SlideTwoFrontWar() {
  const meta = SLIDES[5]

  // Sequence (seconds): title → humans → bots
  const T_TITLE = 0.2
  const T_HUMANS = 1.0
  const T_BOTS = 2.7

  return (
    <Slide meta={meta}>
      <div className="flex-1 flex flex-col">
        {/* Centered title */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: T_TITLE }}
          className="font-display font-medium text-4xl md:text-5xl lg:text-6xl tracking-tight text-bone-100/90 leading-tight mx-auto text-center max-w-5xl lg:max-w-6xl xl:max-w-7xl"
        >
          michigan.org is losing on{' '}
          <span className="text-ember-500">two fronts.</span>
        </motion.h2>

        {/* Two cards, sequentially revealed — equal height, content vertically centered within */}
        <div className="flex-1 grid md:grid-cols-2 gap-6 md:gap-8 mt-14 md:mt-16 max-w-5xl mx-auto w-full items-stretch">
          <Column
            icon={<HumanGlyph className="w-8 h-8" />}
            caption="HUMAN TRAVELERS"
            verdict="Have moved on."
            points={[
              'Planning trips with ChatGPT, not your homepage.',
              'Expecting Netflix-level personalization.',
              'Generic content has become irrelevant.',
              'The way they search is changing.',
            ]}
            baseDelay={T_HUMANS}
          />

          <Column
            icon={<BotGlyph className="w-9 h-9" />}
            caption="AI BOTS"
            verdict="Don't use you."
            points={[
              'Most queries never reach your site.',
              "LLMs don't recognize you as the authority.",
              'Your content lacks the structure they need.',
              'Only 10% of DMO queries use destination websites as the source.',
            ]}
            baseDelay={T_BOTS}
          />
        </div>
      </div>
    </Slide>
  )
}
