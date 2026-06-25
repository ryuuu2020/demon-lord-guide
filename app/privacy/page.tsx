'use client';

export default function PrivacyPage() {
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
            PRIVACY POLICY
          </h1>

          <div className="grimoire-card p-6 lg:p-8 space-y-6">
            <section>
              <h2 className="font-display text-lg tracking-display text-dark-gold mb-3">Data Collection</h2>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">
                Demon Lord Archive (hereafter "this site") is a game strategy information site. This site uses Google Analytics to collect anonymized visit statistics (page views, referral channels, etc.) for content optimization and user experience improvement. GA uses anonymized client IDs and does not collect personal identity information.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg tracking-display text-dark-gold mb-3">Data Usage</h2>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">
                Collected data is used solely for: analyzing traffic trends, optimizing content strategy, and understanding visitor preferences. This site does not sell, share, or transfer any user data to third parties. All Analytics data is stored on Google servers under Google\'s privacy policy.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg tracking-display text-dark-gold mb-3">Cookie Policy</h2>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">
                Google Analytics uses first-party cookies to identify unique visitors and sessions. These cookies contain no personal identity information and are not used to track behavior on other websites. You can disable cookies through browser settings without affecting normal site access. This site itself does not set any custom cookies.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg tracking-display text-dark-gold mb-3">Third-Party Links</h2>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">
                This site contains external links to the Afdian sponsorship page, Steam Store, and other game guide sites (such as Tabletop Tavern Guide). Clicking these links will leave this site; third-party website privacy policies are unrelated to this site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg tracking-display text-dark-gold mb-3">Disclaimer</h2>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">
                This site has no direct affiliation with YuWave studio, the developer of Demon Lord: Just a Block. All game strategy data is sourced from community player contributions and is estimated for gameplay reference only. This site is an independent fan information site; trademarks and copyrights belong to their respective owners. Contact the site administrator for any questions.
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
              <a href="/terms" className="font-label text-[10px] uppercase tracking-wider text-parchment-dim hover:text-parchment transition-colors">TERMS</a>
            </div>
            <a href="https://afdian.com/a/gameguidehub" target="_blank" rel="noopener noreferrer"
              className="font-label text-[10px] uppercase tracking-wider text-dark-gold hover:text-dark-gold-dim transition-colors">AFDIAN SUPPORT</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
