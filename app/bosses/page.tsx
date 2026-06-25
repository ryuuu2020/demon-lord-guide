import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demon Lord: Just a Block Boss Guide — All Area Bosses & Secret Bosses',
  description: 'Complete Demon Lord: Just a Block boss guide. All area bosses from Dark Dragon Forest to Demon God Heart, plus hidden bosses, trigger conditions, and strategy tips.',
};

const AREA_BOSSES = [
  {
    name: 'Forest King',
    area: 'Dark Dragon Forest (Area 1)',
    unlock: 'Story progression — first area',
    achievement: 'Forest King',
    completion: '83.5%',
    tips: 'This is the first area boss. The Forest King is a straightforward fight to ease players into the step-based combat system. Focus on learning the parry timing and positioning fundamentals.',
  },
  {
    name: 'Cave King',
    area: 'Evernight Cave (Area 2)',
    unlock: 'Clear Dark Dragon Forest',
    achievement: 'Cave King',
    completion: '66.7%',
    tips: 'The Evernight Cave introduces environmental obstacles. Use the terrain to your advantage — boxes can be pushed and ignited, water surfaces can be frozen. Watch for hidden routes.',
  },
  {
    name: 'Snow Mountain King',
    area: 'Frozen Snow Mountain (Area 3)',
    unlock: 'Clear Evernight Cave',
    achievement: 'Snow Mountain King',
    completion: '59.0%',
    tips: 'The Frozen Snow Mountain requires lighting torches in a specific order to unlock hidden paths. The boss has ice-based attacks — keep moving and avoid standing in cold zones.',
  },
  {
    name: 'Dungeon King',
    area: 'Royal City Dungeon',
    unlock: 'Clear Frozen Snow Mountain',
    achievement: 'Dungeon King',
    completion: '31.3%',
    tips: 'The Dungeon King fight takes place in a confined arena. Success relies heavily on precise dodging. Queen\'s Ghost room in the upper-right corner leads to a hidden rift for the True ending path.',
  },
  {
    name: 'Slime King',
    area: 'Slime Island',
    unlock: 'Clear Royal City Dungeon and unlock Novice Village',
    achievement: 'Slime King',
    completion: '48.7%',
    tips: 'Slime Island is accessible after obtaining the Novice Village key. The Slime King can be pushed into water pits for massive damage. Exploit the environment to turn the fight in your favor.',
  },
  {
    name: 'Novice Village King',
    area: 'Novice Village',
    unlock: 'Spend 77 gold cumulative at the archery location',
    achievement: 'Novice Village King',
    completion: '36.0%',
    tips: 'A seemingly peaceful village with a dark secret. The boss fight tests your mastery of all mechanics learned so far. Check behind the Hero\'s hut for hidden paths.',
  },
  {
    name: 'Demon God King',
    area: 'Demon God Heart (Final Area)',
    unlock: 'Clear all previous areas',
    achievement: 'Demon God King',
    completion: '28.1%',
    tips: 'The final boss of the main story. For the True ending, place 5 Demon Soul Fragments above the first blacksmith room, then choose the second option at the finale. Only 11.5% of players achieve this.',
  },
];

const HIDDEN_BOSSES = [
  {
    name: 'Millennium Tree Spirit',
    trigger: 'Behind the large tree — find hidden area in Forest',
    tip: 'Requires reaching a hidden zone behind the big tree in Dark Dragon Forest.',
  },
  {
    name: 'Year Beast',
    trigger: 'Donate 20 gold at the cave table',
    tip: 'Found in the Evernight Cave. A generous donation summons this hidden boss.',
  },
  {
    name: 'Brutal Dragonfly',
    trigger: 'Complete parkour challenge above Snow Mountain',
    tip: 'Look for the parkour route in the upper section of Frozen Snow Mountain.',
  },
  {
    name: 'Shopkeeper',
    trigger: 'One-hit kill the shopkeeper in any shop',
    tip: 'Killing the shopkeeper triggers a boss fight. Be careful — shopkeepers hit hard.',
  },
  {
    name: 'Goddess',
    trigger: 'Exchange blood at the cat room, use item at goddess statue',
    tip: 'A multi-step secret boss unlock. Requires finding the cat room and goddess statue.',
  },
  {
    name: 'Fish Tail Tan',
    trigger: 'Defeat with bare hands (no weapon equipped)',
    tip: 'A unique challenge boss that requires fighting weaponless.',
  },
];

const PORTAL_BOSSES = [
  'Treasure Box King',
  'Bomb Hachimi',
  'Interdimensional TV',
  'Piggy Bank',
];

