import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Slide } from '../components/Slide'
import { BotGlyph, HumanGlyph } from '../components/FigureGrid'
import { SLIDES } from '../lib/slides'

const ease = [0.22, 1, 0.36, 1] as const

/** A side cluster of three glyphs in rounded boxes, with a label. */
function SideCluster({
  glyph,
  label,
  delay,
}: {
  glyph: ReactNode
  label: string
  delay: number
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease, delay: delay + i * 0.1 }}
            className="w-11 h-11 md:w-12 md:h-12 rounded-xl border border-bone-100/12 bg-bone-100/[0.04] flex items-center justify-center text-ember-500/85"
          >
            {glyph}
          </motion.div>
        ))}
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.4 }}
        className="font-mono text-[10px] tracking-looser uppercase text-bone-100/55"
      >
        {label}
      </motion.span>
    </div>
  )
}

const cards: {
  title: string
  icon: ReactNode
  points: string[]
}[] = [
  {
    title: 'Secure',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3 L19 6 V11 Q19 17 12 21 Q5 17 5 11 V6 Z" />
        <path d="M9 12 l2 2 l4 -4" />
      </svg>
    ),
    points: [
      'Firewall, intrusion prevention and ongoing vulnerability scanning.',
      'High availability and uptime, load-balanced and monitored.',
      'Privacy, consent and data governance – compliant as the rules change.',
      'Everything we do, we do within the rules.',
    ],
  },
  {
    title: 'Accessible',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="6.6" r="1.4" fill="currentColor" stroke="none" />
        <path d="M5.5 9.2c2 .8 4.2 1.2 6.5 1.2s4.5-.4 6.5-1.2" />
        <path d="M12 10.4v4M12 14.4l-2.4 4.4M12 14.4l2.4 4.4" />
      </svg>
    ),
    points: [
      'Findable to machines – clean schema and structured data so LLMs and agents read Michigan accurately.',
      'Accessible to people – WCAG 2.1 AA at 90%+, screen-reader and keyboard tested, monitored continuously.',
      'Accessible in every sense of the word.',
    ],
  },
]

export default function Slide12SecureByDesign() {
  const meta = SLIDES[10]
  const T_TITLE = 0.2
  const T_SCENE = 0.8
  const T_CARDS = 1.7

  return (
    <Slide meta={meta}>
      <div className="flex-1 flex flex-col">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: T_TITLE }}
          className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tight text-bone-50 leading-tight mx-auto text-center max-w-5xl"
        >
          Secure{' '}
          <span className="text-ember-500">&amp; accessible.</span>
        </motion.h2>

        {/* Graphic: machines (bots) left, shield core, people (humans) right */}
        <div className="flex items-center justify-center gap-5 md:gap-10 mt-8 md:mt-10">
          <SideCluster glyph={<BotGlyph className="w-6 h-6" />} label="Machines" delay={T_SCENE} />

          {/* Center shield */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease, delay: T_SCENE + 0.2 }}
            className="relative flex flex-col items-center gap-2"
          >
            <svg width="92" height="104" viewBox="0 0 92 104" className="overflow-visible" aria-hidden="true">
              <ellipse cx="46" cy="50" rx="40" ry="46" fill="rgb(255 74 28 / 0.07)" />
              <path
                d="M46 8 L80 21 V47 Q80 82 46 98 Q12 82 12 47 V21 Z"
                fill="rgb(20 20 23)" stroke="rgb(255 74 28)" strokeWidth="1.6"
              />
              <motion.path
                d="M34 50 L43 60 L60 38" fill="none" stroke="rgb(255 74 28)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, ease, delay: T_SCENE + 0.7 }}
              />
            </svg>
            <span className="font-mono text-[10px] tracking-looser uppercase text-bone-100/60">
              michigan.org
            </span>
          </motion.div>

          <SideCluster glyph={<HumanGlyph className="w-[22px] h-[22px]" />} label="People" delay={T_SCENE + 0.3} />
        </div>

        {/* Two combined points */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 mt-8 md:mt-10 max-w-5xl mx-auto w-full">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: T_CARDS + i * 0.18 }}
              className="flex flex-col bg-bone-100/[0.04] border border-bone-100/10 rounded-3xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-ember-500/12 text-ember-500 flex items-center justify-center">
                  {c.icon}
                </div>
                <div className="font-display font-medium text-xl md:text-2xl tracking-tight text-bone-50">
                  {c.title}
                </div>
              </div>
              <ul className="flex flex-col gap-2.5">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-bone-100/70 text-sm md:text-[15px] leading-snug">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ember-500 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  )
}
