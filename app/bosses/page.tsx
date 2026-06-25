'use client';

const BOSSES = [
  {
    name: 'Shadow Revenant',
    location: 'Ruined City Depths',
    phases: 3,
    difficulty: 'Medium',
    hp: '~12,000',
    desc: 'The guardian of the Ruined City Depths — once the Demon Lord\'s shadow general, driven mad after the Lord\'s fall. Its body is composed of pure shadow energy, granting 30% physical damage immunity.',
    phases_detail: [
      {
        name: 'Phase 1 — Shadow Dance',
        desc: 'The boss teleports rapidly across the arena, firing shadow bolts (3 per burst, fan pattern). Attack cycle: teleport → bolts → dash, ~4s interval. Stay at mid-range, sidestep after bolt volleys, and exploit the 1.5s recovery window after dashes.',
      },
      {
        name: 'Phase 2 — Shadow Clones',
        desc: 'Activates at <60% HP. Boss summons 2 shadow clones (2,000 HP each) that share the same attack pattern at half damage. Kill clones first — otherwise the full-screen shadow barrage is unavoidable. While clones are alive, the boss periodically casts a red ground AOE (half-screen diameter); watch for red circle warnings.',
      },
      {
        name: 'Phase 3 — Void Devour',
        desc: 'Activates at <25% HP. Void rifts appear at arena edges, pulling the player toward them (~3px/s). Boss attack frequency doubles; shadow bolts increase to 5 per burst. The key: exploit the 3-second vulnerability after the boss\'s ultimate (2s full-screen darkness) — he\'s fully exposed. Unleash everything.',
      },
    ],
    recommendedWeapons: 'Flame Longsword (burn counters shadow), Tempest Axe (efficient clone clearing)',
    dodgeTips: 'Sidestep dodging beats backstepping; shadow bolts have audio cues — sound-based positioning is more reliable',
  },
  {
    name: 'Flame Warden',
    location: 'Molten Dungeon',
    phases: 2,
    difficulty: 'Easy',
    hp: '~9,000',
    desc: 'The Molten Dungeon guardian — an ancient fire spirit. Only two phases, but each phase has massive AOE coverage in a tight arena with limited dodge space.',
    phases_detail: [
      {
        name: 'Phase 1 — Flame Storm',
        desc: 'Three attacks: flame beam (straight line, 2s duration), lava eruptions (3 random floor circles, erupt after 2s), dash attack (straight line, bounces off walls once). Sidestep the beam and dash, leave red floor circles immediately. Frost weapons excel here — each hit stacks slow.',
      },
      {
        name: 'Phase 2 — Molten Fury',
        desc: 'Activates at <50% HP. Boss summons 4 lava pillars at arena corners; each pillar releases a full-screen shockwave every 5s (~800 damage). Destroy all pillars within 10s or the boss becomes invulnerable and casts continuous full-screen AOE. After pillars are destroyed, boss enters a 8s weakened state with +50% damage taken.',
      },
    ],
    recommendedWeapons: 'Ice Staff (freeze control) + Poison Dagger (DOT damage)',
    dodgeTips: 'Stay away from arena edges; after pillars appear, destroy the nearest one first; Frost Nova can freeze the flame beam',
  },
  {
    name: 'Void Colossus',
    location: 'Ancient Ruins',
    phases: 4,
    difficulty: 'Extreme',
    hp: '~20,000',
    desc: 'The ultimate guardian of the Ancient Ruins — a physical manifestation of the void rift. The most complex boss fight in the game, with four phases each having unique mechanics requiring precise timing and weapon switching.',
    phases_detail: [
      {
        name: 'Phase 1 — Tentacle Sea',
        desc: 'Boss body is hidden underground; only 6 void tentacles are exposed. Each tentacle has ~1,500 HP and uses sweep attacks (fan, 180°) and ground slam (circular AOE). Destroy tentacles one by one to advance. Tempest Axe recommended for rapid clearing.',
      },
      {
        name: 'Phase 2 — Void Rifts',
        desc: 'Boss upper body emerges, opening 3 void rifts in the arena. Each rift summons void adds (3 per batch, 500 HP each) every 8s. Clear adds while damaging the boss core on its chest — exposed for only 3s after each summon animation. Prioritize summoner adds (marked by purple glow).',
      },
      {
        name: 'Phase 3 — Endless Darkness',
        desc: 'The entire arena goes dark; visibility limited to a tiny radius (~150px). Boss launches random tentacle attacks in the darkness — rely on audio cues for direction. Boss is invisible this phase; damage is only dealt by attacking tentacles. Stealth builds are incredibly powerful here, ignoring darkness to locate the boss directly.',
      },
      {
        name: 'Phase 4 — Void Core',
        desc: 'Boss fully revealed, massive size occupying half the screen. Core exposes every 15s for only 3s, taking 3x normal damage. Outside core windows, boss fires full-screen bullet patterns that intensify as HP drops. Mastering core exposure timing for maximum burst is the key.',
      },
    ],
    recommendedWeapons: 'Tempest Axe (clearing) + Flame Longsword (burst) + Stealth skill (mandatory for Phase 3)',
    dodgeTips: 'Bring a stealth build for Phase 3; Phase 4 bullet patterns have rhythmic timing — learn the pattern to pre-dodge',
  },
  {
    name: 'The Former King',
    location: 'Throne Chamber',
    phases: 3,
    difficulty: 'Hard',
    hp: '~16,000',
    desc: 'One of the final bosses seated in the Throne Chamber — the Demon Lord\'s former body. After the Lord was reduced to a head, this husk developed self-awareness and became a new tyrant.',
    phases_detail: [
      {
        name: 'Phase 1 — Royal Authority',
        desc: 'The Former King uses a greatsword for melee attacks with massive range (~1/3 of screen). Three moves: vertical slam (straight line, extreme damage), horizontal sweep (180° fan), thrust (rapid forward dash). Dodge timing is precise — slam and sweep have 0.5s wind-up; thrust has only 0.2s, requiring prediction. Post-attack recovery is ~2s — your damage window.',
      },
      {
        name: 'Phase 2 — Royal Guard',
        desc: 'At <60% HP, the King summons 4 Royal Knights (3,000 HP each). Knights block frontal attacks with shields — attack from behind. The King buffs knights from the rear (+50% attack). Kill knights before focusing the boss.',
      },
      {
        name: 'Phase 3 — King\'s Fall',
        desc: 'At <30% HP, enters berserk state. Attack speed doubles; all move wind-ups halved. However, the King\'s defense also drops 30%. This is a DPS race — unload all stored ultimates and abilities in one burst. Dodge consecutive thrusts (2–4 hit combos). Defeating him unlocks one of the "True Demon Lord" endings.',
      },
    ],
    recommendedWeapons: 'Crit Blade (high crit) + Poison Dagger (DOT) + Flame Shield (defense)',
    dodgeTips: 'Phase 1: memorize the attack rhythm (slam-sweep-thrust cycle); Phase 3: stay close to dodge behind the boss',
  },
];

