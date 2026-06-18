import { motion } from 'framer-motion'
import { Slide } from '../components/Slide'
import { Sparkle } from '../components/Sparkle'
import { SLIDES } from '../lib/slides'

const ease = [0.22, 1, 0.36, 1] as const

const channels = [
  'LLMs & AI Agents',
  'Search & AI Overviews',
  'Social',
  'Email & SMS',
  'Paid Media',
  'PR & Earned',
  'Partners & Industry',
]

interface Node {
  label: string
  x: number
  y: number
  anchor: 'start' | 'middle' | 'end'
  vAlign: 'top' | 'middle' | 'bottom'
}

const W = 760
const H = 760
const cx = W / 2
const cy = H / 2
const radius = 250

const nodes: Node[] = channels.map((label, i) => {
  const angle = (-90 + i * (360 / channels.length)) * (Math.PI / 180)
  const x = cx + radius * Math.cos(angle)
  const y = cy + radius * Math.sin(angle)
  const cosA = Math.cos(angle)
  const sinA = Math.sin(angle)
  let anchor: Node['anchor'] = 'middle'
  if (cosA > 0.25) anchor = 'start'
  else if (cosA < -0.25) anchor = 'end'
  let vAlign: Node['vAlign'] = 'middle'
  if (sinA < -0.5) vAlign = 'bottom'
  else if (sinA > 0.5) vAlign = 'top'
  return { label, x, y, anchor, vAlign }
})

export default function Slide09WebsiteIntelligence() {
  const meta = SLIDES[8]
  const T_TITLE = 0.2
  const T_CENTER = 0.9
  const T_SPOKES = 1.5
  const T_DOTS = 2.0
  const T_LABELS = 2.5

  return (
    <Slide meta={meta}>
      <div className="flex-1 flex flex-col">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: T_TITLE }}
          className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tight text-ink-900 leading-tight mx-auto text-center max-w-5xl"
        >
          One source of truth.{' '}
          <span className="text-ember-500">Every channel.</span>
        </motion.h2>

        <div className="flex-1 flex items-center justify-center mt-1">
          <div className="relative w-full max-w-[440px]" style={{ aspectRatio: '1/1' }}>
            <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 w-full h-full overflow-visible">
              {/* Animated pulse rings — the engine feeding outward */}
              {[0, 1, 2].map((k) => (
                <motion.circle
                  key={`pulse-${k}`}
                  cx={cx} cy={cy}
                  r={120}
                  fill="none"
                  stroke="rgb(255 74 28 / 0.4)"
                  strokeWidth="1.5"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: [0.5, 2.0], opacity: [0.5, 0] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: 'easeOut', delay: T_CENTER + k * 1.13 }}
                  style={{ transformOrigin: `${cx}px ${cy}px`, transformBox: 'fill-box' }}
                />
              ))}

              {/* Spoke lines */}
              {nodes.map((n, i) => (
                <motion.line
                  key={`line-${i}`}
                  x1={cx} y1={cy} x2={n.x} y2={n.y}
                  stroke="rgb(10 10 11 / 0.18)" strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.7, ease, delay: T_SPOKES + i * 0.07 }}
                />
              ))}

              {/* Endpoint dots */}
              {nodes.map((n, i) => (
                <motion.circle
                  key={`dot-${i}`}
                  cx={n.x} cy={n.y} r="6" fill="rgb(10 10 11)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, ease, delay: T_DOTS + i * 0.07 }}
                  style={{ transformOrigin: `${n.x}px ${n.y}px`, transformBox: 'fill-box' }}
                />
              ))}

              {/* Center: ember halo + dark engine core */}
              <motion.circle
                cx={cx} cy={cy} r="150" fill="rgb(255 74 28 / 0.06)"
                initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease, delay: T_CENTER - 0.1 }}
                style={{ transformOrigin: `${cx}px ${cy}px`, transformBox: 'fill-box' }}
              />
              <motion.circle
                cx={cx} cy={cy} r="112" fill="rgb(10 10 11)"
                initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease, delay: T_CENTER }}
                style={{ transformOrigin: `${cx}px ${cy}px`, transformBox: 'fill-box' }}
              />
              {/* concentric engine ring */}
              <motion.circle
                cx={cx} cy={cy} r="90" fill="none" stroke="rgb(255 74 28 / 0.35)" strokeWidth="1" strokeDasharray="2 6"
                initial={{ opacity: 0, rotate: 0 }} animate={{ opacity: 1, rotate: 360 }}
                transition={{ opacity: { duration: 0.8, delay: T_CENTER + 0.3 }, rotate: { duration: 40, repeat: Infinity, ease: 'linear' } }}
                style={{ transformOrigin: `${cx}px ${cy}px`, transformBox: 'fill-box' }}
              />
            </svg>

            {/* Center label */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: T_CENTER + 0.4 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="flex flex-col items-center gap-2 text-bone-50">
                <Sparkle className="w-6 h-6 text-ember-500" />
                <div className="font-display font-medium text-bone-50 text-lg md:text-xl tracking-tight">
                  michigan.org
                </div>
                <div className="font-mono text-[9px] md:text-[10px] tracking-looser uppercase text-bone-100/70">
                  Website
                </div>
              </div>
            </motion.div>

            {/* Spoke labels */}
            {nodes.map((n, i) => {
              const rightAlignToDot =
                n.label === 'PR & Earned' || n.label === 'Partners & Industry'
              let xPct: number, yPct: number, translateX: string, translateY: string
              if (rightAlignToDot) {
                const lx = n.x - 14
                const ly = n.y
                xPct = (lx / W) * 100
                yPct = (ly / H) * 100
                translateX = '-100%'
                translateY = '-50%'
              } else {
                const angle = Math.atan2(n.y - cy, n.x - cx)
                const labelOffset = 18
                const lx = n.x + labelOffset * Math.cos(angle)
                const ly = n.y + labelOffset * Math.sin(angle)
                xPct = (lx / W) * 100
                yPct = (ly / H) * 100
                translateX = n.anchor === 'start' ? '0%' : n.anchor === 'end' ? '-100%' : '-50%'
                translateY = n.vAlign === 'bottom' ? '-100%' : n.vAlign === 'top' ? '0%' : '-50%'
              }
              return (
                <div
                  key={`label-${i}`}
                  className="absolute"
                  style={{ left: `${xPct}%`, top: `${yPct}%`, transform: `translate(${translateX}, ${translateY})` }}
                >
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease, delay: T_LABELS + i * 0.07 }}
                    className="font-mono text-[10px] md:text-xs tracking-looser uppercase text-ink-700 whitespace-nowrap"
                  >
                    {n.label}
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: T_LABELS + 0.8 }}
          className="font-display text-base md:text-lg text-ink-700/80 text-center max-w-3xl mx-auto mt-1"
        >
          Authority in the future doesn't come from a website. It comes from a single source of truth that every channel draws and learns from.
        </motion.p>
      </div>
    </Slide>
  )
}
