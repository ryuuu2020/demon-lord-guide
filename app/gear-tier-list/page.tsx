import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Demon Lord: Just a Block — Weapon & Gear Tier List (2026)",
  description: "Complete weapon and gear tier list for Demon Lord: Just a Block. Rankings from S to D tier with stats, best builds, and how to unlock each weapon.",
};

const WEAPONS_TIER_LIST = [
  { tier: 'S', name: 'Golden Skull', type: 'Greatsword', damage: '95-120', speed: 'Slow', range: 'Medium', unlock: 'Collect 16 Golden Skulls', notes: 'Highest damage, endgame only' },
  { tier: 'S', name: 'Lancelot', type: 'Greatsword', damage: '75-90', speed: 'Slow', range: 'Medium', unlock: 'Dark Dragon Forest sword stand', notes: 'Best early greatsword, high stagger' },
  { tier: 'S', name: 'Lightning Sparrow', type: 'Rapier', damage: '45-60', speed: 'Very Fast', range: 'Long', unlock: 'Find Murphy in forest', notes: 'Fastest attack speed, excellent reach' },
  { tier: 'A', name: 'Skull Fist', type: 'Fist Weapon', damage: '50-70', speed: 'Fast', range: 'Short', unlock: 'Clear 10 rooms', notes: 'High DPS, requires close range' },
  { tier: 'A', name: 'Flame Sword', type: 'Longsword', damage: '60-80', range: 'Medium', speed: 'Medium', unlock: 'Craft with Fire Essence', notes: 'Fire damage vs ice enemies' },
  { tier: 'A', name: 'Shadow Blade', type: 'Dagger', damage: '40-55', speed: 'Very Fast', range: 'Short', unlock: 'Evernight Cave secret chest', notes: 'Critical hit bonus' },
  { tier: 'B', name: 'Short Sword', type: 'Sword', damage: '25-35', speed: 'Medium', range: 'Short', unlock: 'Starting weapon', notes: ' Balanced but outclassed later' },
  { tier: 'B', name: 'Bat Wing Sword', type: 'Curved Sword', damage: '45-60', speed: 'Fast', range: 'Medium', unlock: 'Defeat Bat Boss', notes: 'Good mobility weapon' },
  { tier: 'B', name: 'Frost Axe', type: 'Axe', damage: '65-85', speed: 'Slow', range: 'Medium', unlock: 'Frozen Snow Mountain craft', notes: 'Slow but powerful' },
  { tier: 'C', name: 'Wooden Sword', type: 'Sword', damage: '10-15', speed: 'Medium', range: 'Short', unlock: 'Novice Village starter', notes: 'Training only, upgrade ASAP' },
  { tier: 'C', name: 'Iron Sword', type: 'Sword', damage: '30-40', speed: 'Medium', range: 'Short', unlock: 'Buy from shop (100 gold)', notes: 'Slightly better than Short Sword' },
  { tier: 'D', name: 'Broken Sword', type: 'Sword', damage: '5-10', speed: 'Slow', range: 'Short', unlock: 'Found in trash piles', notes: 'Worst weapon, avoid using' },
];

