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
            <a href="#home" className="text-white transition-all duration-300 hover:opacity-60 hover:scale-105 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#uber-uns" className="text-white transition-all duration-300 hover:opacity-60 hover:scale-105 border-b-2 border-white pb-1 relative group">
              Über uns
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
            </a>
            <a href="#portfolio" className="text-white transition-all duration-300 hover:opacity-60 hover:scale-105 relative group">
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#jobs" className="text-white transition-all duration-300 hover:opacity-60 hover:scale-105 relative group">
              Jobs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#aktuelles" className="text-white transition-all duration-300 hover:opacity-60 hover:scale-105 relative group">
              Aktuelles
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#kontakt" className="text-white transition-all duration-300 hover:opacity-60 hover:scale-105 relative group">
              Kontakt
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
