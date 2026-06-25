import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demon Lord: Just a Block Weapon & Build Guide — Best Combinations',
  description: 'Complete Demon Lord: Just a Block build guide. All 14 weapons ranked, best weapon combinations, card synthesis recipes, and how to unlock each weapon.',
};

const WEAPONS = [
  { name: 'Lancelot', unlock: 'Interact with the sword stand near the big tree in Forest', type: 'Melee / Greatsword' },
  { name: 'Lightning Sparrow', unlock: 'Find Murphy and interact with him', type: 'Lightning / Speed' },
  { name: 'Eye Laser Cannon', unlock: 'Clear the trial room twice', type: 'Ranged / Laser' },
  { name: 'Skull Fist', unlock: 'Pass through 10 rooms', type: 'Melee / Fist' },
  { name: 'Divine Crossbow', unlock: 'Unlock near the Black Dragon Nest in Cave area', type: 'Ranged / Crossbow' },
  { name: 'Diamond Shield', unlock: 'Accumulate 50 parries', type: 'Defense / Shield' },
  { name: 'Shadow Dagger', unlock: 'Defeat any boss with 1 HP remaining', type: 'Dagger / Speed' },
  { name: 'Original Fantasy', unlock: 'Collect 18 Hard Bones (accumulate through deaths)', type: 'Special / Multi-form' },
  { name: 'Demon God Sword', unlock: 'Defeat normal ending Demon God Sword boss', type: 'Melee / Demon' },
  { name: 'Ham Bat', unlock: 'Kill the Ham Knight\'s thrown ham bat and pick it up', type: 'Melee / Blunt' },
  { name: 'Golden Skull', unlock: 'Collect 16 Golden Skulls', type: 'Special / Collection' },
  { name: 'Blood Blade', unlock: 'Exchange blood at cat room, use item at goddess statue, defeat goddess', type: 'Melee / Blood' },
  { name: 'Fish Tail Avatar', unlock: 'Defeat Fish Tail Tan with bare hands (no weapon)', type: 'Special / Transform' },
  { name: 'Death Scythe', unlock: 'One-hit kill the shopkeeper and defeat the triggered boss', type: 'Melee / Scythe' },
];

const CARD_CATEGORIES = [
  { name: 'Attack Cards', examples: 'Demon Army (魔軍), Shuriken (手裏剑), Bat (蝙蝠), Bomb (炸彈)', desc: 'Direct damage and combat abilities. Synthesize with other types for advanced effects.' },
  { name: 'Element Cards', examples: 'Fire (火焰), Lightning (閃電), Ice (冰)', desc: 'Elemental effects that combine with attack cards for enhanced damage types.' },
  { name: 'Utility Cards', examples: 'Items (道具), Environment (環境), Invincibility (無敵), Turret (砲台)', desc: 'Support and environmental cards that create synergies with attack cards.' },
];

const CARD_RECIPES = [
  { combo: 'Demon Army + Shuriken', result: 'Love\'s Lash (愛的鞭撻)' },
  { combo: 'Items + Bat', result: 'Bat Machine Gun (蝙蝠機關槍)' },
  { combo: 'Bat + Demon Army', result: 'Parasitic Bat (寄生蝙蝠)' },
  { combo: 'Demon Army + Fire', result: 'Burning Legion (燃燒軍團)' },
  { combo: 'Environment + Bomb', result: 'Bomb Tree (炸彈樹)' },
  { combo: 'Bomb + Bat', result: 'Bat Bomb (蝙蝠炸彈)' },
  { combo: 'Fire + Environment', result: 'Ripe Fruit (熟熟果實)' },
  { combo: 'Shuriken + Lightning', result: 'Conductive Dagger (導電暗器)' },
  { combo: 'Lightning + Bat', result: 'Lightning Bat (閃電蝙蝠)' },
  { combo: 'Bomb + Demon Army', result: 'Bomb Legion (炸彈軍團)' },
  { combo: 'Demon Army + Invincibility', result: 'Holy Protection (聖光庇護)' },
  { combo: 'Demon Army + Turret', result: 'Army Assembly (大軍集結)' },
];

