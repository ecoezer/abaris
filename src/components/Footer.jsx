import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-white font-light text-2xl mb-4">Abaris</h3>
            <p className="font-light text-sm text-gray-400">
              Professionelle Reinigungslösungen in Düsseldorf seit Jahren.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-light text-lg mb-4">Services</h4>
            <ul className="space-y-2 font-light text-sm">
              <li><a href="#services" className="text-gray-400 hover:text-abaris-cyan transition-colors">Büroreinigung</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-abaris-cyan transition-colors">Praxisreinigung</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-abaris-cyan transition-colors">Fensterreinigung</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-abaris-cyan transition-colors">Grundreinigung</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-light text-lg mb-4">Unternehmen</h4>
            <ul className="space-y-2 font-light text-sm">
              <li><a href="#about" className="text-gray-400 hover:text-abaris-cyan transition-colors">Über uns</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-abaris-cyan transition-colors">Referenzen</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-abaris-cyan transition-colors">Kontakt</a></li>
              <li><a href="#" className="text-gray-400 hover:text-abaris-cyan transition-colors">Impressum</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-light text-lg mb-4">Kontakt</h4>
            <div className="space-y-3 font-light text-sm">
              <p className="text-gray-400">
                <a href="tel:+49211" className="hover:text-abaris-cyan transition-colors">+49 (0) 211 XXX XXXX</a>
              </p>
              <p className="text-gray-400">
                <a href="mailto:info@abaris-reinigung.de" className="hover:text-abaris-cyan transition-colors">info@abaris-reinigung.de</a>
              </p>
              <p className="text-gray-400">Düsseldorf, Deutschland</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center font-light text-sm text-gray-400">
          <p>&copy; {currentYear} Abaris Reinigungsservice. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-abaris-cyan transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-abaris-cyan transition-colors">Nutzungsbedingungen</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
