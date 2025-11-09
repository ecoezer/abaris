import React, { useState } from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()
  const [showImpressum, setShowImpressum] = useState(false)
  const [showDatenschutz, setShowDatenschutz] = useState(false)

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
              <button
                onClick={() => setShowDatenschutz(true)}
                className="hover:text-abaris-cyan transition-colors"
              >
                Datenschutz
              </button>
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

      {/* Datenschutz Modal */}
      {showDatenschutz && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-light text-gray-900">Datenschutzerklärung</h2>
              <button
                onClick={() => setShowDatenschutz(false)}
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
                <h3 className="text-lg font-normal text-gray-900 mb-2">Haftung für Inhalte</h3>
                <p className="mb-4">
                  Die Erstellung der Inhalte dieser Webseite erfolgte mit größtmöglicher Sorgfalt. Allerdings können wir keine Gewähr für die Vollständigkeit der bereitgestellten Inhalte, ihre Aktualität sowie Richtigkeit übernehmen. Gem. §§ 8 – 10 TMG trifft uns als Dienstanbieter keine Pflicht, fremde Informationen, die übermittelt oder gespeichert wurden, zu überwachen oder nach Anhaltspunkten und Umständen zu forschen, die die Rechtswidrigkeit von Tätigkeiten und Informationen indizieren.
                </p>
                <p className="mb-4">
                  Eine Verpflichtung unsererseits zur Nutzungssperrung von Inhalten im Rahmen der allgemeinen Gesetze bleibt hiervon stets unberührt. Diese Haftung kommt jedoch erst im Moment der Kenntnisnahme einer konkreten Verletzung von Rechten in Frage. Sollten uns Rechtsverletzungen bekannt werden, so sind die entsprechenden Inhalte von uns unverzüglich zu entfernen.
                </p>
                <p>
                  Unsere Haftung für eigene Inhalte richtet sich, als Dienstanbieter, nach den allgemeinen Gesetzen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Haftung für Links</h3>
                <p className="mb-4">
                  Diese Webseite beinhaltet Verlinkungen zu Webseiten Dritter – sog. externe Links. Die Inhalte dieser externen Links entziehen sich unserer Einflussnahme, sodass eine Gewähr für solche Inhalte unsererseits nicht übernommen wird.
                </p>
                <p className="mb-4">
                  Die Verantwortung liegt stets beim jeweiligen Betreiber der externen Seiten. Zum Zeitpunkt der Verknüpfung der externen Links waren keine Rechtsverstöße ersichtlich. Die permanente Überwachung fremder Inhalte auf Rechtsverstöße ohne konkrete Hinweise ist uns nicht zumutbar.
                </p>
                <p>
                  Sollten wir Kenntnis von Rechtsverletzungen erlangen, werden wir die entsprechenden externen Links unverzüglich entfernen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Urheberrecht/Leistungsschutzrecht</h3>
                <p className="mb-4">
                  Auf die vom Anbieter auf dieser Seite veröffentlichten Inhalte findet das deutsche Urheber und Leistungsschutzrecht Anwendung. Sofern die Vervielfältigung, Bearbeitung, Verbreitung oder jegliche andere Art der Verwertung außerhalb des deutschen Urheber- und Leistungsschutzrechts liegt, bedarf es einer schriftlichen Zustimmung des jeweiligen Erstellers. Unerlaubtes Kopieren oder Downloaden dieser Seiten ist ausschließlich für den privaten Bereich, nicht jedoch für den kommerziellen, erlaubt. Sofern nicht wir als Betreiber auch als Ersteller der Inhalte fungieren, werden die Urheberrechte von Dritten beachtet. Wir sind stets bemüht solche Inhalte als Inhalte Dritter zu kennzeichnen. Wir bitten Sie für den Fall, dass Ihnen trotz sorgfältiger Arbeit unsererseits, eine Urheberrechtsverletzung auffällt, uns entsprechend darauf hinzuweisen, sodass die Entfernung dieser Inhalte umgehend veranlasst werden kann.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Datenschutzerklärung</h3>
                <p className="mb-4 font-medium">Vorwort</p>
                <p className="mb-4">
                  Die Betreiber dieser Webseite nehmen den Schutz der privaten Daten ernst. Die besondere Beachtung der Privatsphäre bei der Verarbeitung persönlicher Daten ist ein wichtiges Anliegen.
                </p>
                <p className="mb-4">
                  Persönliche Daten werden gemäß den Bestimmungen des Bundesdatenschutzgesetzes BDSG verwendet. Die Betreiber dieser Website verpflichten sich zur Verschwiegenheit.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Datenschutz</h3>
                <p className="mb-4">
                  Die Nutzung dieser Webseite ist regelmäßig ohne Angabe personenbezogener Daten möglich. Sollten solche personenbezogenen Daten auf dieser Webseite dennoch erhoben werden, so erfolgt dies in Form einer freiwilligen Datenangabe durch den Nutzer. Eine Weitergabe der personenbezogenen Daten an Dritte erfolgt nicht, sofern keine ausdrückliche Zustimmung des Nutzers abgegeben wurde.
                </p>
                <p className="mb-4">
                  Sofern auf unseren Webseiten personenbezogene Daten erhoben werden, vollzieht sich die Erhebung dieser Daten stets im Rahmen der Bestimmung des Datenschutzrechtes der Bundesrepublik Deutschland. Sofern personenbezogene Daten erhoben werden, können Sie dieser Datenschutzerklärung die Art, den Umfang und den Zweck der Erhebung und Verwendung personenbezogener Daten entnehmen.
                </p>
                <p>
                  Bitte beachten Sie, dass trotz größter Sorgfalt die Datenübertragung im Internet stets mit Risiken, die auf Sicherheitslücken basieren, verbunden ist. Der uneingeschränkte Schutz von Daten ist daher unmöglich.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Datenübermittlung</h3>
                <p className="mb-4">
                  Bei einem Zugriff Ihrerseits auf unsere Webseiten erfolgt eine automatische Datenübermittlung von Ihrem Browser an unseren Webserver. Gegenstand dieser Übermittlung sind anonymisierte Zugriffsdaten ohne Personenbezug, wie etwa Datum und Uhrzeit, Browsertyp, Menge und Art der abgerufenen Daten sowie Ihre IP-Adresse. Die Speicherung dieser Daten geschieht getrennt von etwaigen anderen, im Rahmen der Nutzung unserer Webseiten durch Sie, erhobenen Daten. Diese Daten können nicht dazu verwendet werden eine konkrete Person zu bestimmen. Die Erhebung dieser Daten findet lediglich zur Protokollierung des Benutzerverhaltens und zu statistischen Zwecken statt. Nach einer entsprechenden Auswertung wird eine Löschung der Daten veranlasst.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Cookies</h3>
                <p className="mb-4">
                  Diese Webseite nutzt sogenannte Cookies zur Qualitätssicherung. Cookies sind kleine Textdateien, die Ihr Internet-Browser auf Ihrem Rechner ablegt und speichert. Sie dienen dazu, unseren Internetauftritt und unsere Angebote zu optimieren. Teilweise geben diese Cookies jedoch Informationen ab, um Sie automatisch wieder zu erkennen. Diese Wiedererkennung erfolgt aufgrund der in den Cookies gespeicherten IP-Adresse. Die so erlangten Informationen dienen dazu, unsere Angebote zu optimieren und Ihnen einen leichteren Zugang auf unsere Seite zu ermöglichen.
                </p>
                <p>
                  Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihres Browsers verhindern. Wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen unserer Website vollumfänglich nutzen können. Ein Cookie ist kein Programm, Cookie ist ein Text und kann nicht als Virus verwendet werden.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Nutzungsdaten</h3>
                <p className="mb-4">
                  Soweit erforderlich, erheben und verwenden wir sog. Nutzungsdaten von Ihnen. Dabei handelt es sich um personenbezogene Daten, die die Inanspruchnahme unseres Internetangebots sowie die Abrechnung ermöglichen. Dabei werden Daten erfasst, die sowohl die zeitlichen Kriterien der Nutzung unseres Angebots durch Sie enthalten, als auch den Umfang der Nutzung und Ihre Identifikationsmerkmale.
                </p>
                <p>
                  Wir weisen Sie darauf hin, dass es uns zu Werbezwecken, zu Zwecken der Marktforschung sowie zur Gestaltung unseres Internetangebots gestattet ist, Nutzungsprofile d.h. zusammengestellte Daten über den Verlauf von Besuchen auf unseren Seiten zu generieren. Diese Nutzungsprofile geben keinen Aufschluss über Ihre Person und werden auch nicht mit etwaigen anderen, von uns erhobenen Daten, zusammengeführt, sodass auch eine Personenidentifikation durch das Zusammenführen verschiedener Daten nicht erfolgen kann. Sie haben jederzeit das Recht, einer solchen Verwendung Ihrer Daten zu widersprechen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Datenschutzerklärung für die Nutzung von Facebook-Plugins (Like-Button)</h3>
                <p className="mb-4">
                  Auf unseren Seiten sind Plugins des sozialen Netzwerks Facebook, 1601 South California Avenue, Palo Alto, CA 94304, USA integriert. Diese erkennen Sie an dem Facebook-Logo oder dem "Like-Button" ("Gefällt mir") auf unserer Seite. Eine Übersicht über mögliche Facebook-Plugins finden Sie unter folgendem Link: <a href="http://developers.facebook.com/docs/plugins/" target="_blank" rel="noopener noreferrer" className="text-abaris-cyan hover:underline">http://developers.facebook.com/docs/plugins/</a>. Aufgrund dieser Facebook-Plugins (Like-Button) wird eine direkte Verbindung zwischen Ihrem Browser und dem Facebook-Server hergestellt, falls Sie unsere Seiten besuchen. Durch Ihren Besuch erhält Facebook Informationen, dass Sie mit Ihrer IP-Adresse unsere Seiten besucht haben. Klicken Sie nun auf den Facebook „Like-Button" (Gefällt mir) auf unserer Seiten während Sie zeitgleich in Ihrem Facebook-Account angemeldet sind, werden die Inhalte unserer Seiten auf Ihrem Facebook-Profil verlinkt. Folglich kann Facebook Ihren Besuch auf unserer Seite zu Ihrem Benutzerkonto zuordnen. Wir, als Diensteanbieter, weisen darauf hin, dass wir als Webseiten-Anbieter keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Facebook erhalten. Daher verweisen wir zur Erlangung weiterer Informationen bezüglich der Datenschutzerklärung von Facebook auf folgenden Link: <a href="http://de-de.facebook.com/policy.php" target="_blank" rel="noopener noreferrer" className="text-abaris-cyan hover:underline">http://de-de.facebook.com/policy.php</a>. Ist es von Ihnen nicht gewünscht, dass Facebook Ihren Aufenthalt auf unserer Webseite auf Ihren Facebook-Nutzerkonto zuordnet, bitten wir Sie, bei Ihrem Aufenthalt auf unserer Webseite, sich aus Ihrem Facebook-Benutzerkonto abzumelden.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Datenschutzerklärung für die Nutzung von Google +1</h3>
                <p className="mb-4">
                  Erfassung und Weitergabe von Informationen: Mit Google +1 können Informationen weltweit veröffentlich werden. Anhand der Google +1 – Schaltfläche können Sie und andere Nutzer/Nutzerinnen personalisierte Inhalte von Google und unseren Partnern erhalten.
                </p>
                <p className="mb-4">
                  Dabei werden von Google Informationen gespeichert:
                </p>
                <p className="mb-2">1. wenn Sie für einen Inhalt +1 gegeben haben und</p>
                <p className="mb-4">2. wenn Sie sich Informationen über die Seite beim Klicken auf +1 angesehen haben</p>
                <p className="mb-4">
                  Mit Ihrem Profilnamen und Ihrem Foto können auch Ihre Google +1 Hinweise in Google-Diensten, in Ihren Suchergebnissen, auf anderen Webseiten im Internet angezeigt werden. Durch Ihre +1 Aktivitäten, kann Google Informationen zusammen stellen, um die Google Dienste für Sie zu verbessern. Damit Sie die Google +1 Schaltfläche benutzen können, müssen Sie ein weltweit sichtbares, öffentliches Google-Profil haben. Ihr Google-Profil besitzt dabei einen Namen, womit Sie in allen Google-Diensten erscheinen, die wiederum Ihre gesamten Aktivitäten in Ihrem Profil darstellen. Darüber hinaus können Nutzer/Nutzerinnen, die ebenfalls bei Google angemeldet (ein Profil besitzen) sind und Ihre E-Mail Adresse kennen oder über andere identifizierende Informationen von Ihnen besitzen, Ihr Profil sehen. Verwendung der erfassten Informationen: Abgesehen von den oben angeführten Verwendungszwecken sind die von Ihnen bereit gestellten Informationen gem. den geltenden Google-Datenschutzbestimmungen zu verwenden. Es kann die Möglichkeit bestehen, dass Google zusammen gefasste Statistiken über die Google +1 Aktivitäten der Nutzer/Nutzerinnen veröffentlichen. Auch kann die Möglichkeit bestehen, dass Google die Informationen an Nutzer/Nutzerinnen und Partner/Partnerinnen weitergeben kann (z.B. Publisher, Inserenten oder verbunden Webseiten).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Datenschutzerklärung für XING</h3>
                <p className="mb-4">
                  Unsere Seite verwendet den „XING Share Button". Wenn Sie diese Seite aufrufen, wird über den Browser des Nutzers kurzfristig eine Verbindung zu Servern der XING AG aufgebaut, mit denen die Funktionen des Buttons, unter anderem die Anzeige des Zählwerts, geleistet werden. XING speichert keine personenbezogenen Daten des Nutzers über den Besuch der Seite, insbesondere wird keine IP-Adresse gespeichert. Eine Auswertung des Nutzungsverhaltens über Cookies im Zusammenhang mit dem „XING Share Button" findet nicht statt. Die jeweils gültigen Datenschutzinformationen zum „XING Share Button" und weitere Informationen finden Sie auf der Internetseite: <a href="https://www.xing.com/app/share?op=data_protection" target="_blank" rel="noopener noreferrer" className="text-abaris-cyan hover:underline">https://www.xing.com/app/share?op=data_protection</a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Datenschutzerklärung für die Nutzung von Google Analytics</h3>
                <p className="mb-4">
                  Unsere Webseite benutzt Google Analytics, einen Webanalysedienst der Google Inc. ("Google"). Für diesen Webanalysedienst benutzt Google Analytics sogenannte „Cookies", d.h. das Textdateien auf ihrem Computer gespeichert werden, die dann wiederum eine Analyse der Benutzung der Webseite durch Sie ermöglichen. Die Informationen, die durch den Cookie über die Benutzung unserer Webseite erzeugt werden, werden an einen Server von Google in den USA übertragen und anschließend dort gespeichert. Kommt es zu einer Aktivierung der IP-Anonymisierung auf unserer Webseite, so wird Ihre IP-Adresse von Google nur innerhalb von den Mitgliedstaaten der EU oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vorher gekürzt. Dabei kann in wenigen Ausnahmefällen die volle IP-Adresse an einen Server von Google in den USA übertragen werden und dann dort gekürzt werden. Google kann dann aufgrund dieser Informationen, die gespeichert werden, Ihre Nutzung der Webseite auswerten, um sodann eine Zusammenstellung eines Reports über die Werbseitenaktivitäten bereitzustellen. Aufgrund dieses Reportes kann Google dann auch weitere mit der Webseitennutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Webseiten-Anbieter erbringen. Die über Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammen geführt. Liegt diese Auswertung anhand Ihres Aufenthaltes (durch Ihre IP-Adresse) auf unserer Seite nicht in Ihrem Interesse, so können sie die Speicherung oder Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern. Gleichzeitig möchten wir Sie in Kenntnis darüber setzen, dass Sie in diesem Fall sämtliche Funktionen unserer Webseite nicht vollumfänglich nutzen können.
                </p>
                <p className="mb-4">
                  Durch die Nutzung dieser Webseite erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden. Ferner können sie die Erfassung der durch den Cookie erzeugten und auf Ihre Nutzung der Webseite bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <a href="http://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer" className="text-abaris-cyan hover:underline">http://tools.google.com/dlpage/gaoptout?hl=de</a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Datenschutzerklärung für die Nutzung von Google AdSense</h3>
                <p className="mb-4">
                  Unsere Webseite benutzt Google AdSense, einen Dienst zum Einbinden von Werbeanzeigen der Google Inc. ("Google"). Für diesen Dienst zum Einbinden von Werbeanzeigen verwendet Google AdSense so genannte "Cookies", Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Webseite ermöglicht. Darüber hinaus verwendet Google AdSense auch Web Beacons (unsichtbare Grafiken). Aufgrund von den Web Beacons können Informationen wie der Besucherverkehr auf Webseiten ausgewertet werden. Anhand der Cookies und den Web Beacons werden Informationen über die Benutzung unserer Webseite, inbegriffen Ihrer IP-Adresse, erzeugt. Die Auslieferung von Werbeformaten wird dann an einen Server von Google in den USA übertragen und dort, wie bei Google Analytics, gespeichert. Die gespeicherten Informationen können dann von Google weiter an deren Vertragspartner gegeben werden. Dennoch werden die von Google erhobenen Informationen über Ihre IP-Adresse nicht mit anderen von Ihnen gespeicherten Daten zusammen geführt Liegt diese Erfassung der Informationen anhand Ihres Aufenthaltes (durch Ihre IP-Adresse) auf unserer Seite nicht in Ihrem Interesse, so können sie die Speicherung oder Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern. Gleichzeitig möchten wir Sie in Kenntnis darüber setzen, dass Sie in diesem Fall sämtliche Funktionen dieser Webseite nicht vollumfänglich nutzen können. Durch die Nutzung dieser Webseite erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Auskunftsrecht</h3>
                <p>
                  Wir weisen Sie darauf hin, dass Sie das Recht haben, eine Auskunft von uns über die von Ihnen gespeicherten Daten zu verlangen und im Fall der Unrichtigkeit der Daten eine Sperrung, Löschung oder Berichtigung zu veranlassen. Die Auskunftserteilung ist sowohl telefonisch als auch elektronisch möglich.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Änderungen der Datenschutzerklärung</h3>
                <p>
                  Sollten zukünftig Änderungen unserer Datenschutzerklärung vorgenommen werden, so werden die Änderungen stets auf diesen Seiten zu finden sein.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Sicherheitshinweis</h3>
                <p>
                  Wir sind bemüht Ihre Daten durch Ergreifung aller technischen und organisatorischen Möglichkeiten so zu speichern, dass sie für Dritte nicht zugänglich sind. Bei der Kommunikation per E-Mail kann die vollständige Datensicherheit von uns nicht gewährleistet werden, so dass wir Ihnen bei vertraulichen Informationen den Postweg empfehlen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Hinweis auf EU-Streitschlichtung</h3>
                <p className="mb-4">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="http://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-abaris-cyan hover:underline">http://ec.europa.eu/consumers/odr</a>
                </p>
                <p className="mb-4">
                  Unsere E-Mail-Adresse lautet info@abaris-gebaeudereinigung.de
                </p>
                <p className="mb-4">
                  Für Verbraucherstreitigkeiten mit Aysegül Baris Kolbasi wäre die Verbraucherstreitbeilegungsstelle Zentrum für Europäischen Verbraucherschutz e.V. zuständig.
                </p>
                <p className="mb-4">
                  Die Streitbeilegungsstelle Zentrum für Europäischen Verbraucherschutz e.V. hat ihren Sitz hier:<br />
                  Bahnhofsplatz 3<br />
                  77694 Kehl<br />
                  Telefon: 07851 / 991480<br />
                  E-Mail: mail@online-schlichter.de
                </p>
                <p className="mb-4">
                  Die Webseite finden Sie unter: <a href="http://www.online-schlichter.de" target="_blank" rel="noopener noreferrer" className="text-abaris-cyan hover:underline">www.online-schlichter.de</a>.
                </p>
                <p>
                  Aysegül Baris Kolbasi nimmt jedoch nicht am Streitbeilegungsverfahren teil.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-normal text-gray-900 mb-2">Abmahnung</h3>
                <p className="mb-4">
                  Keine Abmahnung ohne vorherigen Kontakt nach § 8 Abs. 4 UWG.
                </p>
                <p>
                  Wenn der Inhalt oder die Gestaltung einzelner Seiten oder Artikel dieser Internetseite fremde Rechte Dritter oder gesetzliche Bestimmungen verletzen oder in irgendeiner Form wettbewerbsrechtliche Probleme hervorbringen, so wird um eine angemessene, ausreichend erläuternde und schnelle Nachricht ohne Kostennote gebeten. Es wird garantiert, dass die zu Recht beanstandeten Passagen oder Teile des Angebots unverzüglich entfernt bzw. den rechtlichen Vorgaben umfassend angepasst werden, ohne dass von Ihrer Seite die Einschaltung eines Rechtsbeistandes erforderlich sein wird. Die zeitaufwändigere Einschaltung eines Anwaltes zur für den Webseiteninhaber kostenpflichtigen Abmahnung entspricht nicht dessen wirklichen oder mutmaßlichen Willen.
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
