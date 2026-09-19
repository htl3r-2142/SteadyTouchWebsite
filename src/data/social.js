// Unsere Social Media Profile, werden im Footer, auf der Kontaktseite und auf der Startseite verwendet
// Links ohne url werden nicht angezeigt
export const social = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/steadytouch'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61594114487571' 
  }
]

export const instagram = social.find((s) => s.name === 'Instagram')
