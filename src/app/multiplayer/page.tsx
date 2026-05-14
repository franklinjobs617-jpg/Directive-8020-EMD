import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { FaqSection } from '@/components/faq-section';
import { ArticleSchema } from '@/components/article-schema';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Directive 8020 Multiplayer & Co-Op Guide - Movie Night Mode Explained',
  description:
    'How to play Directive 8020 in co-op: Movie Night mode (up to 5 players), online co-op, couch co-op setup, and what happened to Shared Story. Complete multiplayer guide.',
  alternates: { canonical: 'https://directive8020.top/multiplayer/' },
};

const faqs = [
  {
    question: 'Does Directive 8020 have online co-op?',
    answer:
      'Yes. Online co-op was added as a free post-launch update on all platforms. It allows Movie Night mode to be played online with friends. This is the first time online co-op has been available in the Dark Pictures Anthology.',
  },
  {
    question: 'How many players can play Directive 8020?',
    answer:
      'Up to 5 players can play together in Movie Night mode. Each player is assigned a character, and the controller passes to whoever\'s character is on screen. You can mix couch and online players.',
  },
  {
    question: 'Is Shared Story in Directive 8020?',
    answer:
      'No. Shared Story and Curator\'s Cut modes from previous Dark Pictures games are not in Directive 8020. They have been replaced by the online Movie Night mode. This was a controversial decision among fans of the series.',
  },
  {
    question: 'Can you play Directive 8020 split-screen?',
    answer:
      'No. Directive 8020 does not have split-screen. Movie Night mode passes the controller to whoever\'s character is currently on screen. Online players see the same screen via shared gameplay.',
  },
  {
    question: 'What is Movie Night mode in Directive 8020?',
    answer:
      'Movie Night is a party mode where up to 5 players each choose a character. When a player\'s character appears on screen, they take control. It can be played locally on the couch or online with friends. Players can mix local and online participants.',
  },
];

