import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Demon Lord: Just a Block — Best Farming Routes for EXP, Gold & Rare Items (2026)",
  description: "Complete farming route guide for Demon Lord: Just a Block. Discover the best routes for EXP farming, gold farming, and rare item drops. Includes tier lists and optimization tips.",
};

const FARMING_ROUTE_TIER_LIST = [
  { rank: 'S', area: 'Evernight Cave - Central Corridor', enemies: 'Bat Swarms, Shadow Imps', drops: 'Shadow Essence, Gold Coins, Rare Cards', expPerHour: '850-1000', notes: 'Highest EXP density, safe positioning' },
  { rank: 'S', area: 'Royal City Dungeon - Floor 2', enemies: 'Guardian Knights, Poison Spiders', drops: 'Knight Shields, Venom Glands, Epic Weapons', expPerHour: '900-1100', notes: 'Best loot quality, high risk' },
  { rank: 'A', area: 'Dark Dragon Forest - East Path', enemies: 'Slime Variants, Forest Goblins', drops: 'Green Slime, Goblin Ears, Common Cards', expPerHour: '600-750', notes: 'Safe for beginners, consistent gold' },
  { rank: 'A', area: 'Frozen Snow Mountain - Summit', enemies: 'Ice Wraiths, Frost Giants', drops: 'Frost Cores, Giant Souls, Ice Cards', expPerHour: '700-850', notes: 'Good EXP, requires fire resistance' },
  { rank: 'B', area: 'Slime Island - South Beach', enemies: 'King Slimes, Slime Minions', drops: 'Slime Crowns, Rainbow Slime, Gold', expPerHour: '500-650', notes: 'Relaxed farming, low stress' },
  { rank: 'B', area: 'Novice Village - Surrounding Fields', enemies: 'Training Dummies, Weak Zombies', drops: 'Practice Swords, Copper Coins', expPerHour: '300-400', notes: 'Early game only, testing builds' },
  { rank: 'C', area: 'Demon God Heart - Outer Ring', enemies: 'Demon Spawn, Corrupted Knights', drops: 'Demon Horns, Corrupted Hearts', expPerHour: '400-550', notes: 'Endgame area, very dangerous' },
];

const BEST_GEAR_BY_ZONE = [
  { zone: 'Dark Dragon Forest', recommendedGear: 'Lancelot Greatsword, Leather Armor', reasoning: 'Balanced defense and attack for forest enemies' },
  { zone: 'Evernight Cave', recommendedGear: 'Lightning Sparrow, Shadow Cloak', reasoning: 'Speed and evasion crucial in narrow corridors' },
  { zone: 'Frozen Snow Mountain', recommendedGear: 'Flame Sword, Fur Coat', reasoning: 'Fire damage melts ice enemies, warmth saves HP' },
  { zone: 'Royal City Dungeon', recommendedGear: 'Skull Fist, Knight Armor', reasoning: 'High defense needed for prolonged fights' },
  { zone: 'Slime Island', recommendedGear: 'Any AOE Weapon, Rubber Boots', reasoning: 'Slimes weak to area attacks, rubber prevents shock' },
  { zone: 'Demon God Heart', recommendedGear: 'Golden Skull Weapon, Demon Armor', reasoning: 'Endgame gear required for survival' },
];

