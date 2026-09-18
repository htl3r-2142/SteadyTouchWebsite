// Unsere Social Media Profile, werden im Footer, auf der Kontaktseite und auf der Startseite verwendet
// Links ohne url werden nicht angezeigt
export const social = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/steadytouch'
  },
  {
    name: 'Facebook',
    url: '' // TODO: Link kommt noch
  }
]

export const instagram = social.find((s) => s.name === 'Instagram')
