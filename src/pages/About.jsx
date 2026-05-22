import React from 'react';

const serif = 'Cormorant Garamond, serif';

export default function About({ onContact }) {
  return (
    <div style={{ width: '100%' }}>

      {/* ── 1. Hero ── */}
      <div className="ml-about-hero-grid">

        {/* Image */}
        <div style={{ position: 'relative', overflow: 'hidden', background: '#E8E6E0', minHeight: '50vmin' }}>
          <img
            src="assets/hero copy.jpg"
            alt="Master weaver at the loom"
            loading="eager"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }}
          />
        </div>

        {/* Text */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(3rem, 7vw, 8rem) clamp(2rem, 5vw, 6rem)', background: '#fff' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6B6B', marginBottom: '1.75rem' }}>Our story</p>
          <h1 style={{ fontFamily: serif, fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', fontWeight: 300, lineHeight: 1.15, marginBottom: '2rem', color: '#0C0C0C' }}>
            From the looms of<br />
            <em>Central Asia to the<br />floors of London.</em>
          </h1>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: '#6B6B6B', marginBottom: '1.25rem', maxWidth: '44ch' }}>
            Massoum Loom was built on a lifetime of craft. A tradition carried across continents, refined through decades of dedication, and made new for the homes of today.
          </p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: '#6B6B6B', maxWidth: '44ch' }}>
            Massoum learned to weave as a young man in Central Asia, absorbing a centuries-old tradition through his hands before he ever thought to name it a career. When he arrived in London in the early 2000s, weaving was the one thing he could bring with him that no border could take away.
          </p>
        </div>
      </div>

      {/* ── 2. What we believe ── */}
      <div style={{ background: '#F5F5F5', padding: 'clamp(3rem, 7vw, 7rem) clamp(1.25rem, 5vw, 4rem)' }}>
        <h2 style={{ fontFamily: serif, fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', fontWeight: 300, textAlign: 'center', marginBottom: 'clamp(2.5rem, 6vw, 5rem)', color: '#0C0C0C' }}>
          What we believe
        </h2>
        <div className="ml-about-beliefs-grid">
          {[
            { heading: 'Rooted in tradition',   body: 'Every design draws on Central Asian weaving heritage, passed down through lived practice across generations.' },
            { heading: 'Made for modern homes', body: 'Reinterpreted for contemporary interiors. The patterns updated, the palettes considered, the proportions right.' },
            { heading: 'Built from the floor',  body: 'A rug that earns its place as the starting point for every room. Not the last thing you choose, but the first.' },
          ].map(v => (
            <div key={v.heading}>
              <div style={{ width: '2rem', height: '1px', background: '#6B6B6B', marginBottom: '1.25rem', opacity: 0.4 }} />
              <h3 style={{ fontFamily: serif, fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.75rem', color: '#0C0C0C' }}>{v.heading}</h3>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.75, color: '#6B6B6B' }}>{v.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. The Craft ── */}
      <div style={{ background: '#fff', padding: 'clamp(3rem, 7vw, 7rem) clamp(1.25rem, 5vw, 4rem)' }}>
        <div className="ml-about-two-col">
          <div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6B6B', marginBottom: '1.25rem' }}>The craft</p>
            <h2 style={{ fontFamily: serif, fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 300, lineHeight: 1.2, color: '#0C0C0C' }}>
              Heritage designs,<br /><em>made for now.</em>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: '#6B6B6B' }}>
              Over the years, Massoum's eye deepened. He developed a passion not just for restoration, but for the patterns themselves: the geometry, the colour, the cultural memory embedded in Central Asian rug-making traditions that stretch back centuries.
            </p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: '#6B6B6B' }}>
              Massoum Loom is the result: a collection of rugs that honour the original designs of his homeland whilst speaking the visual language of contemporary living. The colours have been interpreted for modern palettes. The formats suit the way people live now. But the soul of the work — the care, the craft, the eye — remains exactly what it always was.
            </p>
          </div>
        </div>
      </div>

      {/* ── 4. Philosophy ── */}
      <div style={{ background: '#0C0C0C', padding: 'clamp(3rem, 7vw, 7rem) clamp(1.25rem, 5vw, 4rem)' }}>
        <div className="ml-about-two-col">
          <div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '1.25rem' }}>The philosophy</p>
            <h2 style={{ fontFamily: serif, fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.2, color: '#fff' }}>
              "Design from<br />the ground up."
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)' }}>
              We believe a room is designed from the ground up. Not the walls, not the furniture, but the floor beneath it all. A rug is not a finishing touch. It is the foundation: the piece that anchors every other decision in the space.
            </p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)' }}>
              The right rug pulls a room together precisely because it carries so much within it: colour, texture, pattern, warmth. Our collection is designed with that in mind.
            </p>
          </div>
        </div>
      </div>

      {/* ── 5. Process ── */}
      <div style={{ background: '#fff', padding: 'clamp(3rem, 7vw, 7rem) clamp(1.25rem, 5vw, 4rem)' }}>
        <div style={{ maxWidth: '90rem', margin: '0 auto' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6B6B', marginBottom: '0.75rem' }}>Process</p>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', fontWeight: 300, marginBottom: '2.5rem', color: '#0C0C0C' }}>
            From cartoon to carpet
          </h2>
          <div className="ml-about-process-grid">
            {[
              { num: '01', label: 'Design',    time: '2–4 weeks',  desc: 'Archival research and hand-drawn cartoon.' },
              { num: '02', label: 'Dyeing',    time: '2–3 weeks',  desc: 'Natural pigments mordanted onto hand-spun wool.' },
              { num: '03', label: 'Weaving',   time: '4–8 months', desc: 'Knotted row by row on a vertical loom.' },
              { num: '04', label: 'Finishing', time: '3–4 weeks',  desc: 'Washing, stretching, trimming, and inspection.' },
              { num: '05', label: 'Delivery',  time: '1–2 weeks',  desc: 'White-glove delivery to your door.' },
            ].map((step, i) => (
              <div key={step.num} className={`ml-about-process-step${i < 4 ? ' ml-about-process-step--border' : ''}`}>
                <p style={{ fontFamily: serif, fontSize: '2.5rem', fontWeight: 300, color: '#E8E8E8', lineHeight: 1, marginBottom: '2rem' }}>{step.num}</p>
                <p style={{ fontSize: '0.9375rem', fontWeight: 500, marginBottom: '0.4rem', color: '#0C0C0C' }}>{step.label}</p>
                <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#444', marginBottom: '0.6rem' }}>{step.time}</p>
                <p style={{ fontSize: '0.8125rem', lineHeight: 1.65, color: '#6B6B6B' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 6. CTA ── */}
      <div style={{ background: '#F5F5F5', padding: 'clamp(3rem, 7vw, 6rem) clamp(1.25rem, 5vw, 4rem)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: serif, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, marginBottom: '1rem', color: '#0C0C0C' }}>
          Interested in a piece?
        </h2>
        <p style={{ fontSize: '0.9375rem', color: '#6B6B6B', lineHeight: 1.75, maxWidth: '46ch', margin: '0 auto 2rem' }}>
          Every rug in our collection is available to enquire about. We respond to all messages within 48 hours.
        </p>
        <button className="ml-btn ml-btn--primary" onClick={onContact}>Get in touch →</button>
      </div>

    </div>
  );
}
