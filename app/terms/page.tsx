'use client';

export default function TermsPage() {
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
        <div className="max-w-3xl mx-auto px-4 lg:px-6">
          <h1 className="font-display text-3xl tracking-display text-parchment text-shadow-gold mb-8">
            TERMS OF USE
          </h1>

          <div className="grimoire-card p-6 lg:p-8 space-y-6">
            <section>
              <h2 className="font-display text-lg tracking-display text-dark-gold mb-3">Service Description</h2>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">
                Demon Lord Archive is an unofficial fan strategy site providing guides, build recommendations, boss compendiums, and other game-related content for Demon Lord: Just a Block. All content is for gameplay reference only, based on community player contributions as estimated data, and not guaranteed to be 100% accurate.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg tracking-display text-dark-gold mb-3">Intellectual Property</h2>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">
                The name, trademarks, game content, and art assets of Demon Lord: Just a Block are copyrighted by YuWave studio. This site is a fan information site with no direct affiliation to YuWave. Written content and strategy data analysis on this site are original or community-contributed. Game screenshots and in-game data are for reference only; copyrights belong to the original rights holders.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg tracking-display text-dark-gold mb-3">Usage Rules</h2>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">
                By browsing this site, you agree that: all content is for personal gameplay reference only and may not be used commercially. Unauthorized copying, distribution, or modification of site content is prohibited. This site is not liable for game progress loss or other consequences resulting from use of guide content. Strategy data is labeled as "community estimates"; actual in-game values should be verified against the official Steam release.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg tracking-display text-dark-gold mb-3">Disclaimer</h2>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">
                This site provides content "as is" without any express or implied warranties. No guarantee is made regarding accuracy, completeness, or timeliness. All boss data, weapon values, and other information are based on community testing of specific game versions and may change with updates. Use of this site\'s content means you accept these risks.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg tracking-display text-dark-gold mb-3">Contact</h2>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">
                For copyright issues, content disputes, or other matters, please contact the administrator via the Afdian platform. We respect the rights of all copyright holders and content contributors. If you believe this site\'s content infringes your rights, contact us and we will address it promptly.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="relative z-10 pb-20">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="gold-divider mb-6" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <span className="font-label text-[10px] uppercase tracking-wider text-parchment-dim">
                &copy; {new Date().getFullYear()} Demon Lord Archive
              </span>
              <a href="/privacy" className="font-label text-[10px] uppercase tracking-wider text-parchment-dim hover:text-parchment transition-colors">PRIVACY</a>
            </div>
            <a href="https://afdian.com/a/gameguidehub" target="_blank" rel="noopener noreferrer"
              className="font-label text-[10px] uppercase tracking-wider text-dark-gold hover:text-dark-gold-dim transition-colors">AFDIAN SUPPORT</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
