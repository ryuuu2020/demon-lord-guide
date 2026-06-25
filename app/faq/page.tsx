'use client';

const FAQ_DATA = [
  {
    q: 'Q: What genre is Demon Lord: Just a Block?',
    a: 'A: It\'s an action roguelite strategy game. The core feature is "time moves only when you move" — every step is an independent tactical decision. It blends action roguelike combat intensity with turn-based strategy depth. Developed by Chinese indie studio YuWave, released April 29, 2026 on Steam.',
    cat: 'Game Basics',
  },
  {
    q: 'Q: How many endings does the game have?',
    a: 'A: Three endings total. ① Normal ending: clear the game after defeating the Former King. ② True ending: collect all 24 cards and defeat the Former King again, exposing the Heroes\' Kingdom truth. ③ Hidden ending: defeat the Former King without equipping any weapon (only headbutt attacks), community completion rate under 1%, extremely difficult.',
    cat: 'Game Basics',
  },
  {
    q: 'Q: Which platforms are supported? When is the Mac version coming?',
    a: 'A: Currently on Steam (Windows), with Steam Deck support. Developer YuWave has confirmed a Mac version in development, expected Q3–Q4 2026. No official news on Switch or console ports yet, but community demand is high.',
    cat: 'Game Basics',
  },
  {
    q: 'Q: Is there multiplayer?',
    a: 'A: No. Demon Lord: Just a Block is a pure single-player experience. However, it supports Steam Workshop — players can create and share custom levels, bosses, and weapon mods. Over 200 community mods already exist with new bosses, weapons, and more.',
    cat: 'Game Basics',
  },
  {
    q: 'Q: Where should beginners start? How to get into the game?',
    a: 'A: Read our Beginner\'s Guide (/beginners-guide). Core tips: ① spend 5 minutes understanding the "move = time advances" mechanic; ② pick Flame Longsword at the first shop; ③ challenge Flame Warden first (easiest boss); ④ follow the Flame+Tempest hybrid build route. Average clear runs: 7-12. Don\'t let deaths discourage you.',
    cat: 'Beginner Tips',
  },
  {
    q: 'Q: Which build is the strongest? What\'s recommended for beginners?',
    a: 'A: The Flame+Tempest hybrid has the highest overall rating (S Tier) and is the top beginner recommendation. Flame provides burn DOT; Tempest delivers AOE clearing. Fast assembly (core weapon at Shop Node 3), high forgiveness. See the Build Compendium (/builds) for full details.',
    cat: 'Builds',
  },
  {
    q: 'Q: Can I switch builds mid-run?',
    a: 'A: Yes. At Shop Nodes or Save Points you can swap weapons and skill loadouts. Prepare two build presets: one for mob clearing (AOE type) and one for boss fights (single-target DOT type). Quick-switch during phase transition animations.',
    cat: 'Builds',
  },
  {
    q: 'Q: How to beat Void Colossus Phase 3?',
    a: 'A: One of the hardest sections in the game. Full-screen darkness with only a tiny visibility radius (~150px). Two solutions: ① bring a Stealth build — invisibility bypasses darkness, allowing direct boss定位; ② practice audio cues — boss attacks have distinct sound patterns (low hum = tentacle attack, sharp hiss = dash). Use Tempest Axe to clear tentacles first.',
    cat: 'Boss Strategy',
  },
  {
    q: 'Q: Do bosses have elemental weaknesses?',
    a: 'A: Yes. Shadow Revenant is weak to fire (burn damage +30%), Flame Warden is weak to frost (freeze duration +50%), Void Colossus is weak to perception/stealth skills, The Former King is weak to crits (crit rate +15%). Flame builds work vs Shadow Revenant and The Former King; Frost builds counter Flame Warden. See Boss Compendium (/bosses).',
    cat: 'Boss Strategy',
  },
  {
    q: 'Q: How to complete Steam achievements?',
    a: 'A: 38 Steam achievements total. Most unlock naturally with progression. Harder ones include: no-hit defeat of any boss (achievement "Perfect Block"), clear the hidden ending (achievement "True Demon Lord"), collect all 24 cards (achievement "Card Master"). Community has compiled full achievement guides — search Steam Guides.',
    cat: 'Achievements',
  },
  {
    q: 'Q: Recommended Steam Workshop mods?',
    a: 'A: Community top picks: Boss Rush Mode (consecutive boss fights, achievement farming), Damage Numbers (display damage digits for build testing), Localization Enhancement Patch (text polish and font optimization), New Weapon Pack (10+ new weapons), Hardcore Mode (enemy HP and damage doubled). Sort by rating in the Steam Workshop.',
    cat: 'Mods & Community',
  },
  {
    q: 'Q: Does the game support Chinese?',
    a: 'A: Yes. Native support for Simplified and Traditional Chinese with fully localized UI and subtitles. Developer YuWave is a Chinese team — translation quality is high. For occasional translation issues, install the community Localization Enhancement mod.',
    cat: 'Game Basics',
  },
];

