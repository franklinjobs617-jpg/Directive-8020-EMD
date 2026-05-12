import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { FaqSection } from '@/components/faq-section';
import { ArticleSchema } from '@/components/article-schema';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Directive 8020 How to Save Everyone - Full Survival Guide',
  description:
    'Complete guide to keeping every crew member alive in Directive 8020. Step-by-step survival instructions for Young, Eisele, Stafford, Carter, and all characters, including Survivor Mode tips.',
  alternates: { canonical: 'https://directive8020.top/save-everyone/' },
};

const faqs = [
  {
    question: 'Can you save everyone in Directive 8020?',
    answer:
      'Yes, it is possible to keep every crew member alive through the entire game. This requires making specific choices at each Turning Point, mastering the stealth system, and accepting the clone truth in Chapter 7.',
  },
  {
    question: 'Can you save Stafford in Directive 8020?',
    answer:
      'Yes. Stafford can survive if you choose to rescue trapped crew in Chapter 5 (instead of sealing the breach) and successfully complete the stealth sequences to reach him.',
  },
  {
    question: 'Is it harder to save everyone in Survivor Mode?',
    answer:
      'Much harder. Survivor Mode disables Turning Points, meaning you cannot retry failed choices. It also has stricter QTE timing and more aggressive mimic AI. Practice on normal difficulty first.',
  },
  {
    question: 'What happens if a character dies?',
    answer:
      'Dead characters are gone for that playthrough. Their story scenes are replaced and later chapters adjust. The ending you get depends on how many and which characters survive.',
  },
];

const characters = [
  {
    name: 'Brianna Young',
    actor: 'Lashana Lynch',
    role: 'Security Officer',
    danger: 'Frequently in direct combat with mimics. Most at risk during Chapters 3 and 5.',
    survival:
      'Side with Eisele in Ch.3 (quarantine doors save her in Ch.5). In Ch.5, complete the stealth section flawlessly. In Ch.7, she must accept the clone truth — if she denies it, she becomes reckless.',
  },
  {
    name: 'Dr. Eisele',
    actor: 'Lotte Verbeek',
    role: 'Chief Medical Officer',
    danger: 'Isolated in the medical bay during mimic attacks. Vulnerable in Ch.3 and Ch.5.',
    survival:
      'Siding with her quarantine plan in Ch.3 gives her safe zone access. In Ch.5, make sure someone reaches the med bay to warn her. She always accepts the clone truth if you side with her earlier.',
  },
  {
    name: 'Stafford',
    actor: '',
    role: 'Engineering',
    danger: 'Gets trapped behind the breach in Ch.5. The most common first death in playthroughs.',
    survival:
      'In Ch.5, choose "Rescue trapped crew" instead of "Seal the breach." Then navigate the stealth sequence to reach the engineering section. Use Noisemakers to draw mimics away from the rescue route.',
  },
  {
    name: 'Captain Carter',
    actor: '',
    role: 'Commanding Officer',
    danger: 'Carter faces moral dilemmas that can lead to self-sacrifice. Most at risk in Ch.8.',
    survival:
      'If all crew are alive and the clone truth is accepted, Carter will not sacrifice himself. The key is keeping morale high throughout the game by making supportive dialogue choices.',
  },
  {
    name: 'Lt. Sims',
    actor: '',
    role: 'First Officer',
    danger: 'Exposed to the mimic organism during investigation in Ch.2. Can be infected.',
    survival:
      'In Ch.2, choose to "Investigate the organism" — counterintuitively, gaining knowledge about the mimic helps Sims avoid infection. If you wait, the mimic spreads and Sims gets ambushed.',
  },
  {
    name: 'Williams',
    actor: '',
    role: 'Communications Officer',
    danger: 'Has access to sensitive information. Corinth may target Williams to suppress evidence.',
    survival:
      'Protect the private files in Ch.4. If you force Oracle to reveal data, Williams is protected because the truth is already out. If you accept Oracle\'s lies, Williams becomes a target.',
  },
];