const BOSS_COMPARISON = [
  { name: 'Shadow Revenant', phases: 3, hp: '12,000', weakness: 'Fire / Burn', hardest: 'Phase 3 Void Devour', recWeapon: 'Flame Longsword' },
  { name: 'Flame Warden', phases: 2, hp: '9,000', weakness: 'Frost / Freeze', hardest: 'Phase 2 Lava Pillars', recWeapon: 'Ice Staff' },
  { name: 'Void Colossus', phases: 4, hp: '20,000', weakness: 'Stealth / Perception', hardest: 'Phase 3 Endless Darkness', recWeapon: 'Tempest Axe' },
  { name: 'The Former King', phases: 3, hp: '16,000', weakness: 'Crit / DOT', hardest: 'Phase 3 Berserk', recWeapon: 'Crit Blade' },
];

const FAQ_SNIPPETS = [
  { q: 'Q: Which boss is the hardest?', a: 'A: Community votes put Void Colossus as the hardest (47% of players), followed by The Former King (31%) and Shadow Revenant (18%). Flame Warden is considered the entry-level boss. Void Colossus Phase 3 Endless Darkness requires special strategies — bring a stealth build.' },
  { q: 'Q: Do bosses have elemental weaknesses?', a: 'A: Yes. Shadow Revenant is weak to fire (burn effect +30%), Flame Warden is weak to frost (freeze duration +50%), Void Colossus is weak to perception/stealth skills, and The Former King is weak to crits (crit rate +15%). Proper weapon pairing significantly lowers boss difficulty.' },
  { q: 'Q: Can I swap weapons during a boss fight?', a: 'A: Yes. During phase transition animations, you can open your inventory to swap weapons and skill loadouts. It\'s recommended to pre-set two gear presets and quick-switch at phase transitions.' },
];

