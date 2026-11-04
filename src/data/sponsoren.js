// Unsere Sponsoren, werden auf der Sponsorenseite angezeigt
// url = Website vom Sponsor. Wenn sie leer ist, wird kein Link angezeigt
import logoDispomonster from '../assets/sponsoren/dispomonster_klein.png'
import logoEtas from '../assets/sponsoren/Etas_Logo.png'
import logoHosttech from '../assets/sponsoren/hosttech_klein.png'
import logoIntersport from '../assets/sponsoren/intersport_ruby_logo.png'
import logoManara from '../assets/sponsoren/manara_springs_klein.png'
import logoPrintshop from '../assets/sponsoren/printshop_landstrasse_klein.png'

// TODO: Links zu den Websites eintragen
export const sponsoren = [
  { name: 'Intersport Ruby', logo: logoIntersport, url: 'https://www.intersport-ruby.at/' },
  { name: 'Dispomonster', logo: logoDispomonster, url: 'https://dispomonster.com/' },
  { name: 'ETAS', logo: logoEtas, url: 'https://www.etas.at/' },
  { name: 'hosttech', logo: logoHosttech, url: 'https://www.hosttech.at/' },
  { name: 'Manara Springs', logo: logoManara, url: 'https://www.manarasprings.com/' },
  { name: 'Printshop Landstraße', logo: logoPrintshop, url: 'https://www.printshop-landstrasse.at/' }
]
