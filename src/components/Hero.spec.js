import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Hero from './Hero.vue'

describe('Hero', () => {
  it('renders the wordmark and subtitle', () => {
    const wrapper = mount(Hero)

    expect(wrapper.find('h1.wordmark').text()).toBe('SteadyTouch')
    expect(wrapper.find('.hero-sub').text()).toBe('Gesten · stabilisiert')
    expect(wrapper.find('.hero-vline span').text()).toBe('DIPLOMARBEIT — HTL 2026')
  })

  it('links the nav pill to the progress section', () => {
    const wrapper = mount(Hero)
    const pill = wrapper.find('a.pill')

    expect(pill.attributes('href')).toBe('#fortschritt')
    expect(pill.text()).toContain('Fortschritt ansehen')
  })

  it('hides the decorative nav icons from assistive technology', () => {
    const wrapper = mount(Hero)

    expect(wrapper.find('.nav-icons').attributes('aria-hidden')).toBe('true')
    expect(wrapper.find('svg.logo-mark').attributes('aria-label')).toBe('SteadyTouch Logo')
  })

  it('renders the three strip items, two of which link to the idea section', () => {
    const wrapper = mount(Hero)

    expect(wrapper.findAll('.strip-item')).toHaveLength(3)
    expect(wrapper.findAll('.divider')).toHaveLength(2)

    const links = wrapper.findAll('a.go')
    expect(links).toHaveLength(2)
    links.forEach((link) => {
      expect(link.attributes('href')).toBe('#idee')
    })
  })
})
