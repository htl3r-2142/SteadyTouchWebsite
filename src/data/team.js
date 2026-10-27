// Teamdaten, werden auf der Kontaktseite und im Impressum verwendet
import fotoMichaela from '../assets/team/michaela.jpg'
import fotoFabian from '../assets/team/fabian.jpg'
import fotoAlessandro from '../assets/team/alessandro.jpg'

// bildPosition = welcher Teil vom Foto im runden Ausschnitt zu sehen ist
// (zweiter Wert: 0% = ganz oben, 100% = ganz unten), damit das Gesicht in der Mitte ist
export const team = [
  {
    name: 'Michaela Giffinger',
    rollen: ['Projektleiterin', 'Scrum-Master', 'Design / UX'],
    email: 'michaela.giffinger@htl.rennweg.at',
    bild: fotoMichaela,
    bildPosition: 'center 28%'
  },
  {
    name: 'Fabian Lielacher',
    rollen: ['Projektleiter Stv.', 'Product-Owner', 'Frontend'],
    email: 'fabian.lielacher@htl.rennweg.at',
    bild: fotoFabian,
    bildPosition: 'center'
  },
  {
    name: 'Alessandro Tervit',
    rollen: ['Mitarbeiter', 'Backend'],
    email: 'alessandro.tervit@htl.rennweg.at',
    bild: fotoAlessandro,
    bildPosition: 'center 8%'
  }
]

// Projektbetreuung (für das Impressum)
export const betreuung = [
  { name: 'Christian Prior', rolle: 'Hauptbetreuung' },
  { name: 'Romana Scherer', rolle: 'Hauptbetreuung Stv.' }
]
