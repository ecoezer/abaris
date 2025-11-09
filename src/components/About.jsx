import React from 'react'
import StarIcon from './StarIcon'

function About() {
  const values = [
    {
      title: 'Qualität',
      description: 'Hohe Qualitätsstandards in jedem Detail unserer Arbeit'
    },
    {
      title: 'Zuverlässigkeit',
      description: 'Sie können sich auf uns verlassen - pünktlich und gewissenhaft'
    },
    {
      title: 'Nachhaltigkeit',
      description: 'Umweltbewusste Reinigungsmittel und nachhaltige Praktiken'
    },
    {
      title: 'Kundenfokus',
      description: 'Ihre Bedürfnisse stehen an erster Stelle unseres Handelns'
    }
  ]

  return (
    <div id="about" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-24">
          <div>
            <div className="uppercase text-abaris-cyan text-xs sm:text-sm tracking-widest font-light mb-4">
              Ü B E R U N S
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-6">
              Abaris Reinigungsservice Düsseldorf
            </h2>
            <p className="text-gray-700 font-light mb-6 leading-relaxed text-sm md:text-base">
              Mit jahrelanger Erfahrung in der Reinigungsbranche bieten wir professionelle Reinigungslösungen für Büros, Praxen und private Haushalte in Düsseldorf und Umgebung.
            </p>
            <p className="text-gray-600 font-light mb-8 leading-relaxed text-sm md:text-base">
              Wir schreiben SERVICE groß! Unser Team aus geschulten Profis garantiert höchste Qualität mit dem Fokus auf individuelle Lösungen für Ihre spezifischen Anforderungen.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-abaris-cyan bg-opacity-20">
                    <div className="h-2 w-2 bg-abaris-cyan rounded-full"></div>
                  </div>
                </div>
                <p className="ml-3 text-gray-700 font-light text-sm">Professionelle Reinigung seit vielen Jahren</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-abaris-cyan bg-opacity-20">
                    <div className="h-2 w-2 bg-abaris-cyan rounded-full"></div>
                  </div>
                </div>
                <p className="ml-3 text-gray-700 font-light text-sm">Geschultes und erfahrenes Team</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-abaris-cyan bg-opacity-20">
                    <div className="h-2 w-2 bg-abaris-cyan rounded-full"></div>
                  </div>
                </div>
                <p className="ml-3 text-gray-700 font-light text-sm">Umweltfreundliche und nachhaltige Praktiken</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg border border-gray-100 hover:border-abaris-cyan transition-colors">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-abaris-cyan bg-opacity-10 mb-4">
                  <StarIcon />
                </div>
                <h3 className="text-lg font-light text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 font-light text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-16 md:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/abaris-new-tinified-1-871x1024 (1).png"
                alt="Geschäftsführerin"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-gray-700 font-light mb-6 leading-relaxed text-base">
                Langjährige Erfahrung zahlt sich aus. Auf mich und mein Team ist Verlass, dass garantiere ich Ihnen!
              </p>
              <p className="text-gray-700 font-light mb-6 leading-relaxed text-base">
                Der Name meines Reinigungsservice leitet sich aus dem griechischen „Abaris Hyperdoros", zu Deutsch „Abaris Hyperboreer" ab. Dieser war laut Überlieferung um das 7. oder 6. Jahrhundert vor Christus ein legendärer Heiler und Reinigungspriester sowie ein großer Verehrer des Gottes Apollon.
              </p>
              <p className="text-gray-700 font-light mb-6 leading-relaxed text-base">
                Die zufällige Anlehnung meines Namens, A(yseqül) Baris an den Namen des mythologischen Wunderheilers und Reinigers inspirierte mich dazu, meinen Reinigungsservice in Anlehnung an ihn zu benennen.
              </p>
              <p className="text-gray-700 font-light mb-6 leading-relaxed text-base">
                Ich kann zwar nicht heilen, doch können Sie mich gerne mit der Reinigung Ihrer Büros, Praxen, Ladenlokale, Kitas etc. beauftragen.
              </p>
              <p className="text-gray-700 font-light mb-6 leading-relaxed text-base">
                Ich habe Jahre für ein internationales Unternehmen im Bereich BIO-Cotton-Produkte wie Textilien gearbeitet und war dabei für die Organisation und Präsentation von Messen verantwortlich. Dabei legte ich besonderes Augenmerk auf Sorgfalt und Qualität in jeglicher Hinsicht.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
