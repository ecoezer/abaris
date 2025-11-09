import React from 'react'
import StarIcon from './StarIcon'

function Hero() {
  return (
    <div className="relative bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-abaris-cyan overflow-hidden">
      <div className="w-full px-0 pt-32 pb-0">
        <div className="grid grid-cols-2 gap-0 items-stretch">
          {/* Left side - Image and Content Container */}
          <div className="relative ml-0 w-full h-full flex flex-col items-end">
            {/* Image */}
            <div className="relative z-10 h-full w-full">
              <img
                src="/abaris-new-tinified-1-871x1024 (1).png"
                alt="Abaris Cleaning Professional"
                className="w-4/5 h-full object-cover"
              />
            </div>

          </div>

          {/* Right side - Content */}
          <div className="pt-8 px-8 flex flex-col justify-start">
            <h1 className="text-white font-light mb-6">
              <div className="text-[120px] leading-none tracking-wide">Abaris</div>
              <div className="text-[32px] tracking-[0.3em] mt-2">DÜSSELDORF</div>
            </h1>

            <p className="text-white text-lg mb-16 font-light">
              Wir begrüßen Sie auf den Seiten von Abaris Reinigungsservice
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-3 gap-8">
              {/* Qualität */}
              <div className="flex flex-col items-center text-center group">
                <div className="mb-8 flex items-center justify-center w-16 h-16 rounded-full border-2 border-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:bg-opacity-10">
                  <StarIcon />
                </div>
                <h3 className="text-white text-2xl font-light mb-4 transition-all duration-300 group-hover:scale-105">Qualität</h3>
                <p className="text-white font-light text-sm leading-relaxed opacity-90">
                  Wir bieten Ihnen hohe Qualität und faire Preise für einen individuell angepassten Service durch genaue Analyse Ihrer Bedürfnisse.
                </p>
              </div>

              {/* Service */}
              <div className="flex flex-col items-center text-center group">
                <div className="mb-8 flex items-center justify-center w-16 h-16 rounded-full border-2 border-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:bg-opacity-10">
                  <StarIcon />
                </div>
                <h3 className="text-white text-2xl font-light mb-4 transition-all duration-300 group-hover:scale-105">Service</h3>
                <p className="text-white font-light text-sm leading-relaxed opacity-90">
                  Mit umfassenden Serviceleistungen von der Grundreinigung bis zur Unterhaltsreinigung und Hauswirtschaft sind wir der passende Partner für Arztpraxen, Büros, Kitas u.a.
                </p>
              </div>

              {/* Nachhaltigkeit */}
              <div className="flex flex-col items-center text-center group">
                <div className="mb-8 flex items-center justify-center w-16 h-16 rounded-full border-2 border-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:bg-opacity-10">
                  <StarIcon />
                </div>
                <h3 className="text-white text-2xl font-light mb-4 transition-all duration-300 group-hover:scale-105">Nachhaltigkeit</h3>
                <p className="text-white font-light text-sm leading-relaxed opacity-90">
                  Der behutsame Umgang mit Ihrer Einrichtung ist für uns ebenso selbstverständlich wie die nachhaltige Verwendung der Reinigungsmittel.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
      </div>

      {/* Services Section */}
      <div className="bg-white pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="uppercase text-gray-600 text-sm tracking-widest font-light mb-12">
            S E R V I C E S
          </div>

          <div className="grid grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-light text-gray-900 mb-4">
                Das bieten wir Ihnen
              </h2>
              <p className="text-gray-600 font-light mb-2">Abaris Reinigungsservice</p>
              <p className="text-gray-700 leading-relaxed font-light max-w-sm">
                Wir schreiben SERVICE groß! Wir garantieren eine Qualität mit dem Fokus auf individuelle Lösungen. Ihre
              </p>
            </div>

            <div className="space-y-8">
              {/* Büroreinigung */}
              <div className="flex items-center justify-between pb-6 border-b border-gray-200 hover:border-abaris-cyan transition-colors">
                <h3 className="text-xl font-light text-gray-900">Büroreinigung</h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>

              {/* Praxisreinigung */}
              <div className="flex items-center justify-between pb-6 border-b border-gray-200 hover:border-abaris-cyan transition-colors">
                <h3 className="text-xl font-light text-gray-900">Praxisreinigung</h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>

              {/* Fensterreinigung */}
              <div className="flex items-center justify-between pb-6 border-b border-gray-200 hover:border-abaris-cyan transition-colors">
                <h3 className="text-xl font-light text-gray-900">Fensterreinigung</h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
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
