<script lang="ts">
  import '../app.css';
  import { forumConfig } from '$lib/config';
</script>

<div class="app-shell">
  <!-- Ambient background -->
  <div class="ambient-bg" aria-hidden="true">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="grid-overlay"></div>
  </div>

  <!-- Sticky header -->
  <header class="site-header">
    <div class="header-inner">
      <a href="/" class="brand">
        <span class="brand-icon">{forumConfig.site.logo}</span>
        <span class="brand-text">
          <span class="brand-name">{forumConfig.site.name}</span>
          <span class="brand-tag">oops.wtf</span>
        </span>
      </a>

      <nav class="header-nav">
        {#each forumConfig.nav ?? [] as link}
          <a
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            class="nav-link"
          >
            {link.label}
          </a>
        {/each}
      </nav>
    </div>
  </header>

  <main class="site-main">
    <slot />
  </main>

  <footer class="site-footer">
    <div class="footer-inner">
      <span>{forumConfig.site.footer ?? 'Built with Discussion Kit'}</span>
      <span class="footer-sep">·</span>
      <a href="https://github.com/TechAdityaBRO" target="_blank" rel="noopener noreferrer" class="footer-link">GitHub</a>
      <span class="footer-sep">·</span>
      <a href="https://x.com/ProGroupBroGang" target="_blank" rel="noopener noreferrer" class="footer-link">X</a>
    </div>
  </footer>
</div>

<style>
  .app-shell {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* --- Ambient BG --- */
  .ambient-bg {
    position: fixed;
    inset: 0;
    z-index: -1;
    overflow: hidden;
    pointer-events: none;
  }
  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.55;
  }
  .orb-1 {
    width: 520px;
    height: 520px;
    background: hsl(263 85% 55%);
    top: -120px;
    left: -120px;
    animation: float1 22s ease-in-out infinite;
  }
  .orb-2 {
    width: 620px;
    height: 620px;
    background: hsl(220 85% 55%);
    bottom: -220px;
    right: -160px;
    opacity: 0.35;
    animation: float2 26s ease-in-out infinite;
  }
  @keyframes float1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(60px, 90px) scale(1.12); }
  }
  @keyframes float2 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(-70px, -90px) scale(1.16); }
  }
  .grid-overlay {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
  }
  @media (prefers-reduced-motion: reduce) {
    .orb { animation: none; }
  }

  /* --- Header --- */
  .site-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(10, 8, 20, 0.7);
    backdrop-filter: blur(18px) saturate(180%);
    -webkit-backdrop-filter: blur(18px) saturate(180%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
  .header-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    color: inherit;
  }
  .brand-icon {
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    border-radius: 12px;
    background: linear-gradient(135deg, hsl(263 85% 62%), hsl(263 85% 42%));
    font-size: 1.35rem;
    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.4);
  }
  .brand-text {
    display: flex;
    flex-direction: column;
    line-height: 1.05;
  }
  .brand-name {
    font-weight: 800;
    font-size: 1.05rem;
    letter-spacing: 0.02em;
  }
  .brand-tag {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.68rem;
    color: hsl(263 85% 72%);
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }
  .header-nav {
    display: flex;
    gap: 0.4rem;
  }
  .nav-link {
    padding: 0.5rem 0.9rem;
    border-radius: 10px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.78rem;
    color: hsl(250 15% 65%);
    text-decoration: none;
    transition: all 0.2s ease;
  }
  .nav-link:hover {
    background: rgba(139, 92, 246, 0.15);
    color: hsl(263 85% 82%);
    text-decoration: none;
  }

  /* --- Main --- */
  .site-main {
    flex: 1;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 1.5rem 4rem;
  }

  /* --- Footer --- */
  .site-footer {
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding: 1.5rem;
    background: rgba(10, 8, 20, 0.5);
  }
  .footer-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: hsl(250 15% 55%);
  }
  .footer-link {
    color: hsl(263 85% 72%);
    text-decoration: none;
  }
  .footer-link:hover {
    text-decoration: underline;
  }
  .footer-sep {
    opacity: 0.4;
  }

  @media (max-width: 640px) {
    .header-inner { padding: 0.75rem 1rem; }
    .site-main { padding: 1rem 1rem 3rem; }
    .nav-link { font-size: 0.72rem; padding: 0.4rem 0.6rem; }
    .brand-name { font-size: 0.95rem; }
    .brand-icon { width: 36px; height: 36px; font-size: 1.1rem; }
  }
</style>
