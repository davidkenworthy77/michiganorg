import { motion } from 'framer-motion'
import { Slide } from '../components/Slide'
import { Sparkle } from '../components/Sparkle'
import { SLIDES } from '../lib/slides'

const ease = [0.22, 1, 0.36, 1] as const

type NodePosition = 'top' | 'right' | 'bottom' | 'left'

interface LoopNode {
  num: string
  title: string
  body: string
  position: NodePosition
}

const loopNodes: LoopNode[] = [
  {
    num: '01',
    title: 'Humans interact',
    body: 'with the site, concierge, content.',
    position: 'top',
  },
  {
    num: '02',
    title: 'Bots query',
    body: 'through schema, MCP, structured data.',
    position: 'right',
  },
  {
    num: '03',
    title: 'Platform learns',
    body: 'what people ask, what works.',
    position: 'bottom',
  },
  {
    num: '04',
    title: 'The system adapts',
    body: 'content expands, audiences refine.',
    position: 'left',
  },
]

const POSITION_TO_ANGLE: Record<NodePosition, number> = {
  top: -90,
  right: 0,
  bottom: 90,
  left: 180,
}

// SVG canvas — sized so the ring + labels fit comfortably within bounds
const W = 1000
const H = 580
const cx = W / 2
const cy = H / 2
const radius = 140