export default function SaveEveryonePage() {
  return (
    <article className="prose-d8020">
      <ArticleSchema
        headline="Directive 8020 How to Save Everyone"
        description="Complete survival guide for every crew member in Directive 8020."
        url="https://directive8020.top/save-everyone/"
      />
      <Breadcrumb items={[{ label: 'Save Everyone' }]} />
      <PageHero src="/steam-ss06.jpg" alt="Directive 8020 character infected by mimic - how to save everyone guide" />

      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
        How to Save Everyone in Directive 8020
      </h1>
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
        A character-by-character survival guide. Keep every crew member alive from
        Chapter 1 through the finale &mdash; including specific QTE tips, stealth
        routes, and the critical choices that determine who lives and dies.
      </p>
      <figure className="my-8">
        <img
          src="/steam-ss06.jpg"
          alt="Directive 8020 character infected by mimic creature - save everyone guide"
          className="w-full rounded-lg border border-zinc-800"
        />
        <figcaption className="text-sm text-zinc-500 mt-2 text-center">If this happens, that character is lost. Learn how to prevent every infection.</figcaption>
      </figure>

      {/* Quick summary */}
      <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-5 mb-8">
        <p className="text-emerald-400 text-sm font-semibold mb-2">
          The Golden Path (TL;DR)
        </p>
        <ol className="text-sm text-zinc-400 space-y-1 list-decimal pl-4">
          <li>Ch.1: Alter course</li>
          <li>Ch.2: Investigate the organism</li>
          <li>Ch.3: Side with Eisele (strict quarantine)</li>
          <li>Ch.4: Force Oracle to reveal hidden data</li>
          <li>Ch.5: Rescue trapped crew (master the stealth section)</li>
          <li>Ch.6: Preserve the clone vats (evidence)</li>
          <li>Ch.7: Accept the clone truth</li>
          <li>Ch.8: Expose Corinth</li>
        </ol>
      </div>

      <h2>Character-by-Character Survival Guide</h2>
      <p>
        Each crew member has specific death triggers and survival conditions.
        Below is a detailed breakdown for every character.
      </p>

      <div className="space-y-6 mt-6">
        {characters.map((char, i) => (
          <div
            key={i}
            className="rounded-lg border border-white/5 bg-surface p-5"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-d8020/10 border border-d8020/20 flex items-center justify-center shrink-0">
                <span className="text-d8020 font-bold text-sm">
                  {char.name.split(' ').map((n) => n[0]).join('')}
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="font-serif text-lg font-semibold text-white m-0">
                  {char.name}
                </h3>
                <p className="text-xs text-zinc-500">
                  {char.role}
                  {char.actor && <span> &middot; {char.actor}</span>}
                </p>
              </div>
            </div>
            <div className="mt-3 text-sm space-y-2">
              <p>
                <span className="text-red-400 font-semibold">Danger: </span>
                <span className="text-zinc-400">{char.danger}</span>
              </p>
              <p>
                <span className="text-emerald-400 font-semibold">How to save: </span>
                <span className="text-zinc-400">{char.survival}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <h2>Survivor Mode Tips</h2>
      <p>
        Survivor Mode is required for the platinum trophy and significantly
        increases difficulty:
      </p>
      <ul>
        <li>
          <strong>Turning Points are disabled</strong> &mdash; you cannot retry
          decisions. Every choice is permanent.
        </li>
        <li>
          <strong>QTE windows are shorter</strong> &mdash; roughly 50% less time
          to react. Stay focused during action sequences.
        </li>
        <li>
          <strong>Mimic AI is more aggressive</strong> &mdash; enemies detect
          you faster and patrol more unpredictably.
        </li>
        <li>
          <strong>Fewer supplies</strong> &mdash; reduced Noisemakers and Smoke
          Grenades. You must use them strategically.
        </li>
      </ul>
      <div className="tip-box">
        <p className="text-emerald-400 text-sm font-semibold mb-1">Strategy</p>
        <p className="text-sm text-zinc-400">
          Play through on Normal first using Turning Points to learn all the
          optimal choices and stealth routes. Then attempt Survivor Mode with
          that knowledge. The platinum is achievable but requires preparation.
        </p>
      </div>

      <h2>44 Death Scenes</h2>
      <p>
        Directive 8020 features <strong>44 unique death scenes</strong> across all
        characters. Some are triggered by specific choices, others by failed QTEs
        or stealth sequences. Each death is dramatically different and fully animated.
      </p>
      <p>
        {/* TODO: Add expandable list of all 44 death scenes with trigger conditions */}
        <em>A complete death scene catalog with trigger conditions is being compiled
        and will be added soon.</em>
      </p>

      <div className="mt-8 rounded-lg border border-white/5 bg-surface p-5">
        <h3 className="font-serif text-lg font-semibold text-white mb-3">
          Related Guides
        </h3>
        <div className="space-y-2 text-sm">
          <a href="/all-endings/" className="block text-d8020 hover:underline">
            All Endings Explained &rarr;
          </a>
          <a href="/choices-consequences/" className="block text-d8020 hover:underline">
            All Choices &amp; Consequences &rarr;
          </a>
          <a href="/trophy-guide/" className="block text-d8020 hover:underline">
            Trophy Guide &amp; List &rarr;
          </a>
        </div>
      </div>

      <FaqSection items={faqs} />
    </article>
  );
}
