import React from 'react'
import { GoNorthStar } from 'react-icons/go'

function Hero() {
  return (
    <div className="relative bg-white">
      {/* Hero Section */}
      <div className="relative bg-abaris-cyan overflow-hidden">
        <div className="w-full px-4 md:px-8 pt-20 md:pt-24 pb-0" style={{minHeight: 'calc(100vh - 80px)', height: 'calc(100vh - 80px)'}}>
          <div className="flex gap-0 h-full items-stretch">
            {/* Left side - Image */}
            <div className="relative w-1/3 flex flex-col items-start overflow-visible -ml-4 md:-ml-8">
              {/* Image */}
              <div className="relative z-10 w-full h-full flex items-end justify-start">
                <img
                  src="/abaris-new-tinified-1-871x1024 (1).png"
                  alt="Abaris Cleaning Professional"
                  className="w-auto h-full max-w-full object-contain object-bottom"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="w-2/3 pt-2 md:pt-4 lg:pt-0 px-4 md:px-8 flex flex-col justify-start items-start">
              <div className="text-left w-full">
                <h1 className="text-white font-light mb-4 md:mb-6">
                  <div className="relative text-4xl sm:text-6xl md:text-7xl lg:text-[120px] leading-none tracking-wide inline-block">
                    Abar
                    <span className="relative inline-block">
                      ı
                      <GoNorthStar
                        className="absolute hidden md:block lg:block text-orange-500"
                        style={{
                          top: '-25%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '0.585em',
                          height: '0.585em'
                        }}
                      />
                    </span>
                    s
                  </div>
                  <div className="text-lg sm:text-2xl md:text-2xl lg:text-[32px] tracking-[0.3em] mt-2 font-helvetica">DÜSSELDORF</div>
                </h1>

                <p className="text-white text-sm sm:text-base md:text-lg mb-8 md:mb-10 lg:mb-6 font-light">
                  Wir begrüßen Sie auf den Seiten von Abarıs Reinigungsservice
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8 w-full pb-8 md:pb-0">
                {/* Qualität */}
                <div className="flex flex-col items-center text-center group h-full">
                  <div className="mb-2 md:mb-2 lg:mb-4 flex items-center justify-center w-10 md:w-10 lg:w-12 h-10 md:h-10 lg:h-12 rounded-full border-2 border-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:bg-opacity-10">
                    <GoNorthStar className="text-white" size={13} />
                  </div>
                  <h3 className="text-white text-lg md:text-base lg:text-2xl font-light mb-1 md:mb-1 lg:mb-4 transition-all duration-300 group-hover:scale-105">Qualität</h3>
                  <p className="text-white font-light text-xs md:text-xs lg:text-sm leading-relaxed opacity-90">
                    Wir bieten Ihnen hohe Qualität und faire Preise für einen individuell angepassten Service durch genaue Analyse Ihrer Bedürfnisse.
                  </p>
                </div>

                {/* Service */}
                <div className="flex flex-col items-center text-center group h-full">
                  <div className="mb-2 md:mb-2 lg:mb-4 flex items-center justify-center w-10 md:w-10 lg:w-12 h-10 md:h-10 lg:h-12 rounded-full border-2 border-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:bg-opacity-10">
                    <GoNorthStar className="text-white" size={13} />
                  </div>
                  <h3 className="text-white text-lg md:text-base lg:text-2xl font-light mb-1 md:mb-1 lg:mb-4 transition-all duration-300 group-hover:scale-105">Service</h3>
                  <p className="text-white font-light text-xs md:text-xs lg:text-sm leading-relaxed opacity-90">
                    Mit umfassenden Serviceleistungen von der Grundreinigung bis zur Unterhaltsreinigung und Hauswirtschaft sind wir der passende Partner für Arztpraxen, Büros, Kitas u.a.
                  </p>
                </div>

                {/* Nachhaltigkeit */}
                <div className="flex flex-col items-center text-center group h-full">
                  <div className="mb-2 md:mb-2 lg:mb-4 flex items-center justify-center w-10 md:w-10 lg:w-12 h-10 md:h-10 lg:h-12 rounded-full border-2 border-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:bg-opacity-10">
                    <GoNorthStar className="text-white" size={13} />
                  </div>
                  <h3 className="text-white text-lg md:text-base lg:text-2xl font-light mb-1 md:mb-1 lg:mb-4 transition-all duration-300 group-hover:scale-105">Nachhaltigkeit</h3>
                  <p className="text-white font-light text-xs md:text-xs lg:text-sm leading-relaxed opacity-90">
                    Der behutsame Umgang mit Ihrer Einrichtung ist für uns ebenso selbstverständlich wie die nachhaltige Verwendung der Reinigungsmittel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero
