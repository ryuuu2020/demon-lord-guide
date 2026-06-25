'use client';

import { useState } from 'react';

/* ============================================
   Template B: Dark Fantasy Epic
   Demon Lord: Just a Block — Full-Screen Hero
   ============================================ */

const HUD_ITEMS = [
  { label: 'Home', icon: '◆', href: '/', active: true },
  { label: 'Guides', icon: '◇', href: '/guides' },
  { label: 'Bosses', icon: '◆', href: '/bosses' },
  { label: 'Builds', icon: '◇', href: '/builds' },
  { label: 'Lore', icon: '◆', href: '/lore' },
  { label: 'FAQ', icon: '◇', href: '/faq' },
  { label: 'News', icon: '◆', href: '/news' },
];

const FEATURED_GUIDES = [
  {
    title: 'Warden Boss — All Phase Strategies',
    excerpt: 'Phase 1: keep distance and observe attack patterns. Phase 2: use red zones to dodge AOE. Phase 3: exploit the 3-second vulnerability window for full burst damage.',
    tag: 'BOSS GUIDE',
    tagStyle: 'danger',
    difficulty: 'HARD',
  },
  {
    title: 'Best Beginner Build: Flame + Tempest',
    excerpt: 'The Flame build provides sustained DOT damage, while the Tempest weapon delivers high burst melee output — the ideal combo for new players clearing the campaign.',
    tag: 'BUILD GUIDE',
    tagStyle: 'gold',
    difficulty: 'NORMAL',
  },
  {
    title: 'Speedrun Roadmap: All Bosses in 3 Hours',
    excerpt: 'Optimal route planning from the first floor to the final boss, including key item acquisition order and shop node selection strategies.',
    tag: 'WALKTHROUGH',
    tagStyle: 'gold',
    difficulty: 'NORMAL',
  },
];

const BOSS_ENTRIES = [
  { name: 'Shadow Revenant', location: 'Ruined City Depths', phase: '3 Phases' },
  { name: 'Flame Warden', location: 'Molten Dungeon', phase: '2 Phases' },
  { name: 'Void Colossus', location: 'Ancient Ruins', phase: '4 Phases' },
  { name: 'The Former King', location: 'Throne Chamber', phase: '3 Phases' },
];

const LORE_ENTRIES = [
  { title: 'The Fall of the Demon Lord', snippet: 'Once the ruler of the Shadow Realm, the Demon Lord was defeated by heroes — only a single head survived' },
  { title: 'The Power of Cards', snippet: 'The Demon Lord discovered ancient card magic, regaining power by collecting soul cards' },
  { title: 'Whose Justice?', snippet: 'Were the heroes truly righteous — or did they simply seek power?' },
];

