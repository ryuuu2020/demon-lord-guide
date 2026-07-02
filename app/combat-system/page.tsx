import type { Metadata } from "next";
import SchemaMarkup from "@/shared/SchemaMarkup";

export const metadata: Metadata = {
  title: "Demon Lord Combat System Guide — Mechanics, Damage Types & Advanced Tactics",
  description: "Master Demon Lord's combat system with our complete guide to damage types, positioning, combo chains, status effects, and advanced battle tactics.",
};

const DAMAGE_TYPES = [
  { type: "Physical", effective: "Unarmored, Slimes, Beasts", resisted: "Heavy Armor, Golems, Stone Giants", classes: "Warrior, Berserker, Knight" },
  { type: "Magic", effective: "Armored enemies, Golems, Elementals", resisted: "Magic-resistant foes, Wisps, Null Zones", classes: "Mage, Warlock, Sorcerer" },
  { type: "Dark", effective: "Holy enemies, Angels, Priests", resisted: "Demons, Undead, Shadow Beasts", classes: "Necromancer, Shadow Knight, Warlock" },
  { type: "Fire", effective: "Ice enemies, Undead, Plant-type", resisted: "Fire Elementals, Lava creatures, Dragons", classes: "Pyromancer, Flame Knight, Inferno Mage" },
  { type: "Ice", effective: "Fire enemies, Beasts, Flying foes", resisted: "Frost Giants, Ice Spirits, Cryo Golems", classes: "Cryomancer, Frost Warrior, Ice Witch" },
  { type: "Lightning", effective: "Water enemies, Mechanical foes, Flying units", resisted: "Earth Elementals, Golems, Insulators", classes: "Storm Mage, Thunder Lord, Spark Dancer" },
  { type: "Poison", effective: "Organic enemies, Beasts, Humanoids", resisted: "Undead, Constructs, Machine-types", classes: "Assassin, Alchemist, Plague Doctor" },
  { type: "Holy", effective: "Undead, Demons, Cursed beings", resisted: "Angels, Holy Constructs, Blessed", classes: "Paladin, Cleric, Templar" },
];

const STATUS_EFFECTS = [
  { effect: "Bleed", duration: "3 turns", impact: "Lose 5% of max HP each turn. Stacks up to 3 times for 15% max HP per turn.", cure: "Bandage item, Heal spell, Rest at campfire" },
  { effect: "Burn", duration: "2 turns", impact: "Lose 8% of current HP per turn. Reduces healing received by 30%.", cure: "Water spell, Ice resistance gear, Wait it out" },
  { effect: "Freeze", duration: "1 turn", impact: "Skip your next action entirely. Take 50% extra physical damage while frozen.", cure: "Fire spell, Warmth potion, Auto-expires" },
  { effect: "Curse", duration: "4 turns", impact: "All stats reduced by 20%. Healing effects reduced by 50%. Cannot gain buffs.", cure: "Purify spell, Holy Water item, Shrine blessing" },
  { effect: "Poison", duration: "5 turns", impact: "Lose 3% of max HP per turn. Stacks up to 3 times, each stack refreshes duration.", cure: "Antidote item, Cleanse ability, Poison resist gear" },
  { effect: "Stun", duration: "1 turn", impact: "Lose your entire turn. Cannot block, dodge, or use items while stunned.", cure: "Auto-expires after 1 turn, Stun resistance gear, No direct cure" },
];

const COMBO_CHAINS = [
  { opener: "Light Attack (1 step)", linker: "Heavy Attack (2 steps)", finisher: "Finisher Strike (2 steps)", notes: "The basic bread-and-butter combo. Light attack staggers briefly, heavy attack launches, and finisher deals bonus damage to airborne targets. Total: 5 steps with +40% cumulative damage." },
  { opener: "Parry (1 step)", linker: "Riposte (1 step)", finisher: "Counter Strike (1 step)", notes: "Triggered after a successful parry. The riposte is guaranteed to hit, and the counter strike deals 200% weapon damage. Best combo for defensive playstyles. Total: 3 steps." },
  { opener: "Dodge Roll (1 step)", linker: "Backstab (2 steps)", finisher: "Shadow Strike (2 steps)", notes: "Requires dual daggers or a dagger-class weapon. Dodge through the enemy, backstab for 150% damage from behind, then shadow strike for 200% if backstab landed. Total: 5 steps, massive burst damage." },
  { opener: "Freeze Spell (2 steps)", linker: "Shatter Strike (2 steps)", finisher: "Frozen Burial (1 step)", notes: "Requires an ice-damage weapon or spell. Frozen enemies take 150% damage from Shatter Strike. Frozen Burial deals AoE damage to all nearby frozen enemies. Total: 5 steps, excellent crowd control." },
  { opener: "Burn (1 step)", linker: "Explosive Finish (2 steps)", finisher: "Inferno (2 steps)", notes: "Requires fire damage source. Burned enemies take +25% fire damage. Explosive Finish detonates the burn for instant damage. Inferno spreads burning to adjacent enemies. Total: 5 steps, AoE specialist combo." },
  { opener: "Poison Dart (1 step)", linker: "Toxic Cloud (2 steps)", finisher: "Contagion (2 steps)", notes: "Poison applies 3 stacks immediately. Toxic Cloud deals damage per stack consumed. Contagion spreads remaining poison stacks to all enemies in the area. Total: 5 steps, sustained AoE pressure." },
];

