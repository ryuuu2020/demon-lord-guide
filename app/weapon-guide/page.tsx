import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demon Lord: Just a Block Weapon Guide — All Weapons Ranked & Compared",
  description: "Complete Demon Lord: Just a Block weapon guide. All weapon types ranked by damage, speed, reach, and parry capability. Best weapon recommendations for each area and boss fight.",
};

const WEAPONS = [
  {
    name: "Sword & Shield",
    tier: "S",
    damage: "Medium",
    speed: "Fast",
    reach: "Medium",
    parryWindow: "Large (shield block)",
    bestAreas: "All areas — the most versatile weapon",
    notes: "The gold standard. Shield provides the largest parry window in the game and blocks chip damage on imperfect parries. Sword attacks are fast enough to fit two hits into most enemy pause windows. Recommended for first playthrough and boss fights where survival matters more than speed.",
  },
  {
    name: "Greatsword",
    tier: "A",
    damage: "High",
    speed: "Slow",
    reach: "Long",
    parryWindow: "Medium (weapon block)",
    bestAreas: "Area 2-4 — enemies have predictable patterns",
    notes: "High damage per swing means fewer hits needed to kill. Long reach lets you hit enemies from outside their attack range. The trade-off is slow swing speed — you can only fit one hit into most enemy pause windows, and whiffing a swing leaves you vulnerable for longer.",
  },
  {
    name: "Dual Daggers",
    tier: "A",
    damage: "Low per hit, high DPS",
    speed: "Very Fast",
    reach: "Short",
    parryWindow: "Small (dagger parry)",
    bestAreas: "Area 3-5 — enemies with long pause windows",
    notes: "Highest potential DPS if you land all hits. The very fast attack speed lets you fit 3-4 hits into most enemy pause windows. The downside: short reach forces you into melee range, and the small parry window demands precise timing. High skill ceiling, high risk.",
  },
  {
    name: "Spear",
    tier: "B",
    damage: "Medium",
    speed: "Medium",
    reach: "Very Long",
    parryWindow: "Small (staff parry)",
    bestAreas: "Area 1-2 — enemies with short reach",
    notes: "The reach is the spear's identity. You can hit most enemies before they can hit you. This makes it safe and consistent, but the medium damage and small parry window prevent it from excelling. Good learning weapon — teaches spacing fundamentals.",
  },
  {
    name: "War Hammer",
    tier: "B",
    damage: "Very High",
    speed: "Very Slow",
    reach: "Medium",
    parryWindow: "Medium (weapon block)",
    bestAreas: "Area 4-5 — heavily armored enemies",
    notes: "Highest damage per swing of any weapon. Bypasses a portion of enemy armor (armor-piercing property). The very slow speed means you must be certain before swinging — whiffing a hammer swing against a fast enemy is often fatal. Bring this to boss fights against armored enemies.",
  },
  {
    name: "Magic Staff",
    tier: "C",
    damage: "Variable (spell-based)",
    speed: "Slow",
    reach: "Long (ranged spells)",
    parryWindow: "None (cannot block)",
    bestAreas: "Area 5+ — when fully upgraded with spells",
    notes: "The only ranged option. Magic staves let you attack from a safe distance, but you cannot block or parry — if an enemy closes the gap, you have no defense. Requires significant investment in spell upgrades to match the damage output of melee weapons. High-investment, high-reward for experienced players.",
  },
];

const BOSS_WEAPON_MATCHUPS = [
  { boss: "Forest King (Area 1)", recommended: "Sword & Shield", reason: "Forest King has fast, multi-hit combos. The large shield parry window is essential for surviving the combo. Do not use slow weapons — you will not have time to swing between his attacks." },
  { boss: "Cave King (Area 2)", recommended: "Spear", reason: "Cave King has short reach and relies on arena hazards. The spear's long reach lets you hit him from outside his attack range while avoiding the environmental traps he spawns." },
  { boss: "Snow Mountain King (Area 3)", recommended: "Dual Daggers", reason: "Snow Mountain King has long pause windows after each ice attack. Daggers exploit this — you can fit four hits into every pause window and dodge out before the next attack." },
  { boss: "Dungeon King (Area 4)", recommended: "Greatsword", reason: "Dungeon King is armored and slow. Greatsword's high damage per swing punches through armor, and his slow attacks give you plenty of time for the greatsword's long recovery animation." },
  { boss: "Demon God Heart (Final)", recommended: "Sword & Shield", reason: "The final boss has unpredictable attack patterns and high damage. The shield's large parry window and chip damage reduction give you the best chance of surviving the learning phase of this fight." },
];

