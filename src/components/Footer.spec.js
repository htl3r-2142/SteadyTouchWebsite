import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Footer from './Footer.vue'

describe('Footer', () => {
  it('credits the workshop hosts', () => {
    const wrapper = mount(Footer)

    expect(wrapper.find('footer').exists()).toBe(true)
    expect(wrapper.text()).toContain('Stefan Barac & Claudio Zeni (Incluthon)')
  })

  it('renders the school and year line', () => {
    const wrapper = mount(Footer)

    expect(wrapper.find('p.mono').text()).toBe('HTL · 2026')
  })
})
