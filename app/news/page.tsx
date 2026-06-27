import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demon Lord: Just a Block News & Updates',
  description: 'Latest news and updates about Demon Lord: Just a Block. Patch notes, development updates, and community highlights.',
};

const NEWS = [
  {
    date: "2026-06-27",
    title: "Demon Lord Hits 96% Overwhelmingly Positive — Steam Summer Sale 20% Off",
    tag: "Community",
    excerpt:
      "Demon Lord: Just a Block has reached an Overwhelmingly Positive rating on Steam with 96% of 1,809 reviews being positive — and the recent review score is even higher at 95% over the last 30 days (245 reviews). For a roguelite action game from indie developer YuWave, this is an exceptional reception. The game launched on April 29, 2026, and has quickly built a dedicated community around its unique 'world only moves when you do' mechanic, which blends traditional roguelike turn-based planning with fast-paced dodge-and-parry action. Players consistently praise the satisfying collision-based combat, the depth of build variety, and the progression system that rewards both careful planning and reflexive play. The game is currently 20% off during the Steam Summer Sale, making it an easy recommendation at under $12. With 38 Steam Achievements, full Steam Workshop support, and leaderboards, there is plenty of content for completionists. YuWave has been active in the community Discord and has confirmed more content updates are coming later in 2026.",
  },
  {
    date: '2026-04-29',
    title: 'Demon Lord: Just a Block Released on Steam',
    summary: 'Developed by solo developer YuWave, Demon Lord: Just a Block launched on Steam with Overwhelmingly Positive reviews. The game features a unique "time moves only when you move" combat system, 14 unlockable weapons, over 200 ability cards, 38 Steam achievements, and 7 main areas to explore. Available in 12 languages.',
    tag: 'Release',
  },
  {
    date: '2026-06-26',
    title: 'Summer Sale Update: New Soul Scythe Weapon, Stickers, and Skin',
    summary: "Solo developer YuWave dropped a Summer Sale update adding the Soul Scythe — a wide-sweep melee weapon with lifesteal properties unlocked by defeating the optional Death Knight boss in Area 5. The weapon has quickly become a community favorite for its synergy with Vampiric Strike ability cards. A new cosmetic sticker set and alternate character skin are also included. Demon Lord is participating in the Steam Summer Sale, bringing a fresh wave of players — concurrent player counts spiked to post-launch highs. Having crossed 100,000 players, YuWave's roadmap hints at a potential boss rush mode and additional ability cards planned for later 2026. Achievement hunters note: the Soul Scythe does not unlock new achievements, keeping the 38/38 completion intact — though the Chromatic challenge (2.0% completion) continues to frustrate.",
    tag: 'Update',
  },
  {
    date: '2026-06-25',
    title: 'Community Achievement Guide Now Available',
    summary: 'The community has mapped out all 38 Steam achievements including hidden boss triggers, Golden Skull locations (23 total), and the True ending path. The Demon God Shattered achievement (True ending) has only 11.5% completion. The Chromatic challenge sits at a mere 2.0%.',
    tag: 'Community',
  },
];

export default function NewsPage() {
  return (
    <div className="bg-abyss bg-rune-pattern min-h-screen">
      <div className="max-w-5xl mx-auto px-4 lg:px-6 py-10">

        <div className="mb-10">
          <p className="font-label text-[10px] uppercase tracking-[0.25em] text-dark-gold mb-3">
            Chronicles of the Archive
          </p>
          <h1 className="font-display text-3xl lg:text-4xl tracking-display text-parchment">
            NEWS & UPDATES
          </h1>
          <p className="font-body text-lg text-parchment-dim mt-4 max-w-2xl leading-relaxed">
            Latest news about Demon Lord: Just a Block. This is an unofficial fan site —
            for official developer updates, follow YuWave on Steam and social media.
          </p>
          <div className="w-24 h-px bg-blood-red mt-6" />
        </div>

        <div className="space-y-6 mb-8">
          {NEWS.map((item, i) => (
            <div key={i} className="border border-border-gold p-6 bg-abyss-elevated hover:border-dark-gold/40 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-label text-[10px] uppercase tracking-wider text-parchment-dim">
                  {item.date}
                </span>
                <span className="font-label text-[9px] uppercase tracking-wider px-2 py-0.5 border border-border-gold text-dark-gold">
                  {item.tag}
                </span>
              </div>
              <h2 className="font-display text-lg tracking-display text-parchment mb-3">
                {item.title}
              </h2>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">
                {item.summary}
              </p>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-dark-gold pl-6 py-2 mb-8">
          <p className="font-body text-sm text-parchment-dim italic">
            For the latest official updates, visit the Steam store page and follow developer YuWave on X (@YuWaveStudio) and Discord.
          </p>
        </div>

        <p className="font-label text-[10px] uppercase tracking-wider text-parchment-dim/60 text-center mt-8">
          This is an unofficial fan site. Game data sourced from Steam and community resources. Updated June 25, 2026.
        </p>
      </div>
    </div>
  );
}
