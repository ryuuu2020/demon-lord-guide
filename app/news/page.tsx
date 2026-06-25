'use client';

const NEWS = [
  {
    date: '2026-06-25',
    title: 'June Roadmap: Mac Port Progress, Boss Rush Leaderboards, and Balance Patch Preview',
    summary: 'Developer YuWave published the June development roadmap on Steam, outlining the next 3 months of Demon Lord: Just a Block updates. The Mac version is now in internal testing with a target release window of Q3 2026 — community testers report smooth performance on M2/M3 chips at 60fps, though M1 optimization is still in progress. Boss Rush Mode, added in v1.1.0, now includes global leaderboards with separate rankings for each difficulty tier; the top 10 speedrun times for all-bosses-Normal currently range from 2h 47m to 3h 12m. The next balance patch (v1.1.1, expected mid-July) will buff underused weapons — early notes mention significant improvements to the Lightning Spear and Void Gauntlets, plus a Flame build DOT stacking adjustment that should make pure-Flame builds viable for endgame. Also confirmed: a new "Weekend Trials" event system will introduce rotating challenge modifiers with unique cosmetic rewards. And in a surprise announcement, YuWave confirmed that the game has sold over 50,000 copies in its first two months, far exceeding the solo developer\'s expectations.',
    tag: 'Update',
  },
  {
    date: '2026-06-25',
    title: 'May Updates Recap: Custom Key Mapping, Auto-Backup Saves, and Crash Fixes',
    summary: 'Developer YuWave shipped two updates in May addressing key quality-of-life requests. The May 3 update adds custom key mapping — several abilities previously bound to the same key have been separated (e.g. Scythe and Bomberhead moved to distinct keys), giving players full control over their control scheme. An auto-backup system now automatically preserves save files from 1 and 2 hours ago, allowing rollback in case of data loss. A subsequent patch fixed a crash bug that occurred after certain in-game conversations, which had been a persistent issue for players progressing through story-heavy sections. With ~1,800 reviews at 96% positive and the Mac version confirmed for Q3–Q4 2026, the solo developer continues to iterate based on community feedback while working on the next major content update.',
    tag: 'Update',
  },
  {
    date: '2026-06-20',
    title: 'Community Mods Hit 200+ — Developer Thanks Players',
    summary: 'Less than two months after launch, Demon Lord: Just a Block Steam Workshop mods have surpassed 200. Developer YuWave issued a thank-you statement and announced a Mod Creation Contest — outstanding entries will receive official endorsement and cash prizes. Submission deadline: July 15, 2026.',
    tag: 'Community',
  },
  {
    date: '2026-06-10',
    title: 'v1.1.0 Update Released: New Weapon "Eye of the Abyss" & Boss Rush Mode',
    summary: 'Official v1.1.0 patch is live. New hidden weapon "Eye of the Abyss" (acquisition method undisclosed — community actively exploring), new Boss Rush Mode (consecutive challenge of all 4 bosses with rich rewards), Void Colossus Phase 3 difficulty adjusted (stealth build perception range +20%), plus various bug fixes.',
    tag: 'Update',
  },
  {
    date: '2026-05-25',
    title: 'Steam Reviews Hit 96% Positive — "Overwhelmingly Positive" Indie',
    summary: 'Within a month of launch, Demon Lord: Just a Block has amassed 1,500+ Steam reviews at 96% positive. Players praise its innovative "move = time" mechanic, deep build system, and dark epic art style. Multiple indie game outlets have named it one of the "Best Roguelites of 2026."',
    tag: 'Milestone',
  },
  {
    date: '2026-05-15',
    title: 'Mac Version Progress: Confirmed for Q3–Q4 2026',
    summary: 'Developer YuWave shared Mac version progress on the official Discord. Core engine porting is complete; Metal graphics API optimization and trackpad controls are in progress. Expected release September–October 2026, supporting both Intel and Apple Silicon architectures.',
    tag: 'Development',
  },
  {
    date: '2026-05-05',
    title: 'First Week Sales: Indie Team\'s Remarkable Achievement',
    summary: 'Based on Steam data and community estimates, Demon Lord: Just a Block first-week sales exceeded 50,000 copies — an extraordinary result for a 3-person indie team. YuWave pledged to invest part of first-week revenue into future content development, including new bosses, weapons, and story chapters.',
    tag: 'Milestone',
  },
  {
    date: '2026-04-29',
    title: 'Official Release — Demon Lord: Just a Block Now on Steam',
    summary: 'After 18 months of development, YuWave studio\'s debut title Demon Lord: Just a Block is officially live on Steam. Day-one reviews hit 96% positive. Steam Workshop and achievement system supported at launch, with Simplified and Traditional Chinese localization. Priced at $7.99 (launch discount: $6.39).',
    tag: 'Release',
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-abyss bg-rune-pattern">
      <header className="fixed top-0 left-0 right-0 z-30 bg-abyss/95 border-b border-border-gold/30 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 lg:px-6 py-3">
          <a href="/" className="font-display text-sm tracking-display-wide text-dark-gold text-shadow-gold">
            Demon Lord Archive
          </a>
          <a href="/" className="font-label text-[10px] uppercase tracking-wider text-parchment-dim hover:text-dark-gold transition-colors">
            &larr; HOME
          </a>
        </div>
      </header>

      <main className="pt-20 pb-32">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="mb-12">
            <p className="font-label text-[10px] uppercase tracking-[0.25em] text-dark-gold mb-3">
              Chronicles of the Realm
            </p>
            <h1 className="font-display text-3xl lg:text-4xl tracking-display text-parchment text-shadow-gold">
              NEWS &amp; UPDATES
            </h1>
            <p className="font-body text-lg text-parchment-dim mt-4 max-w-2xl leading-relaxed">
              Official news, version updates, and community highlights for Demon Lord: Just a Block. Key events from launch through June 2026. News content based on official announcements and community reports; verify specifics against official sources.
            </p>
            <div className="blood-strip mt-6" />
          </div>

          {/* Game Stats */}
          <div className="grimoire-card p-6 mb-10">
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <span className="font-label text-[10px] uppercase tracking-wider text-dark-gold">Release</span>
                <span className="font-body text-sm text-parchment">April 29, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-label text-[10px] uppercase tracking-wider text-blood-red">Reviews</span>
                <span className="font-body text-sm text-parchment">1,786 · 96% Positive</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-label text-[10px] uppercase tracking-wider text-ember">Developer</span>
                <span className="font-body text-sm text-parchment">YuWave (CN)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-label text-[10px] uppercase tracking-wider text-parchment-dim">Mods</span>
                <span className="font-body text-sm text-parchment">200+</span>
              </div>
            </div>
          </div>

          {/* News Timeline */}
          <div className="space-y-6">
            {NEWS.map((news, i) => (
              <div key={i} className="grimoire-card p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <div className="flex items-center gap-3">
                    {news.tag === 'Release' && <span className="danger-tag">{news.tag}</span>}
                    {news.tag === 'Update' && <span className="gold-tag">{news.tag}</span>}
                    {news.tag === 'Milestone' && <span className="gold-tag">{news.tag}</span>}
                    {news.tag === 'Development' && <span className="inline-flex items-center px-2.5 py-0.5 text-[10px] font-label uppercase tracking-widest text-ember border border-ember/30 bg-ember/10">{news.tag}</span>}
                    {news.tag === 'Community' && <span className="inline-flex items-center px-2.5 py-0.5 text-[10px] font-label uppercase tracking-widest text-dark-gold border border-border-gold bg-dark-gold-glow">{news.tag}</span>}
                  </div>
                  <span className="font-label text-xs tabular-nums text-parchment-dim">{news.date}</span>
                </div>
                <h2 className="font-display text-lg tracking-display text-parchment mb-3">{news.title}</h2>
                <p className="font-body text-sm text-parchment-dim leading-relaxed">{news.summary}</p>
                {i < NEWS.length - 1 && (
                  <div className="mt-6 border-t border-border-gold/10 pt-0" />
                )}
              </div>
            ))}
          </div>

          {/* Future Updates */}
          <section className="mt-16">
            <div className="grimoire-card p-8 text-center">
              <h2 className="font-display text-xl tracking-display text-dark-gold mb-4">LOOKING AHEAD</h2>
              <p className="font-body text-sm text-parchment-dim leading-relaxed max-w-lg mx-auto mb-6">
                Developer YuWave has revealed the 2026 roadmap: Mac version (Q3), new boss "Abyss Guardian" (Q3), multiplayer co-op mode (Q4 survey phase), Steam Workshop Mod Creation Contest (Q3–Q4). Follow this news page for the latest updates.
              </p>
              <p className="font-body text-xs text-parchment-dim/60 italic">
                This site is independently operated and has no direct affiliation with developer YuWave. News content is community-curated; refer to official announcements for authoritative info.
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="relative z-10 pb-20">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="gold-divider mb-6" />
          <div className="mb-6 text-center">
            <p className="font-label text-[10px] uppercase tracking-[0.2em] text-parchment-dim mb-3">More Roguelike Guides</p>
            <a href="https://tabletop-tavern-guide.vercel.app" target="_blank" rel="noopener noreferrer"
              className="font-body text-sm text-dark-gold hover:text-dark-gold-dim transition-colors duration-200">Tabletop Tavern Guide</a>
          </div>
          <div className="gold-divider mb-6" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <span className="font-label text-[10px] uppercase tracking-wider text-parchment-dim">
                &copy; {new Date().getFullYear()} Demon Lord Archive
              </span>
              <a href="/privacy" className="font-label text-[10px] uppercase tracking-wider text-parchment-dim hover:text-parchment transition-colors">PRIVACY</a>
              <a href="/terms" className="font-label text-[10px] uppercase tracking-wider text-parchment-dim hover:text-parchment transition-colors">TERMS</a>
            </div>
            <a href="https://afdian.com/a/gameguidehub" target="_blank" rel="noopener noreferrer"
              className="font-label text-[10px] uppercase tracking-wider text-dark-gold hover:text-dark-gold-dim transition-colors">AFDIAN SUPPORT</a>
          </div>
        </div>
      </footer>

      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-abyss/95 border-t border-border-gold/30 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-center overflow-x-auto">
          {[{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides' }, { label: 'Bosses', href: '/bosses' }, { label: 'Builds', href: '/builds' }, { label: 'Lore', href: '/lore' }, { label: 'FAQ', href: '/faq' }, { label: 'News', href: '/news' }].map((item) => (
            <a key={item.label} href={item.href} className="flex flex-col items-center gap-1 px-4 py-2 text-xs font-label uppercase tracking-widest text-parchment-dim hover:text-dark-gold transition-all duration-300 border-t-2 border-transparent hover:border-dark-gold">
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
