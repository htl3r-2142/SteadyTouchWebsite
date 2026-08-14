<template>
  <header class="hero">
    <div class="hero-atmosphere"></div>
    <svg class="grain" xmlns="http://www.w3.org/2000/svg">
      <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/></filter>
      <rect width="100%" height="100%" filter="url(#n)"/>
    </svg>

    <nav>
      <div class="wrap">
        <a href="#fortschritt" class="pill">Fortschritt ansehen →</a>
        <div class="nav-icons" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor"/></svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 5h18v14H3z"/><path d="M3 6l9 7 9-7"/></svg>
        </div>
        <svg class="logo-mark" viewBox="0 0 40 40" aria-label="SteadyTouch Logo">
          <circle cx="14" cy="20" r="10"/>
          <circle cx="20" cy="20" r="10"/>
          <circle cx="26" cy="20" r="10"/>
        </svg>
        <div class="nav-right">
          <span>DE</span>
          <button class="menu-btn"><span class="bars"><span></span><span></span></span> Menü</button>
        </div>
      </div>
    </nav>

    <div class="hero-center">
      <h1 class="wordmark">Steady<br>Touch</h1>
      <div class="hero-sub">Gesten · stabilisiert</div>
    </div>

    <div class="hero-vline">
      <div class="line"></div>
      <span>DIPLOMARBEIT — HTL 2026</span>
    </div>

    <div class="hero-strip">
      <div class="wrap">
        <div class="strip-item">
          <div class="strip-thumb"></div>
          <h3>Ruhige Steuerung ist möglich, sie fehlt nur noch</h3>
          <p>Kein Gerät wurde bisher konsequent für zitternde Hände entworfen…</p>
          <a class="go" href="#idee">Projekt-Übersicht →</a>
        </div>
        <div class="divider"></div>
        <div class="strip-item">
          <p style="margin-top:14px; color:var(--text-muted);">Rund 14&nbsp;% der österreichischen Bevölkerung leben mit motorischen Einschränkungen. Digitale Geräte sind heute im Alltag praktisch unumgänglich — ihre Bedienung ist es für viele nicht.</p>
        </div>
        <div class="divider"></div>
        <div class="strip-item">
          <p style="margin-top:14px; color:var(--text-muted);">SteadyTouch filtert unwillkürliches Zittern aus der Gestensteuerung heraus und macht digitale Interfaces so für mehr Menschen zugänglich.</p>
          <a class="go" href="#idee">Mehr über das Projekt →</a>
        </div>
      </div>
    </div>
  </header>
</template>
