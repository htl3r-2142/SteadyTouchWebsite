import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Team from './Team.vue'

describe('Team', () => {
  it('renders the team section with its anchor id', () => {
    const wrapper = mount(Team)

    expect(wrapper.find('section#team').exists()).toBe(true)
    expect(wrapper.find('.eyebrow').text()).toBe('Team')
  })

  it('renders one row per team member with name and role', () => {
    const wrapper = mount(Team)
    const rows = wrapper.findAll('.team-row')

    expect(rows).toHaveLength(4)
    expect(rows.map((row) => row.find('.role').text())).toEqual([
      'Tracking & Kamera',
      'Filter & Algorithmik',
      'Web-App & UI',
      'Testumgebung & Evaluierung',
    ])
    rows.forEach((row) => {
      expect(row.find('.name').text()).toMatch(/Teammitglied \d/)
    })
  })
})