const FAQ_ITEMS = [
  {
    question: "How does the step-based combat system work in Demon Lord?",
    answer: "Every combat action in Demon Lord: Just a Block consumes action steps from a shared pool. Each turn grants you 3 standard action steps plus 1 bonus step. Movement costs 1 step, basic attacks cost 1 step, heavy attacks cost 2 steps, items cost 1 step, and abilities cost 1 to 3 steps depending on potency. Your bonus step can only be used for movement or item usage — not for attacks or abilities. Enemy actions follow a predictable rhythm visualized by telegraph animations: a white flash means a standard attack is incoming (1 enemy step), a red flash signals a heavy attack (2 enemy steps), and a gold flash indicates a special ability. Learning to read these telegraphs and managing your steps efficiently is the core skill that separates successful Demon Lords from defeated ones."
  },
  {
    question: "What is the best damage type for general use throughout the game?",
    answer: "Physical damage is the most consistent damage type because no enemy is completely immune to it, and it benefits from the widest range of weapon upgrades and class synergies. Magic damage comes in as a close second, being highly effective against armored enemies and golems that resist physical attacks. However, the optimal strategy is to carry a primary and secondary damage type weapon — physical as your main and fire/ice as your swap — so you can exploit enemy weaknesses. For example, in the Frozen Snow Mountain area, switching from physical to fire damage can cut boss fight duration by 40% or more. Weapon swap costs 1 bonus step, so the step economy trade-off is minimal compared to the damage gain."
  },
  {
    question: "Can I respec my character's combat style and damage type specialization?",
    answer: "Yes, Demon Lord: Just a Block offers full respec options at the Soul Altar, unlocked after clearing Area 2 (Evernight Cave). A respec resets all your allocated combat points, skill trees, and damage type affinities, allowing you to rebuild your character from scratch without losing any earned points. The cost scales with your level: first respec costs 500 gold, second costs 1,500 gold, and subsequent respecs cost 3,000 gold each. You also keep all unlocked weapons and gear — only your point allocations change. This system encourages experimentation. If you find that your frost mage build struggles against the Lava Hell area enemies, respec into a lightning build and come back stronger."
  },
];

