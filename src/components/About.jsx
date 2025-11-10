import React from 'react'
import StarIcon from './StarIcon'

function About() {
  return (
    <>
    <div id="about" className="bg-white py-8 md:py-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div className="w-full flex justify-center">
            <div className="w-3/5 rounded-3xl overflow-hidden" style={{ aspectRatio: '300/470' }}>
              <img
                src="/owner.jpg"
                alt="Ayseqül Baris - Abaris Reinigungsservice"
                className="w-full h-full object-contain bg-white"
              />
            </div>
          </div>

          <div className="w-full">
            <h2 className="text-gray-900 font-light text-lg md:text-xl leading-relaxed mb-8">
              Abaris Reinigungsservice – Sauberkeit, die Energie schenkt
            </h2>

            <p className="text-gray-700 font-light mb-6 leading-relaxed text-base">
              Bei Abaris Reinigungsservice sind wir überzeugt: Ein sauberer Raum verändert nicht nur die Atmosphäre, sondern auch den Menschen selbst.
            </p>

            <p className="text-gray-700 font-light mb-6 leading-relaxed text-base">
              Unsere Leistungen gehen über klassische Reinigung hinaus – wir schaffen Hygiene, Leichtigkeit und ein Gefühl von Klarheit. Echte Sauberkeit bringt Motivation, Lebensfreude und fördert die innere Balance.
            </p>

            <p className="text-gray-700 font-light mb-6 leading-relaxed text-base">
              Ruhe kehrt dort ein, wo äußere und innere Ordnung harmonieren. Denn die Reinheit unserer Umgebung beeinflusst maßgeblich das Wohlbefinden unserer Seele.
            </p>

            <p className="text-gray-700 font-light leading-relaxed text-base">
              Abaris – Reinigung trifft Seele.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
