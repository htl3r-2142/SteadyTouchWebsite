<script setup>
import trackingHand from '../assets/tracking_hand.png'

// Fortschritt der Diplomarbeit in Prozent - hier einfach anpassen
const fortschritt = 15
</script>

<template>
  <!-- Hero Bereich -->
  <section class="hero container" aria-labelledby="titel">
    <div class="hero-text">
      <h1 id="titel">SteadyTouch</h1>
      <p class="slogan">
        Technologie, die Bewegung versteht.
      </p>
      <p>
        SteadyTouch erkennt Handgesten per Kamera, filtert ungewolltes Zittern heraus und macht
        daraus einen stabilen, verlässlichen Input für Menschen mit Parkinson, MS, Zerebralparese
        oder altersbedingten Einschränkungen.
      </p>
    </div>

    <img
      class="hero-bild"
      :src="trackingHand"
      alt="Skizze einer erkannten Hand: blaue Punkte an den Fingergelenken, verbunden mit Linien"
      width="1254"
      height="1254"
    />
  </section>

  <!-- Idee -->
  <section class="abschnitt container" aria-labelledby="idee">
    <h2 id="idee">Unsere Idee</h2>
    <p>
      Bei einem Accessibility Workshop mit Stefan Barac und Claudio Zeni von Incluthon ist uns
      klar geworden, dass Barrierefreiheit trotz technischem Fortschritt oft viel zu wenig
      beachtet wird.
    </p>
    <p>
      Etwa <strong>14&nbsp;% der österreichischen Bevölkerung</strong> haben motorische
      Einschränkungen, zum Beispiel durch Parkinson, MS, Zerebralparese, Schlaganfälle,
      Unfallverletzungen oder einfach durch das Alter. Für diese Menschen ist das Bedienen von
      Handys und Computern oft schwierig, obwohl man heute im Alltag kaum mehr ohne auskommt.
    </p>
  </section>

  <!-- Ziel -->
  <section class="abschnitt container" aria-labelledby="ziel">
    <h2 id="ziel">Unser Ziel</h2>
    <p>
      <strong>Unser Ziel ist es, digitale Interaktion zugänglicher zu machen.</strong>
      SteadyTouch soll die herkömmliche Maus durch eine intuitive Gestensteuerung ersetzen, bei
      der Handbewegungen erkannt und ungewollte Zitterbewegungen herausgefiltert werden. In
      unserem Übungsbereich können die Gesten zunächst sicher erlernt und anschließend direkt mit
      selbst entwickelten Beispiel-Apps ausprobiert werden. So können Nutzer:innen die
      Funktionsweise von SteadyTouch kennenlernen und die Gestensteuerung praxisnah erleben.
    </p>
  </section>

  <!-- Fortschritt -->
  <section class="abschnitt container" aria-labelledby="fortschritt-titel">
    <h2 id="fortschritt-titel">Projektfortschritt</h2>
    <p id="fortschritt-text">
      Die Diplomarbeit ist aktuell zu <strong>{{ fortschritt }}&nbsp;%</strong> fertig.
    </p>

    <div
      class="balken"
      role="progressbar"
      :aria-valuenow="fortschritt"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-labelledby="fortschritt-titel"
      aria-describedby="fortschritt-text"
    >
      <div class="balken-fuellung" :style="{ width: fortschritt + '%' }"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
}

h1 {
  color: var(--gruen);
  font-size: 3.2rem;
  font-weight: 800;
  margin: 0 0 8px;
}

.slogan {
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 0 0 32px;
}

.hero-text p:last-child {
  color: var(--text-hell);
}

.hero-bild {
  width: 100%;
  max-width: 460px;
  height: auto;
  justify-self: center;
}

.abschnitt {
  padding-top: 32px;
  padding-bottom: 32px;
}

.abschnitt > p {
  max-width: 70ch;
}

h2 {
  font-size: 1.8rem;
  color: var(--gruen);
  margin: 0 0 16px;
}

.balken {
  height: 28px;
  background-color: var(--grau);
  border-radius: 14px;
  overflow: hidden;
  border: 2px solid var(--dunkelblau);
}

.balken-fuellung {
  height: 100%;
  background-color: var(--dunkelblau);
  transition: width 0.6s ease;
}

/* Handy / kleine Bildschirme */
@media (max-width: 800px) {
  .hero {
    grid-template-columns: 1fr;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  h1 {
    font-size: 2.4rem;
  }

  .slogan {
    font-size: 1.3rem;
  }
}
</style>
