/* ============================================
   Demon Lord: Just a Block — Home Page
   Page content only — chrome in layout.tsx
   ============================================ */

const FEATURED_GUIDES = [
  {
    title: 'Boss Strategies — Area Progression Guide',
    excerpt: 'Complete area-by-area boss guide covering Dark Dragon Forest, Evernight Cave, Frozen Snow Mountain, Royal City Dungeon, Slime Island, Novice Village, and Demon God Heart. Learn each area\'s boss patterns and hidden encounters.',
    tag: 'BOSS GUIDE',
    tagStyle: 'danger-tag',
    difficulty: 'ALL LEVELS',
  },
  {
    title: 'Weapon Unlock Guide — All 14 Weapons',
    excerpt: 'Learn how to unlock every weapon: Lancelot, Lightning Sparrow, Eye Laser Cannon, Skull Fist, Divine Crossbow, Diamond Shield, Shadow Dagger, Original Fantasy, Demon God Sword, Ham Bat, Golden Skull, Blood Blade, Fish Tail, and Death Scythe.',
    tag: 'WEAPON GUIDE',
    tagStyle: 'gold-tag',
    difficulty: 'NORMAL',
  },
  {
    title: 'Card Synthesis — Complete Recipe List',
    excerpt: 'The game features over 200 ability cards. Learn the synthesis recipes to create powerful color-tier abilities like Bat Machine Gun, Burning Legion, and Lightning Bats.',
    tag: 'GUIDE',
    tagStyle: 'gold-tag',
    difficulty: 'NORMAL',
  },
];

const BOSS_ENTRIES = [
  { name: 'Forest King', location: 'Dark Dragon Forest', area: 'Area 1' },
  { name: 'Cave King', location: 'Evernight Cave', area: 'Area 2' },
  { name: 'Snow Mountain King', location: 'Frozen Snow Mountain', area: 'Area 3' },
  { name: 'Dungeon King', location: 'Royal City Dungeon', area: 'Area 4' },
];

const KEY_INFO = [
  { title: 'Step-Based Combat', snippet: 'The world only moves when you do. Every step is a tactical decision — plan your positioning, time your attacks, and parry enemy moves.' },
  { title: '14 Unique Weapons', snippet: 'From the Lancelot greatsword to the Death Scythe, each weapon offers a distinct playstyle. Unlock them through achievements and hidden encounters.' },
  { title: 'Three Endings', snippet: 'Normal ending (clear the game), True ending (collect all 5 demon soul fragments), and Hidden ending (extreme challenge). Only 11.5% of players have achieved the True ending.' },
];

