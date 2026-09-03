// Platzhalter-Daten für den Übungsbereich. Videos fehlen noch (siehe Ziel-H5 c) –
// bis zur Aufnahme wird im Detail-Dialog ein Platzhalter angezeigt.
export const gestures = [
  {
    id: 'tap',
    name: 'Tippen',
    replaces: 'Klick',
    short: 'Ersetzt den linken Mausklick.',
    steps: [
      'Hand ruhig vor der Kamera halten, Handfläche zur Kamera gerichtet.',
      'Zeigefinger kurz nach vorne in Richtung Kamera bewegen.',
      'Finger wieder in die Ausgangsposition zurückführen.',
    ],
  },
  {
    id: 'hold',
    name: 'Halten',
    replaces: 'Rechtsklick / Kontextmenü',
    short: 'Ersetzt den langen Druck bzw. Rechtsklick.',
    steps: [
      'Mit dem Zeigefinger auf die gewünschte Stelle zielen.',
      'Position für ca. eine Sekunde ruhig halten, ohne die Hand zu bewegen.',
      'Das Kontextmenü öffnet sich automatisch – Hand danach wieder lösen.',
    ],
  },
  {
    id: 'swipe',
    name: 'Wischen',
    replaces: 'Scrollen',
    short: 'Ersetzt das Scrollen mit dem Mausrad.',
    steps: [
      'Hand flach halten, Finger leicht gespreizt.',
      'Die ganze Hand gleichmäßig nach oben oder unten bewegen.',
      'Bewegung in normaler Geschwindigkeit ausführen – schnelle Rucke werden herausgefiltert.',
    ],
  },
  {
    id: 'drag',
    name: 'Greifen & Ziehen',
    replaces: 'Ziehen & Ablegen (Drag & Drop)',
    short: 'Ersetzt das Klicken und Ziehen mit gedrückter Maustaste.',
    steps: [
      'Daumen und Zeigefinger wie beim Greifen zusammenführen.',
      'Die geschlossene Hand langsam zum Zielort bewegen.',
      'Daumen und Zeigefinger wieder öffnen, um loszulassen.',
    ],
  },
  {
    id: 'zoom',
    name: 'Spreizen',
    replaces: 'Zoomen',
    short: 'Ersetzt das Zoomen per Mausrad oder Zwei-Finger-Geste.',
    steps: [
      'Daumen und Zeigefinger nah zusammenführen.',
      'Zum Vergrößern die Finger langsam auseinanderführen, zum Verkleinern wieder zusammen.',
      'Die Bewegung ruhig und gleichmäßig ausführen.',
    ],
  },
]