export default function SlideFeedbackLoop() {
  const meta = SLIDES[10]

  const T_TITLE = 0.2
  const T_RING = 0.9
  const T_NODES = 1.6
  const T_CAPTION = 4.6

  // Compute per-node start times for the arc-segment animation
  const segmentDelays = loopNodes.map((_, i) => T_NODES + i * 0.7 + 0.4)

  return (
    <Slide meta={meta}>
      <div className="flex-1 flex flex-col">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: T_TITLE }}
          className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tight text-ink-900 leading-tight mx-auto text-center max-w-5xl lg:max-w-6xl"
        >
          Every interaction makes the platform{' '}
          <span className="text-ember-500">smarter.</span>
        </motion.h2>

        {/* Loop diagram */}
        <div className="flex-1 flex items-center justify-center mt-4">
          <div className="relative w-full max-w-[880px]" style={{ aspectRatio: `${W}/${H}` }}>
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="absolute inset-0 w-full h-full overflow-visible"
            >
              {/* Ambient ember halo */}
              <motion.circle
                cx={cx}
                cy={cy}
                r={radius + 50}
                fill="rgb(255 74 28 / 0.04)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease, delay: T_RING }}
                style={{ transformOrigin: `${cx}px ${cy}px`, transformBox: 'fill-box' }}
              />

              {/* Loop arcs — one segment between each pair of nodes */}
              {loopNodes.map((_, i) => {
                const startAngleDeg = POSITION_TO_ANGLE[loopNodes[i].position]
                const endAngleDegRaw =
                  POSITION_TO_ANGLE[loopNodes[(i + 1) % loopNodes.length].position]
                const endAngleDeg =
                  endAngleDegRaw > startAngleDeg ? endAngleDegRaw : endAngleDegRaw + 360
                const a1 = (startAngleDeg * Math.PI) / 180
                const a2 = (endAngleDeg * Math.PI) / 180
                const x1 = cx + radius * Math.cos(a1)
                const y1 = cy + radius * Math.sin(a1)
                const x2 = cx + radius * Math.cos(a2)
                const y2 = cy + radius * Math.sin(a2)
                const path = `M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`
                return (
                  <motion.path
                    key={`arc-${i}`}
                    d={path}
                    stroke="rgb(255 74 28)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, ease, delay: segmentDelays[i] }}
                  />
                )
              })}

              {/* Direction arrowheads at midpoints between nodes */}
              {loopNodes.map((_, i) => {
                const a1 = POSITION_TO_ANGLE[loopNodes[i].position]
                const a2Raw =
                  POSITION_TO_ANGLE[loopNodes[(i + 1) % loopNodes.length].position]
                const a2 = a2Raw > a1 ? a2Raw : a2Raw + 360
                const midAngleDeg = (a1 + a2) / 2
                const midAngle = (midAngleDeg * Math.PI) / 180
                const ax = cx + radius * Math.cos(midAngle)
                const ay = cy + radius * Math.sin(midAngle)
                const tangent = midAngleDeg + 90
                return (
                  <motion.g
                    key={`arrow-${i}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease, delay: segmentDelays[i] + 0.6 }}
                    style={{
                      transformOrigin: `${ax}px ${ay}px`,
                      transformBox: 'fill-box',
                    }}
                  >
                    <polygon
                      points={`${ax},${ay - 6} ${ax + 8},${ay} ${ax},${ay + 6}`}
                      fill="rgb(255 74 28)"
                      transform={`rotate(${tangent} ${ax} ${ay})`}
                    />
                  </motion.g>
                )
              })}

              {/* Center dark core */}
              <motion.circle
                cx={cx}
                cy={cy}
                r="42"
                fill="rgb(10 10 11)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease, delay: T_RING + 0.3 }}
                style={{ transformOrigin: `${cx}px ${cy}px`, transformBox: 'fill-box' }}
              />

              {/* Node dots on the ring */}
              {loopNodes.map((n, i) => {
                const angle = (POSITION_TO_ANGLE[n.position] * Math.PI) / 180
                const x = cx + radius * Math.cos(angle)
                const y = cy + radius * Math.sin(angle)
                return (
                  <motion.circle
                    key={`node-${i}`}
                    cx={x}
                    cy={y}
                    r="7"
                    fill="rgb(255 74 28)"
                    stroke="rgb(245 242 236)"
                    strokeWidth="3"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease, delay: T_NODES + i * 0.7 + 0.2 }}
                    style={{ transformOrigin: `${x}px ${y}px`, transformBox: 'fill-box' }}
                  />
                )
              })}
            </svg>

            {/* Center label — sparkle + pm.org */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: T_RING + 0.7 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="flex flex-col items-center gap-1.5 text-bone-50">
                <Sparkle className="w-4 h-4 text-ember-500" />
                <div className="font-mono text-[9px] tracking-looser uppercase opacity-90">
                  pm.org
                </div>
              </div>
            </motion.div>

            {/* Node labels — fixed positions per quadrant, with safe margins */}
            {loopNodes.map((n, i) => {
              const angle = (POSITION_TO_ANGLE[n.position] * Math.PI) / 180
              const dotX = cx + radius * Math.cos(angle)
              const dotY = cy + radius * Math.sin(angle)
              const xPct = (dotX / W) * 100
              const yPct = (dotY / H) * 100

              // Per-position layout
              let translate: string
              let textAlign: string
              let labelClass: string

              switch (n.position) {
                case 'top':
                  translate = '-50%, calc(-100% - 28px)'
                  textAlign = 'text-center'
                  labelClass = 'items-center'
                  break
                case 'right':
                  translate = 'calc(0% + 28px), -50%'
                  textAlign = 'text-left'
                  labelClass = 'items-start'
                  break
                case 'bottom':
                  translate = '-50%, calc(0% + 28px)'
                  textAlign = 'text-center'
                  labelClass = 'items-center'
                  break
                case 'left':
                  translate = 'calc(-100% - 28px), -50%'
                  textAlign = 'text-right'
                  labelClass = 'items-end'
                  break
              }

              return (
                <div
                  key={`label-${i}`}
                  className="absolute"
                  style={{
                    left: `${xPct}%`,
                    top: `${yPct}%`,
                    transform: `translate(${translate})`,
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease, delay: T_NODES + i * 0.7 }}
                    className={`flex flex-col gap-1 ${labelClass} ${textAlign} max-w-[200px]`}
                  >
                    <div className="font-mono text-[10px] tracking-looser uppercase text-ember-500">
                      {n.num}
                    </div>
                    <div className="font-display font-medium text-base md:text-lg text-ink-900 leading-tight">
                      {n.title}
                    </div>
                    <div className="text-xs md:text-[13px] text-ink-700/70 leading-snug">
                      {n.body}
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: T_CAPTION }}
          className="font-display font-medium text-xl md:text-2xl lg:text-3xl tracking-tight text-ink-900 text-center max-w-3xl mx-auto mt-6"
        >
          The longer it runs, the more it knows. The more it knows,{' '}
          <span className="text-ember-500">the better it performs.</span>
        </motion.p>
      </div>
    </Slide>
  )
}