const ARMOR_GEAR_TIER_LIST = [
  { tier: 'S', name: 'Demon Armor Set', defense: '85-100', weight: 'Heavy', effect: 'Damage reduction + fire resist', unlock: 'Demon God Heart endgame', notes: 'Best defense in game' },
  { tier: 'S', name: 'Knight Armor Set', defense: '70-85', weight: 'Heavy', effect: 'HP bonus + poison resist', unlock: 'Royal City Dungeon', notes: 'Great for tank builds' },
  { tier: 'A', name: 'Shadow Cloak Set', defense: '40-55', weight: 'Light', effect: 'Evasion boost + shadow move', unlock: 'Evernight Cave', notes: 'Best for speed builds' },
  { tier: 'A', name: 'Fur Coat Set', defense: '50-65', weight: 'Medium', effect: 'Cold resist + HP regen', unlock: 'Frozen Snow Mountain', notes: 'Essential for snow areas' },
  { tier: 'B', name: 'Leather Armor Set', defense: '30-45', weight: 'Light', effect: 'Speed bonus', unlock: 'Starting gear', notes: 'Decent early game armor' },
  { tier: 'B', name: 'Slime Shield', defense: 'Block 30%', weight: 'Medium', effect: 'Absorbs slime damage', unlock: 'Slime Island', notes: 'Situational but useful' },
  { tier: 'C', name: 'Cloth Robe Set', defense: '15-25', weight: 'Very Light', effect: 'Card cooldown reduction', unlock: 'Novice Village shop', notes: 'Low defense, niche use' },
  { tier: 'D', name: 'Tattered Clothes', defense: '5-10', weight: 'None', effect: 'None', unlock: 'Starting gear', notes: 'Upgrade immediately' },
];

