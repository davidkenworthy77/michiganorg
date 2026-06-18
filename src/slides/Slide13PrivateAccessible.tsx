import { motion } from 'framer-motion'
import { Slide } from '../components/Slide'
import { SLIDES } from '../lib/slides'

const ease = [0.22, 1, 0.36, 1] as const

function LockIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="15" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

function AccessIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="6.6" r="1.4" fill="currentColor" stroke="none" />
      <path d="M5.5 9.2c2 .8 4.2 1.2 6.5 1.2s4.5-.4 6.5-1.2" />
      <path d="M12 10.4v4M12 14.4l-2.4 4.4M12 14.4l2.4 4.4" />
    </svg>
  )
}

const privacy = [
  'Consent management & full cookie compliance',
  "Michigan's data stored separately",
  "Never used to train anyone else's models",
  'Clear retention & access controls',
]

const access = [
  'Automated scans + manual screen-reader testing',
  'Keyboard testing & real-user validation',
  'Monitored continuously to stay compliant',
]

export default function Slide13PrivateAccessible() {
  const meta = SLIDES[12]
  const T_TITLE = 0.2
  const T_CARDS = 0.8

  return (
    <Slide meta={meta}>
      <div className="flex-1 flex flex-col">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: T_TITLE }}
          className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tight text-ink-900 leading-tight mx-auto text-center max-w-5xl"
        >
          Private and accessible —{' '}
          <span className="text-ember-500">by default, not bolted on.</span>
        </motion.h2>

        <div className="flex-1 grid md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-14 max-w-5xl mx-auto w-full items-stretch">
          {/* PRIVACY */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: T_CARDS }}
            className="flex flex-col bg-white/60 border border-ink-900/10 rounded-3xl p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-ember-500/10 text-ember-500 flex items-center justify-center">
                <LockIcon className="w-6 h-6" />
              </div>
              <div className="font-display font-medium text-xl md:text-2xl tracking-tight text-ink-900">Private</div>
            </div>
            <ul className="flex flex-col gap-3">
              {privacy.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease, delay: T_CARDS + 0.3 + i * 0.1 }}
                  className="flex items-start gap-2.5 text-ink-700/80 text-sm md:text-base leading-snug"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ember-500 flex-shrink-0" />
                  {p}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ACCESSIBILITY */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: T_CARDS + 0.18 }}
            className="flex flex-col bg-white/60 border border-ink-900/10 rounded-3xl p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-ember-500/10 text-ember-500 flex items-center justify-center">
                <AccessIcon className="w-6 h-6" />
              </div>
              <div className="font-display font-medium text-xl md:text-2xl tracking-tight text-ink-900">Accessible</div>
            </div>

            {/* WCAG gauge */}
            <div className="mb-5">
              <div className="flex items-baseline justify-between mb-2">
                <span className="font-mono text-[10px] tracking-looser uppercase text-ink-700/60">WCAG 2.1 AA</span>
                <span className="font-display font-medium text-ember-500 text-lg">Meets / exceeds</span>
              </div>
              <div className="relative h-3 rounded-full bg-ink-900/8 overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                  transition={{ duration: 1.1, ease, delay: T_CARDS + 0.5 }}
                  className="h-full bg-gradient-to-r from-ember-500 via-ember-400 to-glow-500 origin-left rounded-full"
                  style={{ width: '95%' }}
                />
              </div>
              {/* 90% threshold marker */}
              <div className="relative h-4 mt-1">
                <div className="absolute -top-[18px]" style={{ left: '90%' }}>
                  <div className="w-px h-4 bg-ink-900/50 mx-auto" />
                </div>
                <div className="absolute top-0 font-mono text-[9px] tracking-looser uppercase text-ink-700/60" style={{ left: '90%', transform: 'translateX(-50%)' }}>
                  90% bar
                </div>
              </div>
            </div>

            <ul className="flex flex-col gap-3">
              {access.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease, delay: T_CARDS + 0.6 + i * 0.1 }}
                  className="flex items-start gap-2.5 text-ink-700/80 text-sm md:text-base leading-snug"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ember-500 flex-shrink-0" />
                  {p}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Slide>
  )
}
