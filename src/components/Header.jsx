import React from 'react'

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="text-white text-3xl font-light tracking-wide">
            Abaris
          </div>

          <nav className="flex items-center gap-12">
            <a href="#home" className="text-white hover:opacity-80 transition-opacity">
              Home
            </a>
            <a href="#uber-uns" className="text-white hover:opacity-80 transition-opacity border-b-2 border-white pb-1">
              Über uns
            </a>
            <a href="#portfolio" className="text-white hover:opacity-80 transition-opacity">
              Portfolio
            </a>
            <a href="#jobs" className="text-white hover:opacity-80 transition-opacity">
              Jobs
            </a>
            <a href="#aktuelles" className="text-white hover:opacity-80 transition-opacity">
              Aktuelles
            </a>
            <a href="#kontakt" className="text-white hover:opacity-80 transition-opacity">
              Kontakt
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
