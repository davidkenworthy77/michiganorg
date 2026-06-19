import type { ReactElement } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { SLIDES } from './lib/slides'

// Cover
import Slide01Cover from './slides/Slide01Cover'

// Section 1 — Team
import Slide02WeKnowMichigan from './slides/Slide02WeKnowMichigan'
import Slide03TeamMakeup from './slides/Slide03TeamMakeup'
import Slide04TeamValues from './slides/Slide04TeamValues'

// Section 2 — The Future of AI
import SlideWhereToday from './slides/SlideWhereToday'
import SlideTwoFrontWar from './slides/SlideTwoFrontWar'
import Slide05DiscoveryChanged from './slides/Slide05DiscoveryChanged'
import Slide06TrustGap from './slides/Slide06TrustGap'
import Slide07BotsOutnumber from './slides/Slide07BotsOutnumber'

// Section 3 — Destination Intelligence
import SlideFuture from './slides/SlideFuture'
import Slide09WebsiteIntelligence from './slides/Slide09WebsiteIntelligence'
import SlideFeedbackLoop from './slides/SlideFeedbackLoop'

// Section 4 — Traffic, Security, Consent, ADA
import SlideVisibility from './slides/SlideVisibility'
import Slide12SecureByDesign from './slides/Slide12SecureByDesign'

// Transition → live demo
import Slide14TimeForDesign from './slides/Slide14TimeForDesign'

const slideComponents: Record<string, () => ReactElement> = {
  '01': Slide01Cover,
  '02': Slide02WeKnowMichigan,
  '03': Slide03TeamMakeup,
  '04': SlideWhereToday,
  '05': SlideTwoFrontWar,
  '06': Slide06TrustGap,
  '07': SlideFuture,
  '08': Slide09WebsiteIntelligence,
  '09': SlideFeedbackLoop,
  '10': SlideVisibility,
  '11': Slide12SecureByDesign,
  '12': Slide14TimeForDesign,
  // Parked — kept at the end, not in the main flow
  '13': Slide04TeamValues,
  '14': Slide05DiscoveryChanged,
  '15': Slide07BotsOutnumber,
}

function SlideRoute() {
  const { id } = useParams()
  const Component = id && slideComponents[id]
  if (!Component) {
    return (
      <div className="slide-root bg-ink-900 text-bone-100 items-center justify-center">
        <div className="m-auto text-center font-mono text-sm opacity-60 px-8">
          <p className="text-display-sm font-display mb-4 text-bone-50">Not found</p>
          <p>Slide {id} doesn't exist.</p>
          <p className="mt-4 text-xs opacity-50">Press ← to go back, → to skip ahead.</p>
        </div>
      </div>
    )
  }
  return <Component />
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Navigate to={`/${SLIDES[0].id}`} replace />} />
          <Route path="/:id" element={<SlideRoute />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  )
}
