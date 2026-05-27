import React, { useState } from 'react';
import useSEO from '../useSEO.js';

const ARTICLES = [
  {
    slug: 'how-to-choose-a-rug',
    eyebrow: 'Buying guide',
    title: 'How to choose a rug: the questions to ask before you buy',
    date: 'May 2025',
    readTime: '5 min read',
    intro: 'A rug is one of the most permanent purchases you will make for a room. Unlike a cushion or a lamp, it defines the space rather than decorating it. These are the questions worth asking before you commit.',
    sections: [
      {
        heading: 'What is it made of?',
        body: `The pile material is the single most important quality indicator. Wool is the gold standard for hand-knotted rugs: it is resilient, naturally soil-resistant, and ages beautifully. A high-quality hand-spun wool pile develops a lustrous patina over decades of use that machine-made synthetics simply cannot replicate.\n\nSilk adds sheen and allows for extremely fine knotting, but is better suited to low-traffic areas or hanging display. Avoid synthetic pile in any piece described as "hand-knotted" — the combination suggests corners have been cut elsewhere in production too.`,
      },
      {
        heading: 'What is the knot density?',
        body: `Knot density — measured in knots per square inch (KPSI) or knots per square metre — tells you how fine and detailed the weave is. At 80–120 KPSI, a rug has enough density to hold intricate motifs and will wear well for generations. At 200 KPSI and above, you are entering the territory of very fine Persian city rugs.\n\nA higher knot count is not always better: tribal and village rugs with lower density have their own character and often more expressive design. What matters is that the density is appropriate to the design and consistent across the rug.`,
      },
      {
        heading: 'How are the dyes made?',
        body: `Natural dyes — derived from plants, minerals, and insects — produce the muted, complex colours that mature and mellow beautifully with age. Synthetic dyes, introduced in the late 19th century, can appear bright but often fade unevenly and lack the depth of natural alternatives.\n\nAt Massoum Loom, all our rugs use vegetable-derived dyes mordanted onto hand-spun wool — the same process used for centuries in Central Asian weaving traditions.`,
      },
      {
        heading: 'How old is the design?',
        body: `The designs used in traditional rug-weaving are centuries old and carry specific cultural meanings. Medallion formats draw on Persian architectural traditions. Boteh motifs (the origin of paisley) appear across Khorasan and Kashmir weaving. Arabesque and Shah Abbasi patterns reference Safavid court art.\n\nUnderstanding the origin of a design is part of understanding the rug. Ask the seller about the provenance of the pattern, not just the physical object.`,
      },
    ],
  },
  {
    slug: 'rug-care-guide',
    eyebrow: 'Care',
    title: 'The complete guide to caring for a hand-knotted rug',
    date: 'March 2025',
    readTime: '4 min read',
    intro: 'A hand-knotted wool rug at 80–120 KPSI can last a century with proper care. The good news: that care is simpler than most people assume.',
    sections: [
      {
        heading: 'Day-to-day maintenance',
        body: `Vacuum regularly — once or twice a week in high-traffic areas, less frequently elsewhere. Always vacuum in the direction of the pile, using a suction-only head or the lowest beater bar setting. Never vacuum the fringe directly; use a soft brush attachment instead, working gently from the rug outward.\n\nRotate your rug every six to twelve months to ensure even wear, particularly if one area receives more sunlight or foot traffic than another.`,
      },
      {
        heading: 'Dealing with spills',
        body: `Act immediately. Blot (do not rub) with a clean, dry white cloth, working from the outside of the spill inward to prevent spreading. For liquid spills, absorb as much as possible before applying any cleaning agent.\n\nFor most spills, cold water applied sparingly and blotted dry is sufficient. Avoid hot water, which can set stains and shrink wool fibres. For wine or oil-based spills, a small amount of mild dish soap diluted in cold water can help — but test on an inconspicuous corner first and rinse thoroughly.`,
      },
      {
        heading: 'Professional cleaning',
        body: `We recommend professional hand-washing every three to five years, depending on use. Avoid dry-cleaning, which can damage wool fibres and dyes. Avoid machine-washing entirely.\n\nOur sister business Carpets Clinic, based in the same London studio, specialises in the hand-washing and restoration of antique and hand-knotted rugs. They understand the specific requirements of natural wool pile and vegetable-dyed fibres.`,
      },
      {
        heading: 'Underlay and pad',
        body: `Always use a quality rug pad. A good pad prevents slipping, protects the pile from abrasion against the floor, and allows air circulation beneath the rug — which prevents mould in humid environments. Natural felt pads are best for hard floors; felt-and-rubber combinations work well on carpet.\n\nChange your pad when it starts to thin or break down — a worn pad does more harm than no pad at all.`,
      },
    ],
  },
  {
    slug: 'why-hand-knotted',
    eyebrow: 'The craft',
    title: 'Why a hand-knotted rug is the most sustainable thing in your home',
    date: 'January 2025',
    readTime: '4 min read',
    intro: 'Sustainability in interiors is often talked about in terms of recycled materials and low-VOC paints. But the most genuinely sustainable object you can put in a room is one that lasts long enough to outlive the conversation.',
    sections: [
      {
        heading: 'Built for centuries, not seasons',
        body: `The oldest surviving hand-knotted rugs are over 2,500 years old. The Pazyryk carpet, discovered in a Siberian burial mound and dating to the 5th century BC, retains its pile, colour, and design with extraordinary fidelity.\n\nA modern machine-made rug, by contrast, is typically designed with a ten-to-fifteen year lifespan. At 80–120 KPSI with natural wool pile, a hand-knotted rug is not a purchase — it is a generational asset.`,
      },
      {
        heading: 'Natural materials, closed loop',
        body: `Wool is a renewable fibre shorn annually from living animals. Vegetable dyes are derived from plants — madder root for red, indigo for blue, pomegranate for gold — and biodegrade at end of life without releasing synthetic chemistry into the soil.\n\nAt end of life (which for a well-maintained hand-knotted rug means after 100 years of use), the natural wool pile composts. No microplastics. No synthetic polymer residue.`,
      },
      {
        heading: 'The economics of craft',
        body: `A 200 × 300 cm rug at 80–120 KPSI contains approximately 4.8 million individual hand-tied knots. At a skilled weaver's pace of around 8,000–10,000 knots per day, that represents six to eight months of continuous work by one person.\n\nThe price of a hand-knotted rug reflects that labour honestly. It is not a luxury premium — it is an accurate accounting of the human time embedded in the object.`,
      },
      {
        heading: 'Slow design',
        body: `There is a growing movement in interiors toward what might be called slow design: objects chosen once, carefully, and kept for life. A hand-knotted rug is the exemplar of this approach.\n\nBuying one means opting out of the replacement cycle entirely. It means choosing something that improves — that develops character, patina, and meaning — rather than something that simply wears out. That is the most sustainable choice available.`,
      },
    ],
  },
];

