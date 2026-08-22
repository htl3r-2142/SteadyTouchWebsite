import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Idee from './Idee.vue'

describe('Idee', () => {
  it('renders the eyebrow and heading', () => {
    const wrapper = mount(Idee)

    expect(wrapper.find('.eyebrow').text()).toBe('Die Idee')
    expect(wrapper.find('h2.serif').text()).toBe('Aus zittriger Eingabe wird stabile Steuerung')
  })

  it('renders every idea row with a letter index, title and text', () => {
    const wrapper = mount(Idee)
    const rows = wrapper.findAll('.num-row')

    expect(rows).toHaveLength(3)
    expect(rows.map((row) => row.find('.idx').text())).toEqual(['A', 'B', 'C'])
    expect(rows.map((row) => row.find('h3').text())).toEqual(['Web-App', 'Testumgebung', 'Ziel'])
    rows.forEach((row) => {
      expect(row.find('div > p').text().length).toBeGreaterThan(0)
    })
  })
})
