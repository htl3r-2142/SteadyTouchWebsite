<script setup>
const team = [
  {
    name: 'Michaela Giffinger',
    role: 'Projektleitung · Scrum Master',
  },
  {
    name: 'Fabian Lielacher',
    role: 'Stellv. Projektleitung · Product Owner',
  },
  {
    name: 'Alessandro Tervit',
    role: 'Projektmitarbeiter',
  },
  {
    name: 'Felix Mayerhofer',
    role: 'Projektmitarbeiter',
  },
]
</script>

<template>
  <div class="page">
    <section class="header">
      <h1>Team</h1>
      <p>
        SteadyTouch wird im Rahmen der Diplomarbeit an der HTL Rennweg (4BI)
        von folgendem Team umgesetzt.
      </p>
    </section>

    <section class="list">
      <div v-for="member in team" :key="member.name" class="row">
        <span class="name">{{ member.name }}</span>
        <span class="role">{{ member.role }}</span>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page {
  max-width: 720px;
  margin: 0 auto;
  padding: 8.5rem 1.5rem 5rem;
}

.header {
  margin-bottom: 3rem;
}

.header h1 {
  margin-bottom: 1rem;
}

.header p {
  color: var(--text-muted);
}

.list {
  border-top: 1px solid var(--border);
}

.row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.4rem 0;
  border-bottom: 1px solid var(--border);
}

.name {
  font-weight: 500;
  font-size: 1.05rem;
}

.role {
  color: var(--text-muted);
  font-size: 0.9rem;
  text-align: right;
}

@media (max-width: 560px) {
  .page {
    padding: 6.5rem 1.25rem 3.5rem;
  }

  .row {
    flex-direction: column;
    gap: 0.25rem;
  }

  .role {
    text-align: left;
  }
}
</style>
