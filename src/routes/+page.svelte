<script lang="ts">
  import { forumConfig } from '$lib/config';

  // Replace this with your template's real category loader.
  // For now this is empty so the UI renders.
  type Category = { slug: string; name: string; description?: string; count?: number };
  let categories: Category[] = [];
  let loading = false;
  let error: string | null = null;

  const topicIcons: Record<string, string> = {
    general: '💬',
    help: '🆘',
    showcase: '🚀',
    announcements: '📢',
    ideas: '💡',
    bugs: '🐛'
  };
</script>

<svelte:head>
  <title>{forumConfig.site.name} — {forumConfig.site.description}</title>
</svelte:head>

<!-- HERO -->
<section class="hero">
  <div class="hero-badge">
    <span class="pulse-dot"></span>
    Live community · Powered by GitHub Discussions
  </div>
  <h1 class="hero-title">
    Talk code.<br />
    <span class="hero-accent">Ship faster.</span>
  </h1>
  <p class="hero-sub">
    A forum for developers, tinkerers, and builders. Share ideas, ask questions, and discuss what you're making.
  </p>
  <div class="hero-cta">
    <a href="#topics" class="btn-primary">
      Browse topics
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>
    <a
      href="https://github.com/TechAdityaBRO/Codewebsiteblog/discussions"
      target="_blank"
      rel="noopener noreferrer"
      class="btn-ghost"
    >
      Open on GitHub
    </a>
  </div>
</section>

<!-- TOPICS -->
<section id="topics" class="topics-section">
  <div class="section-head">
    <div>
      <div class="section-eyebrow">Categories</div>
      <h2 class="section-title">Browse topics</h2>
    </div>
    <div class="section-meta">{categories.length} topics</div>
  </div>

  {#if loading}
    <div class="topic-grid">
      {#each Array(6) as _}
        <div class="topic-card skeleton"></div>
      {/each}
    </div>
  {:else if error}
    <div class="empty-state">
      <div class="empty-icon">🔒</div>
      <h3>Sign in to view topics</h3>
      <p>{error}</p>
    </div>
  {:else if categories.length === 0}
    <div class="empty-state">
      <div class="empty-icon">📭</div>
      <h3>No topics yet</h3>
      <p>Create a Discussion category on GitHub to get started.</p>
      <a
        href="https://github.com/TechAdityaBRO/Codewebsiteblog/discussions"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-primary"
        style="margin-top:1rem;"
      >
        Create category
      </a>
    </div>
  {:else}
    <div class="topic-grid">
      {#each categories as cat, i}
        <a href={`/t/${cat.slug}`} class="topic-card" style={`--delay:${i * 60}ms`}>
          <div class="topic-icon">
            {topicIcons[cat.slug] ?? '💭'}
          </div>
          <div class="topic-body">
            <h3 class="topic-name">{cat.name}</h3>
            {#if cat.description}
              <p class="topic-desc">{cat.description}</p>
            {/if}
          </div>
          <div class="topic-footer">
            <span class="topic-count">
              {cat.count ?? 0}
              {cat.count === 1 ? 'post' : 'posts'}
            </span>
            <span class="topic-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </a>
      {/each}
    </div>
  {/if}
</section>

<style>
  /* HERO */
  .hero {
    text-align: center;
    padding: 4rem 0 3rem;
  }
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.9rem;
    border-radius: 999px;
    border: 1px solid rgba(139, 92, 246, 0.35);
    background: rgba(139, 92, 246, 0.08);
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.05em;
    color: hsl(263 85% 75%);
    margin-bottom: 1.5rem;
  }
  .pulse-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: hsl(140 70% 55%);
    box-shadow: 0 0 10px hsl(140 70% 55%);
    animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.3); }
  }
  .hero-title {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 900;
    line-height: 1.05;
    letter-spacing: -0.04em;
    margin: 0 0 1.25rem;
  }
  .hero-accent {
    background: linear-gradient(135deg, hsl(263 85% 70%), hsl(220 85% 65%));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-style: italic;
    font-weight: 400;
  }
  .hero-sub {
    font-size: clamp(1rem, 1.5vw, 1.15rem);
    color: hsl(250 15% 65%);
    max-width: 600px;
    margin: 0 auto 2rem;
    line-height: 1.65;
  }
  .hero-cta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
  }
  .btn-primary,
  .btn-ghost {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 12px;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .btn-primary {
    background: linear-gradient(135deg, hsl(263 85% 65%), hsl(263 85% 50%));
    color: white;
    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.4);
  }
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(139, 92, 246, 0.55);
    text-decoration: none;
  }
  .btn-ghost {
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.04);
    color: hsl(250 20% 90%);
  }
  .btn-ghost:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(139, 92, 246, 0.4);
    transform: translateY(-2px);
    text-decoration: none;
  }

  /* TOPICS */
  .topics-section {
    margin-top: 3rem;
  }
  .section-head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }
  .section-eyebrow {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: hsl(263 85% 70%);
    margin-bottom: 0.25rem;
  }
  .section-title {
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    margin: 0;
  }
  .section-meta {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: hsl(250 15% 55%);
  }

  .topic-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
  }
  .topic-card {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    padding: 1.5rem;
    background: hsl(250 25% 7%);
    border: 1px solid hsl(250 25% 16%);
    border-radius: 18px;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    position: relative;
    overflow: hidden;
  }
  .topic-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, transparent 40%, transparent 60%, rgba(139, 92, 246, 0.04) 100%);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .topic-card:hover {
    transform: translateY(-4px);
    border-color: rgba(139, 92, 246, 0.5);
    background: hsl(250 25% 9%);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(139, 92, 246, 0.2);
    text-decoration: none;
  }
  .topic-card:hover::before {
    opacity: 1;
  }
  .topic-icon {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: rgba(139, 92, 246, 0.12);
    font-size: 1.35rem;
    border: 1px solid rgba(139, 92, 246, 0.2);
  }
  .topic-body {
    flex: 1;
  }
  .topic-name {
    font-size: 1.15rem;
    font-weight: 700;
    margin: 0 0 0.25rem;
    color: hsl(250 20% 97%);
  }
  .topic-desc {
    font-size: 0.85rem;
    color: hsl(250 15% 65%);
    margin: 0;
    line-height: 1.5;
  }
  .topic-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.75rem;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    margin-top: 0.25rem;
  }
  .topic-count {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    color: hsl(250 15% 55%);
  }
  .topic-arrow {
    color: hsl(263 85% 75%);
    transition: transform 0.25s;
  }
  .topic-card:hover .topic-arrow {
    transform: translateX(4px);
  }

  /* Skeleton */
  .topic-card.skeleton {
    height: 180px;
    background: linear-gradient(90deg, hsl(250 25% 7%), hsl(250 25% 11%), hsl(250 25% 7%));
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  /* Empty state */
  .empty-state {
    text-align: center;
    padding: 4rem 1.5rem;
    background: hsl(250 25% 7%);
    border: 1px dashed hsl(250 25% 20%);
    border-radius: 18px;
  }
  .empty-icon {
    font-size: 2.5rem;
    margin-bottom: 0.75rem;
  }
  .empty-state h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0 0 0.5rem;
  }
  .empty-state p {
    color: hsl(250 15% 65%);
    margin: 0;
    font-size: 0.9rem;
  }

  @media (max-width: 640px) {
    .hero { padding: 2.5rem 0 2rem; }
    .topic-grid { grid-template-columns: 1fr; }
  }
</style>
