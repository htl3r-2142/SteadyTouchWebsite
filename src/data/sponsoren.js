// Unsere Sponsoren, werden auf der Sponsorenseite angezeigt
// id = eindeutiger Name ohne Leerzeichen (z.B. für steadytouch.at/sponsoren#etas)
// url = Website vom Sponsor. Wenn sie leer ist, ist die Karte kein Link
import logoDispomonster from '../assets/sponsoren/dispomonster_klein.png'
import logoEtas from '../assets/sponsoren/Etas_Logo.png'
import logoHosttech from '../assets/sponsoren/hosttech_klein.png'
import logoIntersport from '../assets/sponsoren/intersport_ruby_logo.png'
import logoManara from '../assets/sponsoren/manara_springs_klein.png'
import logoPrintshop from '../assets/sponsoren/printshop_landstrasse_klein.png'

// TODO: Links zu den Websites eintragen
export const sponsoren = [
  { id: 'intersport-ruby', name: 'Intersport Ruby', logo: logoIntersport, url: 'https://www.intersport-ruby.at/' },
  { id: 'dispomonster', name: 'Dispomonster', logo: logoDispomonster, url: 'https://dispomonster.com/' },
  { id: 'etas', name: 'ETAS', logo: logoEtas, url: 'https://www.etas.at/' },
  { id: 'hosttech', name: 'hosttech', logo: logoHosttech, url: 'https://www.hosttech.at/' },
  { id: 'manara-springs', name: 'Manara Springs', logo: logoManara, url: 'https://www.manarasprings.com/' },
  { id: 'printshop-landstrasse', name: 'Printshop Landstraße', logo: logoPrintshop, url: 'https://www.printshop-landstrasse.at/' }
]
