export const metadata = {
  title: "Demon Lord Demon Tier List — Best Demons (2026)",
  description: "Complete demon tier list for Demon Lord. Best demons by role, S-tier picks, and demon synergy guide.",
};

export default function DemonTierListPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-red-400 mb-2">Demon Lord Best Demons Tier List</h1>
      <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-red-400 mb-3">S-Tier Demons</h2>
            <p className="text-gray-300 leading-relaxed">S-tier demons provide the best combination of raw power, utility, and flexibility. These demons perform well in most dungeon types and against the widest range of hero party compositions. They should be the first demons you max upgrade in your dungeon roster.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-red-400 mb-3">Tank Demons</h2>
            <p className="text-gray-300 leading-relaxed">Tank demons anchor your frontline by drawing hero aggression. The best tank demons have high HP pools and taunt abilities that force heroes to target them instead of your more vulnerable demons. Position tanks at dungeon entrance points and at treasure room approaches — these are the most common hero paths.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-red-400 mb-3">Support Demons</h2>
            <p className="text-gray-300 leading-relaxed">Support demons amplify your other demons through healing, buffs, and debuffs. A single Healer demon can effectively double the combat duration of your entire dungeon by keeping frontline demons at fighting capacity. Buff demons that increase attack speed create multiplicative value with high-DPS demons.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-red-400 mb-3">DPS Demons</h2>
            <p className="text-gray-300 leading-relaxed">DPS demons are your dungeon's primary damage dealers. The best DPS demons have abilities that ignore armor (heroes in heavy armor have high physical defense) or deal magic damage (most heroes have lower magic resistance). Build DPS demons with attack speed upgrades before raw damage — faster attacks beat bigger hits at most upgrade thresholds.</p>
          </section>
        <section>
          <h2 className="text-xl font-bold text-red-400 mb-3">FAQ</h2>
          <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-semibold text-white">What should I know about s-tier demons in Demon Lord?</h3>
                <p className="text-gray-300 leading-relaxed">S-tier demons provide the best combination of raw power, utility, and flexibility. These demons perform well in most dungeon types and against the widest range of hero party compositions. They should ...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about tank demons in Demon Lord?</h3>
                <p className="text-gray-300 leading-relaxed">Tank demons anchor your frontline by drawing hero aggression. The best tank demons have high HP pools and taunt abilities that force heroes to target them instead of your more vulnerable demons. Posit...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about support demons in Demon Lord?</h3>
                <p className="text-gray-300 leading-relaxed">Support demons amplify your other demons through healing, buffs, and debuffs. A single Healer demon can effectively double the combat duration of your entire dungeon by keeping frontline demons at fig...</p>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}
