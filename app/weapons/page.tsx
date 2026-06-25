'use client';

const WEAPON_TYPES = [
  {
    type: 'Sword',
    icon: '⚔',
    desc: 'The most balanced weapon type. Medium attack range (~200px), medium speed (1.5 hits/s), damage type is physical + elemental (based on enchant). Ideal for beginners and general use.',
    weapons: [
      { name: 'Flame Longsword', damage: '85-110', speed: 'Medium', range: 'Melee', special: 'Each hit stacks 2 burn layers; at 10 stacks, triggers an AOE detonation' },
      { name: 'Storm Sword', damage: '70-95', speed: 'Fast', range: 'Melee', special: 'Killing an enemy grants +25% attack speed for 3s, stacking up to 3 times' },
      { name: 'Crit Blade', damage: '60-140', speed: 'Slow', range: 'Melee', special: 'Crit rate +30%, crit damage +150%, but base damage is unstable' },
    ],
  },
  {
    type: 'Axe',
    icon: '🪓',
    desc: 'High-damage melee weapons. Large attack range (~280px), slow speed (0.8 hits/s), but extreme single-hit damage. Ideal for AOE clearing and large targets.',
    weapons: [
      { name: 'Tempest Axe', damage: '120-160', speed: 'Slow', range: 'Melee AOE', special: 'Charged attack releases 360° whirlwind covering half the screen' },
      { name: 'Earthshaker Axe', damage: '140-180', speed: 'Very Slow', range: 'Melee', special: 'Ground slam creates a shockwave (~400px diameter) that knocks back all enemies' },
    ],
  },
  {
    type: 'Staff',
    icon: '🪄',
    desc: 'Ranged magic weapons. Long attack range (~500px), medium speed (1.2 hits/s), pure elemental damage. Each elemental staff corresponds to different properties and special effects.',
    weapons: [
      { name: 'Ice Staff', damage: '55-75', speed: 'Medium', range: 'Ranged', special: 'Ice cone barrage, each hit stacks 2 slow layers; 10 stacks freeze target for 2s' },
      { name: 'Flame Staff', damage: '70-90', speed: 'Fast', range: 'Ranged', special: 'Fires tracking fireballs; +50% damage to burning targets' },
      { name: 'Corrosion Staff', damage: '40-60', speed: 'Fast', range: 'Ranged', special: 'Releases toxic cloud covering 300px area, continuously stacking poison layers within' },
    ],
  },
  {
    type: 'Bow',
    icon: '🏹',
    desc: 'Ranged physical weapons. Maximum attack range (~700px), fast speed (2 hits/s), but low per-hit damage. Ideal for kiting and safe output.',
    weapons: [
      { name: 'Frost Bow', damage: '45-65', speed: 'Fast', range: 'Ranged', special: 'Piercing arrows that can slow multiple targets simultaneously' },
      { name: 'Void Bow', damage: '80-100', speed: 'Medium', range: 'Ranged', special: 'Charged arrow deals 400% damage while in stealth state' },
    ],
  },
  {
    type: 'Claw',
    icon: '🗡',
    desc: 'Ultra-fast melee weapons. Minimum attack range (~120px), but maximum speed (3 hits/s). Ideal for rapid DOT stacking and backstab builds.',
    weapons: [
      { name: 'Poison Dagger', damage: '25-40', speed: 'Very Fast', range: 'Melee', special: 'Each hit stacks 2 poison layers; stacks have no cap, ideal for boss endurance fights' },
      { name: 'Shadow Blade', damage: '35-55', speed: 'Very Fast', range: 'Melee', special: 'Backstab damage +300%; first hit from stealth is guaranteed crit' },
    ],
  },
  {
    type: 'Special',
    icon: '🔮',
    desc: 'Hidden special weapon types in the game. Acquisition conditions are demanding (typically require specific achievements or hidden rooms), but effects are extremely powerful. Data below sourced from community discoveries; some acquisition methods remain unconfirmed.',
    weapons: [
      { name: 'Eye of the Abyss (Unconfirmed)', damage: '?', speed: '?', range: 'Full Screen', special: 'Rumored to unlock after no-hit clears of all bosses. Effect: full-screen AOE, all enemies lose 5% max HP per second. No community member has confirmed acquisition yet.' },
    ],
  },
];