export default function GearTierListPage() {
  return (
    <div className="bg-abyss bg-rune-pattern min-h-screen">
      <div className="max-w-5xl mx-auto px-4 lg:px-6 py-10">

        {/* Header */}
        <div className="mb-10">
          <p className="font-label text-[10px] uppercase tracking-[0.25em] text-dark-gold mb-3">
            Equipment & Optimization
          </p>
          <h1 className="font-display text-3xl lg:text-4xl tracking-display text-parchment">
            WEAPON & GEAR TIER LIST
          </h1>
          <p className="font-body text-lg text-parchment-dim mt-4 max-w-2xl leading-relaxed">
            Every weapon in Demon Lord: Just a Block has a distinct playstyle. This tier list ranks all
            weapons and armor sets from S to D tier based on damage output, utility, ease of unlock, and
            viability across different game stages. Updated for 2026 with community feedback and meta analysis.
          </p>
          <div className="w-24 h-px bg-blood-red mt-6" />
        </div>

        {/* Intro Section */}
        <section className="mb-12 border border-border-gold p-6 lg:p-8 bg-abyss-elevated">
          <h2 className="font-display text-xl tracking-display text-parchment mb-4">
            How to Read This Tier List
          </h2>
          <p className="font-body text-sm text-parchment-dim leading-relaxed mb-4">
            <strong className="text-parchment">S Tier:</strong> Best-in-slot weapons and gear. These are the meta-defining
            items that dominate high-level play. S-tier weapons typically have either exceptional damage, unique utility,
            or both. They&apos;re worth building your entire run around.
          </p>
          <p className="font-body text-sm text-parchment-dim leading-relaxed mb-4">
            <strong className="text-parchment">A Tier:</strong> Excellent choices that are slightly less optimal than S-tier,
            or require specific conditions to shine. A-tier gear is perfectly viable for clearing the entire game, and some
            players may actually prefer A-tier weapons for their playstyle (e.g., speed runners often prefer Lightning Sparrow
            over Lancelot for the attack speed).
          </p>
          <p className="font-body text-sm text-parchment-dim leading-relaxed mb-4">
            <strong className="text-parchment">B Tier:</strong> Solid, reliable options. Not meta-defining, but perfectly
            functional. B-tier gear is what most players use in their first few clears. They&apos;re easier to obtain than
            higher tiers and still let you enjoy the game without struggling.
          </p>
          <p className="font-body text-sm text-parchment-dim leading-relaxed">
            <strong className="text-parchment">C/D Tier:</strong> Outclassed by other options. These weapons/armor pieces
            exist mainly as stepping stones or niche curiosities. D-tier specifically means &quot;don&apos;t use unless you
            have literally nothing else.&quot; That said, Skill Issue runs using D-tier gear can be a fun challenge for
            experienced players.
          </p>
        </section>

        {/* Weapons Tier List Table */}
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="font-display text-xl tracking-display text-parchment">
              WEAPONS TIER LIST
            </h2>
            <div className="w-16 h-px bg-dark-gold mt-4" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border border-border-gold text-sm">
              <thead>
                <tr className="bg-abyss-elevated border-b border-border-gold">
                  <th className="text-left p-3 font-display text-dark-gold">Tier</th>
                  <th className="text-left p-3 font-display text-dark-gold">Weapon</th>
                  <th className="text-left p-3 font-display text-dark-gold">Type</th>
                  <th className="text-left p-3 font-display text-dark-gold">Damage</th>
                  <th className="text-left p-3 font-display text-dark-gold">Speed</th>
                  <th className="text-left p-3 font-display text-dark-gold">Unlock</th>
                </tr>
              </thead>
              <tbody>
                {WEAPONS_TIER_LIST.map((weapon, i) => (
                  <tr key={i} className="border-b border-border-gold/50 hover:bg-abyss-elevated/50">
                    <td className="p-3">
                      <span className={`font-display text-lg ${
                        weapon.tier === 'S' ? 'text-blood-red' :
                        weapon.tier === 'A' ? 'text-dark-gold' :
                        weapon.tier === 'B' ? 'text-parchment-dim' : 'text-parchment/40'
                      }`}>
                        {weapon.tier}
                      </span>
                    </td>
                    <td className="p-3 font-body text-parchment">{weapon.name}</td>
                    <td className="p-3 font-body text-parchment-dim">{weapon.type}</td>
                    <td className="p-3 font-body text-parchment-dim tabular-nums">{weapon.damage}</td>
                    <td className="p-3 font-body text-parchment-dim">{weapon.speed}</td>
                    <td className="p-3 font-body text-parchment-dim text-xs">{weapon.unlock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Armor/Gear Tier List Table */}
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="font-display text-xl tracking-display text-parchment">
              ARMOR & GEAR TIER LIST
            </h2>
            <div className="w-16 h-px bg-dark-gold mt-4" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border border-border-gold text-sm">
              <thead>
                <tr className="bg-abyss-elevated border-b border-border-gold">
                  <th className="text-left p-3 font-display text-dark-gold">Tier</th>
                  <th className="text-left p-3 font-display text-dark-gold">Armor Set</th>
                  <th className="text-left p-3 font-display text-dark-gold">Defense</th>
                  <th className="text-left p-3 font-display text-dark-gold">Weight</th>
                  <th className="text-left p-3 font-display text-dark-gold">Effect</th>
                  <th className="text-left p-3 font-display text-dark-gold">Unlock</th>
                </tr>
              </thead>
              <tbody>
                {ARMOR_GEAR_TIER_LIST.map((armor, i) => (
                  <tr key={i} className="border-b border-border-gold/50 hover:bg-abyss-elevated/50">
                    <td className="p-3">
                      <span className={`font-display text-lg ${
                        armor.tier === 'S' ? 'text-blood-red' :
                        armor.tier === 'A' ? 'text-dark-gold' :
                        armor.tier === 'B' ? 'text-parchment-dim' : 'text-parchment/40'
                      }`}>
                        {armor.tier}
                      </span>
                    </td>
                    <td className="p-3 font-body text-parchment">{armor.name}</td>
                    <td className="p-3 font-body text-parchment-dim tabular-nums">{armor.defense}</td>
                    <td className="p-3 font-body text-parchment-dim">{armor.weight}</td>
                    <td className="p-3 font-body text-parchment-dim text-xs">{armor.effect}</td>
                    <td className="p-3 font-body text-parchment-dim text-xs">{armor.unlock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Build Recommendations */}
        <section className="mb-12 border border-border-gold p-6 lg:p-8 bg-abyss-elevated">
          <h2 className="font-display text-xl tracking-display text-parchment mb-6">
            RECOMMENDED BUILDS BY TIER
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-lg text-dark-gold mb-2">S-Tier Speed Run Build</h3>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">
                <strong className="text-parchment">Weapon:</strong> Lightning Sparrow — <strong className="text-parchment">Armor:</strong> Shadow Cloak Set —
                <strong className="text-parchment">Playstyle:</strong> Hit-and-run tactics. The Lightning Sparrow&apos;s exceptional
                attack speed lets you deal damage while repositioning. Combine with speed-boosting cards (Bat cards are great
                for this) to zip around the map. This build holds the current speed run record at 47 minutes for a full clear.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg text-dark-gold mb-2">S-Tier Tank Build</h3>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">
                <strong className="text-parchment">Weapon:</strong> Golden Skull (or Lancelot if not yet unlocked) —
                <strong className="text-parchment">Armor:</strong> Demon Armor Set — <strong className="text-parchment">Playstyle:</strong> Walk right up to enemies
                and trade hits. Your high defense means you take minimal damage, while your massive weapon deals devastating
                damage per hit. This build is the safest option for new players attempting their first full clear.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg text-dark-gold mb-2">A-Tier Balanced Build</h3>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">
                <strong className="text-parchment">Weapon:</strong> Skull Fist — <strong className="text-parchment">Armor:</strong> Knight Armor Set —
                <strong className="text-parchment">Playstyle:</strong> High DPS brawler. Skull Fist has the highest DPS of any
                A-tier weapon, but you need to be in close range. Knight Armor gives you the survivability to stay in melee.
                This build is excellent for players who want aggressive, fast-paced combat without the extreme difficulty of S-tier.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12 border border-border-gold p-6 lg:p-8 bg-abyss-elevated">
          <h2 className="font-display text-xl tracking-display text-parchment mb-6">FAQ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-base text-dark-gold mb-2">
                Q: Can I change weapons mid-run?
              </h3>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">
                A: Yes! You can switch weapons at any time by interacting with weapon stands found throughout the map.
                However, you can only carry one weapon at a time — if you pick up a new weapon, your old one is left behind.
                Plan your weapon swaps carefully. Some players carry a fast weapon (Lightning Sparrow) for normal enemies
                and switch to a heavy weapon (Lancelot) for boss fights.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base text-dark-gold mb-2">
                Q: Does armor weight affect movement speed?
              </h3>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">
                A: Yes. Heavy armor (Demon Armor, Knight Armor) reduces your movement speed by approximately 15%,
                which in a game where &quot;time moves only when you move&quot; means enemies can outpace you if you&apos;re
                not careful. Light armor (Shadow Cloak, Leather) has no speed penalty. Consider your playstyle:
                tank builds can afford the speed loss; speed builds should avoid heavy armor.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base text-dark-gold mb-2">
                Q: What&apos;s the fastest way to get Golden Skull weapon?
              </h3>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">
                A: You need to collect 16 out of 23 Golden Skulls hidden across all areas. The most efficient route:
                clear Dark Dragon Forest (3 Skulls), Evernight Cave (3 Skulls), Frozen Snow Mountain (4 Skulls),
                Royal City Dungeon (5 Skulls), then Slime Island (1 Skull). That&apos;s 16 total. Use our
                Golden Skull locations guide for exact positions. Expect this to take 8-12 hours of focused searching.
              </p>
            </div>
          </div>
        </section>

        {/* Related Guides Sidebar */}
        <div className="mb-8 border border-border-gold p-5 bg-abyss-elevated">
          <h3 className="font-display text-lg font-semibold text-parchment mb-3">Related Guides</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/weapons" className="text-dark-gold hover:text-parchment transition-colors">
                Complete Weapon Guide
              </a>
            </li>
            <li>
              <a href="/builds" className="text-dark-gold hover:text-parchment transition-colors">
                Build Guides & Strategies
              </a>
            </li>
            <li>
              <a href="/bosses" className="text-dark-gold hover:text-parchment transition-colors">
                Boss Fight Strategies
              </a>
            </li>
          </ul>
        </div>

        <p className="font-label text-[10px] uppercase tracking-wider text-parchment-dim/60 text-center">
          Community-tested builds & meta analysis. Updated June 2026. Unofficial fan site.
        </p>
      </div>
    </div>
  );
}
