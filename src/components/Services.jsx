import React, { useState } from 'react'
import { IoChevronUp } from 'react-icons/io5'

function Services() {
  const [expandedService, setExpandedService] = useState(0)

  const services = [
    {
      title: 'Büroreinigung',
      description: 'Wir garantieren eine regelmäßige und bedarfsgerechte Reinigung Ihrer Büro- und Sozialräume nach einem individuell erstellten Reinigungsplan. Unser Team reinigt effektiv Ihre Sanitärbereiche und desinfiziert Türgriffe u.a. standardmäßig.\n\nEgal welchen Boden Sie haben, Teppich, Fliesen, Stein oder Parkett – Für uns kein Problem! Wir übernehmen die fachgerechte Reinigung.'
    },
    {
      title: 'Praxisreinigung',
      description: 'Spezialisierte Reinigung für medizinische Praxen mit höchsten Hygienestandards. Wir kümmern uns um alle Bereiche Ihrer Praxis mit besonderer Aufmerksamkeit auf Sauberkeitserfordernisse im Gesundheitswesen.'
    },
    {
      title: 'Fensterreinigung',
      description: 'Professionelle Fensterreinigung für Ihr Büro oder Ihre Einrichtung. Mit modernen Techniken und gründlicher Arbeit sorgen wir für strahlend saubere Fenster und maximale Helligkeit in Ihren Räumen.'
    },
    {
      title: 'Grundreinigung',
      description: 'Intensive Grundreinigung von Grund auf. Wir kümmern uns um jeden Winkel und jede Oberfläche, um Ihre Räume wieder in glänzenden Zustand zu versetzen. Ideal für Neubezüge oder intensive Auffrischungen.'
    },
    {
      title: 'Haushaltsreinigung',
      description: 'Zuverlässige und gründliche Reinigung Ihres Privathaushalt. Von Böden bis zu Oberflächen – wir sorgen für ein sauberes und angenehmes Zuhause, das Sie genießen können.'
    },
    {
      title: 'Reinigungsservice COVID-19',
      description: 'Spezialisierte Desinfektionsreinigung mit modernen Verfahren. Wir bieten eine gründliche Reinigung und Desinfektion Ihrer Räume nach den aktuellen Hygienestandards und Anforderungen.'
    }
  ]

  return (
    <div className="bg-white pt-12 md:pt-20 pb-12 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="uppercase text-gray-600 text-xs sm:text-sm tracking-widest font-light mb-8 md:mb-12">
          S E R V I C E S
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Das bieten wir Ihnen
            </h2>
            <p className="text-gray-600 font-light mb-4 text-sm md:text-base">Abarıs Reinigungsservice</p>
            <p className="text-gray-700 leading-relaxed font-light text-sm md:text-base mb-4">
              Wir schreiben SERVICE groß! Wir garantieren eine Qualität mit dem Fokus auf individuelle Lösungen. Ihre Wünsche und Vorgaben setzen wir flexibel und termingerecht um.
            </p>
            <p className="text-gray-700 leading-relaxed font-light text-sm md:text-base mb-4">
              Dabei arbeiten wir als motiviertes Team gründlich und nachhaltig. Umweltschutz und Zuverlässigkeit sind für uns ebenso wichtig wie Diskretion.
            </p>
            <p className="text-gray-700 leading-relaxed font-light text-sm md:text-base">
              Gönnen Sie sich eine Auszeit! Mit dem Abaris Reinigungsservice.
            </p>
          </div>

          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index}>
                <button
                  onClick={() => setExpandedService(expandedService === index ? -1 : index)}
                  className="w-full flex items-center justify-between pb-4 md:pb-6 border-b border-gray-200 hover:border-abaris-cyan transition-colors group"
                >
                  <h3 className="text-lg md:text-xl font-light text-gray-900 text-left">
                    {service.title}
                  </h3>
                  <IoChevronUp
                    size={24}
                    className={`text-abaris-cyan flex-shrink-0 transition-transform duration-300 ${
                      expandedService === index ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
                {expandedService === index && (
                  <div className="py-4 md:py-6 border-b border-gray-200">
                    <p className="text-gray-700 leading-relaxed font-light text-sm md:text-base whitespace-pre-line">
                      {service.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
