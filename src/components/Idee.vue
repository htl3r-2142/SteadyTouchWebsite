<template>
  <section>
    <div class="wrap">
      <div class="section-grid">
        <span class="eyebrow">02 — Die Idee</span>
        <div>
          <h2 class="serif">Aus zittriger Eingabe wird stabile Steuerung</h2>
          <p>SteadyTouch ist ein intuitives, gestikgesteuertes System, das Hand- (optional Augen-) Bewegungen per Kamera erfasst, verarbeitet und ungewollte Zitter- oder Schüttelbewegungen durch Filtermethoden bzw. KI-gestützte Verfahren herausfiltert.</p>

          <div class="num-list">
            <div class="num-row" v-for="(item, i) in items" :key="item.title">
              <span class="idx">{{ String(i + 1).padStart(2, '0') }}</span>
              <div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  { title: 'Web-App', text: 'Läuft lokal auf Laptop oder PC mit angeschlossener Kamera, mehrseitig aufgebaut.' },
  { title: 'Testumgebung', text: 'Selbst programmierte Beispiel-Apps, angelehnt an alltäglich verwendete Anwendungen.' },
  { title: 'Ziel', text: 'Eine solide Grundlage für Weiterentwicklung schaffen und evaluieren, wie sinnvoll Gestensteuerung in realen Szenarien einsetzbar ist.' },
]
</script>
