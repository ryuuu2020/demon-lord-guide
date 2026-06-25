import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demon Lord: Just a Block Strategy Guides — Complete Walkthrough',
  description: 'Master Demon Lord: Just a Block with in-depth strategy guides. Boss strategies, weapon unlocks, card synthesis recipes, achievement guide, and speedrun roadmap.',
};

interface GuideEntry {
  number: string;
  title: string;
  description: string;
  href: string;
  tag: string;
}

const GUIDES: GuideEntry[] = [
  {
    number: '01',
    title: "Beginner's Guide",
    description: 'New to Demon Lord: Just a Block? Learn the step-based combat system, early weapon choices, card mechanics, and the optimal route through the first two areas. Master the core rule: time moves only when you move.',
    href: '/beginners-guide',
    tag: 'STARTER',
  },
  {
    number: '02',
    title: 'Boss Strategies — Complete Compendium',
    description: 'All 7 area bosses from Dark Dragon Forest to Demon God Heart. Learn attack patterns, dodge timing, and weapon recommendations. Includes hidden boss trigger conditions and the True ending path.',
    href: '/bosses',
    tag: 'BOSSES',
  },
  {
    number: '03',
    title: 'Weapons & Builds — All 14 Weapons',
    description: 'Every weapon unlock condition and combat style. From the reliable Lancelot to the devastating Death Scythe. Learn card synthesis recipes and build weapon-card synergies that define your playstyle.',
    href: '/builds',
    tag: 'BUILDS',
  },
  {
    number: '04',
    title: 'Card System & Synthesis Guide',
    description: 'Deep dive into the 200+ card system. Attack cards, element cards, utility cards — learn every synthesis recipe and how to create powerful color-tier abilities. Master the card economy for maximum combat efficiency.',
    href: '/builds',
    tag: 'CARDS',
  },
  {
    number: '05',
    title: 'Achievement Guide — All 38 Achievements',
    description: 'Complete achievement roadmap covering story progression, weapon unlocks, Golden Skull locations (23 total), hidden boss triggers, and the prestigious Gilded and Chromatic challenges. Only 2% of players complete Chromatic.',
    href: '/bosses',
    tag: 'ACHIEVEMENTS',
  },
  {
    number: '06',
    title: 'True Ending & Hidden Content Guide',
    description: 'Step-by-step guide to unlocking the True ending (11.5% completion). Find all 5 Demon Soul Fragments in hidden rifts, complete the specific sequence in Demon God Heart, and discover all secret areas and encounters.',
    href: '/bosses',
    tag: 'SECRETS',
  },
];

const FAQ_SNIPPETS = [
  {
    q: 'Q: How long does it take to beat the game?',
    a: 'A: A first playthrough typically takes 6-10 hours depending on your experience with action roguelikes. The step-based combat means pacing is deliberate. Subsequent runs are faster as you learn boss patterns and unlock better weapons.',
  },
  {
    q: 'Q: What platforms is the game on?',
    a: 'A: Currently available on Steam for Windows. Released April 29, 2026 by developer YuWave. It has Overwhelmingly Positive reviews (96% positive from 1,795+ reviews). Supports English, Simplified Chinese, Traditional Chinese, Japanese, Korean, and 7 other languages.',
  },
  {
    q: 'Q: Is there multiplayer or mod support?',
    a: 'A: The game is single-player only with no multiplayer mode. However, it supports Steam Workshop for mods. It also features Steam Achievements (38 total), Steam Leaderboards, and Steam Cloud saves.',
  },
];

const LEARNING_PATH = [
  { step: '1', title: "Beginner's Guide", href: '/beginners-guide', note: 'Learn the core mechanics, controls, and first weapon choices.' },
  { step: '2', title: 'Boss Strategies', href: '/bosses', note: 'Study each area boss pattern before attempting the fight.' },
  { step: '3', title: 'Weapons & Builds', href: '/builds', note: 'Choose your weapons and learn card synthesis recipes.' },
  { step: '4', title: 'Achievement Guide', href: '/bosses', note: 'Target specific achievements to unlock all weapons and secrets.' },
];

export default function GuidesPage() {
  return (
    <div className="bg-abyss bg-rune-pattern min-h-screen">
      <div className="max-w-5xl mx-auto px-4 lg:px-6 py-10">

        {/* Header */}
        <div className="mb-12">
          <p className="font-label text-[10px] uppercase tracking-[0.25em] text-dark-gold mb-3">
            Strategic Archive
          </p>
          <h1 className="font-display text-3xl lg:text-4xl tracking-display text-parchment">
            GUIDES & WALKTHROUGHS
          </h1>
          <p className="font-body text-lg text-parchment-dim mt-4 max-w-2xl leading-relaxed">
            The complete strategy collection for Demon Lord: Just a Block. From beginner basics
            to boss mastery, from weapon unlocks to card synthesis — everything you need to
            fuel the Demon Lord&apos;s revenge. Released April 29, 2026 by YuWave, this action
            roguelite has captivated players with its unique &quot;time moves only when you move&quot; mechanic.
          </p>
          <div className="w-24 h-px bg-blood-red mt-6" />
        </div>

        {/* Guides Grid */}
        <section className="mb-12">
          <div className="space-y-px border border-border-gold">
            {GUIDES.map((guide) => (
              <a
                key={guide.number}
                href={guide.href}
                className="group bg-abyss-elevated hover:bg-dark-gold/5 transition-colors p-6 flex gap-6 items-start"
              >
                <span className="font-display text-2xl text-parchment-dim group-hover:text-dark-gold transition-colors shrink-0">
                  {guide.number}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="font-display text-lg tracking-display text-parchment group-hover:text-dark-gold transition-colors">
                      {guide.title}
                    </h2>
                    <span className="font-label text-[9px] uppercase tracking-wider px-2 py-0.5 border border-border-gold text-dark-gold">
                      {guide.tag}
                    </span>
                  </div>
                  <p className="font-body text-sm text-parchment-dim leading-relaxed">
                    {guide.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-3 font-label text-[10px] uppercase tracking-wider text-dark-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    READ GUIDE &rarr;
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Learning Path */}
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="font-display text-xl tracking-display text-parchment">Learning Path</h2>
            <div className="w-16 h-px bg-dark-gold mt-4" />
          </div>
          <div className="border border-border-gold p-6 bg-abyss-elevated">
            <p className="font-body text-sm text-parchment-dim mb-6">
              New to Demon Lord? Follow this recommended order. Each guide builds on the previous.
            </p>
            <div className="space-y-3">
              {LEARNING_PATH.map((item) => (
                <a
                  key={item.step}
                  href={item.href}
                  className="group flex items-start gap-4 p-4 border border-border-gold/30 hover:border-dark-gold/60 bg-abyss transition-colors"
                >
                  <span className="font-display text-lg text-dark-gold shrink-0 w-8 text-center">
                    {item.step}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="font-display font-bold text-parchment group-hover:text-dark-gold transition-colors">
                      {item.title}
                    </span>
                    <span className="font-label text-[10px] uppercase tracking-wider text-parchment-dim ml-2">&rarr;</span>
                    <p className="font-body text-sm text-parchment-dim mt-1">{item.note}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="mb-6">
            <h2 className="font-display text-xl tracking-display text-parchment">QUICK FAQ</h2>
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
          Data verified from Steam store page & community guides. Updated June 25, 2026. Unofficial fan site.
        </p>
      </div>
    </div>
  );
}
