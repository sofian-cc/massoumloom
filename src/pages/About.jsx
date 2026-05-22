import React from 'react';

export default function About({ onContact }) {
  return (
    <>

      {/* ── Section 1: Hero split ── */}
      <section className="ml-about-hero" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '100svh', width: '100%' }}>
        <div style={{ overflow: 'hidden', background: '#E8E6E0' }}>
          <img
            src="assets/hero copy.jpg"
            alt="Master weaver at the loom"
            loading="eager"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', display: 'block' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(3rem, 7vw, 8rem) clamp(2.5rem, 5vw, 6rem)' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ml-text-mid)', marginBottom: '1.75rem' }}>Our story</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.25rem, 3.5vw, 3.5rem)', fontWeight: 300, lineHeight: 1.15, marginBottom: '2rem' }}>
            From the looms of<br />
            <em>Central Asia to the<br />floors of London.</em>
          </h1>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: 'var(--ml-text-mid)', marginBottom: '1.25rem', maxWidth: '46ch' }}>
            Massoum Loom was built on a lifetime of craft. A tradition carried across continents, refined through decades of dedication, and made new for the homes of today.
          </p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: 'var(--ml-text-mid)', maxWidth: '46ch' }}>
            Massoum learned to weave as a young man in Central Asia, absorbing a centuries-old tradition through his hands before he ever thought to name it a career. When he arrived in London in the early 2000s, weaving was the one thing he could bring with him that no border could take away.
          </p>
        </div>
      </section>

      {/* ── Section 2: What we believe ── */}
      <section style={{ background: 'var(--ml-bg-alt)', padding: 'clamp(4rem, 8vw, 8rem) var(--ml-px)' }}>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          What we believe
        </h2>
        <div className="ml-about-beliefs" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem', maxWidth: 'var(--ml-shell)', margin: '0 auto' }}>
          {[
            {
              heading: 'Rooted in tradition',
              body: 'Every design draws on Central Asian weaving heritage, passed down through lived practice across generations.',
            },
            {
              heading: 'Made for modern homes',
              body: 'Reinterpreted for contemporary interiors. The patterns updated, the palettes considered, the proportions right.',
            },
            {
              heading: 'Built from the floor',
              body: 'A rug that earns its place as the starting point for every room. Not the last thing you choose, but the first.',
            },
          ].map(v => (
            <div key={v.heading}>
              <div style={{ width: '2rem', height: '1px', background: 'var(--ml-text-mid)', marginBottom: '1.5rem', opacity: 0.4 }} />
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.75rem' }}>{v.heading}</h3>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--ml-text-mid)' }}>{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 3: The Craft ── */}
      <section style={{ background: 'var(--ml-white)', padding: 'clamp(4rem, 8vw, 8rem) var(--ml-px)' }}>
        <div className="ml-about-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'clamp(3rem, 6vw, 8rem)', maxWidth: 'var(--ml-shell)', margin: '0 auto', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ml-text-mid)', marginBottom: '1.5rem' }}>The craft</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 300, lineHeight: 1.2 }}>
              Heritage designs,<br /><em>made for now.</em>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: 'var(--ml-text-mid)' }}>
              Over the years, Massoum's eye deepened. He developed a passion not just for restoration, but for the patterns themselves: the geometry, the colour, the cultural memory embedded in Central Asian rug-making traditions that stretch back centuries.
            </p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: 'var(--ml-text-mid)' }}>
              Massoum Loom is the result: a collection of rugs that honour the original designs of his homeland whilst speaking the visual language of contemporary living. The colours have been interpreted for modern palettes. The formats suit the way people live now. But the soul of the work, the care, the craft, the eye, remains exactly what it always was.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 4: Philosophy ── */}
      <section style={{ background: 'var(--ml-bg-dark)', color: 'var(--ml-white)', padding: 'clamp(4rem, 8vw, 8rem) var(--ml-px)' }}>
        <div className="ml-about-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'clamp(3rem, 6vw, 8rem)', maxWidth: 'var(--ml-shell)', margin: '0 auto', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem' }}>The philosophy</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.2, color: 'var(--ml-white)' }}>
              "Design from<br />the ground up."
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)' }}>
              We believe a room is designed from the ground up. Not the walls, not the furniture, but the floor beneath it all. A rug is not a finishing touch. It is the foundation: the piece that anchors every other decision in the space.
            </p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)' }}>
              The right rug pulls a room together precisely because it carries so much within it: colour, texture, pattern, warmth. Our collection is designed with that in mind — a breadth of tones and designs wide enough to meet a room wherever it is, and bring it exactly where it needs to go.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 5: Process ── */}
      <section style={{ background: 'var(--ml-white)', padding: 'clamp(4rem, 8vw, 8rem) var(--ml-px)' }}>
        <div style={{ maxWidth: 'var(--ml-shell)', margin: '0 auto' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ml-text-mid)', marginBottom: '0.75rem' }}>Process</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, marginBottom: '2rem' }}>
            From cartoon to carpet
          </h2>
          <div className="ml-about-process" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', borderTop: '1px solid var(--ml-border)' }}>
            {[
              { num: '01', label: 'Design',    time: '2–4 weeks',   desc: 'Archival research and hand-drawn cartoon.' },
              { num: '02', label: 'Dyeing',    time: '2–3 weeks',   desc: 'Natural pigments mordanted onto hand-spun wool.' },
              { num: '03', label: 'Weaving',   time: '4–8 months',  desc: 'Knotted row by row on a vertical loom.' },
              { num: '04', label: 'Finishing', time: '3–4 weeks',   desc: 'Washing, stretching, trimming, and inspection.' },
              { num: '05', label: 'Delivery',  time: '1–2 weeks',   desc: 'White-glove delivery to your door, worldwide.' },
            ].map((step, i) => (
              <div key={step.num} style={{ padding: '2.5rem 1.5rem 2.5rem 0', borderRight: i < 4 ? '1px solid var(--ml-border)' : 'none', paddingRight: i < 4 ? '1.5rem' : 0 }}>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', fontWeight: 300, color: 'var(--ml-border)', lineHeight: 1, marginBottom: '2.5rem' }}>{step.num}</p>
                <p style={{ fontSize: '0.9375rem', fontWeight: 500, marginBottom: '0.4rem' }}>{step.label}</p>
                <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ml-accent-2)', marginBottom: '0.75rem' }}>{step.time}</p>
                <p style={{ fontSize: '0.8125rem', lineHeight: 1.65, color: 'var(--ml-text-mid)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
