import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from './App.vue'
import Hero from './components/Hero.vue'
import Ausgangssituation from './components/Ausgangssituation.vue'
import Idee from './components/Idee.vue'
import Fortschritt from './components/Fortschritt.vue'
import Team from './components/Team.vue'
import Footer from './components/Footer.vue'

describe('App', () => {
  it('renders every page section exactly once', () => {
    const wrapper = mount(App)

    for (const component of [Hero, Ausgangssituation, Idee, Fortschritt, Team, Footer]) {
      expect(wrapper.findAllComponents(component)).toHaveLength(1)
    }
  })

  it('renders the sections in page order', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          Hero: { template: '<div>hero</div>' },
          Ausgangssituation: { template: '<div>ausgangssituation</div>' },
          Idee: { template: '<div>idee</div>' },
          Fortschritt: { template: '<div>fortschritt</div>' },
          Team: { template: '<div>team</div>' },
          Footer: { template: '<div>footer</div>' },
        },
      },
    })

    expect(wrapper.text()).toBe('heroausgangssituationideefortschrittteamfooter')
  })

  it('exposes the anchor targets the hero links to', () => {
    const wrapper = mount(App)

    expect(wrapper.find('#idee').exists()).toBe(true)
    expect(wrapper.find('#fortschritt').exists()).toBe(true)
  })
})
