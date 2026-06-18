import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

/**
 * "Still mode" — when the page is backgrounded (e.g. an embedded preview pane
 * that pauses requestAnimationFrame), Framer entrance animations never tick and
 * content stays at opacity 0. Detect that state and render every slide settled
 * at its final state instead. A real, foreground browser tab is "visible" and
 * keeps the full animated presentation. See the html[data-render="still"] rules
 * in index.css.
 */
function syncRenderMode() {
  document.documentElement.dataset.render =
    document.visibilityState === 'hidden' ? 'still' : 'live'
}
syncRenderMode()
document.addEventListener('visibilitychange', syncRenderMode)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
