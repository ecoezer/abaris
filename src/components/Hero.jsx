import React from 'react'
import StarIcon from './StarIcon'

function Hero() {
  return (
    <div className="relative bg-abaris-cyan">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-abaris-cyan overflow-hidden">
      {/* Decorative star in header */}
      <div className="absolute top-6 right-1/3 transform translate-x-1/2">
        <div className="text-white opacity-50">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 0 L22 18 L40 20 L22 22 L20 40 L18 22 L0 20 L18 18 Z" fill="currentColor"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 pt-32 pb-16">
        <div className="grid grid-cols-2 gap-16 items-start">
          {/* Left side - Image */}
          <div className="relative -ml-20">
            <div className="relative z-10">
              <img
                src="/abaris-new-tinified-1-871x1024 (1).png"
                alt="Abaris Cleaning Professional"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Decorative star */}
            <div className="absolute bottom-32 right-0 transform translate-x-8">
              <div className="text-white opacity-30">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path d="M30 0 L32 28 L60 30 L32 32 L30 60 L28 32 L0 30 L28 28 Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="pt-8">
            <h1 className="text-white font-light mb-6">
              <div className="text-[120px] leading-none tracking-wide">Abaris</div>
              <div className="text-[32px] tracking-[0.3em] mt-2">GEBÄUDEREINIGUNG</div>
            </h1>

            <p className="text-white text-lg mb-16 font-light">
              Wir begrüßen Sie auf den Seiten von Abaris Reinigungsservice
            </p>

          </div>
        </div>

        {/* Wavy transition with feature cards */}
        <div className="relative pt-20">
          <svg className="w-full h-auto" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: 'block', marginBottom: '-2px' }}>
            <path d="M0,40 Q300,0 600,40 T1200,40 L1200,120 L0,120 Z" fill="white"/>
          </svg>

          {/* Feature cards overlapping the wave */}
          <div className="absolute bottom-12 left-0 right-0 max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-3 gap-12">
              {/* Qualität */}
              <div>
                <div className="mb-4 flex justify-center lg:justify-start">
                  <div className="w-16 h-16 border-2 border-abaris-cyan flex items-center justify-center">
                    <StarIcon />
                  </div>
                </div>
                <h3 className="text-gray-800 text-2xl font-light mb-3 lg:text-left text-center">Qualität</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light lg:text-left text-center">
                  Wir bieten Ihnen hohe Qualität und faire Preise für einen individuell angepassten Service durch genaue Analyse Ihrer Bedürfnisse.
                </p>
              </div>

              {/* Service */}
              <div>
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 border-2 border-abaris-cyan flex items-center justify-center">
                    <StarIcon />
                  </div>
                </div>
                <h3 className="text-gray-800 text-2xl font-light mb-3 text-center">Service</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light text-center">
                  Mit umfassenden Serviceleistungen von der Grundreinigung bis zur Unterhaltsreinigung und Hauswirtschaft sind wir der passende Partner für Arztpraxen, Büros, Kitas u.a.
                </p>
              </div>

              {/* Nachhaltigkeit */}
              <div>
                <div className="mb-4 flex justify-center lg:justify-end">
                  <div className="w-16 h-16 border-2 border-abaris-cyan flex items-center justify-center">
                    <StarIcon />
                  </div>
                </div>
                <h3 className="text-gray-800 text-2xl font-light mb-3 lg:text-right text-center">Nachhaltigkeit</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light lg:text-right text-center">
                  Der behutsame Umgang mit Ihrer Einrichtung ist für uns ebenso selbstverständlich wie die nachhaltige Verwendung der Reinigungsmittel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Services Section */}
      <div className="bg-abaris-cyan pt-32 pb-20">
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
