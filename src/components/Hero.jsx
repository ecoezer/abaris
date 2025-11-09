import React from 'react'
import StarIcon from './StarIcon'

function Hero() {
  return (
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

            {/* Three feature cards */}
            <div className="grid grid-cols-3 gap-6">
              {/* Qualität */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 border-2 border-white flex items-center justify-center">
                    <StarIcon />
                  </div>
                </div>
                <h3 className="text-white text-xl font-normal mb-3">Qualität</h3>
                <p className="text-white text-sm leading-relaxed font-light">
                  Wir bieten Ihnen hohe Qualität und faire Preise für einen individuell angepassten Service durch genaue Analyse Ihrer Bedürfnisse.
                </p>
              </div>

              {/* Service */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 border-2 border-white flex items-center justify-center">
                    <StarIcon />
                  </div>
                </div>
                <h3 className="text-white text-xl font-normal mb-3">Service</h3>
                <p className="text-white text-sm leading-relaxed font-light">
                  Mit umfassenden Serviceleistungen von der Grundreinigung bis zur Unterhaltsreinigung und Hauswirtschaft sind wir der passende Partner für Arztpraxen, Büros, Kitas u.a.
                </p>
              </div>

              {/* Nachhaltigkeit */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 border-2 border-white flex items-center justify-center">
                    <StarIcon />
                  </div>
                </div>
                <h3 className="text-white text-xl font-normal mb-3">Nachhaltigkeit</h3>
                <p className="text-white text-sm leading-relaxed font-light">
                  Der behutsame Umgang mit Ihrer Einrichtung ist für uns ebenso selbstverständlich wie die nachhaltige Verwendung der Reinigungsmittel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
