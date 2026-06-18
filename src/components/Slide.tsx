import { useEffect, useState, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { SLIDES, getSlideIndex, type SlideMeta } from '../lib/slides'

interface SlideProps {
  meta: SlideMeta
  children: ReactNode
  /** Optional ambient backdrop (e.g. orange orb, image) — rendered behind everything */
  backdrop?: ReactNode
  /** Hide the section label (top-right). */
  hideLabel?: boolean
  /** Cover-style slide: hides the section label too. The slide owns its own logo. */
  bare?: boolean
}

/**
 * Layout primitive for every slide.
 *
 * Chrome by default: section label top-right, slide counter bottom-right.
 * The Horizon mark and wordmark are intentionally absent — cover-style slides
 * (slide 01, slide 12) render their own larger logo treatment.
 */
export function Slide({
  meta,
  children,
  backdrop,
  hideLabel = false,
  bare = false,
}: SlideProps) {
  const showLabel = !bare && !hideLabel
  const navigate = useNavigate()
  const index = getSlideIndex(meta.id)
  const total = SLIDES.length
  const [showNotes, setShowNotes] = useState(false)

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault()
        const next = SLIDES[index + 1]
        if (next) navigate(`/${next.id}`)
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        const prev = SLIDES[index - 1]
        if (prev) navigate(`/${prev.id}`)
      } else if (e.key === 'Home') {
        navigate(`/${SLIDES[0].id}`)
      } else if (e.key === 'End') {
        navigate(`/${SLIDES[total - 1].id}`)
      } else if (e.key === 'n' || e.key === 'N') {
        // Toggle presenter notes. Off by default so it stays safe on screen-share.
        setShowNotes(v => !v)
      } else if (e.key === 'Escape') {
        setShowNotes(false)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [index, total, navigate])

  const isDark = meta.theme === 'dark'
  const bgClass = isDark ? 'bg-ink-900 text-bone-100' : 'bg-bone-100 text-ink-900'

  return (
    <motion.div
      key={meta.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`slide-root ${bgClass} ${isDark ? 'grain' : ''}`}
    >
      {/* Backdrop layer (orbs, images, etc) */}
      {backdrop && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {backdrop}
        </div>
      )}

      {/* Top chrome: section label (right-aligned) */}
      {showLabel && (
        <header className="relative z-10 flex items-start justify-end px-10 pt-8 md:px-16 md:pt-10">
          <div className="font-mono text-[11px] tracking-looser uppercase opacity-60">
            {meta.label}
          </div>
        </header>
      )}

      {/* Main slide content */}
      <main className={`relative z-10 flex-1 flex flex-col px-10 md:px-16 ${showLabel ? 'py-10' : 'pt-10 md:pt-12 pb-10'}`}>
        {children}
      </main>

      {/* Bottom chrome: nav pill with prev/next + slide counter */}
      <footer className="relative z-10 flex items-end justify-end px-10 pb-8 md:px-16 md:pb-10">
        <nav
          aria-label="Slide navigation"
          className={`flex items-center gap-0.5 rounded-full border backdrop-blur-sm p-1 transition-colors ${
            isDark
              ? 'bg-bone-100/[0.06] border-bone-100/15 text-bone-100/80'
              : 'bg-ink-900/[0.04] border-ink-900/10 text-ink-900/70'
          }`}
        >
          <button
            type="button"
            onClick={() => {
              const prev = SLIDES[index - 1]
              if (prev) navigate(`/${prev.id}`)
            }}
            disabled={index === 0}
            aria-label="Previous slide"
            className={`flex items-center justify-center w-7 h-7 rounded-full transition-colors disabled:opacity-25 disabled:cursor-not-allowed ${
              isDark ? 'hover:bg-bone-100/10 hover:text-bone-50' : 'hover:bg-ink-900/[0.06] hover:text-ink-900'
            }`}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="7.5,2.5 3,6 7.5,9.5" />
            </svg>
          </button>
          <div className="font-mono text-[11px] tracking-looser tabular-nums px-2 select-none">
            {String(index + 1).padStart(2, '0')} <span className="opacity-50">/ {String(total).padStart(2, '0')}</span>
          </div>
          <button
            type="button"
            onClick={() => {
              const next = SLIDES[index + 1]
              if (next) navigate(`/${next.id}`)
            }}
            disabled={index === total - 1}
            aria-label="Next slide"
            className={`flex items-center justify-center w-7 h-7 rounded-full transition-colors disabled:opacity-25 disabled:cursor-not-allowed ${
              isDark ? 'hover:bg-bone-100/10 hover:text-bone-50' : 'hover:bg-ink-900/[0.06] hover:text-ink-900'
            }`}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="4.5,2.5 9,6 4.5,9.5" />
            </svg>
          </button>
        </nav>
      </footer>

      {/* Presenter notes drawer — toggle with "N", hidden by default (safe on screen-share) */}
      <AnimatePresence>
        {showNotes && meta.notes && (
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 bottom-0 z-30 max-h-[42vh] overflow-y-auto bg-ink-900/95 backdrop-blur-md border-t border-ember-500/30 px-10 md:px-16 py-6"
          >
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="font-mono text-[10px] tracking-looser uppercase text-ember-500">
                  Speaker notes — {meta.title}
                </div>
                <div className="font-mono text-[10px] tracking-looser uppercase text-bone-100/40">
                  N to hide
                </div>
              </div>
              <p className="text-bone-100/85 text-[15px] md:text-base leading-relaxed whitespace-pre-line">
                {meta.notes}
              </p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
