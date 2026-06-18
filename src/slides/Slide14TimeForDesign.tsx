import { motion } from 'framer-motion'
import { Slide } from '../components/Slide'
import { SLIDES } from '../lib/slides'

const ease = [0.22, 1, 0.36, 1] as const

// ─────────────────────────────────────────────────────────────
// DEMO URL — Dave to paste the live demo site here before Monday.
// Leave as '' and the button will prompt instead of opening a blank tab.
const DEMO_URL = 'https://michigan-blue.vercel.app/'
// ─────────────────────────────────────────────────────────────

export default function Slide14TimeForDesign() {
  const meta = SLIDES[14]

  function launch() {
    if (DEMO_URL) {
      window.open(DEMO_URL, '_blank', 'noopener')
    } else {
      // Safety net for rehearsal: no URL pasted yet.
      // eslint-disable-next-line no-alert
      alert('Paste the demo URL into DEMO_URL in Slide14TimeForDesign.tsx before the call.')
    }
  }

  return (
    <Slide
      meta={meta}
      bare
      backdrop={
        <>
          <div className="ember-orb" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', opacity: 0.22 }} />
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
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="font-mono text-xs tracking-looser uppercase text-ember-500 mb-10"
        >
          That's the foundation handled
        </motion.div>

        <motion.button
          type="button"
          onClick={launch}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="group relative inline-flex items-center gap-5 rounded-full bg-gradient-to-r from-ember-600 via-ember-500 to-glow-500 px-12 md:px-16 py-7 md:py-9 shadow-[0_0_60px_rgba(255,74,28,0.35)]"
        >
          <span className="font-display font-medium text-3xl md:text-5xl lg:text-6xl tracking-tight text-bone-50">
            Here is our solution
          </span>
          <motion.svg
            width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
            className="text-bone-50"
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <line x1="2" y1="10" x2="36" y2="10" />
            <polyline points="28,2 38,10 28,18" />
          </motion.svg>
        </motion.button>
      </div>
    </Slide>
  )
}
