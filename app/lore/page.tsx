'use client';

const LORE_CHAPTERS = [
  {
    title: 'The Fall of the Demon Lord',
    subtitle: 'Once the ruler of the Shadow Realm, the Demon Lord was defeated by heroes — only a single head survived',
    content: `In the distant Shadow Epoch, the Demon Lord ruled the entire Shadow Continent. His power flowed from the Heart of the Abyss — an ancient relic holding boundless shadow energy. Under his command stood four generals: Shadow Revenant, Flame Warden, Void Colossus, and the Former King (the Demon Lord\'s former body).

Yet the heroes of the mortal realm feared his power. They assembled an expedition — Warrior, Mage, Archer, Paladin — crossing the Shadow Gate to strike the Demon Lord\'s Throne Chamber. After a cataclysmic battle, the heroes shattered the Heart of the Abyss. The Demon Lord\'s body crumbled to dust.

But the Demon Lord did not perish entirely. In his final moment, he sealed his last consciousness into a single head. This head drifted through shadow rifts for centuries, until a wandering card mage discovered it.

"I refuse to accept this." The Demon Lord\'s voice echoed from the head.

Thus, a single head embarked on a long road of vengeance.`,
  },
  {
    title: 'The Power of Cards',
    subtitle: 'The Demon Lord discovered ancient card magic, regaining power by collecting soul cards',
    content: `The card mage brought the Demon Lord\'s head to her tower. There, the Lord found the catalyst that would change his fate — ancient card magic.

This lost art could seal the souls of all things into cards. Each card contained the full power of its corresponding creature or object. The Demon Lord realized that if he collected enough cards, he could reforge his body and reclaim his strength.

Under the card mage\'s guidance, the Demon Lord began learning card magic. He discovered he could acquire cards by defeating enemies. Each new card granted fresh abilities: flame cards bestowed burning power, frost cards brought freezing might, tempest cards delivered storm fury.

But this power came at a cost. Every card he used eroded his humanity. He grew colder, more paranoid. The thirst for vengeance consumed his reason.

"You\'re becoming the very thing you hate most," the card mage warned him.

"Perhaps," the Demon Lord replied. "I always was."`,
  },
  {
    title: 'Whose Justice?',
    subtitle: 'Were the heroes truly righteous — or did they simply seek power?',
    content: `As the Demon Lord\'s power gradually returned, he began to reconsider that history.

Did the heroes truly invade the Shadow Realm to save the world? The Demon Lord scoured ancient archives and uncovered a disturbing truth: the Heart of the Abyss was not merely a source of power — it was the keystone holding the Shadow Realm together. After the heroes shattered it, the Shadow Realm began to collapse, countless innocent shadow creatures losing their homes.

And the heroes\' kingdoms? The spoils they carried back from the expedition — the Demon Lord\'s weapons, treasure, magical codices — made each of them rulers. The Warrior became a king, the Mage a court chancellor, the Archer a military commander, the Paladin founded his own religious order.

"They didn\'t fight for justice," the Demon Lord realized. "They fought for power. They needed me — the \'evil Demon Lord\' — as justification for their rule."

This revelation changed his purpose. It was no longer just vengeance. He would expose the truth, letting the world see the heroes\' true faces. But first, he needed power.

So he continued collecting cards, continued growing stronger, continued toward the entity that was both his past self and a new tyrant — the Former King.`,
  },
];

const WORLD_SETTING = [
  {
    title: 'The Shadow Realm',
    desc: 'The world of Demon Lord. A continent bathed in eternal twilight, once prosperous, now crumbling after the Heart of the Abyss was shattered. The Ruined City, Molten Dungeon, Ancient Ruins, and Throne Chamber are its primary regions. Each domain is guarded by a fallen warden — once the Demon Lord\'s most loyal servants.',
  },
  {
    title: 'Card Magic System',
    desc: 'A branch of the ancient magical schools. Defeat enemies to collect soul cards, each granting the wielder powers of the corresponding element. Five elemental schools — Fire, Ice, Wind, Poison, Shadow — plus dozens of weapon cards. Card acquisition order and usage combinations define build direction and strength.',
  },
  {
    title: 'The Heroes\' Kingdom',
    desc: 'The human realm beyond the Shadow Realm. Ostensibly the embodiment of righteousness, actually an empire sustained by plundering Shadow Realm resources. The hero expedition\'s story was composed into an epic, passed down for generations — every word a lie.',
  },
];

