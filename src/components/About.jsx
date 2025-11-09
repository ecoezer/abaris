import React from 'react'
import StarIcon from './StarIcon'

function About() {
  return (
    <div id="about" className="bg-[#ede8dd] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-12 md:gap-20">
          <div className="w-full max-w-md mx-0">
            <div className="w-full aspect-square bg-gray-300 rounded flex items-center justify-center">
              <span className="text-gray-500 text-center">
                <p className="text-sm">Placeholder</p>
                <p className="text-xs">Women Photo</p>
              </span>
            </div>
          </div>

          <div className="w-full">
            <p className="text-gray-900 font-light text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Langjährige Erfahrung zahlt sich aus. Auf mich und mein Team ist Verlass, dass garantiere ich Ihnen!
            </p>

            <p className="text-gray-700 font-light mb-6 leading-relaxed text-base max-w-2xl">
              Der Name meines Reinigungsservice leitet sich aus dem griechischen „Abaris Hyperdoros", zu Deutsch „Abaris Hyperboreer" ab. Dieser war laut Überlieferung um das 7. oder 6. Jahrhundert vor Christus ein legendärer Heiler und Reinigungspriester sowie ein großer Verehrer des Gottes Apollon.
            </p>

            <p className="text-gray-700 font-light mb-6 leading-relaxed text-base max-w-2xl">
              Die zufällige Anlehnung meines Namens, A(yseqül) Baris an den Namen des mythologischen Wunderheilers und Reinigers inspirierte mich dazu, meinen Reinigungsservice in Anlehnung an ihn zu benennen.
            </p>

            <p className="text-gray-700 font-light mb-6 leading-relaxed text-base max-w-2xl">
              Ich kann zwar nicht heilen, doch können Sie mich gerne mit der Reinigung Ihrer Büros, Praxen, Ladenlokale, Kitas etc. beauftragen.
            </p>

            <p className="text-gray-700 font-light leading-relaxed text-base max-w-2xl">
              Ich habe Jahre für ein internationales Unternehmen im Bereich BIO-Cotton-Produkte wie Textilien gearbeitet und war dabei für die Organisation und Präsentation von Messen verantwortlich. Dabei legte ich besonderes Augenmerk auf Sorgfalt und Qualität in jeglicher Hinsicht.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
