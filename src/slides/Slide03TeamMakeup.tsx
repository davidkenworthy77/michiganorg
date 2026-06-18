import { motion } from 'framer-motion'
import { Slide } from '../components/Slide'
import { SLIDES } from '../lib/slides'

const ease = [0.22, 1, 0.36, 1] as const

interface Member {
  role: string
  name: string
  line: string
}

// Order matches Casey's wave cues in the talk track.
const members: Member[] = [
  { role: 'Digital & AI', name: 'Dave', line: 'A voice for where this industry is heading.' },
  { role: 'Content', name: 'Content specialists', line: 'Defining what wins on a web filling up with slop.' },
  { role: 'Technical', name: 'Sean', line: 'Making Michigan show up where the answers get formed.' },
  { role: 'Global leadership', name: 'Katie', line: 'Betting our future on this space, in love with the industry.' },
  { role: 'Creative', name: 'Rick', line: 'Every pixel unmistakably Pure Michigan.' },
  { role: 'Growth & partnership', name: 'Justin', line: "In it for the long game." },
]

export default function Slide03TeamMakeup() {
  const meta = SLIDES[2]
  const T_TITLE = 0.2
  const T_CARDS = 0.8

  return (
    <Slide meta={meta}>
      <div className="flex-1 flex flex-col">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: T_TITLE }}
          className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tight text-bone-50 leading-tight mx-auto text-center max-w-5xl"
        >
          The people on your screen are the ones{' '}
          <span className="text-ember-500">who'll do the work.</span>
        </motion.h2>

        <div className="flex-1 grid md:grid-cols-3 gap-4 md:gap-5 mt-12 md:mt-14 max-w-6xl mx-auto w-full content-center">
          {members.map((m, i) => {
            const base = T_CARDS + i * 0.28
            return (
              <motion.div
                key={m.role}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: base }}
                className="flex flex-col bg-bone-100/[0.04] border border-bone-100/10 rounded-2xl p-6 md:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-looser uppercase text-ember-500">
                    {m.role}
                  </span>
                  <span className="font-mono text-[10px] tracking-looser text-bone-100/30 tabular-nums">
                    0{i + 1}
                  </span>
                </div>
                <div className="font-display font-medium text-2xl md:text-3xl tracking-tight text-bone-50 mt-3">
                  {m.name}
                </div>
                <div className="text-sm text-bone-100/65 leading-snug mt-2">
                  {m.line}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: T_CARDS + 1.8 }}
          className="font-mono text-[11px] tracking-looser uppercase text-bone-100/45 text-center mt-10"
        >
          Led on the account by Casey · Justin available for Q&A
        </motion.p>
      </div>
    </Slide>
  )
}