export default function WeaponGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Demon Lord: Just a Block — Weapon Guide</h1>
      <p className="text-ink-light mb-8">Last updated: July 2026</p>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-ink-light mb-6">
          Your weapon choice in Demon Lord: Just a Block defines your entire playstyle. Each weapon type has unique damage output, attack speed, reach, and parry capability. This guide ranks every weapon, explains the trade-offs, and recommends the best weapon for each area and boss fight.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">All Weapons Compared</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Weapon</th>
                <th className="p-3 border border-gray-700 text-ink">Tier</th>
                <th className="p-3 border border-gray-700 text-ink">Damage</th>
                <th className="p-3 border border-gray-700 text-ink">Speed</th>
                <th className="p-3 border border-gray-700 text-ink">Reach</th>
                <th className="p-3 border border-gray-700 text-ink">Parry</th>
                <th className="p-3 border border-gray-700 text-ink">Best Areas</th>
              </tr>
            </thead>
            <tbody>
              {WEAPONS.map((w, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{w.name}</td>
                  <td className="p-3 border border-gray-700">
                    <span className={`inline-block px-2 py-0.5 text-xs font-bold rounded ${w.tier === "S" ? "bg-yellow-700 text-yellow-100" : w.tier === "A" ? "bg-gray-600 text-gray-100" : w.tier === "B" ? "bg-amber-800 text-amber-100" : "bg-gray-700 text-gray-300"}`}>{w.tier}</span>
                  </td>
                  <td className="p-3 border border-gray-700 text-ink-light">{w.damage}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{w.speed}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{w.reach}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{w.parryWindow}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{w.bestAreas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {WEAPONS.map((w, i) => (
          <div key={i} className="mt-6 border border-gray-700 p-5 bg-gray-800/20">
            <h3 className="text-lg font-semibold text-accent">
              {w.name} <span className="text-sm text-ink-light">— Tier {w.tier}</span>
            </h3>
            <p className="text-ink-light mt-2">{w.notes}</p>
          </div>
        ))}

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Best Weapon for Each Boss</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Boss</th>
                <th className="p-3 border border-gray-700 text-ink">Recommended Weapon</th>
                <th className="p-3 border border-gray-700 text-ink">Strategy Reason</th>
              </tr>
            </thead>
            <tbody>
              {BOSS_WEAPON_MATCHUPS.map((b, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{b.boss}</td>
                  <td className="p-3 border border-gray-700 text-accent font-semibold">{b.recommended}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{b.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">FAQ</h2>
        <div className="space-y-4">
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Can I switch weapons mid-area?</h3>
            <p className="text-ink-light mt-2">Yes. You can swap weapons at any checkpoint or bonfire within an area. However, weapon upgrades are weapon-specific — upgrading your Sword to level 3 does not upgrade your Greatsword. It is best to pick one weapon type per playthrough and invest all upgrade materials into it. Swapping weapons mid-playthrough means starting from scratch on upgrades, which is rarely worth it unless you are struggling badly with a specific boss.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">What is the best weapon for speedrunning?</h3>
            <p className="text-ink-light mt-2">Dual Daggers are the speedrunning meta. The very fast attack speed and high DPS potential mean you can kill enemies and bosses faster than any other weapon — assuming you execute perfectly. The lack of a reliable block is mitigated by speedrunners&apos; perfect knowledge of enemy attack patterns. For casual play, Sword and Shield is more consistent because it forgives mistakes.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">How do weapon upgrades work?</h3>
            <p className="text-ink-light mt-2">Each weapon can be upgraded three times per area at the area&apos;s blacksmith. Upgrade level 1 costs gold + common materials, level 2 costs gold + rare materials, and level 3 costs gold + boss materials (from the area boss). A fully upgraded Area 1 weapon is roughly equivalent to an unupgraded Area 2 weapon. Always fully upgrade your weapon before facing an area boss — the damage difference between a level 2 and level 3 weapon can be the margin between victory and defeat.</p>
          </div>
        </div>

        <p className="text-ink-light mt-10 text-sm border-t border-gray-700 pt-4">
          Last updated: July 1, 2026. Weapon stats verified against Demon Lord: Just a Block current release version.
        </p>
      </div>
    </div>
  );
}
