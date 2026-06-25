import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Demon Lord: Just a Block Beginner's Guide — First Steps & Core Mechanics",
  description: "Complete beginner's guide for Demon Lord: Just a Block. Learn the step-based combat system, first weapon choices, card mechanics, map navigation, and how to beat your first bosses.",
};

const BEGINNER_STEPS = [
  {
    step: 1,
    title: 'Understand the Core Mechanic',
    desc: 'Demon Lord: Just a Block is built around one key rule: "time moves only when you move." Every step you take, enemies also take a step. If you stand still, the entire world pauses. This transforms every encounter into a tactical puzzle — think before each move, plan your positioning, time your attacks and dodges. This is not a traditional action game; treat each battle as a turn-based strategy challenge.',
  },
  {
    step: 2,
    title: 'Choose Your First Weapon',
    desc: 'You start with a basic short sword. Your first real weapon comes early in Dark Dragon Forest — the Lancelot greatsword. Simply interact with the sword stand near the large tree. Alternative early weapons: Skull Fist (unlocks after clearing 10 rooms) and Lightning Sparrow (find Murphy). Focus on one weapon and learn its attack patterns before trying others.',
  },
  {
    step: 3,
    title: 'Learn the Card System',
    desc: 'Defeating enemies drops cards. Cards come in three types: attack cards (shuriken, demon army, bat), element cards (fire, lightning, ice), and utility cards (items, environment, turret). Combine three same-element cards at Shop Nodes for advanced versions. Cross-type synthesis creates powerful color-tier abilities — for example, Demon Army + Fire creates Burning Legion. Experiment with different combinations.',
  },
  {
    step: 4,
    title: 'First Boss: Forest King (Dark Dragon Forest)',
    desc: 'The Forest King is your first boss test. This fight introduces you to the parry system — time your block carefully to deflect attacks and create openings. Stay mobile and learn the attack rhythm. 83.5% of players clear this boss, so don\'t worry if you need a few attempts. After victory, you unlock the Evernight Cave area.',
  },
  {
    step: 5,
    title: 'Area Progression Route',
    desc: 'The game progresses through 7 main areas: Dark Dragon Forest → Evernight Cave → Frozen Snow Mountain → Royal City Dungeon → Slime Island → Novice Village → Demon God Heart. Each area has hidden Golden Skulls (23 total across all areas), secret boss triggers, and environmental puzzles. Collect the Skulls — 16 are needed to unlock the Golden Skull weapon.',
  },
  {
    step: 6,
    title: 'Key Systems: Shops, Save Points & Respawns',
    desc: 'Map nodes include: Combat rooms (card drops), Shop rooms (buy items, weapons, card refreshes), Save Points (restore HP and save progress), and Boss rooms. Always visit a Shop every 3-4 combat rooms. Save before boss fights. Gold economy: the Novice Village key requires 77 gold cumulative spent at the archery location — plan your spending accordingly.',
  },
  {
    step: 7,
    title: 'Death Is Progress',
    desc: 'Every death is growth. You keep: unlocked weapons, collected cards (partial), achievement progress, and Golden Skulls. You lose: current run gold and temporary buffs. Community data shows most players need 7-12 runs for their first full clear. Don\'t be discouraged — each run teaches you boss patterns and map layouts.',
  },
  {
    step: 8,
    title: 'Endings and What Comes Next',
    desc: 'The game has three endings: ① Normal ending (clear all areas) — unlocks New Game+. ② True ending (collect all 5 Demon Soul Fragments from hidden rifts, place them above first blacksmith in Demon God Heart, choose second dialogue option) — only 11.5% completion rate. ③ Hidden ending (extreme challenge conditions). Start with the Normal ending, then pursue the True ending for the full experience.',
  },
];

const GAME_TIPS = [
  { title: 'Environmental Interaction', desc: 'Boxes can be ignited with torches or pushed into water. Frozen units can also be pushed into water. Wooden locks can be burned. Water surfaces can be frozen. Use these interactions to solve puzzles and gain combat advantages.' },
  { title: 'Golden Skull Hunting', desc: 'There are 23 Golden Skulls hidden across all areas. Some require specific items or abilities to reach. Collecting 16 unlocks the Golden Skull weapon. Check behind walls, in hidden rooms, and after boss fights.' },
  { title: 'Special Boss Triggers', desc: 'Many bosses only appear with specific conditions: donate 20 gold at cave table (Year Beast), one-hit kill shopkeeper (boss fight), complete parkour challenge (Brutal Dragonfly). Exploration is rewarded.' },
  { title: 'Steam Achievements', desc: 'The game has 38 Steam achievements. Story progression, weapon collection, Golden Skull hunting, and hidden bosses all contribute. The hardest: Chromatic (no-damage clear on hardest difficulty) at only 2.0% completion.' },
];

export default function BeginnersGuidePage() {
  return (
    <div className="bg-abyss bg-rune-pattern min-h-screen">
      <div className="max-w-5xl mx-auto px-4 lg:px-6 py-10">

        {/* Header */}
        <div className="mb-10">
          <p className="font-label text-[10px] uppercase tracking-[0.25em] text-dark-gold mb-3">
            First Steps into Darkness
          </p>
          <h1 className="font-display text-3xl lg:text-4xl tracking-display text-parchment">
            BEGINNER&apos;S GUIDE
          </h1>
          <p className="font-body text-lg text-parchment-dim mt-4 max-w-2xl leading-relaxed">
            First time stepping into Demon Lord: Just a Block? This guide covers everything from
            the unique step-based combat to beating your first boss. Learn core mechanics, optimal
            weapon selection, card system basics, and the full area progression route.
          </p>
          <div className="w-24 h-px bg-blood-red mt-6" />
        </div>

        {/* Step-by-step Guide */}
        <div className="space-y-8 mb-12">
          {BEGINNER_STEPS.map((step, i) => (
            <div key={i} className="border border-border-gold p-6 lg:p-8 bg-abyss-elevated">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-dark-gold bg-dark-gold/10">
                  <span className="font-display text-lg text-dark-gold tabular-nums">{step.step}</span>
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-lg tracking-display text-parchment mb-3">
                    Step {step.step}: {step.title}
                  </h2>
                  <p className="font-body text-sm text-parchment-dim leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Grid */}
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="font-display text-xl tracking-display text-parchment">PRO TIPS</h2>
            <div className="w-16 h-px bg-dark-gold mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GAME_TIPS.map((tip, i) => (
              <div key={i} className="border border-border-gold p-6 bg-abyss-elevated">
                <h3 className="font-display text-sm tracking-display text-dark-gold mb-3">{tip.title}</h3>
                <p className="font-body text-sm text-parchment-dim leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="font-label text-[10px] uppercase tracking-wider text-parchment-dim/60 text-center">
          Data verified from community guides & Steam achievement data. Updated June 25, 2026. Unofficial fan site.
        </p>
      </div>
    </div>
  );
}
