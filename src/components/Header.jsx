import React, { useState } from 'react'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    setIsOpen(false)
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-abaris-cyan' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 md:py-3">
        <div className="flex items-center justify-between">
          <div className="text-white text-2xl md:text-3xl font-light tracking-wide cursor-pointer" onClick={() => scrollToSection('hero')}>
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
            <button onClick={() => scrollToSection('hero')} className={`text-white text-base lg:text-lg font-bold relative bg-none border-none cursor-pointer group ${activeSection === 'hero' ? '' : ''}`}>
              <span className="relative z-10 block px-4 py-2">Home</span>
              <span className={`absolute bottom-0 left-1/2 h-0.5 bg-white transition-all duration-300 transform -translate-x-1/2 ${activeSection === 'hero' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            <button onClick={() => scrollToSection('services')} className={`text-white text-base lg:text-lg font-bold relative bg-none border-none cursor-pointer group ${activeSection === 'services' ? '' : ''}`}>
              <span className="relative z-10 block px-4 py-2">Services</span>
              <span className={`absolute bottom-0 left-1/2 h-0.5 bg-white transition-all duration-300 transform -translate-x-1/2 ${activeSection === 'services' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            <button onClick={() => scrollToSection('testimonials')} className={`text-white text-base lg:text-lg font-bold relative bg-none border-none cursor-pointer group ${activeSection === 'testimonials' ? '' : ''}`}>
              <span className="relative z-10 block px-4 py-2">Testimonials</span>
              <span className={`absolute bottom-0 left-1/2 h-0.5 bg-white transition-all duration-300 transform -translate-x-1/2 ${activeSection === 'testimonials' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            <button onClick={() => scrollToSection('about')} className={`text-white text-base lg:text-lg font-bold relative bg-none border-none cursor-pointer group ${activeSection === 'about' ? '' : ''}`}>
              <span className="relative z-10 block px-4 py-2">Über uns</span>
              <span className={`absolute bottom-0 left-1/2 h-0.5 bg-white transition-all duration-300 transform -translate-x-1/2 ${activeSection === 'about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            <button onClick={() => scrollToSection('contact')} className={`text-white text-base lg:text-lg font-bold relative bg-none border-none cursor-pointer group ${activeSection === 'contact' ? '' : ''}`}>
              <span className="relative z-10 block px-4 py-2">Kontakt</span>
              <span className={`absolute bottom-0 left-1/2 h-0.5 bg-white transition-all duration-300 transform -translate-x-1/2 ${activeSection === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          </nav>
        </div>

        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left text-white text-sm transition-all duration-300 hover:translate-x-2 bg-none border-none cursor-pointer py-2 px-2 hover:bg-white hover:bg-opacity-10 rounded">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-white text-sm transition-all duration-300 hover:translate-x-2 bg-none border-none cursor-pointer py-2 px-2 hover:bg-white hover:bg-opacity-10 rounded">
              Services
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-white text-sm transition-all duration-300 hover:translate-x-2 bg-none border-none cursor-pointer py-2 px-2 hover:bg-white hover:bg-opacity-10 rounded">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-white text-sm transition-all duration-300 hover:translate-x-2 border-b border-white pb-2 bg-none border-none cursor-pointer py-2 px-2 hover:bg-white hover:bg-opacity-10 rounded">
              Über uns
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-white text-sm transition-all duration-300 hover:translate-x-2 bg-none border-none cursor-pointer py-2 px-2 hover:bg-white hover:bg-opacity-10 rounded">
              Kontakt
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
