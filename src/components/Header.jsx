import React, { useState } from 'react'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <div className="text-white text-2xl md:text-3xl font-light tracking-wide">
            Abaris
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            <a href="#home" className="text-white text-sm lg:text-base transition-all duration-300 hover:opacity-60 hover:scale-105 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#uber-uns" className="text-white text-sm lg:text-base transition-all duration-300 hover:opacity-60 hover:scale-105 border-b-2 border-white pb-1 relative group">
              Über uns
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
            </a>
            <a href="#portfolio" className="text-white text-sm lg:text-base transition-all duration-300 hover:opacity-60 hover:scale-105 relative group">
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#jobs" className="text-white text-sm lg:text-base transition-all duration-300 hover:opacity-60 hover:scale-105 relative group">
              Jobs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#aktuelles" className="text-white text-sm lg:text-base transition-all duration-300 hover:opacity-60 hover:scale-105 relative group">
              Aktuelles
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#kontakt" className="text-white text-sm lg:text-base transition-all duration-300 hover:opacity-60 hover:scale-105 relative group">
              Kontakt
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        </div>

        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <a href="#home" className="block text-white text-sm transition-all duration-300 hover:opacity-60">
              Home
            </a>
            <a href="#uber-uns" className="block text-white text-sm transition-all duration-300 hover:opacity-60 border-b border-white pb-2">
              Über uns
            </a>
            <a href="#portfolio" className="block text-white text-sm transition-all duration-300 hover:opacity-60">
              Portfolio
            </a>
            <a href="#jobs" className="block text-white text-sm transition-all duration-300 hover:opacity-60">
              Jobs
            </a>
            <a href="#aktuelles" className="block text-white text-sm transition-all duration-300 hover:opacity-60">
              Aktuelles
            </a>
            <a href="#kontakt" className="block text-white text-sm transition-all duration-300 hover:opacity-60">
              Kontakt
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