export default function FarmingRoutesPage() {
  return (
    <div className="bg-abyss bg-rune-pattern min-h-screen">
      <div className="max-w-5xl mx-auto px-4 lg:px-6 py-10">

        {/* Header */}
        <div className="mb-10">
          <p className="font-label text-[10px] uppercase tracking-[0.25em] text-dark-gold mb-3">
            Efficiency & Optimization
          </p>
          <h1 className="font-display text-3xl lg:text-4xl tracking-display text-parchment">
            BEST FARMING ROUTES
          </h1>
          <p className="font-body text-lg text-parchment-dim mt-4 max-w-2xl leading-relaxed">
            Farming in Demon Lord: Just a Block means replaying cleared rooms and dungeons to grind
            EXP, gold, and rare loot. Since &quot;time moves only when you move,&quot; you can take your time
            to plan each step. This guide covers the best farming routes for every stage of the game,
            optimized for efficiency and safety.
          </p>
          <div className="w-24 h-px bg-blood-red mt-6" />
        </div>

        {/* Intro Section */}
        <section className="mb-12 border border-border-gold p-6 lg:p-8 bg-abyss-elevated">
          <h2 className="font-display text-xl tracking-display text-parchment mb-4">
            Understanding Farming in Demon Lord
          </h2>
          <p className="font-body text-sm text-parchment-dim leading-relaxed mb-4">
            In traditional action games, farming is often about mindless grinding. In Demon Lord: Just a Block,
            farming is a tactical exercise. Because the entire world pauses when you stand still, you can
            carefully position yourself to fight only the enemies you want, in the order you want. This makes
            farming not just efficient, but actually strategic. You can clear an entire room without taking
            a single hit if you plan your route correctly.
          </p>
          <p className="font-body text-sm text-parchment-dim leading-relaxed mb-4">
            The best farming routes balance three factors: EXP yield per hour, loot quality, and safety.
            High-EXP routes often involve large groups of weak enemies, while high-loot routes focus on
            fewer but stronger enemies with better drop tables. Some players prefer to farm in cleared areas
            where they already know the layout, while others push into new territory for the challenge.
          </p>
          <p className="font-body text-sm text-parchment-dim leading-relaxed">
            Before starting any farming session, make sure you&apos;ve visited the nearest Save Point to
            restore HP and save your progress. Nothing wastes more time than a death that loses 30 minutes
            of farming progress. Also, check your inventory capacity — there&apos;s nothing worse than
            finding a rare drop but having a full inventory and being forced to leave it behind.
          </p>
        </section>

        {/* Farming Route Tier List Table */}
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="font-display text-xl tracking-display text-parchment">
              FARMING ROUTE TIER LIST
            </h2>
            <div className="w-16 h-px bg-dark-gold mt-4" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border border-border-gold text-sm">
              <thead>
                <tr className="bg-abyss-elevated border-b border-border-gold">
                  <th className="text-left p-3 font-display text-dark-gold">Tier</th>
                  <th className="text-left p-3 font-display text-dark-gold">Area</th>
                  <th className="text-left p-3 font-display text-dark-gold">Enemies</th>
                  <th className="text-left p-3 font-display text-dark-gold">Drops</th>
                  <th className="text-left p-3 font-display text-dark-gold">EXP/hr</th>
                </tr>
              </thead>
              <tbody>
                {FARMING_ROUTE_TIER_LIST.map((route, i) => (
                  <tr key={i} className="border-b border-border-gold/50 hover:bg-abyss-elevated/50">
                    <td className="p-3">
                      <span className={`font-display text-lg ${
                        route.rank === 'S' ? 'text-blood-red' :
                        route.rank === 'A' ? 'text-dark-gold' :
                        route.rank === 'B' ? 'text-parchment-dim' : 'text-parchment/40'
                      }`}>
                        {route.rank}
                      </span>
                    </td>
                    <td className="p-3 font-body text-parchment">{route.area}</td>
                    <td className="p-3 font-body text-parchment-dim">{route.enemies}</td>
                    <td className="p-3 font-body text-parchment-dim">{route.drops}</td>
                    <td className="p-3 font-body text-dark-gold tabular-nums">{route.expPerHour}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-body text-xs text-parchment-dim/60 mt-3">
            *EXP/hr estimates based on optimal routing and no deaths. Your actual results may vary.
          </p>
        </section>

        {/* Best Gear by Farming Zone */}
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="font-display text-xl tracking-display text-parchment">
              BEST GEAR BY FARMING ZONE
            </h2>
            <div className="w-16 h-px bg-dark-gold mt-4" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border border-border-gold text-sm">
              <thead>
                <tr className="bg-abyss-elevated border-b border-border-gold">
                  <th className="text-left p-3 font-display text-dark-gold">Zone</th>
                  <th className="text-left p-3 font-display text-dark-gold">Recommended Gear</th>
                  <th className="text-left p-3 font-display text-dark-gold">Reasoning</th>
                </tr>
              </thead>
              <tbody>
                {BEST_GEAR_BY_ZONE.map((gear, i) => (
                  <tr key={i} className="border-b border-border-gold/50 hover:bg-abyss-elevated/50">
                    <td className="p-3 font-body text-parchment">{gear.zone}</td>
                    <td className="p-3 font-body text-dark-gold">{gear.recommendedGear}</td>
                    <td className="p-3 font-body text-parchment-dim">{gear.reasoning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Farming Strategies */}
        <section className="mb-12 border border-border-gold p-6 lg:p-8 bg-abyss-elevated">
          <h2 className="font-display text-xl tracking-display text-parchment mb-6">
            ADVANCED FARMING STRATEGIES
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-lg text-dark-gold mb-2">The &quot;Pull and Burst&quot; Method</h3>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">
                Since enemies only move when you move, you can &quot;pull&quot; enemies by taking one step, waiting
                for them to advance, then taking another step. This lets you group enemies into a cluster, then
                use an AOE attack or card to wipe them all at once. This method is especially effective in the
                Evernight Cave where narrow corridors let you funnel enemies into a chokepoint.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg text-dark-gold mb-2">Card Synthesis While Farming</h3>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">
                Don&apos;t just farm for EXP and gold — use your farming runs to experiment with card synthesis.
                Every three same-element cards can be combined at Shop Nodes for advanced versions. If you&apos;re
                farming in an area that has a Shop Node nearby, you can continuously refine your card deck while
                grinding. This dual-purpose approach makes farming sessions much more productive.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg text-dark-gold mb-2">Golden Skull Efficiency</h3>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">
                If you&apos;re farming for Golden Skulls (needed to unlock the Golden Skull weapon), prioritize
                routes that pass through areas with known Skull locations. The Evernight Cave has 3 Skulls,
                Frozen Snow Mountain has 4, and Royal City Dungeon has 5. By incorporating Skull checks into
                your farming route, you can progress toward the 16-Skull requirement without dedicated hunting runs.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg text-dark-gold mb-2">Death Recovery Farming</h3>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">
                After a death, you lose your current run&apos;s gold and temporary buffs, but you keep unlocked
                weapons and collected cards. Use this to your advantage: if you have a rough run where you died,
                replay the same area to re-farm the loot you lost. Since you already know the layout, you can
                clear it faster the second time. This &quot;recovery farming&quot; helps maintain progression momentum.
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
                Q: What&apos;s the fastest way to farm gold in early game?
              </h3>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">
                A: The Dark Dragon Forest East Path is your best bet. The Forest Goblins drop Gold Coins consistently,
                and the route is safe for new players. With optimal routing, you can farm 200-300 gold per hour.
                Save up 77 gold cumulative (spent at the archery location in Novice Village) to unlock the village key.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base text-dark-gold mb-2">
                Q: Can I farm boss rooms repeatedly?
              </h3>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">
                A: Yes, but boss rooms don&apos;t respawn after you clear them in a single run. To farm a boss repeatedly,
                you need to restart the run (die or intentionally reset). However, normal enemy rooms in cleared areas
                do respawn when you restart the run, making them better for consistent farming sessions.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base text-dark-gold mb-2">
                Q: Is there a level cap or farming diminishing returns?
              </h3>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">
                A: There&apos;s no level cap, but EXP gains do have diminishing returns in the sense that higher-level
                enemies give more EXP, so farming low-level areas becomes less efficient as you progress. The game
                encourages you to move to new areas rather than grind in one spot forever. Follow the tier list above
                to always farm the most efficient route for your current level.
              </p>
            </div>
          </div>
        </section>

        {/* Related Guides Sidebar */}
        <div className="mb-8 border border-border-gold p-5 bg-abyss-elevated">
          <h3 className="font-display text-lg font-semibold text-parchment mb-3">Related Guides</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/bosses" className="text-dark-gold hover:text-parchment transition-colors">
                Boss Fight Strategies
              </a>
            </li>
            <li>
              <a href="/weapons" className="text-dark-gold hover:text-parchment transition-colors">
                Complete Weapon Guide
              </a>
            </li>
            <li>
              <a href="/guides" className="text-dark-gold hover:text-parchment transition-colors">
                All Game Guides
              </a>
            </li>
          </ul>
        </div>

        <p className="font-label text-[10px] uppercase tracking-wider text-parchment-dim/60 text-center">
          Data verified from community farming tests & Steam guides. Updated June 2026. Unofficial fan site.
        </p>
      </div>
    </div>
  );
}
