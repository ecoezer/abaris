import React from 'react'

function Testimonials() {
  const testimonials = [
    {
      name: 'Dr. Schmidt',
      company: 'Zahnarztpraxis Schmidt',
      text: 'Abaris hat unsere Praxis komplett transformiert. Die Reinigungsqualität ist hervorragend und das Team ist sehr zuverlässig. Wir sind sehr zufrieden!',
      rating: 5
    },
    {
      name: 'Anna Müller',
      company: 'Müller & Co. Versicherungen',
      text: 'Professionelle Reinigung, freundliches Team und faire Preise. Wir arbeiten seit 2 Jahren mit Abaris zusammen und sind sehr zufrieden.',
      rating: 5
    },
    {
      name: 'Thomas Weber',
      company: 'Architekturbüro Weber',
      text: 'Das Team ist pünktlich, gründlich und sehr diskret. Sie respektieren unsere Arbeitszeiten und reinigen unsere Büros perfekt.',
      rating: 5
    },
    {
      name: 'Maria Hoffmann',
      company: 'Privatperson',
      text: 'Endlich jemand, dem ich meine Wohnung anvertrauen kann! Abaris macht großartige Arbeit und der Service ist unschlagbar.',
      rating: 5
    }
  ]

  return (
    <>
    <div id="testimonials" className="bg-gray-50 py-16 md:py-24 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 md:mb-20">
          <div className="uppercase text-abaris-cyan text-xs sm:text-sm tracking-widest font-light mb-4">
            Z U F R I E D E N E K U N D E N
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900">
            Was unsere Kunden sagen
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-abaris-cyan fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 font-light mb-6 text-sm md:text-base leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-light text-gray-900 text-sm">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 font-light text-xs md:text-sm">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Testimonials
