import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demon Lord Boss Strategy — All 7 Bosses Guide | Demon Lord Guide",
  description: "Complete Demon Lord boss strategy guide. Every boss in all 7 areas with HP, attack patterns, weaknesses, and clear strategies.",
};

const BOSSES = [
  { name: "Warden Hargrove (Asylum)", area: "The Asylum", level: 8, hp: 1500, attackPattern: "Cleave + Slam combo", weakness: "Fire damage", phaseBreak: "Drops aggro at 50% HP", timeLimit: "5 min", recommendedLevel: 10, strategy: "Burn him down with fire spells before phase 2. Stay behind to avoid cleave." },
  { name: "The Hollow King (Catacombs)", area: "Royal Catacombs", level: 14, hp: 2500, attackPattern: "Summon skeletons + life drain", weakness: "Holy damage", phaseBreak: "Summons stop at 33% HP", timeLimit: "7 min", recommendedLevel: 16, strategy: "Bring holy weapon. Focus the king, ignore adds until phase 2." },
  { name: "Twin Serpents (Whispering Caves)", area: "Whispering Caves", level: 18, hp: "1800 each", attackPattern: "Poison breath + tail sweep", weakness: "Lightning damage", phaseBreak: "Both must die in 10 sec", timeLimit: "6 min", recommendedLevel: 20, strategy: "Split the party. One tank per serpent. Lightning chain helps." },
  { name: "Iron Golem (Forge Depths)", area: "Forge Depths", level: 24, hp: 4000, attackPattern: "Slam + ground pound", weakness: "Water damage (rust)", phaseBreak: "Loses 20% armor at 50% HP", timeLimit: "8 min", recommendedLevel: 26, strategy: "Ranged only. Do not melee. Bring water staff." },
  { name: "Lich Queen Seraphis (Frozen Spire)", area: "Frozen Spire", level: 32, hp: 5500, attackPattern: "Ice storm + summon wraiths", weakness: "Fire damage", phaseBreak: "Shield breaks at 25% HP", timeLimit: "9 min", recommendedLevel: 34, strategy: "Stack fire resist. Burn through shield, then burst phase 3." },
  { name: "Void Herald (Shadow Realm)", area: "Shadow Realm", level: 40, hp: 7000, attackPattern: "Void bolt + phase shift", weakness: "Light damage (any source)", phaseBreak: "Cannot be hurt during shift", timeLimit: "10 min", recommendedLevel: 42, strategy: "Save burst for when he materializes. Track the shift pattern." },
  { name: "Demon Lord Azarak (Throne of Hell)", area: "Throne of Hell", level: 50, hp: 12000, attackPattern: "Multi-phase combo (5 phases)", weakness: "Balanced resistances", phaseBreak: "Different per phase", timeLimit: "15 min", recommendedLevel: 52, strategy: "Learn each phase. Bring full kit. No cheese strategy." },
];

const PHASE_GUIDE = [
  { phase: 1, name: "Opening Salvo", hp: "100%-75%", primary: "Azarak uses melee combos and summons lesser demons", key: "Burn adds first, save cooldowns for phase 3", tankTip: "Face tank, hold aggro" },
  { phase: 2, name: "Wings of Wrath", hp: "75%-50%", primary: "Azarak takes flight, AoE fire breath across the arena", key: "Hide behind pillars. Burst when he lands", tankTip: "Cannot tank this phase, must dodge" },
  { phase: 3, name: "Summoning Pit", hp: "50%-25%", primary: "Azarak opens portals, summons 4 bosses from prior areas", key: "Burn portals first. Bosses are easier than Azarak", tankTip: "Off-tank each portal boss" },
  { phase: 4, name: "Void Storm", hp: "25%-10%", primary: "Arena covered in void zones, periodic void bolts", key: "Stay mobile. Use mobility cooldowns. Burst on openings", tankTip: "Tanks swap every 20 seconds" },
  { phase: 5, name: "Last Stand", hp: "10%-0%", primary: "Azarak enrages, all cooldowns reset, +50% damage", key: "Burn him down. He is killable in 30 seconds at this point", tankTip: "Survival not required, just DPS race" },
];

