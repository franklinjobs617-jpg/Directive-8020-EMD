import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { FaqSection } from '@/components/faq-section';
import { ArticleSchema } from '@/components/article-schema';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Directive 8020 All Endings Explained - Clone Twist, Best Ending & More',
  description:
    'Every Directive 8020 ending explained in detail, including the clone twist revelation, the 13th cycle truth, and how to get the best ending where everyone survives.',
  alternates: { canonical: 'https://directive8020.top/all-endings/' },
};

const faqs = [
  {
    question: 'How many endings does Directive 8020 have?',
    answer:
      'Directive 8020 has multiple distinct endings determined by how many crew members survive, whether the clone truth is accepted, and key decisions in Chapters 3, 5, and 7. The main ending categories are: Total Sacrifice, Partial Survival, and Best Ending.',
  },
  {
    question: 'What is the best ending in Directive 8020?',
    answer:
      'The best ending requires keeping all crew members alive, accepting the clone truth in Chapter 7, and choosing to expose Corinth rather than destroy the ship. This results in the crew surviving and the mimic threat being contained.',
  },
  {
    question: 'Are the characters in Directive 8020 really clones?',
    answer:
      'Yes. This is the major plot twist revealed in Chapter 6. The Cassiopeia crew are clones with memory backups from the original crew members, who died many cycles ago. This is the 13th iteration of the Corinth experiment.',
  },
  {
    question: 'What is the 13th cycle in Directive 8020?',
    answer:
      'The 13th cycle refers to the fact that this crew has been cloned and reset 12 times before. Each previous cycle ended with total crew death. The Corinth corporation uses these cycles to study human responses to the mimic organism.',
  },
  {
    question: 'Can everyone survive in Directive 8020?',
    answer:
      'Yes, it is possible to save every crew member. See our Save Everyone guide for the exact choices needed in each chapter.',
  },
];

const transcriptEndingConditions = [
  {
    evidence: 'Distress signal',
    guideUse:
      'Track routes where the crew tries to call for rescue or contact outside help.',
    spoilerLevel: 'High',
    note:
      'Rescue can save survivors, but it may also expose Andromeda or Earth if contamination is unresolved.',
  },
  {
    evidence: 'Warning message',
    guideUse:
      'Track routes where the crew warns Andromeda away instead of asking for extraction.',
    spoilerLevel: 'High',
    note:
      'This should be treated as a mission-priority ending condition, not simply a bad ending choice.',
  },
  {
    evidence: 'Andromeda risk',
    guideUse:
      'Record whether each ending protects the Cassiopeia crew, Andromeda, Earth, or the evidence trail.',
    spoilerLevel: 'High',
    note:
      'The ending can change meaning if saving one group puts another group at risk.',
  },
  {
    evidence: 'Oracle protocols',
    guideUse:
      'Record whether Oracle data was accessed, trusted, resisted, or used as proof before the finale.',
    spoilerLevel: 'Medium',
    note:
      'Oracle context helps explain why some late choices feel more informed than others.',
  },
  {
    evidence: 'Clone and cycle reveal',
    guideUse:
      'Use this only after one completed route to interpret the final state and post-ending context.',
    spoilerLevel: 'High',
    note:
      'The transcript connects copied memories, synthetic bodies, repeat missions, and Corinth or Earth knowledge.',
  },
];

