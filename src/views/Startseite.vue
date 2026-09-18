<script setup>
import trackingHand from '../assets/tracking_hand.png'

// Fortschritt der Diplomarbeit in Prozent - hier einfach anpassen
const fortschritt = 30
</script>

<template>
  <!-- Hero Bereich -->
  <section class="hero" aria-labelledby="titel">
    <div class="container hero-inhalt">
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
    </div>
  </section>

  <!-- Idee  -->
  <section class="abschnitt abschnitt-hell" aria-labelledby="idee">
    <div class="container">
      <h2 id="idee">Unsere Idee</h2>
      <p>
        Bei einem Accessibility Workshop mit Stefan Barac und Claudio Zeni von Incluthon ist uns
        klar geworden, dass Barrierefreiheit trotz technischem Fortschritt oft viel zu wenig
        beachtet wird.
      </p>

      <!-- große Zahl links, Text rechts. Wird trotzdem als ein Satz vorgelesen -->
      <p class="statistik">
        <span class="zahl"><span class="zahl-klein">Etwa</span> 14&nbsp;%</span>
        <span class="zahl-text">
          der österreichischen Bevölkerung haben motorische Einschränkungen, zum Beispiel durch
          Parkinson, MS, Zerebralparese, Schlaganfälle, Unfallverletzungen oder einfach durch das
          Alter. Für diese Menschen ist das Bedienen von Handys und Computern oft schwierig, obwohl
          man heute im Alltag kaum mehr ohne auskommt.
        </span>
      </p>
    </div>
  </section>

  <!-- Ziel  -->
  <section class="abschnitt abschnitt-dunkel" aria-labelledby="ziel">
    <div class="container">
      <h2 id="ziel">Unser Ziel</h2>
      <p class="ziel-satz">Unser Ziel ist es, digitale Interaktion zugänglicher zu machen.</p>
      <p>
        SteadyTouch soll die herkömmliche Maus durch eine intuitive Gestensteuerung ersetzen, bei
        der Handbewegungen erkannt und ungewollte Zitterbewegungen herausgefiltert werden. In
        unserem Übungsbereich können die Gesten zunächst sicher erlernt und anschließend direkt mit
        selbst entwickelten Beispiel-Apps ausprobiert werden. So können Nutzer:innen die
        Funktionsweise von SteadyTouch kennenlernen und die Gestensteuerung praxisnah erleben.
      </p>
    </div>
  </section>

  <!-- Fortschritt -->
  <section class="abschnitt" aria-labelledby="fortschritt-titel">
    <div class="container">
      <div class="fortschritt-karte">
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
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-inhalt {
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

/* hellblauer Kreis hinter der Hand (Bild ist transparent) */
.hero-bild {
  width: 100%;
  max-width: 440px;
  height: auto;
  justify-self: center;
  background-color: var(--blau-hintergrund);
  border-radius: 50%;
  padding: 32px;
}

/* Abschnitte gehen über die ganze Breite, damit man die Farben sieht */
.abschnitt {
  padding-top: 64px;
  padding-bottom: 64px;
}

.abschnitt p {
  max-width: 70ch;
}

.abschnitt-hell {
  background-color: var(--blau-hintergrund);
}

.abschnitt-dunkel {
  background-color: var(--dunkelblau);
  color: var(--weiss);
}

h2 {
  font-size: 1.8rem;
  color: var(--gruen);
  margin: 0 0 16px;
}

.abschnitt-dunkel h2 {
  color: var(--hellblau);
}

/* 14 % Box */
.statistik {
  display: flex;
  align-items: center;
  gap: 32px;
  margin: 32px 0 0;
  padding: 24px 28px;
  background-color: var(--weiss);
  border-left: 6px solid var(--gruen);
  border-radius: 8px;
}

.abschnitt .statistik {
  max-width: 900px;
}

.zahl {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  color: var(--gruen);
  font-size: 3.4rem;
  font-weight: 800;
  line-height: 1;
}

.zahl-klein {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.ziel-satz {
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.4;
  margin: 0 0 16px;
}

/* Fortschritt */
.fortschritt-karte {
  background-color: var(--blau-hintergrund);
  border-radius: 12px;
  padding: 32px;
}

.prozent {
  color: var(--gruen);
  font-size: 2.4rem;
  font-weight: 800;
}

.balken {
  height: 28px;
  background-color: var(--weiss);
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
  .hero-inhalt {
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

  .hero-bild {
    max-width: 300px;
  }

  .abschnitt {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .statistik {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    padding: 20px;
  }

  .fortschritt-karte {
    padding: 24px 20px;
  }
}
</style>
