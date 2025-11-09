import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div id="contact" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Info */}
          <div>
            <div className="uppercase text-abaris-cyan text-xs sm:text-sm tracking-widest font-light mb-4">
              K O N T A K T
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-8">
              Nehmen Sie Kontakt auf
            </h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-abaris-cyan bg-opacity-10">
                    <svg className="h-5 w-5 text-abaris-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-light text-gray-900">Telefon</h3>
                  <p className="text-gray-600 font-light mt-1">0211 / 139 548 47</p>
                  <p className="text-gray-600 font-light">0176 / 616 339 71</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-abaris-cyan bg-opacity-10">
                    <svg className="h-5 w-5 text-abaris-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-light text-gray-900">E-Mail</h3>
                  <p className="text-gray-600 font-light mt-1">info@abaris-gebaeudereinigung.de</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-abaris-cyan bg-opacity-10">
                    <svg className="h-5 w-5 text-abaris-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-light text-gray-900">Adresse</h3>
                  <p className="text-gray-600 font-light mt-1">Bonifatiusstr. 78</p>
                  <p className="text-gray-600 font-light">40547 Düsseldorf</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-abaris-cyan bg-opacity-10">
                    <svg className="h-5 w-5 text-abaris-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-light text-gray-900">Öffnungszeiten</h3>
                  <p className="text-gray-600 font-light mt-1">Mo-Fr: 08:00 - 18:00 Uhr</p>
                  <p className="text-gray-600 font-light">Sa: 08:00 - 14:00 Uhr</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 md:p-10 rounded-lg border border-gray-100">
            <h3 className="text-2xl font-light text-gray-900 mb-6">Kontaktformular</h3>

            {submitted ? (
              <div className="bg-abaris-cyan bg-opacity-10 border border-abaris-cyan rounded-lg p-6 text-center">
                <p className="text-gray-900 font-light">Vielen Dank für Ihre Nachricht!</p>
                <p className="text-gray-600 font-light text-sm mt-2">Wir werden uns in Kürze bei Ihnen melden.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-light text-gray-900 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg font-light focus:outline-none focus:border-abaris-cyan transition-colors"
                    placeholder="Ihr Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-900 mb-2">E-Mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg font-light focus:outline-none focus:border-abaris-cyan transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-900 mb-2">Telefon</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg font-light focus:outline-none focus:border-abaris-cyan transition-colors"
                    placeholder="+49 (0) 211 XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-900 mb-2">Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg font-light focus:outline-none focus:border-abaris-cyan transition-colors"
                  >
                    <option value="">Wählen Sie einen Service</option>
                    <option value="büroreinigung">Büroreinigung</option>
                    <option value="praxisreinigung">Praxisreinigung</option>
                    <option value="fensterreinigung">Fensterreinigung</option>
                    <option value="grundreinigung">Grundreinigung</option>
                    <option value="unterhaltsreinigung">Unterhaltsreinigung</option>
                    <option value="hauswirtschaft">Hauswirtschaftliche Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-900 mb-2">Nachricht</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg font-light focus:outline-none focus:border-abaris-cyan transition-colors resize-none"
                    placeholder="Ihre Nachricht..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-abaris-cyan text-white font-light py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  Nachricht senden
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
