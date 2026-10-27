<script setup>
import logo from '../assets/logo.png'
import FolgtUns from '../components/FolgtUns.vue'

// Fortschritt der Diplomarbeit in Prozent - hier einfach anpassen
const fortschritt = 30
</script>

<template>
  <!-- Hero Bereich -->
  <section class="hero" aria-labelledby="titel">
    <div class="container hero-inhalt">
      <div class="hero-text">
        <h1 id="titel">SteadyTouch</h1>
        <p class="slogan">Technologie, die Bewegung versteht.</p>
        <p class="hero-beschreibung">
          SteadyTouch erkennt Handgesten per Kamera, filtert ungewolltes Zittern heraus und macht
          daraus einen stabilen, verlässlichen Input für Menschen mit Parkinson, MS, Zerebralparese
          oder altersbedingten Einschränkungen.
        </p>
      </div>

      <!-- Logo ist nur Deko, der Name steht schon in der Überschrift -->
      <img class="hero-logo" :src="logo" alt="" width="2048" height="2048" />
    </div>
  </section>

  <section aria-labelledby="was-ist">
    <div class="container">
      <h2 id="was-ist" class="was-ist">Doch was ist SteadyTouch überhaupt?</h2>
    </div>

    <!-- Idee (hellblauer Streifen) -->
    <div class="abschnitt abschnitt-hell">
      <div class="container">
        <h3>Unsere Idee</h3>
        <p>
          Bei einem Accessibility-Workshop von Incluthon an unserer Schule sowie im Medientechnikunterricht wurde uns klar, dass Barrierefreiheit trotz technischem Fortschritt oft viel zu wenig
          beachtet wird.
        </p>

        <!-- große Zahl links, Text rechts. Wird trotzdem als ein Satz vorgelesen -->
        <p class="statistik">
          <span class="zahl"><span class="zahl-klein">etwa</span> 14&nbsp;%</span>
          <span class="zahl-text">
            der österreichischen Bevölkerung haben motorische Einschränkungen, zum Beispiel durch
            Parkinson, MS, Zerebralparese, Schlaganfälle, Unfallverletzungen oder einfach durch das
            Alter. Für diese Menschen ist das Bedienen von Handys und Computern oft schwierig, obwohl
            man heute im Alltag kaum mehr ohne auskommt.
          </span>
        </p>
      </div>
    </div>

    <!-- Ziel (dunkler Streifen) -->
    <div class="abschnitt abschnitt-dunkel dunkel">
      <div class="container">
        <h3>Unser Ziel</h3>
        <p class="ziel-satz">Unser Ziel ist es, digitale Interaktion zugänglicher zu machen.</p>
        <p>
          SteadyTouch soll die herkömmliche Maus durch eine intuitive Gestensteuerung ersetzen, bei
          der Handbewegungen erkannt und ungewollte Zitterbewegungen herausgefiltert werden. In
          unserem Übungsbereich können die Gesten zunächst sicher erlernt und anschließend direkt mit
          selbst entwickelten Beispiel-Apps ausprobiert werden. So können Nutzer:innen die
          Funktionsweise von SteadyTouch kennenlernen und die Gestensteuerung praxisnah erleben.
        </p>
      </div>
    </div>
  </section>

  <!-- Fortschritt + Social Media -->
  <div class="container karten">
    <section class="fortschritt-karte" aria-labelledby="fortschritt-titel">
      <h2 id="fortschritt-titel">Projektfortschritt</h2>
      <p id="fortschritt-text">
        Unser Fortschritt liegt bei etwa
        <span class="prozent">{{ fortschritt }}&nbsp;%</span>.
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

    <FolgtUns />
  </div>
</template>

<style scoped>
/* Hero */
.hero-inhalt {
  display: grid;
  grid-template-columns: 1.7fr 1fr;
  gap: 40px;
  align-items: center;
  padding-top: 96px;
  padding-bottom: 112px;
}

h1 {
  color: var(--blau);
  font-size: 3.8rem;
  font-weight: 800;
  line-height: 1.05;
  margin: 0 0 12px;
}

.slogan {
  color: var(--dunkelblau);
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 1.25;
  margin: 0;
  /* hellblaue Linie unter dem Slogan */
  padding-bottom: 24px;
  border-bottom: 3px solid var(--flaeche);
}

.hero-beschreibung {
  margin: 24px 0 0;
  max-width: 60ch;
}

.hero-logo {
  width: 100%;
  max-width: 380px;
  height: auto;
  justify-self: center;
}

/* Überschrift über den Streifen */
.was-ist {
  color: var(--dunkelblau);
  font-size: 2.1rem;
  font-weight: 800;
  margin: 0;
  padding-bottom: 40px;
}

/* Streifen über die ganze Breite */
.abschnitt {
  padding-top: 64px;
  padding-bottom: 72px;
}

.abschnitt p {
  max-width: 70ch;
}

.abschnitt-hell {
  background-color: var(--flaeche);
}

.abschnitt-dunkel {
  background-color: var(--dunkelblau);
  color: var(--weiss);
}

h3 {
  color: var(--blau);
  font-size: 2.1rem;
  font-weight: 800;
  margin: 0 0 32px;
}

.abschnitt-dunkel h3 {
  color: var(--weiss);
  margin-bottom: 20px;
}

.ziel-satz {
  font-size: 1.3rem;
  font-weight: 800;
  line-height: 1.4;
  margin: 0 0 16px;
}

/* 14 % Box */
.statistik {
  display: flex;
  align-items: center;
  gap: 56px;
  margin: 48px 0 0;
  padding: 36px 32px 36px 64px;
  background-color: var(--hintergrund);
  border-left: 6px solid var(--blau);
  border-radius: 24px;
}

.abschnitt .statistik {
  max-width: 1000px;
}

.zahl {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  color: var(--blau);
  font-size: 2.6rem;
  font-weight: 800;
  line-height: 1;
}

.zahl-klein {
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 10px;
}

/* Karten unten */
.karten {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 64px;
}

.fortschritt-karte {
  background-color: var(--flaeche);
  border-radius: 24px;
  padding: 28px 40px 36px;
}

.fortschritt-karte h2 {
  color: var(--blau);
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 8px;
}

.fortschritt-karte p {
  margin: 0 0 16px;
}

.prozent {
  color: var(--blau);
  font-size: 2.2rem;
  font-weight: 800;
}

.balken {
  height: 28px;
  background-color: var(--hintergrund);
  border-radius: 14px;
  overflow: hidden;
  border: 2px solid var(--blau);
}

.balken-fuellung {
  height: 100%;
  background-color: var(--blau);
  transition: width 0.6s ease;
}

/* Tablet und Handy */
@media (max-width: 800px) {
  .hero-inhalt {
    grid-template-columns: 1fr;
    gap: 32px;
    padding-top: 48px;
    padding-bottom: 56px;
  }

  /* Logo am Handy oben, kleiner */
  .hero-logo {
    order: -1;
    max-width: 160px;
  }

  h1 {
    font-size: 2.6rem;
  }

  .slogan {
    font-size: 1.4rem;
  }

  .was-ist,
  h3 {
    font-size: 1.7rem;
  }

  h3 {
    margin-bottom: 20px;
  }

  .abschnitt {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .statistik {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin-top: 32px;
    padding: 24px 20px 24px 24px;
    border-radius: 18px;
  }

  .karten {
    padding-top: 48px;
    gap: 24px;
  }

  .fortschritt-karte {
    padding: 24px 20px 28px;
    border-radius: 18px;
  }

  .fortschritt-karte h2 {
    font-size: 1.6rem;
  }
}
</style>