const CATEGORIES = ['Game Basics', 'Beginner Tips', 'Builds', 'Boss Strategy', 'Achievements', 'Mods & Community'];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-abyss bg-rune-pattern">
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
          <div className="mb-12">
            <p className="font-label text-[10px] uppercase tracking-[0.25em] text-dark-gold mb-3">
              Questions from the Void
            </p>
            <h1 className="font-display text-3xl lg:text-4xl tracking-display text-parchment text-shadow-gold">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <p className="font-body text-lg text-parchment-dim mt-4 max-w-2xl leading-relaxed">
              FAQ for Demon Lord: Just a Block. From game basics to boss strategies, from build combos to achievements. 12+ frequently asked questions with detailed answers. Can\'t find what you need? Join the community discussion.
            </p>
            <div className="gold-divider mt-6" />
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <span key={cat} className="inline-flex items-center px-3 py-1 text-[10px] font-label uppercase tracking-wider text-dark-gold border border-border-gold bg-dark-gold/5">
                {cat}
              </span>
            ))}
          </div>

          {/* FAQ items grouped by category */}
          <div className="space-y-8">
            {CATEGORIES.map((category) => {
              const items = FAQ_DATA.filter((f) => f.cat === category);
              if (items.length === 0) return null;
              return (
                <section key={category}>
                  <h2 className="font-display text-lg tracking-display text-dark-gold mb-4">{category}</h2>
                  <div className="space-y-3">
                    {items.map((faq, i) => (
                      <div key={i} className="grimoire-card p-6">
                        <p className="font-label text-sm text-dark-gold mb-2">{faq.q}</p>
                        <p className="font-body text-sm text-parchment-dim leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          {/* More questions */}
          <section className="mt-16 text-center">
            <div className="grimoire-card p-8">
              <h2 className="font-display text-xl tracking-display text-dark-gold mb-4">DIDN&apos;T FIND YOUR ANSWER?</h2>
              <p className="font-body text-sm text-parchment-dim leading-relaxed max-w-lg mx-auto mb-6">
                Check the Boss Compendium, Build Guides, or Beginner\'s Guide for more detailed info. Or join the player community (Steam Community, Discord) to ask veteran players directly.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/bosses" className="font-label text-[10px] uppercase tracking-[0.2em] text-blood-red hover:text-blood-red-dim transition-colors">
                  BOSS COMPENDIUM &rarr;
                </a>
                <a href="/builds" className="font-label text-[10px] uppercase tracking-[0.2em] text-dark-gold hover:text-dark-gold-dim transition-colors">
                  BUILD GUIDES &rarr;
                </a>
                <a href="/beginners-guide" className="font-label text-[10px] uppercase tracking-[0.2em] text-ember hover:text-embers/70 transition-colors">
                  BEGINNER&apos;S GUIDE &rarr;
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="relative z-10 pb-20">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="gold-divider mb-6" />
          <div className="mb-6 text-center">
            <p className="font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim mb-3">More Roguelike Guides</p>
            <a href="https://tabletop-tavern-guide.vercel.app" target="_blank" rel="noopener noreferrer"
              className="font-body text-sm text-dark-gold hover:text-dark-gold-dim transition-colors duration-200">Tabletop Tavern Guide</a>
          </div>
          <div className="gold-divider mb-6" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <span className="font-label text-[10px] uppercase tracking-wider text-parchment-dim">
                &copy; {new Date().getFullYear()} Demon Lord Archive
              </span>
              <a href="/privacy" className="font-label text-[10px] uppercase tracking-wider text-parchment-dim hover:text-parchment transition-colors">PRIVACY</a>
              <a href="/terms" className="font-label text-[10px] uppercase tracking-wider text-parchment-dim hover:text-parchment transition-colors">TERMS</a>
            </div>
            <a href="https://afdian.com/a/gameguidehub" target="_blank" rel="noopener noreferrer"
              className="font-label text-[10px] uppercase tracking-wider text-dark-gold hover:text-dark-gold-dim transition-colors">AFDIAN SUPPORT</a>
          </div>
        </div>
      </footer>

      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-abyss/95 border-t border-border-gold/30 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-center overflow-x-auto">
          {[{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides' }, { label: 'Bosses', href: '/bosses' }, { label: 'Builds', href: '/builds' }, { label: 'Lore', href: '/lore' }, { label: 'FAQ', href: '/faq' }, { label: 'News', href: '/news' }].map((item) => (
            <a key={item.label} href={item.href} className="flex flex-col items-center gap-1 px-4 py-2 text-xs font-label uppercase tracking-widest text-parchment-dim hover:text-dark-gold transition-all duration-300 border-t-2 border-transparent hover:border-dark-gold">
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