export default function BossesPage() {
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
            <p className="font-label text-[10px] uppercase tracking-[0.25em] text-blood-red mb-3">
              Marked for Death
            </p>
            <h1 className="font-display text-3xl lg:text-4xl tracking-display text-parchment text-shadow-blood">
              BOSS COMPENDIUM
            </h1>
            <p className="font-body text-lg text-parchment-dim mt-4 max-w-2xl leading-relaxed">
              Complete boss compendium for Demon Lord: Just a Block. Attack patterns, phase mechanics, recommended weapons, and dodge tips for every boss. Data sourced from community testing; values are estimates and may vary by version.
            </p>
            <div className="blood-strip mt-6" />
          </div>

          {/* Comparison Table */}
          <div className="mb-12">
            <h2 className="font-display text-xl tracking-display text-parchment mb-4">Boss Quick Comparison</h2>
            <div className="grimoire-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border-gold">
                      <th className="text-left py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">Boss</th>
                      <th className="text-center py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">Phases</th>
                      <th className="text-center py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">HP (Est.)</th>
                      <th className="text-center py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">Weakness</th>
                      <th className="text-center py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">Hardest Phase</th>
                      <th className="text-center py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">Rec. Weapon</th>
                    </tr>
                  </thead>
                  <tbody>
                    {BOSS_COMPARISON.map((b, i) => (
                      <tr key={i} className={`${i < BOSS_COMPARISON.length - 1 ? 'border-b border-border-gold/20' : ''} hover:bg-dark-gold/5 transition-colors`}>
                        <td className="py-3 px-4 font-display text-sm text-parchment">{b.name}</td>
                        <td className="py-3 px-4 text-center font-body text-sm text-parchment-dim">{b.phases}</td>
                        <td className="py-3 px-4 text-center font-label text-xs tabular-nums text-ember">{b.hp}</td>
                        <td className="py-3 px-4 text-center font-body text-sm text-dark-gold">{b.weakness}</td>
                        <td className="py-3 px-4 text-center font-body text-sm text-blood-red">{b.hardest}</td>
                        <td className="py-3 px-4 text-center font-body text-sm text-parchment-dim">{b.recWeapon}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="font-body text-xs text-parchment-dim/60 mt-2 italic">* HP values are community estimates. In-game data may differ. Recommended weapons reflect community consensus, not the only viable options.</p>
          </div>

          {/* Detailed Boss Cards */}
          <div className="space-y-8 mb-16">
            {BOSSES.map((boss, i) => (
              <div key={i} className="grimoire-card p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <div>
                    <span className="danger-tag mb-2 inline-block">BOSS</span>
                    <h2 className="font-display text-xl tracking-display text-parchment mt-2">
                      {boss.name}
                    </h2>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-label text-[10px] uppercase tracking-wider text-parchment-dim">
                      {boss.phases} PHASES
                    </span>
                    <span className="font-label text-xs tabular-nums text-blood-red">
                      HP ~{boss.hp}
                    </span>
                  </div>
                </div>
                <p className="font-body text-sm text-parchment-dim italic mb-2">{boss.location}</p>
                <p className="font-body text-sm text-parchment-dim leading-relaxed mb-6">{boss.desc}</p>

                {/* Phase details */}
                <div className="space-y-4 mb-6">
                  {boss.phases_detail.map((phase, j) => (
                    <div key={j} className="border-l-2 border-border-gold pl-4 py-1">
                      <h4 className="font-label text-xs uppercase tracking-wider text-dark-gold mb-1">
                        {phase.name}
                      </h4>
                      <p className="font-body text-sm text-parchment-dim leading-relaxed">{phase.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Tips */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border-gold/20">
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-wider text-dark-gold mb-1">Recommended Weapons</p>
                    <p className="font-body text-sm text-parchment-dim">{boss.recommendedWeapons}</p>
                  </div>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-wider text-dark-gold mb-1">Dodge Tips</p>
                    <p className="font-body text-sm text-parchment-dim">{boss.dodgeTips}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="font-display text-2xl tracking-display text-parchment">BOSS FAQ</h2>
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
            <p className="font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim mb-3">
              More Roguelike Guides
            </p>
            <a href="https://tabletop-tavern-guide.vercel.app" target="_blank" rel="noopener noreferrer"
              className="font-body text-sm text-dark-gold hover:text-dark-gold-dim transition-colors duration-200">
              Tabletop Tavern Guide
            </a>
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
              className="font-label text-[10px] uppercase tracking-wider text-dark-gold hover:text-dark-gold-dim transition-colors">
              AFDIAN SUPPORT
            </a>
          </div>
        </div>
      </footer>

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