export default function CombatSystemPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SchemaMarkup
        type="faq"
        faqs={FAQ_ITEMS.map((f) => ({ question: f.question, answer: f.answer }))}
      />

      <h1 className="text-3xl font-bold mb-2 text-ink">Demon Lord Combat System — Complete Guide</h1>
      <p className="text-ink-light mb-8">Last updated: July 2, 2026</p>

      <div className="prose prose-invert max-w-none">
        {/* Intro */}
        <p className="text-lg text-ink-light mb-6">
          Combat in Demon Lord: Just a Block is not about how fast you can press buttons — it is about reading enemy telegraphs, managing your action step economy, positioning for flanking bonuses, and chaining the right abilities at the right moment. Whether you are a new player struggling with the step-based system or a veteran looking to optimize your damage output, this guide covers every mechanic from turn order fundamentals to advanced combo chains used by top players.
        </p>

        {/* Section 1: Combat Basics */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Combat Basics: Turn Order & Action Economy</h2>
        <p className="text-ink-light leading-relaxed mb-3">
          The combat system in Demon Lord: Just a Block is step-based. Every action — moving, attacking, using items, or activating abilities — consumes steps from a shared pool. Each turn grants you <span className="text-accent font-semibold">3 standard action steps</span> plus <span className="text-accent font-semibold">1 bonus step</span>. The bonus step is restricted: it can be used only for movement or item usage, never for attacks or abilities.
        </p>
        <p className="text-ink-light leading-relaxed mb-3">
          Enemy actions follow a predictable rhythm visualized through telegraph animations. A white flash on the enemy signals an incoming standard attack (costs 1 of their steps). A red flash warns of a heavy attack (costs 2 of their steps). A gold flash indicates a special ability or ultimate move. Learning to read these telegraphs and spending your steps accordingly — dodging when you see red, parrying when you see white, and striking during the enemy's recovery frames — is the fundamental loop of combat.
        </p>
        <p className="text-ink-light leading-relaxed mb-3">
          Step economy is the most important concept to internalize. Every step spent on unnecessary movement or a mistimed attack is a step you cannot use for defense. The general rule: <span className="text-accent">spend 2 steps on offense and keep 1 step in reserve for defense per turn</span>. If you end your turn with zero steps and the enemy still has an attack queued, you will eat that attack with no way to block or dodge. This is the single most common cause of death for new players — greed kills more adventurers than any boss ever will.
        </p>

        {/* Section 2: Damage Types Table */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Damage Types & Matchups</h2>
        <p className="text-ink-light leading-relaxed mb-4">
          Demon Lord features eight distinct damage types, each with its own strengths, weaknesses, and optimal class synergies. Understanding which damage type to use against which enemy can reduce fight duration by up to 50% and prevent wasted resources. The table below maps every damage type to its ideal matchups, counters, and recommended classes.
        </p>
        <div className="overflow-x-auto my-6 bg-parchment-light">
          <table className="w-full text-left border border-gray-700 text-sm parchment-table">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink font-semibold">Damage Type</th>
                <th className="p-3 border border-gray-700 text-ink font-semibold">Effective Against</th>
                <th className="p-3 border border-gray-700 text-ink font-semibold">Resisted By</th>
                <th className="p-3 border border-gray-700 text-ink font-semibold">Best Classes</th>
              </tr>
            </thead>
            <tbody>
              {DAMAGE_TYPES.map((dt, i) => (
                <tr key={i} className="hover:bg-gray-800/50 transition-colors">
                  <td className="p-3 border border-gray-700 font-semibold text-accent">{dt.type}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{dt.effective}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{dt.resisted}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{dt.classes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-ink-light text-sm leading-relaxed">
          Resistance reduces incoming damage by 50%, while effectiveness increases it by 50%. Stacking both on the same enemy (using their weakness while avoiding their resistance) results in a total 125% damage multiplier. Always check an enemy's visual cues — ice enemies glow blue and resist ice, fire enemies glow orange and resist fire, and holy enemies emit a golden aura that resists dark damage.
        </p>

        {/* Section 3: Status Effects Table */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Status Effects & Crowd Control</h2>
        <p className="text-ink-light leading-relaxed mb-4">
          Status effects are the difference between a clean fight and a desperate scramble for survival. Each status effect applies a unique debuff that can cripple your damage output, drain your health, or lock you out of actions entirely. The table below covers all six major status effects, their durations, their mechanical impact, and how to cure or counter each one.
        </p>
        <div className="overflow-x-auto my-6 bg-parchment-light">
          <table className="w-full text-left border border-gray-700 text-sm parchment-table">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink font-semibold">Status Effect</th>
                <th className="p-3 border border-gray-700 text-ink font-semibold">Duration</th>
                <th className="p-3 border border-gray-700 text-ink font-semibold">Damage / Impact</th>
                <th className="p-3 border border-gray-700 text-ink font-semibold">Cure Method</th>
              </tr>
            </thead>
            <tbody>
              {STATUS_EFFECTS.map((se, i) => (
                <tr key={i} className="hover:bg-gray-800/50 transition-colors">
                  <td className="p-3 border border-gray-700 font-semibold text-accent">{se.effect}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{se.duration}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{se.impact}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{se.cure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border border-gray-700 p-4 bg-gray-800/20 mt-2">
          <p className="text-ink-light text-sm leading-relaxed">
            <span className="text-accent font-semibold">Pro tip:</span> Bleed and Poison are the most dangerous stacking effects. At 3 stacks each, you lose 24% of your max HP per turn — enough to kill most characters in 4 turns with zero enemy attacks. Always carry at least 2 Bandages and 2 Antidotes in your consumable slots, especially in areas 3 through 5 where enemies frequently apply these effects.
          </p>
        </div>

        {/* Section 4: Positioning */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Positioning: Front Row vs Back Row & Flanking</h2>
        <p className="text-ink-light leading-relaxed mb-3">
          Positioning is one of the most underrated mechanics in Demon Lord. The game divides the combat arena into two rows: front row and back row. Your position relative to enemies determines your damage dealt, damage taken, and access to certain abilities.
        </p>
        <p className="text-ink-light leading-relaxed mb-3">
          <span className="text-accent font-semibold">Front Row:</span> Standing in the front row places you directly in melee range of the enemy. You deal <span className="text-accent">+15% melee damage</span> and can use heavy attacks, finishers, and parry maneuvers. However, you also take <span className="text-accent">+30% melee damage</span> from enemy attacks. Front row is for aggressive builds, shield tanks, and players confident in their parry timing.
        </p>
        <p className="text-ink-light leading-relaxed mb-3">
          <span className="text-accent font-semibold">Back Row:</span> Standing in the back row keeps you at a safe distance. You take <span className="text-accent">-20% ranged and magical damage</span>, but your melee damage output drops by <span className="text-accent">10%</span>. Certain weapons (spears, magic staves) and abilities can still reach enemies from the back row at full effectiveness. Back row is for mages, archers, and support classes.
        </p>
        <p className="text-ink-light leading-relaxed mb-3">
          <span className="text-accent font-semibold">Flanking Bonus:</span> Attacking an enemy from the side or behind while they are targeting another direction grants a <span className="text-accent">+25% critical hit chance</span> and <span className="text-accent">+15% bonus damage</span>. Flanking requires movement steps to reposition, so it is most effective after an enemy whiffs a heavy attack and enters their recovery animation — you have exactly enough time to step to their flank and land one attack before they turn to face you. Be careful: enemies can flank you too, and being surrounded by three or more enemies is usually fatal unless you have an AoE escape ability ready.
        </p>

        {/* Section 5: Combo Chains */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Combo Chains: Ability Sequencing & Synergy</h2>
        <p className="text-ink-light leading-relaxed mb-4">
          Combo chains are pre-defined sequences of abilities that, when executed in the correct order, deal bonus damage and apply amplified effects. Each combo requires specific weapon types or damage types and consumes a set number of steps. Mastering combos is what separates mid-game players from endgame veterans — a properly executed combo chain can deal 200-400% more damage than using the same abilities in random order.
        </p>
        <div className="space-y-5">
          {COMBO_CHAINS.map((cc, i) => (
            <div key={i} className="border border-gray-700 p-5 bg-gray-800/20">
              <h3 className="text-base font-semibold text-accent mb-2">
                {cc.opener} → {cc.linker} → {cc.finisher}
              </h3>
              <p className="text-ink-light text-sm leading-relaxed">{cc.notes}</p>
            </div>
          ))}
        </div>
        <p className="text-ink-light leading-relaxed mt-4 text-sm">
          Total combo damage includes both the base damage of each ability and the chain bonus multiplier. The chain bonus is applied only when all three abilities land on the same target within the same turn sequence — missing any link in the chain resets the bonus. Practice combos against stationary training dummies in the Hub area before taking them into boss fights.
        </p>

        {/* Section 6: FAQ */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, i) => (
            <div key={i} className="border border-gray-700 p-4 bg-gray-800/30">
              <h3 className="font-semibold text-accent">{faq.question}</h3>
              <p className="text-ink-light mt-2 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Related Guides */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Related Guides</h2>
        <div className="border border-gray-700 p-5 bg-gray-800/20">
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/beginner-guide" className="text-accent hover:text-ink transition-colors">
                Beginner Guide — First Steps & Core Mechanics
              </a>
            </li>
            <li>
              <a href="/weapon-guide" className="text-accent hover:text-ink transition-colors">
                Weapon Guide — All Weapons Ranked & Compared
              </a>
            </li>
            <li>
              <a href="/farming-routes" className="text-accent hover:text-ink transition-colors">
                Farming Routes — Best Gold & Material Farm Locations
              </a>
            </li>
            <li>
              <a href="/gear-tier-list" className="text-accent hover:text-ink transition-colors">
                Gear Tier List — Weapon & Armor Rankings
              </a>
            </li>
            <li>
              <a href="/bosses" className="text-accent hover:text-ink transition-colors">
                Boss Compendium — All Area Bosses & Strategies
              </a>
            </li>
          </ul>
        </div>

        <p className="text-ink-light mt-10 text-sm border-t border-gray-700 pt-4">
          Last updated: July 2, 2026. Combat system mechanics verified against Demon Lord: Just a Block current release version. Unofficial fan guide.
        </p>
      </div>
    </div>
  );
}