function ArticleList({ onArticle }) {
  useSEO({
    title: 'Journal — Massoum Loom | Notes on Rugs & Interiors',
    description: 'Buying guides, care advice, and perspectives on hand-knotted rugs and Central Asian craft from the Massoum Loom studio.',
    path: '/journal',
  });
  return (
    <div style={{ maxWidth: 'var(--ml-shell)', margin: '0 auto', padding: 'clamp(4rem, 8vw, 8rem) var(--ml-px)' }}>
      <p style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ml-text-mid)', marginBottom: '1rem' }}>Journal</p>
      <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, lineHeight: 1.1, marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        Notes on rugs &amp; interiors
      </h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {ARTICLES.map((a, i) => (
          <button
            key={a.slug}
            onClick={() => onArticle(a.slug)}
            style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'start', padding: '2rem 0', borderTop: '1px solid var(--ml-border)', textAlign: 'left', background: 'none', border: 'none', borderTop: '1px solid var(--ml-border)', cursor: 'pointer', width: '100%' }}
          >
            <div>
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ml-text-mid)', marginBottom: '0.6rem' }}>{a.eyebrow} · {a.date}</p>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 300, lineHeight: 1.25, marginBottom: '0.75rem', color: 'var(--ml-text)' }}>{a.title}</h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--ml-text-mid)', lineHeight: 1.7, maxWidth: '60ch' }}>{a.intro}</p>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--ml-text-mid)', whiteSpace: 'nowrap', marginTop: '0.25rem' }}>{a.readTime}</p>
          </button>
        ))}
        <div style={{ borderTop: '1px solid var(--ml-border)' }} />
      </div>
    </div>
  );
}

function ArticleView({ slug, onBack }) {
  const article = ARTICLES.find(a => a.slug === slug);
  useSEO(article ? {
    title: `${article.title} — Massoum Loom Journal`,
    description: article.intro,
    path: `/journal/${article.slug}`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': article.title,
      'description': article.intro,
      'author': { '@type': 'Organization', 'name': 'Massoum Loom', 'url': 'https://massoumloom.co.uk' },
      'publisher': { '@type': 'Organization', 'name': 'Massoum Loom', 'url': 'https://massoumloom.co.uk' },
      'datePublished': article.date,
      'mainEntityOfPage': { '@type': 'WebPage', '@id': `https://massoumloom.co.uk/journal/${article.slug}` },
    },
  } : { title: 'Journal — Massoum Loom', description: '', path: '/journal' });
  if (!article) return null;

  return (
    <div style={{ maxWidth: '72ch', margin: '0 auto', padding: 'clamp(4rem, 8vw, 8rem) var(--ml-px)' }}>
      <button onClick={onBack} style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ml-text-mid)', marginBottom: '2.5rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
        ← Journal
      </button>
      <p style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ml-text-mid)', marginBottom: '0.75rem' }}>{article.eyebrow} · {article.date} · {article.readTime}</p>
      <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, marginBottom: '2rem' }}>{article.title}</h1>
      <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: 'var(--ml-text-mid)', marginBottom: '2.5rem', fontStyle: 'italic' }}>{article.intro}</p>
      <hr style={{ border: 'none', borderTop: '1px solid var(--ml-border)', marginBottom: '2.5rem' }} />
      {article.sections.map(s => (
        <div key={s.heading} style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.375rem', fontWeight: 400, marginBottom: '0.875rem' }}>{s.heading}</h2>
          {s.body.split('\n\n').map((para, i) => (
            <p key={i} style={{ fontSize: '0.9375rem', lineHeight: 1.85, color: 'var(--ml-text-mid)', marginBottom: '1rem' }}>{para}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Journal() {
  const [article, setArticle] = useState(null);
  return article
    ? <ArticleView slug={article} onBack={() => setArticle(null)} />
    : <ArticleList onArticle={setArticle} />;
}
