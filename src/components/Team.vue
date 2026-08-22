<template>
  <SectionBlock id="team" eyebrow="Team" title="4 Personen, ein Prototyp">
    <p>HTL, 5. Klasse — gemeinsam ca. 600–720 Arbeitsstunden für Konzept, Entwicklung, Testung und Dokumentation.</p>
    <div class="team-list">
      <div class="team-row" v-for="member in team" :key="member.role">
        <span class="name">{{ member.name }}</span>
        <span class="role">{{ member.role }}</span>
      </div>
    </div>
  </SectionBlock>
</template>

<script setup>
import SectionBlock from './SectionBlock.vue'

const team = [
  { name: 'Teammitglied 1', role: 'Tracking & Kamera' },
  { name: 'Teammitglied 2', role: 'Filter & Algorithmik' },
  { name: 'Teammitglied 3', role: 'Web-App & UI' },
  { name: 'Teammitglied 4', role: 'Testumgebung & Evaluierung' },
]
</script>
