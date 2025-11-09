import React from 'react'
import StarIcon from './StarIcon'

function Services() {
  const services = [
    {
      title: 'Büroreinigung',
      description: 'Professionelle Reinigung von Büros und Arbeitsbereichen für eine saubere und produktive Arbeitsumgebung',
      features: ['Täglich verfügbar', 'Flexible Zeiten', 'Umweltfreundlich']
    },
    {
      title: 'Praxisreinigung',
      description: 'Spezialisierte Reinigung für Arztpraxen, Zahnarztpraxen und medizinische Einrichtungen mit höchsten Hygienestandards',
      features: ['Hygienezertifiziert', 'Desinfektionen', 'Nach DIN 1964']
    },
    {
      title: 'Fensterreinigung',
      description: 'Gründliche Fenster- und Glasreinigung für innen und außen mit professionellen Mitteln',
      features: ['Alle Größen', 'Sicherheitsausrüstung', 'Schnell & gründlich']
    },
    {
      title: 'Grundreinigung',
      description: 'Intensive Reinigung von Grund auf für Neubauten, Umzüge oder Sanierungen',
      features: ['Vollständig', 'Gründlich', 'Zertifiziert']
    },
    {
      title: 'Unterhaltsreinigung',
      description: 'Regelmäßige Reinigung zur Aufrechterhaltung von Sauberkeit und Hygiene',
      features: ['Regelmäßig', 'Zuverlässig', 'Wirtschaftlich']
    },
    {
      title: 'Hauswirtschaftliche Services',
      description: 'Umfassende Hauswirtschaftsleistungen für Privatpersonen und Unternehmen',
      features: ['Flexibel einsetzbar', 'Diskret', 'Sorgfältig']
    }
  ]

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 md:mb-20">
          <div className="uppercase text-abaris-cyan text-xs sm:text-sm tracking-widest font-light mb-4">
            U N S E R E L E I S T U N G E N
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Umfassende Reinigungslösungen
          </h2>
          <p className="text-gray-600 font-light max-w-2xl mx-auto">
            Von der Büroreinigung bis zur Hauswirtschaft - wir bieten maßgeschneiderte Lösungen für Ihre individuellen Anforderungen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-abaris-cyan bg-opacity-10 mb-6">
                <StarIcon />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 font-light text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-700 font-light flex items-center">
                    <span className="w-2 h-2 bg-abaris-cyan rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