export default function HomePage() {
  return (
    <div className="bg-abyss bg-rune-pattern">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-4">
        <img
          src="/hero.jpg"
          alt="Demon Lord: Just a Block"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-abyss via-transparent to-abyss pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <p className="font-label text-[10px] uppercase tracking-[0.3em] text-parchment-dim mb-6">
            DEMON LORD: JUST A BLOCK
          </p>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-display
                         text-dark-gold text-shadow-gold leading-tight mb-6">
            Every Step Is a Tactical Decision
          </h1>

          <p className="font-body text-lg lg:text-xl text-parchment-dim leading-relaxed max-w-xl mx-auto mb-10">
            Complete strategy guide for the action roguelite where time moves only when you move.
            Boss strategies, weapon unlocks, card synthesis recipes, and achievement guides.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/guides"
              className="inline-flex items-center gap-2 px-8 py-3
                         font-label text-xs uppercase tracking-[0.2em]
                         text-abyss bg-dark-gold
                         hover:bg-dark-gold-dim transition-colors duration-300"
            >
              ENTER THE GUIDE
            </a>
            <a
              href="/bosses"
              className="inline-flex items-center gap-2 px-8 py-3
                         font-label text-xs uppercase tracking-[0.2em]
                         text-dark-gold border border-border-gold
                         hover:bg-dark-gold/10 transition-colors duration-300"
            >
              BOSS STRATEGIES
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-abyss to-transparent pointer-events-none" />
      </section>

      {/* Content Sections */}
      <section className="relative z-10 pb-16">
        <div className="max-w-5xl mx-auto px-4 lg:px-6 space-y-16">

          {/* Featured Guides */}
          <div>
            <div className="mb-8">
              <p className="font-label text-[10px] uppercase tracking-[0.25em] text-dark-gold mb-3">
                Curated Knowledge
              </p>
              <h2 className="font-display text-2xl lg:text-3xl tracking-display text-parchment">
                FEATURED GUIDES
              </h2>
              <div className="w-24 h-px bg-blood-red mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {FEATURED_GUIDES.map((guide, i) => (
                <a
                  key={i}
                  href={`/${guide.tag === 'BOSS GUIDE' ? 'bosses' : guide.tag === 'WEAPON GUIDE' ? 'weapons' : 'guides'}`}
                  className="border border-border-gold p-6 hover:border-dark-gold/50 transition-all duration-300 bg-abyss-elevated group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={guide.tagStyle}>
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
                  <div className="mt-4">
                    <span className="font-label text-[10px] uppercase tracking-wider text-dark-gold
                                     group-hover:translate-x-1 transition-transform duration-300 inline-block">
                      READ &rarr;
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Boss Compendium Preview */}
          <div>
            <div className="mb-8">
              <p className="font-label text-[10px] uppercase tracking-[0.25em] text-blood-red mb-3">
                Marked for Death
              </p>
              <h2 className="font-display text-2xl lg:text-3xl tracking-display text-parchment">
                BOSS COMPENDIUM (Preview)
              </h2>
              <div className="w-24 h-px bg-blood-red mt-4" />
            </div>

            <div className="border border-border-gold overflow-hidden bg-abyss-elevated">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border-gold">
                      <th className="text-left py-4 px-6 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">
                        Boss
                      </th>
                      <th className="text-left py-4 px-6 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">
                        Area
                      </th>
                      <th className="text-right py-4 px-6 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">
                        Order
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {BOSS_ENTRIES.map((boss, i) => (
                      <tr
                        key={i}
                        className={`${i < BOSS_ENTRIES.length - 1 ? 'border-b border-border-gold/20' : ''} hover:bg-dark-gold/5 transition-colors`}
                      >
                        <td className="py-4 px-6">
                          <a
                            href="/bosses"
                            className="font-display text-sm tracking-display text-parchment hover:text-blood-red transition-colors"
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
                            {boss.area}
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
                           text-blood-red hover:text-blood-red-dim transition-colors"
              >
                VIEW ALL BOSSES &rarr;
              </a>
            </div>
          </div>

          {/* Key Info Cards */}
          <div>
            <div className="mb-8">
              <p className="font-label text-[10px] uppercase tracking-[0.25em] text-dark-gold mb-3">
                What to Know
              </p>
              <h2 className="font-display text-2xl lg:text-3xl tracking-display text-parchment">
                GAME OVERVIEW
              </h2>
              <div className="w-24 h-px bg-blood-red mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {KEY_INFO.map((entry, i) => (
                <div
                  key={i}
                  className="border border-border-gold p-6 bg-abyss-elevated hover:border-dark-gold/40 transition-all duration-300"
                >
                  <div className="absolute -mt-9 ml-2 text-dark-gold/20 font-display text-5xl leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display text-sm tracking-display text-parchment text-dark-gold mb-3 mt-4">
                    {entry.title}
                  </h3>
                  <p className="font-body text-sm text-parchment-dim leading-relaxed italic">
                    &ldquo;{entry.snippet}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Community CTA */}
          <div className="text-center pt-8">
            <div className="w-full h-px bg-border-gold/30 mb-8" />
            <h2 className="font-display text-2xl lg:text-3xl tracking-display text-parchment mb-6">
              JOIN THE COMMUNITY
            </h2>
            <p className="font-body text-lg text-parchment-dim max-w-lg mx-auto mb-8">
              Share your builds, boss-clear strategies, and achievement progress.
              This is an unofficial fan guide maintained by the community.
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
          </div>

        </div>
      </section>
    </div>
  );
}
