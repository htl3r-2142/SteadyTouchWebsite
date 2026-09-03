<script setup></script>

<template>
  <div class="page">
    <h1>Impressum</h1>

    <section>
      <h2>Angaben gemäß §5 ECG / §25 Mediengesetz</h2>
      <p>
        [Name der Schule/Institution]<br />
        [Adresse]<br />
        [PLZ, Ort]<br />
        Österreich
      </p>
    </section>

    <section>
      <h2>Projekt</h2>
      <p>
        Diese Website ist Teil einer Diplomarbeit an der HTL Rennweg, Klasse
        4BI, und dient ausschließlich zu Ausbildungszwecken.
      </p>
    </section>

    <section>
      <h2>Kontakt</h2>
      <p>
        E-Mail: [kontakt@example.at]<br />
        Verantwortlich für den Inhalt: [Name der verantwortlichen Person]
      </p>
    </section>

    <section>
      <h2>Haftungsausschluss</h2>
      <p>
        Die Inhalte dieser Seite wurden mit größtmöglicher Sorgfalt erstellt.
        Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann
        jedoch keine Gewähr übernommen werden.
      </p>
    </section>

    <p class="note">
      Hinweis: Diese Seite ist ein Platzhalter und muss vor Veröffentlichung
      mit den tatsächlichen rechtlichen Angaben ergänzt werden.
    </p>
  </div>
</template>

<style scoped>
.page {
  max-width: 640px;
  margin: 0 auto;
  padding: 8.5rem 1.5rem 5rem;
}

.page h1 {
  margin-bottom: 2rem;
}

section {
  margin-bottom: 2rem;
}

section h2 {
  margin-bottom: 0.75rem;
}

section p {
  color: var(--text-muted);
}

.note {
  font-size: 0.85rem;
  color: var(--text-muted);
  border-top: 1px solid var(--border);
  padding-top: 1.5rem;
}

@media (max-width: 600px) {
  .page {
    padding: 6.5rem 1.25rem 3.5rem;
  }
}
</style>
