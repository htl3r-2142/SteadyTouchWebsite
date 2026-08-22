import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Ausgangssituation from './Ausgangssituation.vue'

describe('Ausgangssituation', () => {
  it('renders the section with its anchor id and eyebrow', () => {
    const wrapper = mount(Ausgangssituation)

    expect(wrapper.find('section#idee').exists()).toBe(true)
    expect(wrapper.find('.eyebrow').text()).toBe('Ausgangssituation')
    expect(wrapper.find('h2.serif').text()).toContain('Lücke')
  })

  it('names the workshop hosts in the intro text', () => {
    const wrapper = mount(Ausgangssituation)

    expect(wrapper.text()).toContain('Stefan Barac und Claudio Zeni von Incluthon')
  })

  it('renders one entry per stat with value and label', () => {
    const wrapper = mount(Ausgangssituation)
    const rows = wrapper.findAll('.stat-list > div')

    expect(rows).toHaveLength(3)
    expect(rows.map((row) => row.find('.num').text())).toEqual(['~14%', '4', '150–180'])
    rows.forEach((row) => {
      expect(row.find('.lbl').text().length).toBeGreaterThan(0)
    })
  })
})
