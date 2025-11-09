import React from 'react'

function StarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 100 100" fill="none" className="text-white">
      <g>
        <rect x="47" y="5" width="6" height="40" fill="currentColor" />
        <rect x="47" y="55" width="6" height="40" fill="currentColor" />

        <rect x="5" y="47" width="40" height="6" fill="currentColor" />
        <rect x="55" y="47" width="40" height="6" fill="currentColor" />

        <rect x="20" y="20" width="6" height="28" fill="currentColor" transform="rotate(45 23 34)" />
        <rect x="74" y="20" width="6" height="28" fill="currentColor" transform="rotate(-45 77 34)" />

        <rect x="20" y="56" width="6" height="28" fill="currentColor" transform="rotate(-45 23 70)" />
        <rect x="74" y="56" width="6" height="28" fill="currentColor" transform="rotate(45 77 70)" />
      </g>
    </svg>
  )
}

export default StarIcon
