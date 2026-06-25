import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demon Lord: Just a Block — Game Lore & Story Overview',
  description: 'The story of Demon Lord: Just a Block — the Demon Lord reduced to a single head, seeking revenge on fantasy heroes through strategic combat.',
};

const LORE_CHAPTERS = [
  {
    title: 'The Fall of the Demon Lord',
    subtitle: 'Once the mighty ruler of the Shadow Realm, the Demon Lord was defeated by heroes — only a single head survived.',
    content: `In ages past, the Demon Lord ruled the Shadow Realm with absolute power. His dominion stretched across dark forests, frozen peaks, ancient caves, and deep dungeons. Under his command, loyal forces maintained order throughout the land.

But the heroes of the mortal realm, fearing his growing power, united to challenge him. They assembled the mightiest warriors and launched an assault on the Demon Lord\'s throne. After an epic battle, the heroes emerged victorious. The Demon Lord\'s body was destroyed, his realm conquered.

Yet the Demon Lord did not perish completely. Through sheer will and ancient magic, he preserved his consciousness within a single remaining head. Now, reduced to just a block with eyes, he seeks one thing: revenge.

The Demon Lord embarks on a journey through the lands he once ruled — from the Dark Dragon Forest to the Demon God Heart — to reclaim his power and defeat those who wronged him.`,
  },
  {
    title: 'The Journey of Revenge',
    subtitle: 'The Demon Lord travels through corrupted lands, growing stronger with each fallen enemy.',
    content: `The Demon Lord\'s path of vengeance takes him through seven distinct regions, each once part of his domain and now corrupted by the heroes\' influence.

Starting in the Dark Dragon Forest, he must relearn combat against hostile creatures. The Evernight Cave tests his resolve with darkness and ancient beasts. The Frozen Snow Mountain challenges his endurance against bitter cold and fierce enemies.

Deeper still lies the Royal City Dungeon, where the heroes imprisoned his former servants. Slime Island offers strange new challenges, while the peaceful Novice Village hides dark secrets. The final destination is the Demon God Heart — the core of his former power — where the ultimate truth awaits.

Along the way, the Demon Lord discovers hidden truths about the heroes who defeated him. Were they truly righteous? Or did they simply seek power for themselves? The True ending reveals the answer.`,
  },
  {
    title: 'The Power Within',
    subtitle: 'The Demon Lord discovers that true strength comes from mastery, not just raw power.',
    content: `Despite being reduced to a single block, the Demon Lord possesses an extraordinary ability: the power to absorb and wield the essence of defeated enemies. Each fallen foe grants cards — fragments of their soul and abilities.

Through the ancient art of card synthesis, the Demon Lord can combine these fragments into powerful new abilities. A demon army card combined with fire creates a burning legion. Lightning and bats become lightning bats. The combinations are nearly endless, limited only by the Demon Lord\'s strategic mind.

But card power alone is not enough. The Demon Lord must master 14 unique weapons, each requiring specific achievements to unlock. From the noble Lancelot greatsword to the forbidden Death Scythe, each weapon tells a story of the Demon Lord\'s growing mastery.

The ultimate question: is revenge enough to sustain the Demon Lord? Or will he discover something more meaningful on this journey through the lands he once ruled?`,
  },
];

export default function LorePage() {
  return (
    <div className="bg-abyss bg-rune-pattern min-h-screen">
      <div className="max-w-5xl mx-auto px-4 lg:px-6 py-10">

        {/* Header */}
        <div className="mb-10">
          <p className="font-label text-[10px] uppercase tracking-[0.25em] text-dark-gold mb-3">
            Whispers from the Void
          </p>
          <h1 className="font-display text-3xl lg:text-4xl tracking-display text-parchment">
            GAME LORE
          </h1>
          <p className="font-body text-lg text-parchment-dim mt-4 max-w-2xl leading-relaxed">
            The story of Demon Lord: Just a Block — a tale of revenge, discovery, and the true
            meaning of power. Explore the world through the eyes of the Demon Lord, a single
            head seeking vengeance against the heroes who destroyed everything.
          </p>
          <div className="w-24 h-px bg-blood-red mt-6" />
        </div>

        {/* Lore Chapters */}
        <div className="space-y-12 mb-8">
          {LORE_CHAPTERS.map((chapter, i) => (
            <div key={i} className="border border-border-gold p-8 bg-abyss-elevated">
              <div className="mb-6">
                <span className="font-label text-[10px] uppercase tracking-wider text-dark-gold">
                  Chapter {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="font-display text-xl tracking-display text-parchment mt-2">
                  {chapter.title}
                </h2>
                <p className="font-body text-sm text-parchment-dim italic mt-2">
                  &ldquo;{chapter.subtitle}&rdquo;
                </p>
              </div>
              <div className="font-body text-base text-parchment-dim leading-relaxed space-y-4">
                {chapter.content.split('\n\n').filter(Boolean).map((para, j) => (
                  <p key={j}>{para.trim()}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-dark-gold pl-6 py-2 mb-8">
          <p className="font-body text-sm text-parchment-dim italic">
            This lore summary is based on the game&apos;s premise and story elements as presented
            on its Steam store page and community resources. For the complete story, play through
            all three endings yourself.
          </p>
        </div>

        <p className="font-label text-[10px] uppercase tracking-wider text-parchment-dim/60 text-center mt-8">
          Story summary based on official game premise. Updated June 25, 2026. Unofficial fan site.
        </p>
      </div>
    </div>
  );
}