export default function HomePage() {
  const [activeHud, setActiveHud] = useState('Home');

  return (
    <div className="min-h-screen bg-abyss bg-rune-pattern">
      {/* ===== Floating top logo ===== */}
      <div className="fixed top-0 left-0 right-0 z-30 pointer-events-none">
        <div className="flex justify-center pt-6">
          <div className="pointer-events-auto flex flex-col items-center">
            <h1 className="font-display text-lg tracking-display-wide text-dark-gold text-shadow-gold animate-flicker">
              Demon Lord Archive
            </h1>
            <div className="gold-divider mt-3 w-48" />
          </div>
        </div>
      </div>

      {/* ===== Hero Section ===== */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4">
        {/* Atmospheric overlay */}
        <div className="absolute inset-0 bg-abyss-gradient pointer-events-none" />

        {/* Background smoke effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-dark-gold/3 to-transparent animate-smoke-rise" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="corner-ornament p-12">
            {/* Game title */}
            <p className="font-label text-[10px] uppercase tracking-[0.3em] text-parchment-dim mb-6">
              DEMON LORD: JUST A BLOCK
            </p>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-display
                           text-dark-gold text-shadow-gold leading-tight mb-6">
              Every Step Is a Tactical Decision
            </h2>

            <p className="font-body text-lg lg:text-xl text-parchment-dim leading-relaxed max-w-xl mx-auto mb-10">
              Complete strategy guide for the action roguelite where time moves only when you move. From boss strategies to build combos — reclaim the throne.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/guides"
                className="inline-flex items-center gap-2 px-8 py-3
                           font-label text-xs uppercase tracking-[0.2em]
                           text-abyss bg-dark-gold
                           hover:bg-dark-gold-dim transition-colors duration-300"
              >
                ENTER THE ARCHIVE
              </a>
              <a
                href="/lore"
                className="inline-flex items-center gap-2 px-8 py-3
                           font-label text-xs uppercase tracking-[0.2em]
                           text-dark-gold border border-border-gold
                           hover:bg-dark-gold/10 transition-colors duration-300"
              >
                READ THE LORE
              </a>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-abyss to-transparent pointer-events-none" />
      </section>

      {/* ===== Content Sections ===== */}
      <main className="relative z-10 pb-32">
        <div className="max-w-5xl mx-auto px-4 lg:px-6 space-y-24">

          {/* ===== Featured Guides ===== */}
          <section>
            <div className="mb-10">
              <p className="font-label text-[10px] uppercase tracking-[0.25em] text-dark-gold mb-3">
                Curated Knowledge
              </p>
              <h2 className="font-display text-2xl lg:text-3xl tracking-display text-parchment">
                FEATURED GUIDES
              </h2>
              <div className="blood-strip mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {FEATURED_GUIDES.map((guide, i) => (
                <a
                  key={i}
                  href={`/guides/${guide.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="grimoire-card p-6 group block transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={guide.tagStyle === 'danger' ? 'danger-tag' : 'gold-tag'}>
                      {guide.tag}
                    </span>
                    <span className="font-label text-[10px] uppercase tracking-wider text-parchment-dim">
                      {guide.difficulty}
                    </span>
                  </div>
                  <h3 className="font-display text-base tracking-display text-parchment
                                 group-hover:text-dark-gold transition-colors duration-300 mb-3">
                    {guide.title}
                  </h3>
                  <p className="font-body text-sm text-parchment-dim leading-relaxed line-clamp-3">
                    {guide.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="font-label text-[10px] uppercase tracking-wider text-dark-gold
                                     group-hover:translate-x-1 transition-transform duration-300">
                      READ &rarr;
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* ===== Boss Compendium ===== */}
          <section>
            <div className="mb-10">
              <p className="font-label text-[10px] uppercase tracking-[0.25em] text-blood-red mb-3">
                Marked for Death
              </p>
              <h2 className="font-display text-2xl lg:text-3xl tracking-display text-parchment">
                BOSS COMPENDIUM
              </h2>
              <div className="blood-strip mt-4" />
            </div>

            <div className="grimoire-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border-gold">
                      <th className="text-left py-4 px-6 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">
                        Entity
                      </th>
                      <th className="text-left py-4 px-6 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">
                        Domain
                      </th>
                      <th className="text-right py-4 px-6 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">
                        Phases
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {BOSS_ENTRIES.map((boss, i) => (
                      <tr
                        key={i}
                        className={`${
                          i < BOSS_ENTRIES.length - 1 ? 'border-b border-border-gold/20' : ''
                        } hover:bg-dark-gold/5 transition-colors duration-200`}
                      >
                        <td className="py-4 px-6">
                          <a
                            href={`/bosses/${boss.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="font-display text-sm tracking-display text-parchment
                                       hover:text-blood-red transition-colors duration-200"
                          >
                            {boss.name}
                          </a>
                        </td>
                        <td className="py-4 px-6">
                          <span className="font-body text-sm text-parchment-dim italic">
                            {boss.location}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <span className="font-label text-xs tabular-nums text-parchment-dim">
                            {boss.phase}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-center mt-6">
              <a
                href="/bosses"
                className="inline-flex items-center gap-2 font-label text-[10px] uppercase tracking-[0.2em]
                           text-blood-red hover:text-blood-red-dim transition-colors duration-200"
              >
                VIEW ALL BOSSES &rarr;
              </a>
            </div>
          </section>

          {/* ===== Lore Fragments ===== */}
          <section>
            <div className="mb-10">
              <p className="font-label text-[10px] uppercase tracking-[0.25em] text-dark-gold mb-3">
                Whispers from the Void
              </p>
              <h2 className="font-display text-2xl lg:text-3xl tracking-display text-parchment">
                LORE FRAGMENTS
              </h2>
              <div className="gold-divider mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {LORE_ENTRIES.map((entry, i) => (
                <a
                  key={i}
                  href={`/lore/${entry.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="relative p-6 border border-border-gold/15
                             hover:border-border-gold/40 transition-all duration-300
                             group bg-abyss-elevated"
                >
                  <div className="absolute top-3 right-3 text-dark-gold/20 font-display text-5xl leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display text-sm tracking-display text-parchment
                                 group-hover:text-dark-gold transition-colors duration-300 mb-3">
                    {entry.title}
                  </h3>
                  <p className="font-body text-sm text-parchment-dim leading-relaxed italic line-clamp-3">
                    &ldquo;{entry.snippet}&rdquo;
                  </p>
                </a>
              ))}
            </div>
          </section>

          {/* ===== Community CTA ===== */}
          <section className="text-center">
            <div className="blood-strip mb-10" />
            <h2 className="font-display text-2xl lg:text-3xl tracking-display text-parchment mb-6">
              JOIN THE COVENANT
            </h2>
            <p className="font-body text-lg text-parchment-dim max-w-lg mx-auto mb-8">
              Join the strategy community — share your builds and boss-clear videos. Revenge is slow alone; grow stronger together.
            </p>
            <a
              href="https://afdian.com/a/gameguidehub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3
                         font-label text-xs uppercase tracking-[0.2em]
                         text-abyss bg-dark-gold
                         hover:bg-dark-gold-dim transition-colors duration-300"
            >
              ❤️ Support Us
            </a>
          </section>

        </div>
      </main>

      {/* ===== Bottom HUD Navigation ===== */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-abyss/95 border-t border-border-gold/30 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-center overflow-x-auto">
          {HUD_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActiveHud(item.label)}
              className={`hud-nav-item ${activeHud === item.label ? 'active' : ''}`}
            >
              <span className="text-[9px] opacity-60">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* ===== Footer (above HUD) ===== */}
      <footer className="relative z-10 pb-20">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="gold-divider mb-6" />
          {/* More Roguelike Guides cross-link */}
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
    </div>
  );
}
