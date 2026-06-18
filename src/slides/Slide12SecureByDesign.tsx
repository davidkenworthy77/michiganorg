import { motion } from 'framer-motion'
import { Slide } from '../components/Slide'
import { BotGlyph } from '../components/FigureGrid'
import { SLIDES } from '../lib/slides'

const ease = [0.22, 1, 0.36, 1] as const

const measures = [
  { k: 'Firewall & intrusion prevention', v: 'Identify, log, block and report malicious activity.' },
  { k: 'Load balancing', v: 'High availability under any surge.' },
  { k: 'Vulnerability scanning & testing', v: 'Ongoing, proactive, before anyone exploits it.' },
  { k: 'Role-based permissions', v: 'People only touch what they should.' },
  { k: 'Severity-based support', v: 'Defined response times and a clear escalation path.' },
]

// approaching bots on the left, each deflected off the shield
const bots = [
  { y: 18, delay: 0 },
  { y: 34, delay: 0.18 },
  { y: 50, delay: 0.36 },
  { y: 66, delay: 0.54 },
  { y: 82, delay: 0.72 },
]

function ShieldScene({ delay }: { delay: number }) {
  return (
    <div className="relative w-full" style={{ aspectRatio: '1/1', maxWidth: 420 }}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible">
        {/* shield glow */}
        <motion.ellipse
          cx="60" cy="50" rx="30" ry="40" fill="rgb(255 74 28 / 0.07)"
          initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay }}
          style={{ transformOrigin: '60px 50px', transformBox: 'fill-box' }}
        />
        {/* deflection arc just left of the shield */}
        <motion.path
          d="M 40 14 Q 30 50 40 86" fill="none" stroke="rgb(255 74 28 / 0.5)" strokeWidth="0.8" strokeDasharray="2 3"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.0, ease, delay: delay + 0.3 }}
        />
        {/* the shield */}
        <motion.path
          d="M 60 16 L 82 24 L 82 48 Q 82 76 60 86 Q 38 76 38 48 L 38 24 Z"
          fill="rgb(20 20 23)" stroke="rgb(255 74 28)" strokeWidth="1.4"
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease, delay: delay + 0.2 }}
          style={{ transformOrigin: '60px 50px', transformBox: 'fill-box' }}
        />
        {/* check inside shield */}
        <motion.path
          d="M 52 50 L 58 58 L 70 40" fill="none" stroke="rgb(255 74 28)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease, delay: delay + 0.7 }}
        />
      </svg>

      {/* approaching + deflected bots */}
      {bots.map((b, i) => (
        <motion.div
          key={i}
          className="absolute text-ember-500/70"
          style={{ left: '2%', top: `${b.y}%`, width: '13%' }}
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: [30, 8, 0], opacity: [0, 1, 0.5] }}
          transition={{ duration: 1.2, ease, delay: delay + 0.4 + b.delay }}
        >
          <BotGlyph className="w-full h-full" />
        </motion.div>
      ))}

      {/* protected label */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 1.1 }}
        className="absolute font-mono text-[10px] tracking-looser uppercase text-bone-100/60"
        style={{ left: '60%', top: '92%', transform: 'translateX(-50%)' }}
      >
        michigan.org
      </motion.div>
    </div>
  )
}

export default function Slide12SecureByDesign() {
  const meta = SLIDES[11]
  const T_TITLE = 0.2
  const T_SCENE = 0.8
  const T_LIST = 1.4

  return (
    <Slide meta={meta}>
      <div className="flex-1 flex flex-col">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: T_TITLE }}
          className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tight text-bone-50 leading-tight mx-auto text-center max-w-5xl"
        >
          Half the web is bots.{' '}
          <span className="text-ember-500">This is where we stop them.</span>
        </motion.h2>

        <div className="flex-1 grid md:grid-cols-2 gap-10 lg:gap-16 items-center mt-6 md:mt-8 max-w-6xl mx-auto w-full">
          {/* LEFT: shield scene */}
          <div className="flex items-center justify-center">
            <ShieldScene delay={T_SCENE} />
          </div>

          {/* RIGHT: measures */}
          <div className="flex flex-col gap-2.5">
            {measures.map((m, i) => (
              <motion.div
                key={m.k}
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease, delay: T_LIST + i * 0.13 }}
                className="flex items-start gap-3 border-b border-bone-100/10 pb-2.5"
              >
                <span className="font-mono text-[10px] text-ember-500 tabular-nums mt-1.5">0{i + 1}</span>
                <div>
                  <div className="font-display font-medium text-bone-50 text-base md:text-lg leading-tight">{m.k}</div>
                  <div className="text-bone-100/60 text-xs md:text-sm leading-snug mt-0.5">{m.v}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  )
}
