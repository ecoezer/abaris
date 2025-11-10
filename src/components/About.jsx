import React from 'react'
import StarIcon from './StarIcon'

function About() {
  return (
    <>
    <div id="about" className="bg-white py-8 md:py-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div className="w-full flex justify-center">
            <div className="w-3/5 rounded-full overflow-hidden" style={{ aspectRatio: '300/470' }}>
              <img
                src="/owner.jpg"
                alt="Ayseqül Baris - Abaris Reinigungsservice"
                className="w-full h-full object-contain bg-white"
              />
            </div>
          </div>

          <div className="w-full">
            <h2 className="text-gray-900 font-light text-lg md:text-xl leading-relaxed mb-8">
              Über Uns
            </h2>

            <p className="text-gray-700 font-light mb-6 leading-relaxed text-base">
              Aysegül Baris Kolbasi, die Gründerin von Abaris Reinigungsservice, sammelte über mehrere Jahre hinweg wertvolle Erfahrungen in einem internationalen Unternehmen für Bio-Baumwolltextilien.
            </p>

            <p className="text-gray-700 font-light mb-6 leading-relaxed text-base">
              Dort war sie verantwortlich für die Organisation und Gestaltung von Messeauftritten – eine Aufgabe, die ein hohes Maß an Präzision, ästhetischem Feingefühl und Liebe zum Detail verlangte.
            </p>

            <p className="text-gray-700 font-light mb-6 leading-relaxed text-base">
              Diese Fähigkeiten prägen ihre heutige Arbeit maßgeblich: Jeder Auftrag bei Abaris basiert auf Achtsamkeit, Sinn für Schönheit und absoluter Zuverlässigkeit – Werte, die sie seit Beginn ihres beruflichen Weges verkörpert.
            </p>

            <p className="text-gray-700 font-light leading-relaxed text-base">
              „Sauberkeit ist für mich mehr als Routine – sie ist eine Form von Respekt."
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
