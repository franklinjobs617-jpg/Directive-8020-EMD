import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { FaqSection } from '@/components/faq-section';
import { ArticleSchema } from '@/components/article-schema';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Directive 8020 All Characters & Cast - Voice Actors, Face Models & Roles',
  description:
    'Meet the full Directive 8020 cast: all 5 playable characters and NPCs with voice actors, face models, roles, and who can live or die. Includes Lashana Lynch, Danny Sapani, Lotte Verbeek and more.',
  alternates: { canonical: 'https://directive8020.top/characters' },
};

const faqs = [
  {
    question: 'How many playable characters are in Directive 8020?',
    answer:
      'Directive 8020 has 5 playable protagonists: Brianna Young (Lashana Lynch), Nolan Stafford (Danny Sapani), Laura Eisele (Lotte Verbeek), Samantha Cooper (Anna Leong Brophy), and Josef Cernan (Philip Arditti).',
  },
  {
    question: 'Can Tomas Carter be saved in Directive 8020?',
    answer:
      'No. Tomas Carter is a prologue character who always dies early in the story. He is killed by the mimic version of Simms during the initial investigation. His death is scripted and unavoidable.',
  },
  {
    question: 'Who is the main character in Directive 8020?',
    answer:
      'Brianna Young, played by Lashana Lynch, is marketed as the lead character. However, the game features 5 equally playable protagonists and the story is ensemble-driven. Any combination of characters can survive to the end.',
  },
  {
    question: 'Are the character names based on real astronauts?',
    answer:
      'Yes. Three protagonist surnames 鈥?Cernan, Stafford, and Young 鈥?are shared with the Apollo 10 crew (Gene Cernan, Tom Stafford, and John Young). The Cassiopeia mission is based on Apollo 10, which also involved orbiting without landing.',
  },
  {
    question: 'Is LaMarcus Williams a playable character?',
    answer:
      'No. LaMarcus Williams (Kobna Holdbrook-Smith) is the CEO of Corinth Corporation and a non-playable character. He plays a major role in the story, and the player must decide whether to trust or shoot him in a critical scene with three possible outcomes.',
  },
];

const playable = [
  {
    name: 'Brianna Young',
    actor: 'Lashana Lynch',
    role: 'Co-Pilot / Astronaut',
    bio: 'A skilled astronaut and co-pilot of the Cassiopeia. Young is resourceful and determined, often taking the lead during dangerous encounters. She is marketed as the lead character of the game.',
    liveOrDie: 'Can live or die depending on choices in Chapters 3, 5, and 7.',
  },
  {
    name: 'Nolan Stafford',
    actor: 'Danny Sapani',
    role: 'Ship Commander',
    bio: 'The commanding officer of the Cassiopeia mission. Stafford is a steady leader who must make impossible decisions under pressure. His survival depends on how the player handles the breach in Chapter 5.',
    liveOrDie: 'Can live or die. Most commonly lost in Chapter 5 if the player seals the breach instead of rescuing trapped crew.',
  },
  {
    name: 'Laura Eisele',
    actor: 'Lotte Verbeek',
    role: 'Senior Mission Officer',
    bio: 'A pragmatic and intelligent officer who advocates for strict quarantine protocols. Eisele is a fan favorite among the development team for her personality. She is the first to suspect something is wrong with the crew.',
    liveOrDie: 'Can live or die. Her survival is tied to the quarantine decision in Chapter 3 and reaching the med bay in Chapter 5.',
  },
  {
    name: 'Samantha Cooper',
    actor: 'Anna Leong Brophy',
    role: 'Medical Specialist',
    bio: 'The crew\'s medical specialist who treats injuries and analyzes the alien organism. Cooper is brave but often puts herself in danger to help others. Her survival depends on keeping the crew together.',
    liveOrDie: 'Can live or die. At risk during medical supply runs in Chapters 4-5.',
  },
  {
    name: 'Josef Cernan',
    actor: 'Philip Arditti',
    role: 'Technical Engineer',
    bio: 'The ship\'s technical engineer responsible for repairs and system maintenance. Cernan is skilled but can become reckless if his morale drops. His name references Apollo 10 astronaut Gene Cernan.',
    liveOrDie: 'Can live or die. At risk during the Chapter 5 breach when he must repair ship systems alone.',
  },
];

const npcs = [
  {
    name: 'Tomas Carter',
    actor: 'Frank Blake',
    role: 'Sleep Technician',
    fate: 'Always dies in the prologue. Killed by the mimic version of Simms during the initial investigation. Cannot be saved.',
  },
  {
    name: 'Pari Simms',
    actor: 'Anneika Rose',
    role: 'Sleep Technician',
    fate: 'Replaced by a shapeshifting alien mimic early in the story. The real Simms is killed; the mimic version infiltrates the crew.',
  },
  {
    name: 'Noah Mitchell',
    actor: 'Colin Bates',
    role: 'Pilot',
    fate: 'NPC whose survival depends on player choices. Can live or die based on decisions in later chapters.',
  },
  {
    name: 'Zoe Anders',
    actor: 'Kathryn Wilder',
    role: 'Science Officer',
    fate: 'NPC whose survival depends on player choices. Contributes scientific expertise to the crew\'s investigation.',
  },
  {
    name: 'LaMarcus Williams',
    actor: 'Kobna Holdbrook-Smith',
    role: 'Corinth Corporation CEO',
    fate: 'The crew must decide whether to trust or shoot him. Has three possible outcomes depending on past choices. He may or may not be a mimic.',
  },
];

