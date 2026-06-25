import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demon Lord: Just a Block Weapons — All 14 Weapons & Unlock Guide',
  description: 'Complete Demon Lord: Just a Block weapon compendium. All 14 weapons ranked, unlock conditions, and combat styles. From Lancelot to Death Scythe.',
};

const WEAPONS = [
  {
    name: 'Lancelot',
    type: 'Greatsword',
    unlock: 'Interact with sword stand near the big tree in Dark Dragon Forest',
    desc: 'The first weapon most players unlock. Reliable damage output with a charged attack capability. Features an infinite charge ability. Easy to master, solid for all content.',
  },
  {
    name: 'Lightning Sparrow',
    type: 'Lightning / Speed',
    unlock: 'Find and interact with Murphy',
    desc: 'A fast-paced lightning weapon. Delivers rapid strikes with electrical damage. Excellent for hit-and-run playstyles.',
  },
  {
    name: 'Eye Laser Cannon',
    type: 'Ranged / Laser',
    unlock: 'Complete the trial room twice',
    desc: 'Long-range laser weapon. Fires a devastating beam that pierces through enemies. Great for keeping distance from dangerous bosses.',
  },
  {
    name: 'Skull Fist',
    type: 'Melee / Fist',
    unlock: 'Pass through 10 rooms in a single run',
    desc: 'Close-combat fist weapon. Fast attack speed with decent damage. One of the earliest weapons you can unlock through natural gameplay.',
  },
  {
    name: 'Divine Crossbow',
    type: 'Ranged / Crossbow',
    unlock: 'Near the Black Dragon Nest in the Cave area, before the Cave King boss',
    desc: 'Multi-shot crossbow that fires a spread of bolts. Effective at medium range and provides good coverage against groups of enemies.',
  },
  {
    name: 'Diamond Shield',
    type: 'Defense / Shield',
    unlock: 'Accumulate 50 successful parries',
    desc: 'The premier defensive weapon. Reduces incoming damage significantly. Perfect for learning boss patterns — the safety net for cautious players.',
  },
  {
    name: 'Shadow Dagger',
    type: 'Dagger / Stealth',
    unlock: 'Defeat any boss with exactly 1 HP remaining',
    desc: 'A risky but rewarding dagger. High critical hit potential. Requires precision play — one mistake can be fatal, but the damage output is exceptional.',
  },
  {
    name: 'Original Fantasy',
    type: 'Special / Multi-form',
    unlock: 'Collect 18 Hard Bones (earned through cumulative deaths)',
    desc: 'A unique weapon with multiple forms. Can transform into a spider form. Highly versatile and rewards creative play. Unlocks naturally as you learn the game.',
  },
  {
    name: 'Demon God Sword',
    type: 'Greatsword / Demon',
    unlock: 'Defeat the Demon God Sword boss from the Normal ending',
    desc: 'A powerful demonic greatsword obtained from the final boss of the Normal ending. One of the strongest weapons in terms of raw damage.',
  },
  {
    name: 'Ham Bat',
    type: 'Melee / Blunt',
    unlock: 'Kill the Ham Knight\'s thrown ham bat and pick it up',
    desc: 'A quirky blunt weapon dropped by a special enemy. Satisfying impact and knockback. Fun to use and surprisingly effective.',
  },
  {
    name: 'Golden Skull',
    type: 'Special / Collection',
    unlock: 'Collect 16 out of 23 Golden Skulls hidden across all areas',
    desc: 'A reward for dedicated explorers. The Golden Skull becomes more powerful with each Skull collected. Requires thorough exploration.',
  },
  {
    name: 'Blood Blade',
    type: 'Melee / Blood',
    unlock: 'Exchange blood at cat room, use resulting item at goddess statue, defeat goddess boss',
    desc: 'A complex multi-step unlock. The Blood Blade deals damage based on missing HP. High-risk, high-reward weapon for experienced players.',
  },
  {
    name: 'Fish Tail Avatar',
    type: 'Special / Transform',
    unlock: 'Defeat Fish Tail Tan with bare hands (no weapon equipped)',
    desc: 'Transforms the Demon Lord. The transformation grants unique movement and attack patterns. Can accumulate body segments that don\'t disappear when discarding items.',
  },
  {
    name: 'Death Scythe',
    type: 'Melee / Scythe',
    unlock: 'One-hit kill the shopkeeper in any shop and defeat the triggered boss',
    desc: 'A devastating scythe with the highest damage potential. But be warned — angering the shopkeeper triggers one of the hardest boss fights in the game. Only recommended for experienced players.',
  },
];

export default function WeaponsPage() {
  return (
    <div className="bg-abyss bg-rune-pattern min-h-screen">
      <div className="max-w-5xl mx-auto px-4 lg:px-6 py-10">

        {/* Header */}
        <div className="mb-10">
          <p className="font-label text-[10px] uppercase tracking-[0.25em] text-dark-gold mb-3">
            Tools of Vengeance
          </p>
          <h1 className="font-display text-3xl lg:text-4xl tracking-display text-parchment">
            WEAPON COMPENDIUM
          </h1>
          <p className="font-body text-lg text-parchment-dim mt-4 max-w-2xl leading-relaxed">
            Demon Lord: Just a Block features 14 unique weapons, each unlocked through specific
            achievements and hidden encounters. From the reliable Lancelot to the devastating
            Death Scythe — every weapon offers a distinct playstyle and combat strategy.
          </p>
          <div className="w-24 h-px bg-dark-gold mt-6" />
        </div>

        {/* Weapon Cards */}
        <div className="space-y-6 mb-12">
          {WEAPONS.map((weapon, i) => (
            <div key={i} className="border border-border-gold p-6 bg-abyss-elevated hover:border-dark-gold/40 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div>
                  <span className="font-label text-[9px] uppercase tracking-wider px-2 py-0.5 border border-dark-gold/30 text-dark-gold">
                    {weapon.type}
                  </span>
                  <h2 className="font-display text-lg tracking-display text-parchment mt-2">
                    {weapon.name}
                  </h2>
                </div>
                <span className="font-label text-[10px] uppercase tracking-wider text-parchment-dim">
                  #{i + 1} of 14
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-label text-[10px] uppercase tracking-wider text-dark-gold mb-1">UNLOCK</h4>
                  <p className="font-body text-sm text-parchment-dim">{weapon.unlock}</p>
                </div>
                <div>
                  <h4 className="font-label text-[10px] uppercase tracking-wider text-dark-gold mb-1">COMBAT STYLE</h4>
                  <p className="font-body text-sm text-parchment-dim">{weapon.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="font-label text-[10px] uppercase tracking-wider text-parchment-dim/60 text-center">
          Weapon data verified from community achievement guides. Updated June 25, 2026. Unofficial fan site.
        </p>
      </div>
    </div>
  );
}
