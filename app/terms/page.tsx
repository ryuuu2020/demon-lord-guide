export default function TermsPage() {
  return (
    <div className="bg-abyss bg-rune-pattern min-h-screen">
      <div className="max-w-3xl mx-auto px-4 lg:px-6 py-10">
        <h1 className="font-display text-3xl tracking-display text-parchment mb-8">
          TERMS OF USE
        </h1>

        <div className="border border-border-gold p-6 lg:p-8 bg-abyss-elevated space-y-6">
          <section>
            <h2 className="font-display text-lg tracking-display text-dark-gold mb-3">Service Description</h2>
            <p className="font-body text-sm text-parchment-dim leading-relaxed">
              Demon Lord Guide is an unofficial fan strategy site providing guides, boss strategies, weapon compendiums, and other game-related content for Demon Lord: Just a Block. All content is for gameplay reference only.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg tracking-display text-dark-gold mb-3">Intellectual Property</h2>
            <p className="font-body text-sm text-parchment-dim leading-relaxed">
              The name, trademarks, game content, and art assets of Demon Lord: Just a Block are copyrighted by YuWave studio. This site is a fan information site with no direct affiliation to YuWave. Written content and strategy data on this site are original or community-contributed.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg tracking-display text-dark-gold mb-3">Usage Rules</h2>
            <p className="font-body text-sm text-parchment-dim leading-relaxed">
              All content is for personal gameplay reference only. Unauthorized copying, distribution, or modification is prohibited. Strategy data is labeled as community estimates. Actual in-game values should be verified against the official Steam release.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg tracking-display text-dark-gold mb-3">Disclaimer</h2>
            <p className="font-body text-sm text-parchment-dim leading-relaxed">
              This site provides content "as is" without any warranties. No guarantee is made regarding accuracy, completeness, or timeliness. All boss data, weapon values, and other information are based on community testing and may change with updates.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg tracking-display text-dark-gold mb-3">Contact</h2>
            <p className="font-body text-sm text-parchment-dim leading-relaxed">
              For copyright issues or content disputes, contact the administrator via the Afdian platform. We respect all copyright holders and content contributors.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
