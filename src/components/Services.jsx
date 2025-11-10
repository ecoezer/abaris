import React, { useState } from 'react'
import { IoChevronUp } from 'react-icons/io5'

function Services() {
  const [expandedService, setExpandedService] = useState(0)

  const services = [
    {
      title: 'Abaris Cicero Service - Büroreinigung',
      description: 'Wo Raum und Seele im Gleichklang sind\nUnsere Umgebung hat einen starken Einfluss auf unsere Stimmung und Leistungsfähigkeit.\nEin sauberer, gepflegter Raum schafft Ruhe, Klarheit und positive Energie.\nGerade im Büro, wo wir oft mehr Zeit verbringen als zu Hause, ist eine saubere Umgebung der Schlüssel für konzentriertes und harmonisches Arbeiten.\nEin hygienisches und ordentliches Büro fördert nicht nur die Produktivität, sondern auch das innere Gleichgewicht.\nDenn Sauberkeit bedeutet mehr als Ordnung – sie schenkt Leichtigkeit für Körper, Geist und Seele. Wo Raum und Seele im Gleichklang sind.'
    },
    {
      title: 'Abaris Kitas Service',
      description: 'Abaris Kitas – Kleine Hände, Große Entdeckungen!\nWir denken auch an die Sauberkeit der Orte,\nan denen unsere Kinder den größten Teil ihres Tages verbringen.\nSauberkeit ist für uns ein Lebensstil –\ndenn ein reines, gepflegtes Umfeld stärkt die Energie,\nfördert das Wohlbefinden und inspiriert zu positiver Entwicklung weil echte Sauberkeit wachsen lässt.'
    },
    {
      title: 'Abaris Hypatia Service - Praxisreinigung',
      description: 'Die hygienischen Qualitätsstandards im Gesundheitswesen erfordern ein Maximum an Fachwissen und Sorgfalt. Krankheitserreger stellen ein ständiges Risiko dar – Professionalität und Erfahrung zeichnen uns in diesem Bereich aus.\n\nFür uns spielen hierbei die Gründlichkeit und hygienische Sauberkeit eine große Rolle Dies garantieren wir durch unsere professionell geschulten und erfahrenen MitarbeiterInnen.\n\nBei der Reinigung der Räumlichkeiten richten wir uns selbstverständlich nach Ihren Wünschen und Vorgaben.'
    },
    {
      title: 'Abaris Pro Service',
      description: 'Professionelle Reinigungslösungen für gewerbliche und industrielle Einrichtungen. Maßgeschneiderte Konzepte für Ihre individuellen Anforderungen.'
    },
    {
      title: 'Abaris Atlas Service',
      description: 'Umfassende Reinigungsdienstleistungen für große Gebäudekomplexe und Bürozentren. Zuverlässig, effizient und termingerecht.'
    },
    {
      title: 'Abaris Helios Service',
      description: 'Denken Sie an Ihr tägliches Leben. Wir schauen jeden Tag durch ein Fenster, um die Dinge Zuhause oder in unserer Umgebung zu sehen. Der Blick durch das Fenster, durch die Brillengläser und sogar der Blick auf den Computermonitor oder das geliebte Smartphone. Wir sitzen in einem Glashaus! Und dieser Blick muss klar sein, sonst verfälscht er das Leben. Wir geben Ihnen den klaren Durchblick!'
    },
    {
      title: 'Abaris Hygiene Plus',
      description: 'In Zeiten erhöhter Hygieneanforderungen ist unser Service wichtiger denn je. Viele Reinigungsmittel haben nur einen geringen Effekt gegen Viren und Bakterien, oder werden falsch angewendet.\n\nZum Beispiel muss die Dosierung von Reinigungsmitteln exakt ermittelt werden, damit sie wirken. Ein Zuviel kann den Oberflächen, der Haut oder den Atemwegen sogar schaden.\n\nAbaris Reinigungsservice ist soviel mehr als nur ein Gebäudereiniger, wir sind ein Reinigungsservice, der seinen Kunden Zeit widmet.'
    },
    {
      title: 'Abaris Aqua Service',
      description: 'Spezialisierte Reinigungslösungen für Wasseraufbereitungsanlagen, Pools und Wassersysteme. Höchste Standards für Wasserhygiene und Sauberkeit.'
    },
    {
      title: 'Abaris Demeter Service',
      description: 'Professionelle Reinigung für landwirtschaftliche Betriebe und Außenanlagen. Nachhaltige und umweltfreundliche Lösungen für ländliche Räume.'
    }
  ]

  return (
    <>
    <div id="services" className="bg-white pt-12 md:pt-20 pb-12 md:pb-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="uppercase text-gray-600 text-xs sm:text-sm tracking-widest font-light mb-8 md:mb-12">
          S E R V I C E S
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Das bieten wir Ihnen
            </h2>
            <p className="text-gray-600 font-light mb-4 text-sm md:text-base">Abaris Reinigungsservice – Sauberkeit, die Energie schenkt</p>
            <p className="text-gray-700 leading-relaxed font-light text-sm md:text-base mb-4">
              Bei Abaris Reinigungsservice sind wir überzeugt: Ein sauberer Raum verändert nicht nur die Atmosphäre, sondern auch den Menschen selbst.
            </p>
            <p className="text-gray-700 leading-relaxed font-light text-sm md:text-base mb-4">
              Unsere Leistungen gehen über klassische Reinigung hinaus – wir schaffen Hygiene, Leichtigkeit und ein Gefühl von Klarheit. Echte Sauberkeit bringt Motivation, Lebensfreude und fördert die innere Balance.
            </p>
            <p className="text-gray-700 leading-relaxed font-light text-sm md:text-base mb-4">
              Ruhe kehrt dort ein, wo äußere und innere Ordnung harmonieren. Denn die Reinheit unserer Umgebung beeinflusst maßgeblich das Wohlbefinden unserer Seele.
            </p>
            <p className="text-gray-700 leading-relaxed font-light text-sm md:text-base">
              Abaris – Reinigung trifft Seele.
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
    </>
  )
}

export default Services
