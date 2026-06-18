import { motion } from 'framer-motion'
import { Slide } from '../components/Slide'
import { HumanGlyph } from '../components/FigureGrid'
import { SLIDES } from '../lib/slides'

const ease = [0.22, 1, 0.36, 1] as const

interface Member {
  role: string
  name: string
  line: string
  /** Optional headshot under /public (e.g. '/logos/Katie.jpg'). */
  photo?: string
}

// Order roughly follows the wave cues in the talk track.
const members: Member[] = [
  { role: 'Digital & AI', name: 'Dave', line: 'A voice for where this industry is heading.', photo: '/logos/David.jpg' },
  { role: 'Content & Experience', name: 'Sean', line: 'Making Michigan show up where the answers get formed.', photo: '/logos/sean.jpg' },
  { role: 'Account service', name: 'Casey', line: 'Your day-to-day partner, keeping every workstream in lockstep.', photo: '/logos/Casey.jpg' },
  { role: 'Global leadership', name: 'Katie', line: 'Betting our future on this space, in love with the industry.', photo: '/logos/Katie.jpg' },
  { role: 'Creative', name: 'Rick', line: 'Every pixel unmistakably Pure Michigan.', photo: '/logos/rick.jpg' },
  { role: 'Growth & partnership', name: 'Justin', line: "In it for the long game.", photo: '/logos/justin.jpg' },
]

// The wider-team row beneath the cards. Real photos first, then placeholders.
const rowFaces: { src?: string; name?: string }[] = [
  { src: '/logos/Sarika.jpg', name: 'Sarika' },
  { src: '/logos/Anna.jpg', name: 'Anna' },
  { src: '/logos/craig.jpg', name: 'Craig' },
  { src: '/logos/stephen.jpg', name: 'Stephen' },
  { src: '/logos/jay.jpg', name: 'Jay' },
  { src: '/logos/Cato.jpg', name: 'Cato' },
  { src: '/logos/Erin.jpg', name: 'Erin' },
  { src: '/logos/eric.jpg', name: 'Eric' },
]

/** Square headshot — shows a real photo when `src` is set, otherwise a
    placeholder silhouette. */
function FacePlaceholder({ variant = 'card', src, name }: { variant?: 'card' | 'row'; src?: string; name?: string }) {
  const dim = variant === 'card' ? 'w-14 h-14 md:w-16 md:h-16' : 'w-14 h-14 md:w-[68px] md:h-[68px]'
  const glyph = variant === 'card' ? 'w-9 h-9 md:w-10 md:h-10' : 'w-8 h-8 md:w-10 md:h-10'
  return (
    <div className={`${dim} rounded-xl bg-ink-900/[0.05] border border-ink-900/10 flex items-center justify-center text-ink-900/20 shrink-0 overflow-hidden`}>
      {src ? (
        <img src={src} alt={name ?? ''} className="w-full h-full object-cover" />
      ) : (
        <HumanGlyph className={`${glyph} translate-y-1`} />
      )}
    </div>
  )
}

export default function Slide03TeamMakeup() {
  const meta = SLIDES[2]
  const T_TITLE = 0.2
  const T_CARDS = 0.8
  const T_ROW = T_CARDS + members.length * 0.28 + 0.3

  return (
    <Slide meta={meta}>
      <div className="flex-1 flex flex-col">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: T_TITLE }}
          className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tight text-ink-900 leading-tight mx-auto text-center max-w-5xl"
        >
          A team of leaders, doers{' '}
          <span className="text-ember-500">and collaborators.</span>
        </motion.h2>

        <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full mt-8 md:mt-10">
          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {members.map((m, i) => {
            const base = T_CARDS + i * 0.28
            return (
              <motion.div
                key={m.role}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: base }}
                className="flex flex-col bg-white/60 border border-ink-900/10 rounded-2xl p-6 md:p-7 shadow-[0_1px_0_rgba(10,10,11,0.04)]"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] tracking-looser uppercase text-ember-500">
                    {m.role}
                  </span>
                  <span className="font-mono text-[10px] tracking-looser text-ink-900/30 tabular-nums">
                    0{i + 1}
                  </span>
                </div>
                <div className="flex items-center gap-3.5 mt-4">
                  <FacePlaceholder variant="card" src={m.photo} name={m.name} />
                  <div className="font-display font-medium text-xl md:text-2xl tracking-tight text-ink-900 leading-tight">
                    {m.name}
                  </div>
                </div>
                <div className="text-sm text-ink-700/70 leading-snug mt-3">
                  {m.line}
                </div>
              </motion.div>
            )
          })}
          </div>

          {/* The wider team — a row of faces directly under the cards, same width */}
          <div className="flex justify-between mt-4 md:mt-5">
            {rowFaces.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease, delay: T_ROW + i * 0.08 }}
              >
                <FacePlaceholder variant="row" src={f.src} name={f.name} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  )
}
