import React, { useState } from 'react'
import { IoChevronUp } from 'react-icons/io5'

function Services() {
  const [expandedService, setExpandedService] = useState(0)

  const services = [
    {
      title: 'Abaris Cicero Service - Büroreinigung',
      description: 'Wir garantieren eine regelmäßige und bedarfsgerechte Reinigung Ihrer Büro- und Sozialräume nach einem individuell erstellten Reinigungsplan. Unser Team reinigt effektiv Ihre Sanitärbereiche und desinfiziert Türgriffe u.a. standardmäßig.\n\nEgal welchen Boden Sie haben, Teppich, Fliesen, Stein oder Parkett – Für uns kein Problem! Wir übernehmen die fachgerechte Reinigung.'
    },
    {
      title: 'Abaris Kitas Service',
      description: 'Spezialisierte Reinigungslösungen für Kindertagesstätten mit höchsten Hygienestandards. Wir sorgen für eine sichere und saubere Umgebung für die Kleinen.'
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
            <p className="text-gray-600 font-light mb-4 text-sm md:text-base">Abaris Reinigungsservice</p>
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
    </>
  )
}

export default Services