export default function CharactersPage() {
  return (
    <article className="prose-d8020">
      <ArticleSchema
        headline="Directive 8020 All Characters & Cast"
        description="Complete character and cast guide for Directive 8020 with all playable characters, NPCs, voice actors, and face models."
        url="https://directive8020.top/characters"
      />
      <Breadcrumb items={[{ label: 'Characters & Cast' }]} />
      <PageHero src="/characters-lineup.jpg" alt="Directive 8020 full cast lineup - all playable characters and voice actors" />

      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
        All Characters &amp; Cast
      </h1>
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
        Meet every character in Directive 8020. The game features 5 playable
        protagonists and 5 key NPCs, each motion-captured and voiced by
        professional actors. Any combination of playable characters can survive
        or die depending on your choices.
      </p>

      <h2>Playable Characters</h2>
      <p>
        Directive 8020 features an ensemble cast of 5 playable protagonists.
        Unlike previous Dark Pictures games, there is no plot armor 鈥?any
        combination of characters can be alive in the final chapters. Each
        character has their own story arc, relationships, and potential death
        scenes.
      </p>

      <div className="space-y-6 mt-6">
        {playable.map((char, i) => (
          <div
            key={i}
            className="rounded-lg border border-white/5 bg-surface p-5"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-d8020/10 border border-d8020/20 flex items-center justify-center shrink-0">
                <span className="text-d8020 font-bold text-base">
                  {char.name.split(' ').map((n) => n[0]).join('')}
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="font-serif text-lg font-semibold text-white m-0">
                  {char.name}
                </h3>
                <p className="text-xs text-zinc-500">
                  {char.role} &middot; {char.actor}
                </p>
              </div>
            </div>
            <div className="mt-3 text-sm space-y-2">
              <p className="text-zinc-400">{char.bio}</p>
              <p>
                <span className="text-d8020 font-semibold">Live or Die: </span>
                <span className="text-zinc-400">{char.liveOrDie}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <h2>Non-Playable Characters (NPCs)</h2>
      <p>
        These characters play important roles in the story but are not directly
        controlled by the player. Some can live or die based on your choices;
        others have fixed fates.
      </p>

      <div className="space-y-4 mt-6">
        {npcs.map((char, i) => (
          <div
            key={i}
            className="rounded-lg border border-white/5 bg-surface p-5"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
                <span className="text-zinc-400 font-bold text-sm">
                  {char.name.split(' ').map((n) => n[0]).join('')}
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="font-serif text-base font-semibold text-white m-0">
                  {char.name}
                </h3>
                <p className="text-xs text-zinc-500">
                  {char.role} &middot; {char.actor}
                </p>
                <p className="text-sm text-zinc-400 mt-2">{char.fate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Who Can Live or Die?</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="border-b border-white/10 text-left">
              <th className="py-2 pr-3 text-zinc-300 font-semibold">Character</th>
              <th className="py-2 pr-3 text-zinc-300 font-semibold">Type</th>
              <th className="py-2 text-zinc-300 font-semibold">Can Die?</th>
            </tr>
          </thead>
          <tbody className="text-zinc-400">
            {[
              ['Brianna Young', 'Playable', 'Yes'],
              ['Nolan Stafford', 'Playable', 'Yes'],
              ['Laura Eisele', 'Playable', 'Yes'],
              ['Samantha Cooper', 'Playable', 'Yes'],
              ['Josef Cernan', 'Playable', 'Yes'],
              ['Tomas Carter', 'NPC', 'Always dies (prologue)'],
              ['Pari Simms', 'NPC', 'Replaced by mimic early'],
              ['Noah Mitchell', 'NPC', 'Yes'],
              ['Zoe Anders', 'NPC', 'Yes'],
              ['LaMarcus Williams', 'NPC', 'Varies (3 outcomes)'],
            ].map(([name, type, fate], i) => (
              <tr key={i} className="border-b border-white/5">
                <td className="py-2 pr-3 text-white font-medium">{name}</td>
                <td className="py-2 pr-3">
                  <span className={type === 'Playable' ? 'text-emerald-400' : 'text-zinc-500'}>
                    {type}
                  </span>
                </td>
                <td className="py-2">{fate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Apollo 10 Easter Egg</h2>
      <p>
        Three protagonist surnames 鈥?<strong>Cernan</strong>, <strong>Stafford</strong>,
        and <strong>Young</strong> 鈥?are shared with the Apollo 10 crew (Gene Cernan,
        Tom Stafford, and John Young). The Cassiopeia mission in Directive 8020 is
        directly inspired by Apollo 10: both missions involved orbiting a destination
        without landing. Apollo 10 orbited the Moon in 1969; the Cassiopeia orbits
        Tau Ceti f in the game.
      </p>

      <div className="mt-8 rounded-lg border border-white/5 bg-surface p-5">
        <h3 className="font-serif text-lg font-semibold text-white mb-3">
          Related Guides
        </h3>
        <div className="space-y-2 text-sm">
          <a href="/save-everyone" className="block text-d8020 hover:underline">
            How to Save Everyone &rarr;
          </a>
          <a href="/all-endings" className="block text-d8020 hover:underline">
            All Endings Explained &rarr;
          </a>
          <a href="/walkthrough" className="block text-d8020 hover:underline">
            Full Walkthrough &rarr;
          </a>
        </div>
      </div>

      <FaqSection items={faqs} />
    </article>
  );
}

