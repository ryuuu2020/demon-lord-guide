'use client';

const BEGINNER_STEPS = [
  {
    step: 1,
    title: 'Understand the Core Mechanic',
    desc: 'Demon Lord: Just a Block\'s core mechanic can be summed up in one line — "time moves only when you move." This means: if you don\'t move, time pauses; every step you take, enemies take a step too. This isn\'t a traditional action game — it\'s a strategic roguelite. Every move must be deliberate. Spend 5 minutes getting used to this rhythm, and you\'ll discover depth far beyond expectations.',
  },
  {
    step: 2,
    title: 'Choose Your First Weapon',
    desc: 'You start with a basic short sword (~30-40 damage). The first Shop Node (usually on floor 3) offers your first weapon choice: go for the Flame Longsword — its burn DOT works against every boss down the line. If it doesn\'t appear, the Ice Staff is a solid alternative; frost control makes boss fights safer. Do NOT pick the Poison Dagger — it needs specific gear synergy, and beginners will struggle.',
  },
  {
    step: 3,
    title: 'Learn the Card System',
    desc: 'Defeating enemies drops cards. Three types: Weapon Cards (unlock new weapons), Skill Cards (unlock active/passive skills), Stat Cards (permanently boost attributes). Early on, prioritize Stat Cards — collect at least 3 Power Cards before challenging the first boss. Skill priority: Flame Shield > Burn Spread > Whirlwind > everything else.',
  },
  {
    step: 4,
    title: 'First Boss: Flame Warden',
    desc: 'Recommended first challenge is the Flame Warden (Molten Dungeon entrance). Despite being the second boss, its attack pattern is simple, phases are few, and HP is low. Bring frost weapons for an easy win. Core strategy: dodge red floor circles, sidestep flame beams, destroy lava pillars in Phase 2. Defeating it grants the Flame Essence (all stats +10%), a cornerstone for your run.',
  },
  {
    step: 5,
    title: 'Build Formation Route',
    desc: 'After getting the Flame Essence, your build direction is set. Recommended route: Flame Longsword (Shop Node 3) → Power Cards ×3 (Abandoned Temple) → Flame Shield (skill card drop) → Burn Spread (skill card drop) → Challenge Shadow Revenant → Tempest Axe (boss drop) → Challenge Void Colossus → Flame+Tempest complete → Challenge The Former King. This route takes roughly 3-4 hours.',
  },
  {
    step: 6,
    title: 'Key Nodes: Shops & Save Points',
    desc: 'Map node types: Combat (⚔, card drops), Shop (💰, buy weapons/skills), Save Point (💾, restore HP & save), Boss (💀, boss fight). Key strategy: visit a Shop Node every 3-4 Combat Nodes to update gear; always pass through a Save Point before a Boss Node; never skip Shop Nodes — they\'re the only way to actively acquire weapons.',
  },
  {
    step: 7,
    title: 'Death Is Not the End',
    desc: 'The roguelite essence: every death is growth. What you keep: unlocked weapons, collected cards (partial), achievement progress. What you lose: current run gold and temporary buffs. Don\'t fear death — your first Void Colossus attempt is almost guaranteed to fail, but you\'ll memorize its patterns and perform better next time. Community data shows average clear count: 7-12 runs.',
  },
  {
    step: 8,
    title: 'Ending Route Selection',
    desc: 'After defeating The Former King, three ending options appear: ① Normal ending (direct clear, unlocks New Game+); ② True ending (requires collecting all 24 cards before defeating the King again, exposes the heroes\' truth); ③ Hidden ending (defeat the King without equipping any weapon — headbutt only! Extreme difficulty, community completion rate <1%). New players should start with the Normal ending to learn the flow.',
  },
];

const GAME_MECHANICS = [
  { title: 'Turn-Based Action', desc: 'Every step is an independent decision. Move → enemy moves → your attack animation plays → damage resolves. Despite looking like real-time action, the underlying logic is turn-based. Exploit this: move during enemy attack animations to dodge damage.' },
  { title: 'Elemental Counters', desc: 'Fire counters Shadow (+30% damage vs shadow enemies), Ice counters Fire (freeze duration +50%), Poison counters Large (DOT ignores size), Crit counters Heavy Armor (bypasses defense). Understanding counters can cut boss difficulty by over 50%.' },
  { title: 'Card Synthesis', desc: 'Three same-element cards can be synthesized at Shop Nodes into an advanced card. 3 Power Cards → Super Power (attack +50% instead of +30%). Synthesis is the core of late-game stat growth — don\'t waste low-level cards.' },
  { title: 'Steam Workshop', desc: 'The game supports mods. The community has created 200+ mods including new weapons, bosses, and maps. Recommended: Boss Rush Mode (consecutive boss fights), Damage Numbers (show damage digits), localization patches. Search the Steam Workshop to install.' },
];

export default function BeginnersGuidePage() {
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
              First Steps into Darkness
            </p>
            <h1 className="font-display text-3xl lg:text-4xl tracking-display text-parchment text-shadow-gold">
              BEGINNER&apos;S GUIDE
            </h1>
            <p className="font-body text-lg text-parchment-dim mt-4 max-w-2xl leading-relaxed">
              First time stepping into the shadow world of Demon Lord: Just a Block? Don\'t worry. This tutorial starts from zero — understanding core mechanics, picking weapons, planning build routes, beating the first boss, through to clearing your first ending. The optimal learning path curated by the community for new players.
            </p>
            <div className="blood-strip mt-6" />
          </div>

          {/* Step-by-step */}
          <div className="space-y-8 mb-16">
            {BEGINNER_STEPS.map((step, i) => (
              <div key={i} className="grimoire-card p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-dark-gold bg-dark-gold/10">
                    <span className="font-display text-xl text-dark-gold tabular-nums">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-lg tracking-display text-parchment mb-3">
                      Step {step.step}: {step.title}
                    </h2>
                    <p className="font-body text-sm text-parchment-dim leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                {i < BEGINNER_STEPS.length - 1 && (
                  <div className="mt-4 text-center">
                    <span className="font-label text-[10px] text-parchment-dim/40">&darr;</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Game Mechanics */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="font-display text-2xl tracking-display text-parchment">GAME MECHANICS</h2>
              <p className="font-body text-sm text-parchment-dim mt-2">Deep dive into underlying game systems</p>
              <div className="gold-divider mt-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {GAME_MECHANICS.map((mech, i) => (
                <div key={i} className="grimoire-card p-6">
                  <h3 className="font-display text-sm tracking-display text-dark-gold mb-3">{mech.title}</h3>
                  <p className="font-body text-sm text-parchment-dim leading-relaxed">{mech.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Tips */}
          <section>
            <div className="grimoire-card p-8">
              <h2 className="font-display text-xl tracking-display text-dark-gold mb-6 text-center">
                PRO TIPS FOR BEGINNERS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Always save before boss fights — revive from save points instead of restarting',
                  'Flame build is the most beginner-friendly, S-tier overall rating',
                  'Prioritize upgrading Flame Shield — it\'s your only defensive skill',
                  'Shop Node weapons are random; refreshing costs gold (top-right corner)',
                  'Bring stealth build or rely on audio cues for Void Colossus Phase 3',
                  'Damage Numbers mod from Steam Workshop is highly recommended',
                  'Community Discord has live boss strategy help channels',
                  'Complete 38 Steam achievements to unlock hidden skins and weapons',
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-dark-gold font-display text-sm flex-shrink-0">&diams;</span>
                    <p className="font-body text-sm text-parchment-dim leading-relaxed">{tip}</p>
                  </div>
                ))}
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