export default function MultiplayerPage() {
  return (
    <article className="prose-d8020">
      <ArticleSchema
        headline="Directive 8020 Multiplayer & Co-Op Guide"
        description="Complete multiplayer guide for Directive 8020 covering Movie Night mode, online co-op, and couch co-op setup."
        url="https://directive8020.top/multiplayer/"
      />
      <Breadcrumb items={[{ label: 'Multiplayer' }]} />
      <PageHero src="/steam-ss04.jpg" alt="Directive 8020 crew making group decision - multiplayer and co-op guide" />

      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
        Multiplayer &amp; Co-Op Guide
      </h1>
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
        Directive 8020 supports up to 5 players via Movie Night mode, now
        available both locally and online. Here&apos;s everything you need to
        know about setting up and playing co-op.
      </p>

      <h2>Movie Night Mode</h2>
      <p>
        Movie Night is the primary multiplayer mode in Directive 8020. Up to 5
        players each choose one of the 5 playable characters. When your character
        appears on screen, the controller passes to you. This creates a
        &ldquo;pass the controller&rdquo; experience perfect for couch co-op
        sessions.
      </p>
      <div className="rounded-lg border border-white/5 bg-surface p-5 my-4">
        <h3 className="font-serif text-base font-semibold text-white mb-3">
          How to Set Up Movie Night
        </h3>
        <ol className="text-sm text-zinc-400 space-y-2 list-decimal pl-4">
          <li>From the main menu, select <strong className="text-white">Movie Night</strong></li>
          <li>Each player selects their character from the 5 available protagonists</li>
          <li>Players enter their name (displayed when it&apos;s their turn)</li>
          <li>Start the game &mdash; the controller automatically passes to whoever&apos;s character is on screen</li>
          <li>At the end of each chapter, a results screen shows who survived and who died</li>
        </ol>
      </div>

      <h2>Online Co-Op (Post-Launch Update)</h2>
      <p>
        For the first time in the Dark Pictures Anthology, Directive 8020
        supports online co-op. This was added as a <strong>free post-launch
        update</strong> on all platforms (PS5, Xbox Series X|S, and PC).
      </p>
      <p>
        Online co-op works through the Movie Night mode. You can invite friends
        to join your session online, and the game handles controller passing
        seamlessly. Players can also <strong>mix couch and online players</strong> &mdash;
        for example, 2 players on the same couch and 3 online friends.
      </p>
      <div className="tip-box">
        <p className="text-emerald-400 text-sm font-semibold mb-1">Pro Tip</p>
        <p className="text-sm text-zinc-400">
          Online co-op requires all players to own the game. The host starts the
          Movie Night session and invites friends. Voice chat is recommended for
          the best experience &mdash; discussing choices with friends is half the
          fun.
        </p>
      </div>

      <h2>What Replaced Shared Story?</h2>
      <p>
        Previous Dark Pictures games featured <strong>Shared Story</strong> &mdash;
        a 2-player online mode where each player experienced different perspectives
        of the same scene simultaneously. This mode, along with <strong>Curator&apos;s
        Cut</strong> (alternate character perspectives), has been removed from
        Directive 8020.
      </p>
      <p>
        The online Movie Night mode replaces both of these. While it supports
        more players (up to 5 vs. 2), it is a fundamentally different experience &mdash;
        players take turns rather than playing simultaneously. This change was
        controversial among fans, with many expressing disappointment on Reddit
        and forums.
      </p>

      <div className="rounded-lg border border-d8020/20 bg-d8020/5 p-5 my-6">
        <h3 className="font-serif text-base font-semibold text-white mb-2">
          Community Reaction
        </h3>
        <p className="text-sm text-zinc-400">
          Many fans on r/DarkPicturesAnthology expressed frustration about the
          removal of Shared Story. The simultaneous dual-perspective experience
          was unique to the series. However, others appreciate that online Movie
          Night allows larger groups to play together. The developers have not
          confirmed whether Shared Story will return in future games.
        </p>
      </div>

      <h2>Single Player vs. Multiplayer</h2>
      <p>
        Directive 8020 is fully playable solo. In single player, you control all
        5 characters as their scenes come up. The game is designed to work equally
        well solo or with friends. Some players prefer solo for the immersive
        horror experience, while others enjoy the social aspect of Movie Night.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="border-b border-white/10 text-left">
              <th className="py-2 pr-3 text-zinc-300 font-semibold">Feature</th>
              <th className="py-2 pr-3 text-zinc-300 font-semibold">Single Player</th>
              <th className="py-2 text-zinc-300 font-semibold">Movie Night (Co-Op)</th>
            </tr>
          </thead>
          <tbody className="text-zinc-400">
            {[
              ['Players', '1', 'Up to 5'],
              ['Controller Passing', 'N/A', 'Automatic'],
              ['Online Support', 'N/A', 'Yes (post-launch)'],
              ['Couch Co-Op', 'N/A', 'Yes'],
              ['Mixed Local + Online', 'N/A', 'Yes'],
              ['Turning Points', 'Yes', 'Yes'],
              ['Survivor Mode', 'Yes', 'Yes'],
              ['Story Differences', 'None', 'None'],
            ].map(([feature, solo, coop], i) => (
              <tr key={i} className="border-b border-white/5">
                <td className="py-2 pr-3 text-white font-medium">{feature}</td>
                <td className="py-2 pr-3">{solo}</td>
                <td className="py-2">{coop}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Difficulty and Multiplayer</h2>
      <p>
        All difficulty settings work in multiplayer. The host selects the
        difficulty before starting. In <strong>Survivor Mode</strong>, Turning
        Points are disabled for all players &mdash; meaning every choice is
        permanent, which adds tension to group decision-making. This is
        particularly fun (and stressful) with friends.
      </p>

      <div className="mt-8 rounded-lg border border-white/5 bg-surface p-5">
        <h3 className="font-serif text-lg font-semibold text-white mb-3">
          Related Guides
        </h3>
        <div className="space-y-2 text-sm">
          <a href="/difficulty-guide/" className="block text-d8020 hover:underline">
            Difficulty Guide &amp; Turning Points &rarr;
          </a>
          <a href="/characters/" className="block text-d8020 hover:underline">
            All Characters &amp; Cast &rarr;
          </a>
          <a href="/save-everyone/" className="block text-d8020 hover:underline">
            How to Save Everyone &rarr;
          </a>
        </div>
      </div>

      <FaqSection items={faqs} />
    </article>
  );
}