const GEAR_RECOMMENDATIONS = [
  { slot: "Weapon", preBoss: "Fire Staff (10-24)", midBoss: "Dual-wield Holy Swords (25-39)", endBoss: "Masterwork Demon Blade (40+)", reasoning: "Holy damage is the only consistent weakness across all 7 bosses." },
  { slot: "Armor", preBoss: "Reinforced Leather", midBoss: "Hellforged Plate", endBoss: "Soul-Etched Plate Set", reasoning: "Soul-Etched gives +20% damage and reflects 5% damage back to attackers." },
  { slot: "Accessory", preBoss: "Flaming Pendant", midBoss: "Lich Queen's Crown", endBoss: "Demon Lord's Eye", reasoning: "Crown and Eye are boss-drop exclusives. The Eye grants 15% all-damage." },
  { slot: "Consumable", preBoss: "20 Health Potions", midBoss: "10 Health + 5 Fire Resist", endBoss: "10 Health + 5 Holy Oil + 3 Elixir of Power", reasoning: "End-game fights need 2+ consumable types for different damage types." },
];

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-ink">Demon Lord Boss Strategy Guide</h1>
      <p className="text-ink-light mb-8">Last updated: July 2, 2026</p>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-ink-light mb-6">
          Demon Lord features 7 main bosses, each with a unique arena, attack pattern, and elemental weakness. The early bosses are tutorials for the final Demon Lord Azarak fight, which is a 5-phase DPS race against one of the most mechanically dense boss designs of the year. This guide covers every boss with HP values, weaknesses, recommended player level, and clear strategies.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">All 7 Bosses</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Boss</th>
                <th className="p-3 border border-gray-700 text-ink">Area</th>
                <th className="p-3 border border-gray-700 text-ink">HP</th>
                <th className="p-3 border border-gray-700 text-ink">Weakness</th>
                <th className="p-3 border border-gray-700 text-ink">Recommended Level</th>
              </tr>
            </thead>
            <tbody>
              {BOSSES.map((b, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{b.name}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{b.area}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{b.hp}</td>
                  <td className="p-3 border border-gray-700 text-accent">{b.weakness}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{b.recommendedLevel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Boss-by-Boss Clear Strategy</h2>
        <p className="text-ink-light">
          Each boss has a single best clear strategy that works regardless of your build. These are not the only strategies, but they are the most consistent.
        </p>
        {BOSSES.map((b, i) => (
          <div key={i} className="border border-gray-700 p-4 bg-gray-800/30 my-4">
            <h3 className="font-semibold text-accent">{b.name}</h3>
            <p className="text-ink-light mt-2 text-sm">
              <strong>Pattern:</strong> {b.attackPattern} | <strong>Time Limit:</strong> {b.timeLimit}<br />
              <strong>Strategy:</strong> {b.strategy}
            </p>
          </div>
        ))}

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Demon Lord Azarak: 5-Phase Breakdown</h2>
        <p className="text-ink-light">
          The final boss has 5 distinct phases. Each phase requires a different play style and the same gear can be used across all of them with proper cooldown management.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Phase</th>
                <th className="p-3 border border-gray-700 text-ink">Name</th>
                <th className="p-3 border border-gray-700 text-ink">HP Range</th>
                <th className="p-3 border border-gray-700 text-ink">Strategy</th>
              </tr>
            </thead>
            <tbody>
              {PHASE_GUIDE.map((p, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{p.phase}</td>
                  <td className="p-3 border border-gray-700 text-accent">{p.name}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{p.hp}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{p.key}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Gear Progression Through Bosses</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Slot</th>
                <th className="p-3 border border-gray-700 text-ink">Pre-Boss (Lvl 1-24)</th>
                <th className="p-3 border border-gray-700 text-ink">Mid-Boss (Lvl 25-39)</th>
                <th className="p-3 border border-gray-700 text-ink">End-Boss (Lvl 40+)</th>
              </tr>
            </thead>
            <tbody>
              {GEAR_RECOMMENDATIONS.map((g, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{g.slot}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{g.preBoss}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{g.midBoss}</td>
                  <td className="p-3 border border-gray-700 text-accent">{g.endBoss}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">FAQ</h2>
        <div className="space-y-4">
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">What is the minimum party size for the bosses?</h3>
            <p className="text-ink-light mt-2">Three party members is the minimum. Most boss fights are designed for 4-player parties. The 7th boss (Azarak) is technically soloable with the right build, but the time limit is 15 minutes and most solo attempts clock in at 18 to 22 minutes. Bring a 3-person party minimum for Azarak to make the time limit comfortably.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Do bosses drop unique weapons?</h3>
            <p className="text-ink-light mt-2">Yes. Each boss has a unique drop table. The Warden drops the Flamebringer staff. The Hollow King drops the Soul Reaver holy sword. The Twin Serpents drop the Twin Fang daggers. The Iron Golem drops the Rust Hammer. The Lich Queen drops the Crown of Frost. The Void Herald drops the Void Edge. Azarak drops the Masterwork Demon Blade, which is the best melee weapon in the game. The Lich Queen&apos;s Crown and the Demon Lord&apos;s Eye are the only accessory drops that grant stacking damage bonuses.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Can I skip bosses and come back later?</h3>
            <p className="text-ink-light mt-2">No. Once you enter a boss arena, you must defeat the boss or die. There is no retreat option. Bosses are not level-locked — you can enter a boss arena at level 5 if you want, but the recommended level is the level at which the fight becomes balanced. Under-leveled players can cheese some bosses with terrain, but Azarak is immune to all terrain strategies. Plan your level progression so you are at least 2 levels above the boss recommendation before engaging.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Advanced Tips</h2>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-ink-light">
          <li><strong className="text-accent">Practice phase 2 of Azarak first.</strong> The Wings of Wrath phase is the most common wipe point for new players. Spend 20 minutes in a training dummy room practicing the pillar dodge timing. The fire breath has a 1.2-second cast time, so you have time to position if you react fast.</li>
          <li><strong className="text-accent">Stack one damage type for the whole run.</strong> Holy damage is the most consistent weakness across all 7 bosses. Build your party around one holy DPS and one holy support. Mixing damage types lowers your peak DPS and forces you to swap gear between bosses.</li>
          <li><strong className="text-accent">Use Chromatic Challenge for extra loot.</strong> The Chromatic Challenge modifier (2 percent of players have cleared it) limits you to one damage type for the entire run. The reward is the Golden Skull collectible and a unique cosmetic. The challenge is built around fire damage, so a fire-stacked party is the easiest clear path.</li>
        </ul>

        <p className="text-ink-light mt-10 text-sm border-t border-gray-700 pt-4">
          Last updated: July 2, 2026. Boss HP and mechanics verified against Demon Lord main branch as of June 2026 patch cycle.
        </p>
      </div>
    </div>
  );
}
