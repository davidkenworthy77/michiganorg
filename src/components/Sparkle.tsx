interface SparkleProps {
  className?: string
}

/**
 * Horizon brand sparkle — 4-point asymmetric star echoing the logo mark.
 * Use as a small accent, bullet marker, or large decorative element.
 * Inherits color from `currentColor`.
 */
export function Sparkle({ className = '' }: SparkleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0 L13 10 L24 12 L13 14 L12 24 L11 14 L0 12 L11 10 Z" />
    </svg>
  )
}
