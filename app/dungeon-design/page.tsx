export const metadata = {
  title: "Demon Lord Dungeon Design Guide — Best Layouts (2026)",
  description: "Complete dungeon design guide for Demon Lord. Best dungeon layouts, trap placement, and how to stop every hero class.",
};

export default function DungeonDesignPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-red-400 mb-2">Demon Lord Dungeon Design Guide</h1>
      <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-red-400 mb-3">Core Design Principles</h2>
            <p className="text-gray-300 leading-relaxed">Effective dungeon design creates multiple decision points for heroes (which path to take) while funneling them through your strongest demons. Never design a dungeon with a single straight path — heroes can rush through it too quickly. Instead, use T-intersections and loop paths that force heroes to explore and encounter more demons.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-red-400 mb-3">Trap Placement</h2>
            <p className="text-gray-300 leading-relaxed">Traps have two functions: damage dealing and path manipulation. Spike floor traps deal consistent damage and are best placed 1-2 tiles before your strongest demons (softening heroes before engagement). Slowdown traps (mud, web) are best placed before ranged demons — slowed heroes can't dodge ranged attacks.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-red-400 mb-3">Counter-Building by Hero Class</h2>
            <p className="text-gray-300 leading-relaxed">Warrior heroes: use crowd control demons and knockback traps (warriors lose all advantage when disrupted). Mage heroes: deploy magic-resistant demons and anti-magic wards (mages are usually physically frail — rush them with fast melee demons). Archer heroes: use cover-blocking traps and flying demons (archers can't hit what's above them).</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-red-400 mb-3">Resource Management</h2>
            <p className="text-gray-300 leading-relaxed">Every demon costs gold to place and upgrade. Budget your dungeon: 40% on frontline tanks (they take the most damage and need durability), 35% on DPS demons (your primary killing power), and 25% on support and traps (force multipliers). Never spend gold on a demon in a room heroes rarely visit — ROI is zero.</p>
          </section>
        <section>
          <h2 className="text-xl font-bold text-red-400 mb-3">FAQ</h2>
          <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-semibold text-white">What should I know about core design principles in Demon Lord?</h3>
                <p className="text-gray-300 leading-relaxed">Effective dungeon design creates multiple decision points for heroes (which path to take) while funneling them through your strongest demons. Never design a dungeon with a single straight path — heroe...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about trap placement in Demon Lord?</h3>
                <p className="text-gray-300 leading-relaxed">Traps have two functions: damage dealing and path manipulation. Spike floor traps deal consistent damage and are best placed 1-2 tiles before your strongest demons (softening heroes before engagement)...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about counter-building by hero class in Demon Lord?</h3>
                <p className="text-gray-300 leading-relaxed">Warrior heroes: use crowd control demons and knockback traps (warriors lose all advantage when disrupted). Mage heroes: deploy magic-resistant demons and anti-magic wards (mages are usually physically...</p>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}
