import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Fortschritt from './Fortschritt.vue'

describe('Fortschritt', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the section header, percentage and update date', () => {
    const wrapper = mount(Fortschritt)

    expect(wrapper.find('section#fortschritt').exists()).toBe(true)
    expect(wrapper.find('.eyebrow').text()).toBe('Fortschritt')
    expect(wrapper.find('.progress-pct').text()).toBe('15%')
    expect(wrapper.find('.progress-updated').text()).toBe('Zuletzt aktualisiert — 13.08.2026')
  })

  it('renders one timeline row per milestone with its status class', () => {
    const wrapper = mount(Fortschritt)
    const rows = wrapper.findAll('.t-row')

    expect(rows).toHaveLength(6)
    expect(rows[0].classes()).toContain('done')
    expect(rows[1].classes()).toContain('active')
    rows.slice(2).forEach((row) => {
      expect(row.classes()).toContain('open')
    })
    expect(rows[0].find('.label').text()).toBe('Projektidee & Konzept')
  })

  it('maps each milestone status to a german tag', () => {
    const wrapper = mount(Fortschritt)

    expect(wrapper.findAll('.t-row .tag').map((tag) => tag.text())).toEqual([
      'erledigt',
      'in arbeit',
      'offen',
      'offen',
      'offen',
      'offen',
    ])
  })

  it('starts the progress bar empty and fills it after mount', async () => {
    const wrapper = mount(Fortschritt)

    expect(wrapper.find('.progress-fill').attributes('style')).toBe('width: 0%;')

    await vi.advanceTimersByTimeAsync(200)
    await nextTick()

    expect(wrapper.find('.progress-fill').attributes('style')).toBe('width: 15%;')
  })

  it('does not fill the bar before the animation delay has elapsed', async () => {
    const wrapper = mount(Fortschritt)

    await vi.advanceTimersByTimeAsync(100)
    await nextTick()

    expect(wrapper.find('.progress-fill').attributes('style')).toBe('width: 0%;')
  })
})