const CHARACTERS = [
  { name: 'The Demon Lord', role: 'Player Character', desc: 'Former ruler of the Shadow Realm, now reduced to a single head. Using card magic to regain strength, he walks the path of vengeance and truth. Cold but justified, paranoid but reasoned.' },
  { name: 'The Card Mage', role: 'Guide', desc: 'A reclusive ancient magical scholar who discovered and sheltered the Demon Lord\'s head. She taught him card magic but worries deeply about his vengeance obsession. Her identity seems intricately connected to the Heroes\' Kingdom.' },
  { name: 'The Former King', role: 'Final Boss', desc: 'The Demon Lord\'s former body, which developed self-awareness after the Lord\'s fall. He seized the throne and rules the Shadow Realm under the Demon Lord\'s name — but far more brutally than the true Lord ever did. Defeating him is key to uncovering the truth.' },
];

export default function LorePage() {
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
              Whispers from the Void
            </p>
            <h1 className="font-display text-3xl lg:text-4xl tracking-display text-parchment text-shadow-gold">
              LORE &amp; BACKGROUND
            </h1>
            <p className="font-body text-lg text-parchment-dim mt-4 max-w-2xl leading-relaxed">
              The complete backstory of Demon Lord: Just a Block. From the Demon Lord\'s fall to the discovery of card magic, from the path of vengeance to the revelation of truth. A dark epic about loss, power, and justice.
            </p>
            <div className="gold-divider mt-6" />
          </div>

          {/* Story Chapters */}
          <div className="space-y-12 mb-16">
            {LORE_CHAPTERS.map((chapter, i) => (
              <section key={i} className="relative">
                <div className="mb-6">
                  <p className="font-label text-[10px] uppercase tracking-[0.25em] text-dark-gold mb-2">
                    Chapter {i + 1}
                  </p>
                  <h2 className="font-display text-2xl tracking-display text-parchment mb-2">
                    {chapter.title}
                  </h2>
                </div>

                <div className="grimoire-card p-6 lg:p-8">
                  <p className="font-body text-base text-parchment-dim italic leading-relaxed mb-6 border-l-2 border-dark-gold pl-4">
                    &ldquo;{chapter.subtitle}&rdquo;
                  </p>
                  {chapter.content.split('\n\n').filter(Boolean).map((paragraph, j) => (
                    <p key={j} className="font-body text-sm text-parchment-dim leading-relaxed mb-4">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>

                {i < LORE_CHAPTERS.length - 1 && (
                  <div className="gold-divider mt-12" />
                )}
              </section>
            ))}
          </div>

          {/* World Setting */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="font-display text-2xl tracking-display text-parchment">WORLD SETTING</h2>
              <div className="gold-divider mt-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {WORLD_SETTING.map((setting, i) => (
                <div key={i} className="grimoire-card p-6">
                  <h3 className="font-display text-sm tracking-display text-dark-gold mb-3">{setting.title}</h3>
                  <p className="font-body text-sm text-parchment-dim leading-relaxed">{setting.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Characters */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="font-display text-2xl tracking-display text-parchment">KEY CHARACTERS</h2>
              <div className="gold-divider mt-4" />
            </div>
            <div className="space-y-4">
              {CHARACTERS.map((char, i) => (
                <div key={i} className="grimoire-card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                    <h3 className="font-display text-sm tracking-display text-parchment">{char.name}</h3>
                    <span className="danger-tag">{char.role}</span>
                  </div>
                  <p className="font-body text-sm text-parchment-dim leading-relaxed">{char.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Epilogue */}
          <section>
            <div className="grimoire-card p-8 text-center">
              <p className="font-display text-xl tracking-display text-dark-gold mb-4">THE STORY CONTINUES</p>
              <p className="font-body text-sm text-parchment-dim leading-relaxed max-w-lg mx-auto">
                The Demon Lord\'s tale is not yet finished. Three endings — Normal, True, and Hidden — each reveal different layers of the truth.
                Developer YuWave plans future content updates including the Card Mage\'s personal storyline and the Heroes\' Kingdom backstory exploration.
                Join the community and uncover more hidden dark epic legends together.
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