const FAQ_SNIPPETS = [
  {
    q: 'Q: How many bosses are in the game?',
    a: 'A: There are 7 main area bosses (Forest King through Demon God King), plus 6+ hidden bosses requiring specific triggers, plus 4 random portal bosses. Total: 17+ unique boss encounters. All contribute to the 38 Steam achievements.',
  },
  {
    q: 'Q: What is the hardest boss?',
    a: 'A: The Demon God King (final boss) has the lowest completion rate at 28.1%. For hidden bosses, the Fish Tail Tan (defeat weaponless) and Goddess are considered the most challenging. The True ending requires collecting all 5 Demon Soul Fragments.',
  },
  {
    q: 'Q: How do I unlock the True ending?',
    a: 'A: Collect all 5 Demon Soul Fragments hidden in rift locations across areas, place them above the first blacksmith room in Demon God Heart, then choose the second dialogue option at the finale. Achievement completion rate: 11.5%.',
  },
];

export default function BossesPage() {
  return (
    <div className="bg-abyss bg-rune-pattern min-h-screen">
      <div className="max-w-5xl mx-auto px-4 lg:px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <p className="font-label text-[10px] uppercase tracking-[0.25em] text-blood-red mb-3">
            Marked for Death
          </p>
          <h1 className="font-display text-3xl lg:text-4xl tracking-display text-parchment">
            BOSS COMPENDIUM
          </h1>
          <p className="font-body text-lg text-parchment-dim mt-4 max-w-2xl leading-relaxed">
            Every boss in Demon Lord: Just a Block, from the Dark Dragon Forest to the Demon God Heart.
            Includes hidden boss trigger conditions, difficulty rankings, and strategy tips.
            Verified from Steam achievement data and community guides.
          </p>
          <div className="w-24 h-px bg-blood-red mt-6" />
        </div>

        {/* Area Bosses Table */}
        <section className="mb-12">
          <h2 className="font-display text-xl tracking-display text-parchment mb-4">Area Bosses (Main Storyline)</h2>
          <div className="border border-border-gold overflow-hidden bg-abyss-elevated">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border-gold">
                    <th className="text-left py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">Boss</th>
                    <th className="text-left py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">Area</th>
                    <th className="text-center py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">Achievement Rate</th>
                    <th className="text-left py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">Strategy Tips</th>
                  </tr>
                </thead>
                <tbody>
                  {AREA_BOSSES.map((boss, i) => (
                    <tr key={i} className={`${i < AREA_BOSSES.length - 1 ? 'border-b border-border-gold/20' : ''} hover:bg-dark-gold/5 transition-colors`}>
                      <td className="py-3 px-4">
                        <span className="font-display text-sm text-parchment">{boss.name}</span>
                        <p className="font-label text-[10px] text-parchment-dim/60 uppercase">{boss.achievement}</p>
                      </td>
                      <td className="py-3 px-4 font-body text-sm text-parchment-dim">{boss.area}</td>
                      <td className="py-3 px-4 text-center font-label text-xs tabular-nums text-blood-red">{boss.completion}</td>
                      <td className="py-3 px-4 font-body text-sm text-parchment-dim leading-relaxed max-w-xs">{boss.tips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Hidden Bosses */}
        <section className="mb-12">
          <h2 className="font-display text-xl tracking-display text-parchment mb-4">Hidden Bosses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {HIDDEN_BOSSES.map((boss, i) => (
              <div key={i} className="border border-border-gold p-6 bg-abyss-elevated hover:border-dark-gold/40 transition-colors">
                <h3 className="font-display text-sm tracking-display text-dark-gold mb-2">{boss.name}</h3>
                <p className="font-label text-[10px] uppercase tracking-wider text-parchment-dim mb-2">Trigger: {boss.trigger}</p>
                <p className="font-body text-sm text-parchment-dim leading-relaxed">{boss.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Portal Bosses */}
        <section className="mb-12">
          <h2 className="font-display text-xl tracking-display text-parchment mb-4">Random Portal Bosses</h2>
          <p className="font-body text-sm text-parchment-dim mb-4">
            Random boss portals can appear during runs, leading to Novice Village. These bosses are:
          </p>
          <div className="flex flex-wrap gap-3">
            {PORTAL_BOSSES.map((name, i) => (
              <span key={i} className="border border-border-gold px-4 py-2 font-display text-sm text-parchment bg-abyss-elevated">
                {name}
              </span>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="mb-6">
            <h2 className="font-display text-xl tracking-display text-parchment">BOSS FAQ</h2>
            <div className="w-16 h-px bg-dark-gold mt-4" />
          </div>
          <div className="space-y-4">
            {FAQ_SNIPPETS.map((faq, i) => (
              <div key={i} className="border border-border-gold p-6 bg-abyss-elevated">
                <p className="font-label text-sm text-dark-gold mb-2">{faq.q}</p>
                <p className="font-body text-sm text-parchment-dim leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="font-label text-[10px] uppercase tracking-wider text-parchment-dim/60 mt-8 text-center">
          Data verified from Steam achievements & community guides. Updated June 25, 2026. Unofficial fan site.
        </p>
      </div>
    </div>
  );
}
