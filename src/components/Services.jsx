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
      description: 'Die hygienischen Qualitätsstandards im Gesundheitswesen erfordern ein Maximum an Fachwissen und Sorgfalt. Krankheitserreger stellen ein ständiges Risiko dar – Professionalität und Erfahrung zeichnen uns in diesem Bereich aus.\n\nFür uns spielen hierbei die Gründlichkeit und hygienische Sauberkeit eine große Rolle Dies garantieren wir durch unsere professionell geschulten und erfahrenen MitarbeiterInnen.\n\nBei der Reinigung der Räumlichkeiten richten wir uns selbstverständlich nach Ihren Wünschen und Vorgaben.'
    },
    {
      title: 'Fensterreinigung',
      description: 'Denken Sie an Ihr tägliches Leben. Wir schauen jeden Tag durch ein Fenster, um die Dinge Zuhause oder in unserer Umgebung zu sehen. Der Blick durch das Fenster, durch die Brillengläser und sogar der Blick auf den Computermonitor oder das geliebte Smartphone. Wir sitzen in einem Glashaus! Und dieser Blick muss klar sein, sonst verfälscht er das Leben. Wir geben Ihnen den klaren Durchblick!'
    },
    {
      title: 'Grundreinigung',
      description: 'Im Zuge der professionellen Grundreinigung werden hartnäckige Verschmutzungen von Böden und Oberflächen entfernt, die bei der täglichen Oberflächen- und Sichtreinigung (meist aus zeitlichen Gründen) nicht zu meistern sind. Die Grundreinigung schließt zudem die Reinigung von schwer zugänglichen Stellen sowie ggf. die Versiegelung von Böden ein.'
    },
    {
      title: 'Haushaltsreinigung',
      description: 'Wir bieten Ihnen für gehobene Ansprüche professionelle und hygienische Unterstützung bei der Reinigung (mit Desinfektionsmitteln) Ihrer Wohnung, Ihres Hauses und Ihrer Büroräume an.\n\nIn Zeiten von COVID-19 ist Reinigung wichtiger denn je geworden. Sie sind berufstätig, haben Kinder und Familie und wissen nicht, wie Sie alles unter einen Hut bekommen! Kontaktieren Sie uns. Wir sind für Sie da und unterstützen Sie gerne mit unserer langjährigen Reinigungserfahrung. Auf uns können Sie sich verlassen und wir stellen sicher, dass wir alle Ihre Wünsche gemäß den gesetzlichen Hygiene-Anforderungen erfüllen.\n\nIhre Zeit ist kostbar. Delegieren Sie diese Aufgaben an uns und nutzen Sie Ihre Zeit für persönliche und familiäre Dinge. Schenken Sie Ihrer Familie und sich Zeit. Es gibt nichts kostbareres auf dieser Welt.\n\nBei einem persönlichen Kennenlernen können wir alle weiteren Details der Reinigung besprechen.'
    },
    {
      title: 'Reinigungsservice COVID-19',
      description: 'In Zeiten von COVID-19 ist der Reinigungsservice wichtiger denn je geworden. Viele Reinigungsmittel haben nur einen geringen Effekt gegen Viren und Bakterien, oder werden falsch angewendet.\n\nZum Beispiel muss die Dosierung von Reinigungsmitteln exakt ermittelt werden, damit sie wirken. Ein Zuviel kann den Oberflächen, der Haut oder den Atemwegen sogar schaden.\n\nAuch das Sprühen von Reinigungs- und Desinfektionsmitteln sollte noch mehr als sonst hinterfragt werden. Hierbei ist eine vollständige Reinigung der Oberfläche nicht gewährleistet, sodass in der Regel nachgewischt werden muss. Hierbei entstehen kleine Tröpfchen, die auch in die Atemwege gelangen und die Gesundheit gefährden. Das muss man insbesondere jetzt vermeiden!\n\nAbaris Reinigungsservice ist soviel mehr als nur ein Gebäudereiniger, wir sind ein Reinigungsservice, der seinen Kunden Zeit widmet.'
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
