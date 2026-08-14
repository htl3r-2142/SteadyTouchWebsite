<template>
  <section id="team">
    <div class="wrap">
      <div class="section-grid">
        <span class="eyebrow">04 — Team</span>
        <div>
          <h2 class="serif">4 Personen, ein Prototyp</h2>
          <p>HTL, 5. Klasse — gemeinsam ca. 600–720 Arbeitsstunden für Konzept, Entwicklung, Testung und Dokumentation.</p>
          <div class="team-list">
            <div class="team-row" v-for="member in team" :key="member.role">
              <span class="name">{{ member.name }}</span>
              <span class="role">{{ member.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const team = [
  { name: 'Teammitglied 1', role: 'Tracking & Kamera' },
  { name: 'Teammitglied 2', role: 'Filter & Algorithmik' },
  { name: 'Teammitglied 3', role: 'Web-App & UI' },
  { name: 'Teammitglied 4', role: 'Testumgebung & Evaluierung' },
]
</script>