const WEAPON_COMPARISON = [
  { type: 'Sword', count: 3, bestFor: 'General All-Purpose', pros: 'Balanced & Versatile', cons: 'No standout advantage', rating: 'A' },
  { type: 'Axe', count: 2, bestFor: 'AOE Clearing', pros: 'Extreme Damage', cons: 'Slow, easily interrupted', rating: 'A' },
  { type: 'Staff', count: 3, bestFor: 'Ranged Elemental DPS', pros: 'Long range, elemental counters', cons: 'Fragile, weak in melee', rating: 'B' },
  { type: 'Bow', count: 2, bestFor: 'Kiting & Safe DPS', pros: 'Maximum range, safe', cons: 'Low single-target damage', rating: 'B' },
  { type: 'Claw', count: 2, bestFor: 'DOT Stacking / Backstab', pros: 'Ultra-fast attacks', cons: 'Minimum range, high risk', rating: 'A' },
];

export default function WeaponsPage() {
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
              Armory of the Damned
            </p>
            <h1 className="font-display text-3xl lg:text-4xl tracking-display text-parchment text-shadow-gold">
              WEAPON COMPENDIUM
            </h1>
            <p className="font-body text-lg text-parchment-dim mt-4 max-w-2xl leading-relaxed">
              Complete weapon compendium for Demon Lord: Just a Block. Covers 6 weapon types and 13+ individual weapons, including attack range, speed, damage, and special effects. Proper weapon pairing is key to successful clears. Data from community testing; values are estimates.
            </p>
            <div className="blood-strip mt-6" />
          </div>

          {/* Comparison Table */}
          <div className="mb-12">
            <h2 className="font-display text-xl tracking-display text-parchment mb-4">Weapon Type Overview</h2>
            <div className="grimoire-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border-gold">
                      <th className="text-left py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">Type</th>
                      <th className="text-center py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">Count</th>
                      <th className="text-center py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">Best For</th>
                      <th className="text-center py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">Pros</th>
                      <th className="text-center py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">Cons</th>
                      <th className="text-center py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {WEAPON_COMPARISON.map((w, i) => (
                      <tr key={i} className={`${i < WEAPON_COMPARISON.length - 1 ? 'border-b border-border-gold/20' : ''} hover:bg-dark-gold/5 transition-colors`}>
                        <td className="py-3 px-4 font-display text-sm text-parchment">{w.type}</td>
                        <td className="py-3 px-4 text-center font-label text-xs tabular-nums text-dark-gold">{w.count}</td>
                        <td className="py-3 px-4 text-center font-body text-sm text-parchment-dim">{w.bestFor}</td>
                        <td className="py-3 px-4 text-center font-body text-sm text-ember">{w.pros}</td>
                        <td className="py-3 px-4 text-center font-body text-sm text-parchment-dim">{w.cons}</td>
                        <td className="py-3 px-4 text-center font-label text-xs tabular-nums text-blood-red font-bold">{w.rating}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="font-body text-xs text-parchment-dim/60 mt-2 italic">* Weapon count based on Steam release v1.0. Special weapon acquisition conditions may change with updates.</p>
          </div>

          {/* Weapon Type Cards */}
          <div className="space-y-8">
            {WEAPON_TYPES.map((type, i) => (
              <div key={i} className="grimoire-card p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{type.icon}</span>
                  <div>
                    <h2 className="font-display text-xl tracking-display text-parchment">{type.type}</h2>
                  </div>
                </div>
                <p className="font-body text-sm text-parchment-dim leading-relaxed mb-6">{type.desc}</p>

                {/* Individual weapons */}
                <div className="space-y-3">
                  {type.weapons.map((weapon, j) => (
                    <div key={j} className="border border-border-gold/15 p-4 bg-abyss-elevated">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                        <h3 className="font-display text-sm tracking-display text-dark-gold">{weapon.name}</h3>
                        <div className="flex items-center gap-4">
                          <span className="font-label text-[10px] uppercase tracking-wider text-blood-red">DMG: {weapon.damage}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2">
                        <span className="font-label text-[10px] uppercase tracking-wider text-parchment-dim">Speed: {weapon.speed}</span>
                        <span className="font-label text-[10px] uppercase tracking-wider text-parchment-dim">Range: {weapon.range}</span>
                      </div>
                      <p className="font-body text-sm text-parchment-dim leading-relaxed">
                        <span className="text-dark-gold font-label text-[10px] uppercase tracking-wider">Special: </span>
                        {weapon.special}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <section className="mt-12">
            <div className="grimoire-card p-6">
              <p className="font-label text-xs uppercase tracking-wider text-dark-gold mb-2">Data Disclaimer</p>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">
                Weapon damage, attack speed, and attack range data above are community-tested estimates; actual values may differ in-game.
                Special weapon acquisition methods are sourced from community discussion and developer teasers; some content is not officially confirmed.
                Weapon stats may change with game version updates (including Steam Workshop mods).
                If you discover new weapons or more accurate data, submit feedback via the Afdian community.
              </p>
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
