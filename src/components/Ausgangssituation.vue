<template>
  <SectionBlock id="idee" eyebrow="Ausgangssituation" title="Ein Workshop, der uns die Lücke gezeigt hat">
    <p>Bei einem Webtechnologie-Accessibility-Workshop mit <strong>Stefan Barac und Claudio Zeni von Incluthon</strong> wurde uns klar: Accessibility wird trotz technologischem Fortschritt noch immer zu wenig mitgedacht.</p>
    <p>Parkinson, MS, Zerebralparalyse, altersbedingte Einschränkungen, Feinmotorik-Probleme, Schlaganfälle und Unfallverletzungen erschweren vielen Menschen die Bedienung von Handys und Computern.</p>

    <div class="stat-list">
      <div v-for="stat in stats" :key="stat.label">
        <div class="num">{{ stat.value }}</div>
        <div class="lbl">{{ stat.label }}</div>
      </div>
    </div>
  </SectionBlock>
</template>

<script setup>
import SectionBlock from './SectionBlock.vue'

const stats = [
  { value: '~14%', label: 'der österreichischen Bevölkerung leben mit motorischen Einschränkungen' },
  { value: '4', label: 'Teammitglieder im Projekt' },
  { value: '150–180', label: 'Arbeitsstunden pro Person' },
]
</script>
