import React, { useState } from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()
  const [showImpressum, setShowImpressum] = useState(false)

  return (
    <>
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
                <li>
                  <button
                    onClick={() => setShowImpressum(true)}
                    className="text-gray-400 hover:text-abaris-cyan transition-colors"
                  >
                    Impressum
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-light text-lg mb-4">Kontakt</h4>
              <div className="space-y-3 font-light text-sm">
                <p className="text-gray-400">
                  <a href="tel:+492111395487" className="hover:text-abaris-cyan transition-colors">0211 / 139 548 47</a>
                </p>
                <p className="text-gray-400">
                  <a href="mailto:info@abaris-gebaeudereinigung.de" className="hover:text-abaris-cyan transition-colors">info@abaris-gebaeudereinigung.de</a>
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

      {/* Impressum Modal */}
      {showImpressum && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-light text-gray-900">Impressum</h2>
              <button
                onClick={() => setShowImpressum(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="px-6 py-8 space-y-6 font-light text-gray-700">
              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Angaben gemäß § 5 TMG</h3>
                <p className="mb-1">Abaris Reinigungs-Service GmbH</p>
                <p className="mb-1">diese vertr. d. d. Geschäftsführerin A. Baris Kolbasi,</p>
                <p className="mb-1">Bonifatiusstraße 78, 40547 Düsseldorf Deutschland</p>
                <p className="mb-1">Telefon: 0211 / 139 548 47</p>
                <p className="mb-1">E-Mail: info@abaris-gebaeudereinigung.de</p>
                <p className="mb-1">Ust-IdNr.: DE 5103/5119/4373</p>
                <p className="mb-1">eingetragen im Handelsregister des Amtsgerichtes Düsseldorf</p>
                <p>Handelsregisternummer HRB 103692</p>
              </div>

              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Kontakt</h3>
                <p className="mb-1">Telefon: 0211 139 548 47</p>
                <p>E-Mail: info@abaris-gebaeudereinigung.de</p>
              </div>

              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                <p className="mb-1">A. Baris Kolbasi</p>
                <p className="mb-1">Bonifatiusstraße 78</p>
                <p>40547 Düsseldorf</p>
              </div>

              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Haftung für Inhalte</h3>
                <p className="mb-4">
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Haftung für Links</h3>
                <p className="mb-4">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
                <p>
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Urheberrecht</h3>
                <p className="mb-4">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
                <p className="mb-4">
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
                <p className="text-sm text-gray-500">
                  Quelle: <a href="https://www.e-recht24.de/impressum-generator.html" target="_blank" rel="noopener noreferrer" className="text-abaris-cyan hover:underline">https://www.e-recht24.de/impressum-generator.html</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Footer
