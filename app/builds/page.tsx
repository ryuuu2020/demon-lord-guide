'use client';

const BUILDS = [
  {
    name: 'Flame Sovereign',
    difficulty: 'Beginner',
    coreWeapons: 'Flame Longsword · Flame Staff',
    keySkills: 'Burn Spread · Flame Shield · Scorched Earth',
    desc: 'The Flame build is the top recommendation for new players. Core mechanic: burn layer stacking — each burn layer deals 3% max HP per second as additional damage, stacking up to 10 layers. The Flame Longsword applies 2 burn layers per hit; the Flame Staff\'s ranged fireballs apply 1 layer but offer greater range.',
    pros: 'Extremely efficient mob clearing, sustained DOT boss damage, easy gear acquisition',
    cons: 'Weak against fire-immune enemies, melee requires close-range risk',
    bestFor: 'Shadow Revenant, speedrun map clearing',
    rating: 'S Tier',
    color: 'ember',
  },
  {
    name: 'Frost Monarch',
    difficulty: 'Medium',
    coreWeapons: 'Ice Staff · Frost Bow',
    keySkills: 'Frost Nova · Freeze Domain · Shatter',
    desc: 'The Frost build focuses on control and slows. Core mechanic: freeze — normal attacks stack slow layers (-10% move speed per layer, max 10), and at 10 stacks the target freezes for 2 seconds. The Ice Staff\'s ice cone barrage applies 2 slow layers per hit; the Frost Bow\'s piercing arrows slow multiple targets simultaneously.',
    pros: 'Exceptional crowd control, stable boss fights, safe ranged play',
    cons: 'Lower single-target damage, poor performance vs Void Colossus Phase 3',
    bestFor: 'Flame Warden, high-mobility bosses',
    rating: 'A Tier',
    color: 'dark-gold',
  },
  {
    name: 'Tempest Vanguard',
    difficulty: 'Normal',
    coreWeapons: 'Tempest Axe · Storm Sword',
    keySkills: 'Whirlwind · Storm Eye · Cleave',
    desc: 'The Tempest build is the melee AOE king. The Tempest Axe\'s charged attack releases a 360° whirlwind covering roughly half the screen, one-shotting all small mobs. Storm Eye creates a pulling vortex that drags nearby enemies in for whirlwind clearing. Excellent for map farming and add clearing.',
    pros: 'Highest AOE damage, #1 clearing efficiency, satisfying impact feel',
    cons: 'Average boss single-target DPS, cannot move during charge, fragile',
    bestFor: 'Void Colossus Phase 2, speedrun clearing',
    rating: 'A Tier',
    color: 'ember',
  },
  {
    name: 'Venom Shadow',
    difficulty: 'Hard',
    coreWeapons: 'Poison Dagger · Corrosion Staff',
    keySkills: 'Toxic Cloud · Poison Amplify · Venom Burst',
    desc: 'The Poison build specializes in sustained damage. Poison stacks have no cap, each layer dealing 1.5% max HP per second. The Poison Dagger attacks extremely fast (3 hits/s), applying 2 poison layers per hit. The Corrosion Staff releases a toxic cloud covering a 300px area, continuously stacking poison on enemies within.',
    pros: 'Highest sustained single-target DOT ceiling, ideal for boss endurance fights',
    cons: 'No burst, slow mob clearing, difficult gear acquisition',
    bestFor: 'The Former King, Void Colossus',
    rating: 'A Tier',
    color: 'blood-red',
  },
  {
    name: 'Void Walker',
    difficulty: 'Extreme',
    coreWeapons: 'Shadow Blade · Void Bow',
    keySkills: 'Shadow Step · Invisibility · Backstab',
    desc: 'The Stealth build is a high-skill specialty. While invisible, you can pass through enemies undetected, and backstab attacks deal 300% damage. Shadow Step provides brief invincibility frames (0.5s) for dodge-attacking. Special ability: even in the Void Colossus Phase 3 full-screen darkness, you can locate the boss directly.',
    pros: 'Extremely high skill ceiling with i-frames, bypasses darkness mechanics, terrifying burst',
    cons: 'Requires extreme precision, one mistake = death, hardest gear to acquire',
    bestFor: 'Void Colossus Phase 3, no-hit challenge runs',
    rating: 'S Tier',
    color: 'parchment-dim',
  },
  {
    name: 'Inferno Tempest (Flame + Tempest Hybrid)',
    difficulty: 'Normal',
    coreWeapons: 'Flame Longsword · Tempest Axe',
    keySkills: 'Burn Spread · Whirlwind · Flame Shield',
    desc: 'Flame + Tempest is the most popular beginner hybrid build. The Flame Longsword stacks burn layers for sustained DOT, while the Tempest Axe clears mobs and delivers AOE. Weapon-switch timing is key — Tempest for mobs, Flame for bosses. Both weapons are available early (Shop Node 3 and Abandoned Temple), fast to assemble.',
    pros: 'Versatile, fast assembly, high forgiveness margin',
    cons: 'Weapon switching takes practice, lower ceiling than specialized builds',
    bestFor: 'All bosses general use, beginner clear首选',
    rating: 'S Tier',
    color: 'dark-gold',
  },
];

