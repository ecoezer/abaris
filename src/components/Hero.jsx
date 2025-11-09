import React from 'react'
import StarIcon from './StarIcon'

function Hero() {
  return (
    <div className="relative bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-abaris-cyan overflow-hidden">
        <div className="w-full h-full px-4 md:px-8 pt-24 md:pt-32 pb-8 md:pb-0">
          <div className="grid gap-0 h-full md:items-stretch grid-cols-1 lg:grid-cols-2" style={{ gridTemplateColumns: 'auto' }}>
            {/* Left side - Image and Content Container */}
            <div className="relative w-full flex flex-col items-center lg:items-end overflow-hidden">
              {/* Image */}
              <div className="relative z-10 w-full h-64 sm:h-80 md:h-96 lg:h-full flex items-center justify-center lg:block">
                <img
                  src="/abaris-new-tinified-1-871x1024 (1).png"
                  alt="Abaris Cleaning Professional"
                  className="w-auto h-full max-w-full object-contain"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="pt-8 md:pt-8 px-4 md:px-8 flex flex-col justify-start">
              <h1 className="text-white font-light mb-4 md:mb-6">
                <div className="text-4xl sm:text-6xl md:text-7xl lg:text-[120px] leading-none tracking-wide">Abaris</div>
                <div className="text-lg sm:text-2xl md:text-2xl lg:text-[32px] tracking-[0.3em] mt-2">DÜSSELDORF</div>
              </h1>

              <p className="text-white text-sm sm:text-base md:text-lg mb-8 md:mb-16 font-light">
                Wir begrüßen Sie auf den Seiten von Abaris Reinigungsservice
              </p>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {/* Qualität */}
                <div className="flex flex-col items-center text-center group">
                  <div className="mb-4 md:mb-8 flex items-center justify-center w-12 md:w-16 h-12 md:h-16 rounded-full border-2 border-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:bg-opacity-10">
                    <StarIcon />
                  </div>
                  <h3 className="text-white text-lg md:text-2xl font-light mb-2 md:mb-4 transition-all duration-300 group-hover:scale-105">Qualität</h3>
                  <p className="text-white font-light text-xs md:text-sm leading-relaxed opacity-90">
                    Wir bieten Ihnen hohe Qualität und faire Preise für einen individuell angepassten Service durch genaue Analyse Ihrer Bedürfnisse.
                  </p>
                </div>

                {/* Service */}
                <div className="flex flex-col items-center text-center group">
                  <div className="mb-4 md:mb-8 flex items-center justify-center w-12 md:w-16 h-12 md:h-16 rounded-full border-2 border-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:bg-opacity-10">
                    <StarIcon />
                  </div>
                  <h3 className="text-white text-lg md:text-2xl font-light mb-2 md:mb-4 transition-all duration-300 group-hover:scale-105">Service</h3>
                  <p className="text-white font-light text-xs md:text-sm leading-relaxed opacity-90">
                    Mit umfassenden Serviceleistungen von der Grundreinigung bis zur Unterhaltsreinigung und Hauswirtschaft sind wir der passende Partner für Arztpraxen, Büros, Kitas u.a.
                  </p>
                </div>

                {/* Nachhaltigkeit */}
                <div className="flex flex-col items-center text-center group">
                  <div className="mb-4 md:mb-8 flex items-center justify-center w-12 md:w-16 h-12 md:h-16 rounded-full border-2 border-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:bg-opacity-10">
                    <StarIcon />
                  </div>
                  <h3 className="text-white text-lg md:text-2xl font-light mb-2 md:mb-4 transition-all duration-300 group-hover:scale-105">Nachhaltigkeit</h3>
                  <p className="text-white font-light text-xs md:text-sm leading-relaxed opacity-90">
                    Der behutsame Umgang mit Ihrer Einrichtung ist für uns ebenso selbstverständlich wie die nachhaltige Verwendung der Reinigungsmittel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white pt-12 md:pt-20 pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="uppercase text-gray-600 text-xs sm:text-sm tracking-widest font-light mb-8 md:mb-12">
            S E R V I C E S
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4">
                Das bieten wir Ihnen
              </h2>
              <p className="text-gray-600 font-light mb-2 text-sm md:text-base">Abaris Reinigungsservice</p>
              <p className="text-gray-700 leading-relaxed font-light max-w-sm text-sm md:text-base">
                Wir schreiben SERVICE groß! Wir garantieren eine Qualität mit dem Fokus auf individuelle Lösungen. Ihre
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              {/* Büroreinigung */}
              <div className="flex items-center justify-between pb-4 md:pb-6 border-b border-gray-200 hover:border-abaris-cyan transition-colors">
                <h3 className="text-lg md:text-xl font-light text-gray-900">Büroreinigung</h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400 flex-shrink-0">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>

              {/* Praxisreinigung */}
              <div className="flex items-center justify-between pb-4 md:pb-6 border-b border-gray-200 hover:border-abaris-cyan transition-colors">
                <h3 className="text-lg md:text-xl font-light text-gray-900">Praxisreinigung</h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400 flex-shrink-0">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>

              {/* Fensterreinigung */}
              <div className="flex items-center justify-between pb-4 md:pb-6 border-b border-gray-200 hover:border-abaris-cyan transition-colors">
                <h3 className="text-lg md:text-xl font-light text-gray-900">Fensterreinigung</h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400 flex-shrink-0">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
