import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { FaqSection } from '@/components/faq-section';
import { ArticleSchema } from '@/components/article-schema';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Directive 8020 System Requirements - Can Your PC Run It?',
  description:
    'Complete system requirements for Directive 8020 on PC, PS5, and Xbox Series X|S. Minimum and recommended specs, VRAM needs, and optimization tips for smooth gameplay.',
  alternates: { canonical: 'https://directive8020.top/system-requirements' },
};

const faqs = [
  {
    question: 'Can I run Directive 8020 on a GTX 1060?',
    answer:
      'No. The GTX 1060 is below the minimum requirements. Directive 8020 requires at least an RTX 2060 or RX 5700 as a minimum GPU, along with 16GB RAM. The game uses Unreal Engine 5 features that need newer hardware.',
  },
  {
    question: 'Does Directive 8020 support ray tracing?',
    answer:
      'Directive 8020 supports ray-traced reflections and shadows on compatible hardware (RTX series, RX 6000+). This is optional and can be disabled for better performance.',
  },
  {
    question: 'How much VRAM does Directive 8020 need?',
    answer:
      'Minimum 4GB VRAM for 1080p Low. 8GB VRAM recommended for 1080p High / 1440p Medium. 12GB+ VRAM for 1440p Ultra or 4K.',
  },
  {
    question: 'Is Directive 8020 on PS4 or Xbox One?',
    answer:
      'No. Directive 8020 is a next-gen exclusive, available only on PS5, Xbox Series X|S, and PC. The game uses Unreal Engine 5 features that require newer hardware.',
  },
];

export default function SystemRequirementsPage() {
  return (
    <article className="prose-d8020">
      <ArticleSchema
        headline="Directive 8020 System Requirements"
        description="PC, PS5, and Xbox system requirements for Directive 8020."
        url="https://directive8020.top/system-requirements"
      />
      <Breadcrumb items={[{ label: 'System Requirements' }]} />
      <PageHero src="/steam-ss02.webp" alt="Directive 8020 astronaut viewing massive space structure - system requirements and PC specs" />

      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
        System Requirements
      </h1>
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
        Can your PC, PS5, or Xbox run Directive 8020? Here are the minimum and
        recommended specs, plus optimization tips for the best experience.
      </p>

      <h2>PC Requirements</h2>

      <h3>Minimum Specs (1080p, 30fps, Low)</h3>
      <div className="spec-grid">
        {[
          ['OS', 'Windows 10/11 64-bit'],
          ['CPU', 'Intel Core i5-8500 / AMD Ryzen 5 3500'],
          ['RAM', '16 GB'],
          ['GPU', 'NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700'],
          ['DirectX', 'Version 12'],
          ['Storage', '40 GB available space (SSD recommended)'],
          ['VRAM', '6 GB minimum'],
        ].map(([label, value], i) => (
          <div key={i} className="spec-row">
            <span className="spec-label">{label}</span>
            <span className="spec-value">{value}</span>
          </div>
        ))}
      </div>

      <h3>Recommended Specs (1080p, 60fps, High)</h3>
      <div className="spec-grid">
        {[
          ['OS', 'Windows 10/11 64-bit'],
          ['CPU', 'Intel Core i5-12400F / AMD Ryzen 5 5600X'],
          ['RAM', '16 GB'],
          ['GPU', 'NVIDIA GeForce RTX 3070 Ti / AMD Radeon RX 6800'],
          ['DirectX', 'Version 12'],
          ['Storage', '40 GB available space (SSD recommended)'],
          ['VRAM', '8 GB recommended'],
        ].map(([label, value], i) => (
          <div key={i} className="spec-row">
            <span className="spec-label">{label}</span>
            <span className="spec-value">{value}</span>
          </div>
        ))}
      </div>

      <h3>Ultra Specs (1440p/4K, 60fps, Ultra + Ray Tracing)</h3>
      <div className="spec-grid">
        {[
          ['OS', 'Windows 11 64-bit'],
          ['CPU', 'Intel Core i7-12700K / AMD Ryzen 7 5800X'],
          ['RAM', '32 GB'],
          ['GPU', 'NVIDIA RTX 4070 Ti / AMD RX 7800 XT'],
          ['DirectX', 'Version 12 Ultimate'],
          ['Storage', '40 GB NVMe SSD'],
          ['VRAM', '12 GB+ for 4K'],
        ].map(([label, value], i) => (
          <div key={i} className="spec-row">
            <span className="spec-label">{label}</span>
            <span className="spec-value">{value}</span>
          </div>
        ))}
      </div>

      <h2>Console Performance</h2>
      <div className="rounded-lg border border-white/5 bg-surface p-5 my-4">
        <div className="grid sm:grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-serif text-base font-semibold text-white mb-2">PlayStation 5</h3>
            <ul className="space-y-1 text-zinc-400">
              <li>&bull; Quality Mode: 4K / 30fps with ray tracing</li>
              <li>&bull; Performance Mode: 1440p upscaled / 60fps</li>
              <li>&bull; DualSense haptic feedback supported</li>
              <li>&bull; Tempest 3D Audio supported</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-base font-semibold text-white mb-2">Xbox Series X|S</h3>
            <ul className="space-y-1 text-zinc-400">
              <li>&bull; Series X: 4K / 30fps or 1440p / 60fps</li>
              <li>&bull; Series S: 1080p / 30fps</li>
              <li>&bull; Quick Resume supported</li>
              <li>&bull; Smart Delivery enabled</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>PC Optimization Tips</h2>
      <ul>
        <li>
          <strong>Install on SSD</strong> &mdash; The game streams textures heavily.
          HDD loading causes stuttering during scene transitions.
        </li>
        <li>
          <strong>Update GPU drivers</strong> &mdash; Day-1 driver updates from
          NVIDIA and AMD significantly improve performance in Unreal Engine 5 titles.
        </li>
        <li>
          <strong>Close background apps</strong> &mdash; Directive 8020 uses up to
          12GB RAM at high settings. Close browsers and other heavy applications.
        </li>
        <li>
          <strong>DLSS / FSR</strong> &mdash; If your GPU supports DLSS (NVIDIA)
          or FSR (AMD), enable it for a major performance boost with minimal
          visual loss.
        </li>
        <li>
          <strong>Lower shadow quality first</strong> &mdash; If you need to
          reduce settings, shadows have the biggest performance impact and are
          least noticeable during cinematic gameplay.
        </li>
      </ul>

      <div className="mt-8 rounded-lg border border-white/5 bg-surface p-5">
        <h3 className="font-serif text-lg font-semibold text-white mb-3">
          Having Technical Issues?
        </h3>
        <div className="space-y-2 text-sm">
          <a href="/crashing-fix" className="block text-d8020 hover:underline">
            Crashing, Black Screen &amp; Launch Fixes &rarr;
          </a>
        </div>
      </div>

      <FaqSection items={faqs} />
    </article>
  );
}

