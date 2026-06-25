'use client';

const GUIDES = [
  {
    title: 'Warden Boss — All Phase Strategies',
    category: 'Boss Guide',
    type: 'danger',
    difficulty: 'Hard',
    excerpt: 'Don\'t panic when facing the Shadow Revenant. Phase 1: keep distance and observe attack patterns, watch for red ground circles. Phase 2: use red zones to dodge fan-shaped AOE. Phase 3: exploit the 3-second vulnerability after the boss\'s ultimate for full burst damage. Flame weapons recommended for sustained burn DOT.',
    link: '/bosses',
  },
  {
    title: 'Flame Warden Kill Guide',
    category: 'Boss Guide',
    type: 'danger',
    difficulty: 'Medium',
    excerpt: 'The Flame Warden in the Molten Dungeon has two phases. Phase 1: mainly uses flame beams and dash attacks — sidestep to dodge. Phase 2: boss summons lava pillars that must be destroyed quickly, otherwise full-screen AOE. Frost builds counter this boss extremely well.',
    link: '/bosses',
  },
  {
    title: 'Void Colossus — Four-Phase Breakdown',
    category: 'Boss Guide',
    type: 'danger',
    difficulty: 'Extreme',
    excerpt: 'The Void Colossus in the Ancient Ruins is the most complex boss fight in the game with four phases. Phase 1: tentacle sweep. Phase 2: void rifts summon adds. Phase 3: total darkness — rely on audio cues. Phase 4: core exposed with only a 15-second damage window.',
    link: '/bosses',
  },
  {
    title: 'Best Beginner Build: Flame + Tempest',
    category: 'Build Guide',
    type: 'gold',
    difficulty: 'Normal',
    excerpt: 'The Flame build is the best pick for new players. Core strategy: stack burn layers with flame-enchanted weapons (3% max HP per second per layer, up to 10 stacks), paired with Tempest axe burst melee. Recommended core weapons: Flame Longsword + Tempest Axe. Key skills: Burn Spread, Flame Shield.',
    link: '/builds',
  },
  {
    title: 'Frost Control Build — Deep Dive',
    category: 'Build Guide',
    type: 'gold',
    difficulty: 'Medium',
    excerpt: 'The Frost build focuses on slows and crowd control. The Ice Staff freezes enemies for 2 seconds at 10 slow stacks, and Frost Nova delivers area freezes. Great against high-mobility bosses. Weakness: low single-target damage — pair with Poison DOT to compensate.',
    link: '/builds',
  },
  {
    title: 'Complete Beginner Tutorial',
    category: 'Beginner Guide',
    type: 'gold',
    difficulty: 'Beginner',
    excerpt: 'First time entering the game? Start here. This tutorial covers basic controls, the card system, weapon acquisition, and your first boss fight. The core mechanic "time moves only when you move" is the soul of the game — every step must be deliberate.',
    link: '/beginners-guide',
  },
  {
    title: 'Speedrun Roadmap: All Bosses in 3 Hours',
    category: 'Speedrun',
    type: 'gold',
    difficulty: 'Medium',
    excerpt: 'Optimal route from the Ruined City to the Throne Chamber. Key milestones: grab Flame Longsword (Shop Node 3), farm 3 Power Cards at the Abandoned Temple, skip optional bosses, push the mainline. Full clear in roughly 3 hours for one ending.',
    link: '/guides',
  },
  {
    title: 'Advanced: No-Hit Boss Strategies',
    category: 'Advanced',
    type: 'gold',
    difficulty: 'Extreme',
    excerpt: 'Going for perfect clears? Here are every boss\'s no-hit windows and dodge frame data. Shadow Revenant dash wind-up: 0.3s. Flame Warden beam active frames: 12–18. Void Colossus core exposure timed to the millisecond.',
    link: '/bosses',
  },
];