export default function AllEndingsPage() {
  return (
    <article className="prose-d8020">
      <ArticleSchema
        headline="Directive 8020 All Endings Explained"
        description="Complete breakdown of every ending in Directive 8020, including the clone twist and best ending guide."
        url="https://directive8020.top/all-endings/"
        dateModified="2026-05-15"
      />
      <Breadcrumb items={[{ label: 'All Endings' }]} />
      <PageHero src="/steam-ss03.webp" alt="Directive 8020 clone confrontation scene - all endings guide" />

      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
        All Endings Explained
      </h1>
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
        Every ending in Directive 8020, fully explained. Includes the devastating clone
        twist, the truth about the 13th cycle, and the exact requirements for each outcome.
      </p>

      {/* Spoiler warning */}
      <div className="warn-box">
        <p className="text-yellow-400 text-sm font-semibold mb-1">
          Major Story Spoilers Ahead
        </p>
        <p className="text-sm text-zinc-400">
          This guide reveals the full plot of Directive 8020, including the clone
          twist and all ending outcomes. Read at your own risk.
        </p>
      </div>

      <h2>Transcript-Based Finale Conditions</h2>
      <p>
        The ending should not be reduced to one final button press. The
        transcript separates the finale into survivor state, message choice,
        Andromeda risk, Earth contamination risk, Oracle context, and the cycle
        reveal. Use this spoiler table after you have finished at least one
        route.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="border-b border-white/10 text-left">
              <th className="py-2 pr-3 text-zinc-300 font-semibold">Transcript Evidence</th>
              <th className="py-2 pr-3 text-zinc-300 font-semibold">Guide Use</th>
              <th className="py-2 pr-3 text-zinc-300 font-semibold">Spoiler Level</th>
              <th className="py-2 text-zinc-300 font-semibold">Why It Matters</th>
            </tr>
          </thead>
          <tbody className="text-zinc-400">
            {transcriptEndingConditions.map((row) => (
              <tr key={row.evidence} className="border-b border-white/5">
                <td className="py-2 pr-3 text-white font-medium">{row.evidence}</td>
                <td className="py-2 pr-3">{row.guideUse}</td>
                <td className="py-2 pr-3">{row.spoilerLevel}</td>
                <td className="py-2">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>The Clone Twist: The Truth About the Crew</h2>
      <p>
        The single most important revelation in Directive 8020 is that{' '}
        <strong>the crew of the Cassiopeia are not the original crew</strong>.
        They are clones, created with memory backups from the original human beings
        who died on this ship cycles ago.
      </p>
      <p>
        This revelation hits in <strong>Chapter 6: The Lab</strong>, when the crew
        discovers a hidden laboratory filled with cloning vats. Inside are exact
        physical copies of every crew member &mdash; unconscious, waiting to be
        activated for the next cycle.
      </p>
      <p>
        The <strong>experiment logs</strong> found in the lab reveal that the
        Corinth Corporation orchestrated everything. The &ldquo;meteor damage&rdquo;
        was a cover story. The mimic organism was deliberately brought aboard. And
        this &mdash; the current crew&rsquo;s experience &mdash; is the{' '}
        <strong>13th iteration</strong> of the experiment.
      </p>

      <h3>Key Evidence Points</h3>
      <ul>
        <li>
          <strong>Williams&rsquo; Private Files</strong> (Chapter 4) &mdash; References
          crew members who should not exist on the current manifest.
        </li>
        <li>
          <strong>Oracle&rsquo;s Hidden Records</strong> (Chapter 4) &mdash; Corrupted
          data fragments from previous cycles that the ship&rsquo;s AI was ordered
          to suppress.
        </li>
        <li>
          <strong>The Clone Lab</strong> (Chapter 6) &mdash; Physical proof: vats of
          identical bodies for every crew member.
        </li>
        <li>
          <strong>Experiment Logs</strong> (Chapter 6) &mdash; Written by Corinth
          scientists, documenting 12 failed cycles of clone experimentation.
        </li>
      </ul>

      <h2>Ending Categories</h2>
      <p>
        Your ending is determined by three factors: <strong>how many crew members
        survive</strong>, <strong>whether they accepted or denied the clone truth</strong>,
        and <strong>the final decision in Chapter 8</strong>.
      </p>

      <h3>1. Total Sacrifice Ending</h3>
      <p>
        The crew activates Directive 8020, destroying the Cassiopeia with everyone
        aboard. The mimic organism is incinerated. Corinth&rsquo;s experiment is
        destroyed, but so is all evidence of what happened.
      </p>
      <div className="choice-box">
        <p className="choice-label">Requirements</p>
        <p className="text-sm text-zinc-400">
          &bull; Most or all crew dead by Chapter 8<br />
          &bull; No hope of survival<br />
          &bull; Triggered automatically when too few crew remain to attempt alternatives
        </p>
      </div>
      <p>
        This is the &ldquo;bad&rdquo; ending. Corinth wins because there are no
        survivors to expose them, and the experiment data is already transmitted
        to their servers before the ship&rsquo;s destruction.
      </p>

      <h3>2. Partial Survival Endings</h3>
      <p>
        Some crew survive, some don&rsquo;t. The exact scenes vary depending on
        <strong> which specific characters</strong> are alive and their mental state
        (truth-accepting vs. truth-denying). Key variations:
      </p>
      <ul>
        <li>
          <strong>Young survives alone:</strong> She broadcasts the truth but is
          not believed. The game implies Corinth discredits her.
        </li>
        <li>
          <strong>Eisele survives with data:</strong> She transmits the experiment
          logs, creating a public scandal. Partial victory.
        </li>
        <li>
          <strong>Carter survives with crew:</strong> The captain initiates a
          distress beacon. A rescue ship arrives, but whether the mimics are
          contained depends on earlier choices.
        </li>
      </ul>

      <h3>3. Best Ending: Expose Corinth</h3>
      <figure className="my-8">
        <img
          src="/steam-ss11.webp"
          alt="Directive 8020 characters approaching bright doorway - ending scene"
          className="w-full rounded-lg border border-zinc-800"
        />
        <figcaption className="text-sm text-zinc-500 mt-2 text-center">The survivors approach an uncertain fate — which ending will you reach?</figcaption>
      </figure>
      <p>
        The optimal ending requires:
      </p>
      <ol>
        <li>All crew members alive entering Chapter 8</li>
        <li>All key characters accepted the clone truth in Chapter 7</li>
        <li>Choose to <strong>expose Corinth</strong> rather than destroy the ship</li>
        <li>Successfully transmit the experiment logs + mimic containment data</li>
      </ol>
      <div className="tip-box">
        <p className="text-emerald-400 text-sm font-semibold mb-1">Best Outcome</p>
        <p className="text-sm text-zinc-400">
          The crew survives, the mimic is contained, and Corinth&rsquo;s illegal
          clone experiments are exposed to the public. This requires near-perfect
          play &mdash; see our{' '}
          <a href="/save-everyone/" className="text-emerald-400 underline">
            Save Everyone guide
          </a>{' '}
          for the exact path.
        </p>
      </div>

      <h2>How Each Choice Affects Endings</h2>
      <p>
        The following key decisions have the largest impact on your ending:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="border-b border-white/10 text-left">
              <th className="py-2 pr-4 text-zinc-300 font-semibold">Chapter</th>
              <th className="py-2 pr-4 text-zinc-300 font-semibold">Decision</th>
              <th className="py-2 text-zinc-300 font-semibold">Best Choice for Good Ending</th>
            </tr>
          </thead>
          <tbody className="text-zinc-400">
            <tr className="border-b border-white/5">
              <td className="py-2 pr-4">1</td>
              <td className="py-2 pr-4">Alter course or hold position</td>
              <td className="py-2">Alter course</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-2 pr-4">3</td>
              <td className="py-2 pr-4">Side with Eisele or Young</td>
              <td className="py-2">Side with Eisele (strict quarantine)</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-2 pr-4">5</td>
              <td className="py-2 pr-4">Seal the breach or rescue trapped crew</td>
              <td className="py-2">Rescue trapped crew (requires stealth skill)</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-2 pr-4">7</td>
              <td className="py-2 pr-4">Accept or deny the clone truth</td>
              <td className="py-2">Accept the truth</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">8</td>
              <td className="py-2 pr-4">Destroy ship or expose Corinth</td>
              <td className="py-2">Expose Corinth</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 rounded-lg border border-white/5 bg-surface p-5">
        <h3 className="font-serif text-lg font-semibold text-white mb-3">
          Related Guides
        </h3>
        <div className="space-y-2 text-sm">
          <a href="/choices-consequences/" className="block text-d8020 hover:underline">
            All Choices &amp; Consequences &rarr;
          </a>
          <a href="/save-everyone/" className="block text-d8020 hover:underline">
            How to Save Everyone &rarr;
          </a>
          <a href="/walkthrough/" className="block text-d8020 hover:underline">
            Full Walkthrough &rarr;
          </a>
        </div>
      </div>

      <FaqSection items={faqs} />
    </article>
  );
}
