import { describe, it, expect, beforeEach, afterEach } from 'vitest'

describe('main', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>'
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('mounts the app into the #app element', async () => {
    await import('./main.js')

    const root = document.querySelector('#app')
    expect(root.querySelector('header.hero')).not.toBeNull()
    expect(root.querySelector('footer')).not.toBeNull()
  })
})