const FAQ_SNIPPETS = [
  {
    q: 'Q: What weapon should I pick first?',
    a: 'A: The Lancelot is the most accessible first weapon — simply interact with the sword near the big tree in Dark Dragon Forest. It has reliable damage and a charged attack capability. The Original Fantasy (unlocked via deaths) offers multiple combat forms and is one of the most versatile weapons.',
  },
  {
    q: 'Q: How do the cards work?',
    a: 'A: Defeating enemies drops cards. Combine three same-element cards at Shop Nodes for advanced versions. Different card types (attack, element, utility) can be synthesized to create powerful color-tier abilities. The game has over 200 ability cards to collect.',
  },
  {
    q: 'Q: Is there a "best" build?',
    a: 'A: Builds in Demon Lord are defined by your weapon choice and card combination, not traditional elemental archetypes. Experiment with weapon-card synergies. The Death Scythe is widely considered the hardest hitter but requires defeating the shopkeeper to unlock. For safety, pair the Diamond Shield with ranged weapons.',
  },
];

export default function BuildsPage() {
  return (
    <div className="bg-abyss bg-rune-pattern min-h-screen">
      <div className="max-w-5xl mx-auto px-4 lg:px-6 py-10">

        {/* Header */}
        <div className="mb-10">
          <p className="font-label text-[10px] uppercase tracking-[0.25em] text-dark-gold mb-3">
            Arsenal of Chaos
          </p>
          <h1 className="font-display text-3xl lg:text-4xl tracking-display text-parchment">
            WEAPONS & BUILDS
          </h1>
          <p className="font-body text-lg text-parchment-dim mt-4 max-w-2xl leading-relaxed">
            Demon Lord: Just a Block features 14 unique weapons, each with distinct mechanics.
            Builds are defined by your weapon and card combination — experiment to find synergies
            that match your playstyle. All data verified from community guides and Steam achievements.
          </p>
          <div className="w-24 h-px bg-dark-gold mt-6" />
        </div>

        {/* Weapons Table */}
        <section className="mb-12">
          <h2 className="font-display text-xl tracking-display text-parchment mb-4">All 14 Weapons & Unlock Conditions</h2>
          <div className="border border-border-gold overflow-hidden bg-abyss-elevated">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border-gold">
                    <th className="text-left py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">Weapon</th>
                    <th className="text-left py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">Type</th>
                    <th className="text-left py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">How to Unlock</th>
                  </tr>
                </thead>
                <tbody>
                  {WEAPONS.map((w, i) => (
                    <tr key={i} className={`${i < WEAPONS.length - 1 ? 'border-b border-border-gold/20' : ''} hover:bg-dark-gold/5 transition-colors`}>
                      <td className="py-3 px-4">
                        <span className="font-display text-sm text-parchment">{w.name}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-label text-[10px] uppercase tracking-wider text-dark-gold">{w.type}</span>
                      </td>
                      <td className="py-3 px-4 font-body text-sm text-parchment-dim leading-relaxed">{w.unlock}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Card System */}
        <section className="mb-12">
          <h2 className="font-display text-xl tracking-display text-parchment mb-4">Card System Overview</h2>
          <p className="font-body text-sm text-parchment-dim mb-6 leading-relaxed">
            The game features over 200 ability cards across three main categories. Cards drop from enemies
            and can be synthesized at Shop Nodes. Three same-element cards create advanced versions.
            Experiment with cross-type synthesis for powerful color-tier abilities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CARD_CATEGORIES.map((cat, i) => (
              <div key={i} className="border border-border-gold p-5 bg-abyss-elevated">
                <h3 className="font-display text-sm tracking-display text-dark-gold mb-3">{cat.name}</h3>
                <p className="font-label text-[10px] uppercase tracking-wider text-parchment-dim/80 mb-2">{cat.examples}</p>
                <p className="font-body text-sm text-parchment-dim leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Synthesis Recipes */}
        <section className="mb-12">
          <h2 className="font-display text-xl tracking-display text-parchment mb-4">Card Synthesis Recipes</h2>
          <div className="border border-border-gold overflow-hidden bg-abyss-elevated">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border-gold">
                    <th className="text-left py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">Combination</th>
                    <th className="text-left py-3 px-4 font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {CARD_RECIPES.map((recipe, i) => (
                    <tr key={i} className={`${i < CARD_RECIPES.length - 1 ? 'border-b border-border-gold/20' : ''} hover:bg-dark-gold/5 transition-colors`}>
                      <td className="py-3 px-4 font-body text-sm text-parchment">{recipe.combo}</td>
                      <td className="py-3 px-4 font-body text-sm text-dark-gold">{recipe.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="mb-6">
            <h2 className="font-display text-xl tracking-display text-parchment">BUILD FAQ</h2>
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
          Data verified from community achievement guides. Updated June 25, 2026. Unofficial fan site.
        </p>
      </div>
    </div>
  );
}
