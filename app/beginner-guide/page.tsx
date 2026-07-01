import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demon Lord: Just a Block Beginner Guide — First Steps & Core Mechanics (2026)",
  description: "Complete Demon Lord: Just a Block beginner guide. Step-based combat fundamentals, area progression order, essential dungeon design tips, and common beginner mistakes to avoid.",
};

const BEGINNER_STEPS = [
  { step: "01", title: "Understanding Step-Based Combat", desc: "Demon Lord: Just a Block uses a unique step-based combat system. Each action — moving, attacking, using items — costs one step. Enemies move and attack on their own step rhythm. Your job is to anticipate enemy movement patterns and position yourself where you can attack without taking damage. The fundamental loop is: observe the enemy's attack pattern, step out of the way, step in to attack, step out again. This is not a button-mashing game — patience and pattern recognition win fights." },
  { step: "02", title: "Parry Timing Is Everything", desc: "Your block (parry) is your most important tool. Raise your shield or weapon just before an enemy attack connects to parry. A successful parry negates all damage and briefly stuns the enemy, giving you free steps to counter-attack. The parry window is generous but timing matters — parry too early and you will lower your guard before the attack lands; parry too late and you eat the full hit. Practice parrying against the first Forest Spirits until you can land three parries in a row consistently." },
  { step: "03", title: "Area Progression Order", desc: "The game has a clear area progression: Dark Dragon Forest (Area 1) → Evernight Cave (Area 2) → Frozen Snow Mountain (Area 3) → Royal City Dungeon (Area 4) → Lava Hell (Area 5) → Demon God Heart (Final). Do not skip areas — enemies in later areas assume you have gathered gear and upgrades from previous areas. A common beginner trap is rushing to Area 3 without upgrading gear from Area 2 — you will be under-equipped and every fight will be an uphill battle." },
  { step: "04", title: "Gear Upgrades Are Mandatory", desc: "Each area has a blacksmith or upgrade station. Use it. Upgrading your weapon and armor between areas is not optional — enemy health and damage scale with area progression, and your starting gear from Area 1 will not cut it in Area 3. Weapon upgrades increase your damage per swing, and armor upgrades reduce incoming damage. A fully upgraded Area 2 weapon deals roughly double the damage of an unupgraded Area 1 weapon." },
  { step: "05", title: "Dungeon Design for Demon Lord Mode", desc: "When you unlock Demon Lord mode (after clearing Area 3), you gain the ability to design dungeons that other players raid. Place traps near choke points, not in open areas where players can easily walk around them. Vary trap types — mixing spike traps, arrow traps, and fire traps prevents players from using a single strategy to clear your dungeon. Place your strongest demons in rooms with environmental advantages. A well-designed dungeon generates passive resources while you are offline." },
  { step: "06", title: "Resource Management", desc: "Gold and crafting materials are limited. Spend gold on weapon and armor upgrades first, consumable items second, and cosmetics never (until endgame). Healing potions are worth buying — one potion can save a run where you are deep into an area with low health. Do not hoard resources out of fear of spending them; resources sitting in your inventory provide zero value. Spend to upgrade, upgrade to progress." },
  { step: "07", title: "Learning Enemy Patterns", desc: "Every enemy type has a fixed attack pattern. Forest Spirits slash twice, then pause. Cave Trolls slam once, then pause for a long time. Snow Wolves lunge three times in rapid succession. Learning these patterns lets you dodge, parry, or attack during the pause window. The best way to learn is to spend a few minutes against each new enemy type without attacking — just dodge and observe. Once you know the pattern, you know exactly when it is safe to strike." },
];

const COMMON_MISTAKES = [
  { mistake: "Ignoring Parry", consequence: "Taking full damage from every enemy attack. You will burn through healing items and die early in each area." },
  { mistake: "Button Mashing", consequence: "The step-based system punishes impatience. Mashing attack locks you into animations — enemies will hit you during your recovery frames." },
  { mistake: "Skipping Upgrades", consequence: "Entering Area 3 with Area 1 gear means every enemy takes twice as many hits to kill and you die in two hits instead of four." },
  { mistake: "Neglecting Demon Lord Mode", consequence: "Demon Lord mode is your primary source of passive income. A well-designed dungeon earns resources while you progress through the main game." },
  { mistake: "Hoarding Consumables", consequence: "Potions and buffs sitting in your inventory help no one. Use them when you need them — they are replaceable, run progress is not." },
];

export default function BeginnerGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Demon Lord: Just a Block — Beginner Guide</h1>
      <p className="text-ink-light mb-8">Last updated: July 2026</p>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-ink-light mb-6">
          Demon Lord: Just a Block is a challenging step-based action game where precision and patience matter more than reflexes. This beginner guide walks you through the first 5-8 hours of gameplay, from understanding the unique combat system to clearing your first three areas and unlocking Demon Lord mode.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Beginner Walkthrough (7 Steps)</h2>
        <div className="space-y-6">
          {BEGINNER_STEPS.map((s, i) => (
            <div key={i} className="flex gap-5 items-start">
              <span className="shrink-0 w-10 h-10 flex items-center justify-center font-bold text-lg border-2 border-accent text-accent">{s.step}</span>
              <div>
                <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
                <p className="text-ink-light leading-relaxed mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Common Beginner Mistakes</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Mistake</th>
                <th className="p-3 border border-gray-700 text-ink">Consequence</th>
              </tr>
            </thead>
            <tbody>
              {COMMON_MISTAKES.map((m, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-red-400">{m.mistake}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{m.consequence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">FAQ</h2>
        <div className="space-y-4">
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Is Demon Lord: Just a Block harder than other action games?</h3>
            <p className="text-ink-light mt-2">It is different rather than harder. The step-based system rewards methodical play over fast reflexes. If you approach it like a puzzle game — observe patterns, find openings, execute precisely — you will find it easier than reaction-based action games. If you try to play it like a hack-and-slash, you will die repeatedly. The difficulty comes from patience, not mechanical skill.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">How long does it take to beat the game?</h3>
            <p className="text-ink-light mt-2">For a first-time player learning the mechanics, expect 15-20 hours for the main story (all six areas plus final boss). Speedrunners complete it in under 3 hours, but that requires perfect knowledge of enemy patterns and optimal routing. Take your time — the game is designed to be savored, not rushed. Each area introduces new enemy types with new patterns to learn.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">What is the best weapon for beginners?</h3>
            <p className="text-ink-light mt-2">The Sword and Shield combination is the most forgiving for new players. The shield gives you a larger parry window and reduces chip damage on imperfect parries. Two-handed weapons (Greatsword, Greataxe) deal more damage but have no block — you must dodge everything, which requires better enemy pattern knowledge. Start with sword-and-shield, then experiment with other weapons once you are comfortable with the parry timing for each enemy type.</p>
          </div>
        </div>

        <p className="text-ink-light mt-10 text-sm border-t border-gray-700 pt-4">
          Last updated: July 1, 2026. Beginner guide verified against Demon Lord: Just a Block current release version.
        </p>
      </div>
    </div>
  );
}
