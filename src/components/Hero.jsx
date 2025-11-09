import React from 'react'
import { GoNorthStar } from 'react-icons/go'

function Hero() {
  return (
    <div id="hero" className="relative bg-white">
      {/* Hero Section */}
      <div className="relative bg-abaris-cyan overflow-hidden">
        <div className="w-full px-2 md:px-3 pt-20 md:pt-24 pb-0" style={{minHeight: 'calc(100vh - 100px)', height: 'calc(100vh - 100px)'}}>
          <div className="flex gap-0 h-full items-stretch">
            {/* Left side - Image */}
            <div className="relative w-1/3 flex flex-col items-start overflow-visible -ml-2 md:-ml-3">
              {/* Image */}
              <div className="relative z-10 w-full h-full flex items-end justify-start">
                <img
                  src="/abaris.png"
                  alt="Abaris Cleaning Professional"
                  className="w-auto h-full max-w-full object-contain object-bottom"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="w-2/3 pt-1 md:pt-2 lg:pt-0 px-2 md:px-3 flex flex-col justify-start items-center">
              <div className="text-center w-full">
                <h1 className="text-white font-bold mb-2 md:mb-2 flex flex-col items-center">
                  <div className="relative text-5xl sm:text-7xl md:text-8xl lg:text-[150px] leading-none tracking-wide inline-block font-black">
                    Abar
                    <span className="relative inline-block">
                      ı
                      <img src="/star copy.png" alt="star" className="absolute hidden md:block lg:block" style={{ top: '-15%', left: '50%', transform: 'translateX(-50%)', width: '200px', height: 'auto' }} />
                    </span>
                    s
                  </div>
                  <div className="text-xl sm:text-3xl md:text-3xl lg:text-[46px] tracking-[0.3em] mt-1 font-bold font-helvetica">DÜSSELDORF</div>
                </h1>

                <p className="text-white text-sm sm:text-base md:text-lg mb-3 md:mb-4 lg:mb-2 font-light">
                  Abaris steht für Perfektion bis ins Detail –<br />für Sauberkeit, die Vertrauen schafft<br />und Eleganz, die bleibt.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-3 w-full pb-3 md:pb-0 pt-6 md:pt-8">
                {/* Qualität */}
                <div className="flex flex-col items-center text-center group h-full">
                  <div className="mb-1 md:mb-1 lg:mb-2 flex items-center justify-center w-10 md:w-10 lg:w-12 h-10 md:h-10 lg:h-12 rounded-full border-2 border-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:bg-opacity-10">
                    <GoNorthStar className="text-white" size={13} />
                  </div>
                  <h3 className="text-white text-lg md:text-base lg:text-2xl font-light mb-1 md:mb-1 lg:mb-2 transition-all duration-300 group-hover:scale-105">Qualität</h3>
                  <p className="text-white font-light text-xs md:text-xs lg:text-sm leading-relaxed opacity-90">
                    Abaris steht für Perfektion bis ins Detail –
für Sauberkeit, die Vertrauen schafft
und Eleganz, die bleibt.
                  </p>
                </div>

                {/* Service */}
                <div className="flex flex-col items-center text-center group h-full">
                  <div className="mb-1 md:mb-1 lg:mb-2 flex items-center justify-center w-10 md:w-10 lg:w-12 h-10 md:h-10 lg:h-12 rounded-full border-2 border-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:bg-opacity-10">
                    <GoNorthStar className="text-white" size={13} />
                  </div>
                  <h3 className="text-white text-lg md:text-base lg:text-2xl font-light mb-1 md:mb-1 lg:mb-2 transition-all duration-300 group-hover:scale-105">Abaris Service – Sauberkeit mit System</h3>
                  <p className="text-white font-light text-xs md:text-xs lg:text-sm leading-relaxed opacity-90">
                    Von Praxen bis Büros: Wir reinigen mit Präzision, Stil und Vertrauen.
                  </p>
                </div>

                {/* Nachhaltigkeit */}
                <div className="flex flex-col items-center text-center group h-full">
                  <div className="mb-1 md:mb-1 lg:mb-2 flex items-center justify-center w-10 md:w-10 lg:w-12 h-10 md:h-10 lg:h-12 rounded-full border-2 border-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:bg-opacity-20">
                    <GoNorthStar className="text-orange-500" size={13} />
                  </div>
                  <h3 className="text-white text-lg md:text-base lg:text-2xl font-light mb-1 md:mb-1 lg:mb-2 transition-all duration-300 group-hover:scale-105">Abaris Nachhaltigkeit – Sauberkeit mit Verantwortung</h3>
                  <p className="text-white font-light text-xs md:text-xs lg:text-sm leading-relaxed opacity-90">
                    Schonend für Ihre Räume. Schonend für unsere Umwelt.
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
