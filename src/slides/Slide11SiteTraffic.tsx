import { motion } from 'framer-motion'
import { Slide } from '../components/Slide'
import { SLIDES } from '../lib/slides'

const ease = [0.22, 1, 0.36, 1] as const

const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']

const specs = [
  { k: 'Pantheon', v: 'US-based, Drupal-built managed hosting' },
  { k: '4 environments', v: 'Dev · Test · Beta · Production' },
  { k: 'CDN + autoscaling', v: 'Absorbs seasonal spikes automatically' },
  { k: 'Backups & DR', v: 'Roll back fast, real-time monitoring' },
]

export default function Slide11SiteTraffic() {
  const meta = SLIDES[10]
  const T_TITLE = 0.2
  const T_CHART = 0.9
  const T_SPECS = 1.9

  // traffic line: summer rise, big fall-color peak (Oct), winter rush (Dec/Jan)
  const traffic =
    'M 20 150 L 60 144 L 100 150 L 140 132 L 180 118 L 220 110 L 260 120 L 300 96 L 340 60 L 380 92 L 420 70 L 460 78'

  return (
    <Slide meta={meta}>
      <div className="flex-1 flex flex-col">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: T_TITLE }}
          className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tight text-ink-900 leading-tight mx-auto text-center max-w-5xl"
        >
          The spikes move.{' '}
          <span className="text-ember-500">The service never blinks.</span>
        </motion.h2>

        <div className="flex-1 flex items-center mt-4">
          <div className="w-full max-w-5xl mx-auto">
            <div className="relative w-full" style={{ aspectRatio: '24/7.5' }}>
              <svg viewBox="0 0 480 210" className="absolute inset-0 w-full h-full overflow-visible">
                {/* TRAFFIC band */}
                <text x="20" y="24" className="fill-ink-700/55" style={{ font: '600 9px JetBrains Mono, monospace', letterSpacing: '0.12em' }}>
                  TRAFFIC
                </text>
                {/* area fill */}
                <motion.path
                  d={`${traffic} L 460 168 L 20 168 Z`}
                  fill="url(#trafGrad)"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ duration: 1.0, delay: T_CHART + 0.5 }}
                />
                <defs>
                  <linearGradient id="trafGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgb(255 74 28 / 0.22)" />
                    <stop offset="100%" stopColor="rgb(255 74 28 / 0)" />
                  </linearGradient>
                </defs>
                <motion.path
                  d={traffic} fill="none" stroke="rgb(255 74 28)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 1.4, ease, delay: T_CHART }}
                />
                {/* peak callouts */}
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: T_CHART + 1.2 }}>
                  <circle cx="340" cy="60" r="4" fill="rgb(255 74 28)" />
                  <text x="340" y="48" textAnchor="middle" className="fill-ink-700" style={{ font: '600 9px JetBrains Mono, monospace', letterSpacing: '0.1em' }}>FALL COLOR</text>
                </motion.g>
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: T_CHART + 1.4 }}>
                  <circle cx="420" cy="70" r="4" fill="rgb(255 74 28)" />
                  <text x="438" y="58" textAnchor="middle" className="fill-ink-700" style={{ font: '600 9px JetBrains Mono, monospace', letterSpacing: '0.1em' }}>WINTER</text>
                </motion.g>

                {/* divider */}
                <line x1="20" y1="168" x2="460" y2="168" stroke="rgb(10 10 11 / 0.12)" strokeWidth="1" />

                {/* UPTIME flat line */}
                <text x="20" y="186" className="fill-ink-700/55" style={{ font: '600 9px JetBrains Mono, monospace', letterSpacing: '0.12em' }}>
                  UPTIME
                </text>
                <motion.line
                  x1="20" y1="192" x2="460" y2="192" stroke="rgb(10 10 11 / 0.7)" strokeWidth="2.5" strokeLinecap="round"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 1.4, ease, delay: T_CHART + 0.3 }}
                />
                <motion.text
                  x="460" y="186" textAnchor="end"
                  className="fill-ink-900" style={{ font: '600 10px Inter Tight, sans-serif' }}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: T_CHART + 1.4 }}
                >
                  100%
                </motion.text>
              </svg>
            </div>
            {/* month axis */}
            <div className="flex justify-between px-[4%] mt-1">
              {months.map((m, i) => (
                <span key={i} className="font-mono text-[9px] text-ink-700/45">{m}</span>
              ))}
            </div>
          </div>
        </div>

        {/* spec row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5 max-w-5xl mx-auto w-full">
          {specs.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: T_SPECS + i * 0.12 }}
              className="rounded-xl border border-ink-900/10 bg-white/50 px-4 py-3"
            >
              <div className="font-display font-medium text-ink-900 text-sm md:text-base">{s.k}</div>
              <div className="text-ink-700/70 text-xs leading-snug mt-0.5">{s.v}</div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: T_SPECS + 0.8 }}
          className="font-mono text-[11px] tracking-looser uppercase text-ink-700/55 text-center mt-4"
        >
          Old scoreboard: raw traffic. New scoreboard: visibility. We manage both.
        </motion.p>
      </div>
    </Slide>
  )
}
