import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demon Lord: Just a Block FAQ — Common Questions & Answers',
  description: 'Frequently asked questions about Demon Lord: Just a Block. Gameplay, platforms, achievements, endings, and beginner tips.',
};

const FAQ_DATA = [
  {
    q: 'Q: What is Demon Lord: Just a Block?',
    a: 'A: Demon Lord: Just a Block is an action roguelite strategy game developed by Chinese indie studio YuWave, released April 29, 2026 on Steam. The core mechanic is "time moves only when you move" — every step is a tactical decision. You play as the Demon Lord, reduced to a single block-like head, seeking revenge against fantasy heroes.',
    cat: 'Game Basics',
  },
  {
    q: 'Q: How many endings does the game have?',
    a: 'A: Three endings. ① Normal ending: clear all areas and defeat the Demon God King. ② True ending: collect all 5 Demon Soul Fragments from hidden rifts, place them above the first blacksmith in Demon God Heart, and choose the second dialogue option at the finale (11.5% completion rate). ③ Hidden ending: requires a specific extreme challenge condition.',
    cat: 'Game Basics',
  },
  {
    q: 'Q: Which platforms are supported?',
    a: 'A: Currently available on Steam for Windows. The game also runs well on Steam Deck. YuWave has not announced Mac, Switch, or console versions, but community demand is high. The game supports 12 languages including English, Simplified Chinese, Japanese, and Korean.',
    cat: 'Game Basics',
  },
  {
    q: 'Q: Is there multiplayer or co-op?',
    a: 'A: No, the game is a pure single-player experience. However, it supports Steam Workshop where players can create and share mods. It also features Steam Achievements (38 total), Steam Leaderboards, and Steam Cloud saves.',
    cat: 'Game Basics',
  },
  {
    q: 'Q: Where should beginners start?',
    a: 'A: Start with our Beginner\'s Guide for the full walkthrough. Key tips: ① spend time understanding the step-based combat; ② get the Lancelot greatsword early (interact with the sword near the big tree in the first area); ③ learn the card system — combine cards for powerful synthesis; ④ don\'t fear death — you keep unlocked weapons, cards, and Golden Skulls.',
    cat: 'Beginner Tips',
  },
  {
    q: 'Q: How many weapons are there?',
    a: 'A: 14 weapons total. Starting from the accessible Lancelot to the extreme Death Scythe (requires defeating the shopkeeper). Each weapon has unique mechanics and requires specific achievements to unlock. See our Weapons page for full unlock conditions.',
    cat: 'Game Basics',
  },
  {
    q: 'Q: What is the card system?',
    a: 'A: Defeating enemies drops ability cards. There are over 200 cards across attack, element, and utility categories. Combine three same-element cards at Shops for advanced versions. Cross-type synthesis creates color-tier abilities. Collect all cards to complete your ability catalog.',
    cat: 'Mechanics',
  },
  {
    q: 'Q: How long is the game?',
    a: 'A: A first playthrough typically takes 6-10 hours depending on experience with action roguelikes. Subsequent runs are faster as you learn boss patterns and unlock better weapons. Completing all 38 Steam achievements and finding all 23 Golden Skulls adds significant playtime — expect 30+ hours for full completion.',
    cat: 'Game Basics',
  },
  {
    q: 'Q: Are there difficulty options or accessibility features?',
    a: 'A: The game features scaling difficulty through its roguelike design. Accessibility includes: custom volume controls, playable without quick time events, keyboard-only option, mouse-only option, and partial controller support (Xbox and DualSense).',
    cat: 'Game Basics',
  },
  {
    q: 'Q: What are the Golden Skulls?',
    a: 'A: Golden Skulls are hidden collectibles scattered across all 7 areas (23 total). Some require specific items or abilities to reach. Collecting 16 unlocks the Golden Skull weapon. The Novice Village key requires 77 cumulative gold spent at the archery location. Full exploration is heavily rewarded.',
    cat: 'Mechanics',
  },
  {
    q: 'Q: What are the hardest achievements?',
    a: 'A: The Chromatic achievement requires no-damage completion on the hardest difficulty — only 2.0% of players have achieved this. The Gilded achievement has 2.6% completion. The True ending (Demon God Shattered) has 11.5%. The most commonly missed hidden achievement is "Hidden Lulu" — repeatedly click Lulu\'s sticker on the achievements page.',
    cat: 'Achievements',
  },
  {
    q: 'Q: How do I get the True ending?',
    a: 'A: Step 1: Find all 5 Demon Soul Fragments from hidden rifts in Slime Island (normal path), Royal City Dungeon (Queen Ghost room upper-right), Novice Village (below Hero Hut wall), Snow Mountain (light torches in specific order), and Demon God Heart (right of blacksmith room). Step 2: In Demon God Heart, place the 5 fragments above the first blacksmith room. Step 3: At the finale, choose the second dialogue option.',
    cat: 'Endings',
  },
];

export default function FAQPage() {
  return (
    <div className="bg-abyss bg-rune-pattern min-h-screen">
      <div className="max-w-5xl mx-auto px-4 lg:px-6 py-10">

        {/* Header */}
        <div className="mb-10">
          <p className="font-label text-[10px] uppercase tracking-[0.25em] text-dark-gold mb-3">
            Answers from the Archive
          </p>
          <h1 className="font-display text-3xl lg:text-4xl tracking-display text-parchment">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="font-body text-lg text-parchment-dim mt-4 max-w-2xl leading-relaxed">
            Common questions about Demon Lord: Just a Block — from basic mechanics to advanced
            achievement hunting. All answers verified from official sources and community guides.
          </p>
          <div className="w-24 h-px bg-blood-red mt-6" />
        </div>

        {/* FAQ Items grouped by category */}
        {['Game Basics', 'Beginner Tips', 'Mechanics', 'Achievements', 'Endings'].map((category) => {
          const items = FAQ_DATA.filter((f) => f.cat === category);
          if (items.length === 0) return null;
          return (
            <section key={category} className="mb-10">
              <h2 className="font-display text-lg tracking-display text-dark-gold mb-4 uppercase">{category}</h2>
              <div className="space-y-4">
                {items.map((faq, i) => (
                  <div key={i} className="border border-border-gold p-6 bg-abyss-elevated">
                    <p className="font-label text-sm text-dark-gold mb-2">{faq.q}</p>
                    <p className="font-body text-sm text-parchment-dim leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        <p className="font-label text-[10px] uppercase tracking-wider text-parchment-dim/60 text-center mt-8">
          Information verified from Steam store page, community guides & achievement data. Updated June 25, 2026.
        </p>
      </div>
    </div>
  );
}
