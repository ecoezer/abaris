import React from 'react'
import StarIcon from './StarIcon'

function About() {
  return (
    <>
    <div id="about" className="bg-white py-8 md:py-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div className="w-full flex justify-center">
            <div className="w-3/5 rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '300/470' }}>
              <img
                src="/owner_new.jpg"
                alt="Ayseqül Baris - Abaris Reinigungsservice"
                className="w-full h-full object-contain bg-white"
              />
            </div>
          </div>

          <div className="w-full">
            <p className="text-gray-900 font-light text-lg md:text-xl leading-relaxed mb-8">
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

            <p className="text-gray-700 font-light leading-relaxed text-base">
              Ich habe Jahre für ein internationales Unternehmen im Bereich BIO-Cotton-Produkte wie Textilien gearbeitet und war dabei für die Organisation und Präsentation von Messen verantwortlich. Dabei legte ich besonderes Augenmerk auf Sorgfalt und Qualität in jeglicher Hinsicht.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