const BUILD_COMPARISON = [
  { name: 'Flame', difficulty: 'Beginner', aoe: 'High', single: 'High', control: 'Low', survival: 'Medium', rating: 'S' },
  { name: 'Frost', difficulty: 'Medium', aoe: 'Medium', single: 'Medium', control: 'Very High', survival: 'High', rating: 'A' },
  { name: 'Tempest', difficulty: 'Normal', aoe: 'Very High', single: 'Medium', control: 'Low', survival: 'Low', rating: 'A' },
  { name: 'Poison', difficulty: 'Hard', aoe: 'Low', single: 'Very High', control: 'Medium', survival: 'Medium', rating: 'A' },
  { name: 'Stealth', difficulty: 'Extreme', aoe: 'Low', single: 'Very High', control: 'High', survival: 'Low', rating: 'S' },
  { name: 'Flame+Tempest', difficulty: 'Normal', aoe: 'Very High', single: 'Very High', control: 'Medium', survival: 'High', rating: 'S' },
];

const FAQ_SNIPPETS = [
  { q: 'Q: What build should beginners pick?', a: 'A: Strongly recommend the Flame build or the Flame+Tempest hybrid. Both have easy gear acquisition, simple mechanics, and high forgiveness. The Flame Longsword core weapon is available at Shop Node 3, enabling fast assembly. Avoid the Stealth build as a beginner.' },
  { q: 'Q: Can I switch builds mid-run?', a: 'A: Yes. At Shop Nodes or save points you can swap weapons and skill loadouts. Prepare at least two build presets: one AOE clearing set (Tempest or Flame) and one boss-fighting set (elemental counter based on boss weakness).' },
  { q: 'Q: Which build has the highest damage output?', a: 'A: Highest single-target is the Poison build (unlimited DOT stacking). Highest AOE is the Tempest build. The overall top-rated hybrid is Flame+Tempest — its S-tier rating comes from over 500 community player votes.' },
];

export default function BuildsPage() {
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
              Arsenal of Chaos
            </p>
            <h1 className="font-display text-3xl lg:text-4xl tracking-display text-parchment text-shadow-gold">
              BUILD COMPENDIUM
            </h1>
            <p className="font-body text-lg text-parchment-dim mt-4 max-w-2xl leading-relaxed">
              Complete build guide for Demon Lord: Just a Block. Covers 6 primary builds spanning Flame, Frost, Tempest, Poison, Stealth, and Hybrid archetypes. Core weapons, key skills, pros/cons, and ideal boss matchups for each. Data sourced from community testing and vote statistics.
            </p>
            <div className="blood-strip mt-6" />
          </div>

          {/* Comparison Table */}
          <div className="mb-12">
            <h2 className="font-display text-xl tracking-display text-parchment mb-4">Build Quick Comparison</h2>
            <div className="grimoire-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border-gold">
                      <th className="text-left py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">Build</th>
                      <th className="text-center py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">Difficulty</th>
                      <th className="text-center py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">AOE</th>
                      <th className="text-center py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">Single</th>
                      <th className="text-center py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">Control</th>
                      <th className="text-center py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">Survival</th>
                      <th className="text-center py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {BUILD_COMPARISON.map((b, i) => (
                      <tr key={i} className={`${i < BUILD_COMPARISON.length - 1 ? 'border-b border-border-gold/20' : ''} hover:bg-dark-gold/5 transition-colors`}>
                        <td className="py-3 px-4 font-display text-sm text-parchment">{b.name}</td>
                        <td className="py-3 px-4 text-center font-body text-sm text-parchment-dim">{b.difficulty}</td>
                        <td className="py-3 px-4 text-center font-label text-xs tabular-nums text-ember">{b.aoe}</td>
                        <td className="py-3 px-4 text-center font-label text-xs tabular-nums text-dark-gold">{b.single}</td>
                        <td className="py-3 px-4 text-center font-label text-xs tabular-nums text-dark-gold">{b.control}</td>
                        <td className="py-3 px-4 text-center font-label text-xs tabular-nums text-parchment-dim">{b.survival}</td>
                        <td className="py-3 px-4 text-center font-label text-xs tabular-nums text-blood-red font-bold">{b.rating}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="font-body text-xs text-parchment-dim/60 mt-2 italic">* Ratings based on 500+ community player votes. Ratings may shift with version updates.</p>
          </div>

          {/* Build Cards */}
          <div className="space-y-8 mb-16">
            {BUILDS.map((build, i) => (
              <div key={i} className="grimoire-card p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <div>
                    <span className="gold-tag mb-2 inline-block">{build.rating} Build</span>
                    <h2 className="font-display text-xl tracking-display text-parchment mt-2">
                      {build.name}
                    </h2>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-label text-[10px] uppercase tracking-wider text-parchment-dim">
                      {build.difficulty}
                    </span>
                  </div>
                </div>

                <p className="font-body text-sm text-parchment-dim leading-relaxed mb-6">{build.desc}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-label text-[10px] uppercase tracking-wider text-dark-gold mb-2">Core Weapons</h4>
                    <p className="font-body text-sm text-parchment-dim">{build.coreWeapons}</p>
                  </div>
                  <div>
                    <h4 className="font-label text-[10px] uppercase tracking-wider text-dark-gold mb-2">Key Skills</h4>
                    <p className="font-body text-sm text-parchment-dim">{build.keySkills}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-border-gold/20">
                  <div>
                    <h4 className="font-label text-[10px] uppercase tracking-wider text-dark-gold mb-1">Pros</h4>
                    <p className="font-body text-sm text-parchment-dim leading-relaxed">{build.pros}</p>
                  </div>
                  <div>
                    <h4 className="font-label text-[10px] uppercase tracking-wider text-blood-red mb-1">Cons</h4>
                    <p className="font-body text-sm text-parchment-dim leading-relaxed">{build.cons}</p>
                  </div>
                  <div>
                    <h4 className="font-label text-[10px] uppercase tracking-wider text-dark-gold mb-1">Best For</h4>
                    <p className="font-body text-sm text-parchment-dim leading-relaxed">{build.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="font-display text-2xl tracking-display text-parchment">BUILD FAQ</h2>
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