const FAQ_SNIPPETS = [
  { q: 'Q: How many endings does the game have?', a: 'A: Demon Lord: Just a Block has 3 endings. The Normal ending unlocks upon clearing the game. The True ending requires collecting all cards. The Hidden ending requires defeating the final boss without using any weapons. Each ending features unique cutscenes.' },
  { q: 'Q: Which platforms are supported?', a: 'A: Currently available on Steam for Windows. Developer YuWave has confirmed a Mac version is in development, expected Q3–Q4 2026. The game runs great on Steam Deck.' },
  { q: 'Q: Is there multiplayer?', a: 'A: The game is a pure single-player experience with no multiplayer mode. However, it supports Steam Workshop — players can create and share custom levels, bosses, and weapon mods. The community already has over 200 high-quality mods.' },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-abyss bg-rune-pattern">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-30 bg-abyss/95 border-b border-border-gold/30 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 lg:px-6 py-3">
          <a href="/" className="font-display text-sm tracking-display-wide text-dark-gold text-shadow-gold">
            Demon Lord Archive
          </a>
          <a href="/" className="font-label text-[10px] uppercase tracking-wider text-parchment-dim hover:text-dark-gold transition-colors">
            &larr; HOME
          </a>
        </div>
      </header>

      <main className="pt-20 pb-32">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          {/* Page Title */}
          <div className="mb-12">
            <p className="font-label text-[10px] uppercase tracking-[0.25em] text-dark-gold mb-3">
              Strategic Archive
            </p>
            <h1 className="font-display text-3xl lg:text-4xl tracking-display text-parchment text-shadow-gold">
              GUIDES &amp; WALKTHROUGHS
            </h1>
            <p className="font-body text-lg text-parchment-dim mt-4 max-w-2xl leading-relaxed">
              The complete strategy collection for Demon Lord: Just a Block. From boss strategies to build combos, from beginner basics to speedrun routes — everything to fuel the Demon Lord\'s revenge. All data below is aggregated from community testing; some values may shift with updates.
            </p>
            <div className="blood-strip mt-6" />
          </div>

          {/* Stats Bar */}
          <div className="grimoire-card p-4 mb-10">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="font-label text-[10px] uppercase tracking-wider text-dark-gold">Guides</span>
                <span className="font-display text-lg text-parchment tabular-nums">8</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-label text-[10px] uppercase tracking-wider text-blood-red">Boss Strats</span>
                <span className="font-display text-lg text-parchment tabular-nums">4</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-label text-[10px] uppercase tracking-wider text-ember">Builds</span>
                <span className="font-display text-lg text-parchment tabular-nums">5+</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-label text-[10px] uppercase tracking-wider text-parchment-dim">Updated</span>
                <span className="font-display text-lg text-parchment tabular-nums">2026.06</span>
              </div>
            </div>
          </div>

          {/* Guide Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {GUIDES.map((guide, i) => (
              <a
                key={i}
                href={guide.link}
                className="grimoire-card p-6 group block transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={guide.type === 'danger' ? 'danger-tag' : 'gold-tag'}>
                    {guide.category}
                  </span>
                  <span className="font-label text-[10px] uppercase tracking-wider text-parchment-dim">
                    {guide.difficulty}
                  </span>
                </div>
                <h3 className="font-display text-base tracking-display text-parchment
                               group-hover:text-dark-gold transition-colors duration-300 mb-3">
                  {guide.title}
                </h3>
                <p className="font-body text-sm text-parchment-dim leading-relaxed">
                  {guide.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="font-label text-[10px] uppercase tracking-wider text-dark-gold
                                   group-hover:translate-x-1 transition-transform duration-300">
                    READ FULL GUIDE &rarr;
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* FAQ Snippets */}
          <section className="mb-16">
            <div className="mb-8">
              <p className="font-label text-[10px] uppercase tracking-[0.25em] text-dark-gold mb-3">
                Common Questions
              </p>
              <h2 className="font-display text-2xl tracking-display text-parchment">
                QUICK FAQ
              </h2>
              <div className="gold-divider mt-4" />
            </div>
            <div className="space-y-4">
              {FAQ_SNIPPETS.map((faq, i) => (
                <div key={i} className="grimoire-card p-6">
                  <p className="font-label text-sm text-dark-gold mb-2">{faq.q}</p>
                  <p className="font-body text-sm text-parchment-dim leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <a
                href="/faq"
                className="inline-flex items-center gap-2 font-label text-[10px] uppercase tracking-[0.2em]
                           text-dark-gold hover:text-dark-gold-dim transition-colors duration-200"
              >
                VIEW ALL FAQ &rarr;
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 pb-20">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="gold-divider mb-6" />
          <div className="mb-6 text-center">
            <p className="font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim mb-3">
              More Roguelike Guides
            </p>
            <a
              href="https://tabletop-tavern-guide.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-dark-gold hover:text-dark-gold-dim transition-colors duration-200"
            >
              Tabletop Tavern Guide
            </a>
          </div>
          <div className="gold-divider mb-6" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <span className="font-label text-[10px] uppercase tracking-wider text-parchment-dim">
                &copy; {new Date().getFullYear()} Demon Lord Archive
              </span>
              <a href="/privacy" className="font-label text-[10px] uppercase tracking-wider text-parchment-dim hover:text-parchment transition-colors">
                PRIVACY
              </a>
              <a href="/terms" className="font-label text-[10px] uppercase tracking-wider text-parchment-dim hover:text-parchment transition-colors">
                TERMS
              </a>
            </div>
            <a
              href="https://afdian.com/a/gameguidehub"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-[10px] uppercase tracking-wider text-dark-gold hover:text-dark-gold-dim transition-colors"
            >
              AFDIAN SUPPORT
            </a>
          </div>
        </div>
      </footer>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-abyss/95 border-t border-border-gold/30 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-center overflow-x-auto">
          {[{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides' }, { label: 'Bosses', href: '/bosses' }, { label: 'Builds', href: '/builds' }, { label: 'Lore', href: '/lore' }, { label: 'FAQ', href: '/faq' }, { label: 'News', href: '/news' }].map((item) => (
            <a key={item.label} href={item.href}
              className="flex flex-col items-center gap-1 px-4 py-2 text-xs font-label uppercase tracking-widest text-parchment-dim hover:text-dark-gold transition-all duration-300 border-t-2 border-transparent hover:border-dark-gold">
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
