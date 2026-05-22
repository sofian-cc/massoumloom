import React from 'react';

const SIZES = [
  { label: 'Small', dims: 'Up to 120 × 80 cm', rooms: 'Hallway, bathroom, beside a bed', tip: 'Ideal as an accent piece. Sits under a coffee table with legs off the rug.' },
  { label: 'Medium', dims: '160 × 230 cm', rooms: 'Living room (small), bedroom', tip: 'The most popular size. Front legs of the sofa sit on the rug — anchors the seating group.' },
  { label: 'Large', dims: '230 × 300 cm', rooms: 'Living room (medium), dining room', tip: 'All four legs of the sofa on the rug. In dining rooms, allows chairs to stay on the rug when pulled out.' },
  { label: 'Oversize', dims: '300 × 400 cm +', rooms: 'Open-plan living, large dining, reception', tip: 'Defines an entire zone within a large room. Often the single most impactful design decision in the space.' },
];

const RULES = [
  { heading: 'Living room', body: 'For a sofa-and-chairs arrangement, aim for all front legs on the rug, or all four legs on the rug. The rug should extend at least 30–45 cm beyond the sofa on each side.' },
  { heading: 'Dining room', body: 'The rug should be large enough that chairs remain on it when pulled out. Add at least 60 cm to the table length and width — so a 180 × 90 cm table needs a 300 × 210 cm rug.' },
  { heading: 'Bedroom', body: 'A rug that extends 45–60 cm on three sides of the bed (both sides and the foot) creates a warm, grounded feel. For a king bed, this means at least 240 × 300 cm.' },
  { heading: 'Hallway', body: 'Runner proportions: typically 60–90 cm wide and as long as the hall allows. Leave 10–15 cm of floor visible on each side.' },
];

export default function SizeGuide({ onContact }) {
  return (
    <div style={{ maxWidth: 'var(--ml-shell)', margin: '0 auto', padding: 'clamp(4rem, 8vw, 8rem) var(--ml-px)' }}>

      {/* Header */}
      <p style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ml-text-mid)', marginBottom: '1rem' }}>Guidance</p>
      <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, lineHeight: 1.1, marginBottom: '1rem' }}>
        Choosing the right size
      </h1>
      <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: 'var(--ml-text-mid)', maxWidth: '58ch', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        The most common mistake when buying a rug is choosing one that is too small. A rug that is the right size anchors a room; one that is too small makes it feel unfinished.
      </p>

      {/* Size table */}
      <div style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1.5fr 2fr', borderBottom: '1px solid var(--ml-border)', paddingBottom: '0.75rem', marginBottom: '0.5rem' }}>
          {['Size', 'Dimensions', 'Best for', 'Styling rule'].map(h => (
            <p key={h} style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ml-text-mid)' }}>{h}</p>
          ))}
        </div>
        {SIZES.map(s => (
          <div key={s.label} style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1.5fr 2fr', padding: '1.25rem 0', borderBottom: '1px solid var(--ml-border)' }}>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.125rem', fontWeight: 400 }}>{s.label}</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--ml-text)' }}>{s.dims}</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--ml-text-mid)' }}>{s.rooms}</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--ml-text-mid)', lineHeight: 1.65 }}>{s.tip}</p>
          </div>
        ))}
      </div>

      {/* Room-by-room */}
      <p style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ml-text-mid)', marginBottom: '1.25rem' }}>Room by room</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 34ch), 1fr))', gap: '2.5rem', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        {RULES.map(r => (
          <div key={r.heading} style={{ borderTop: '1px solid var(--ml-border)', paddingTop: '1.5rem' }}>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.75rem' }}>{r.heading}</h2>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--ml-text-mid)' }}>{r.body}</p>
          </div>
        ))}
      </div>

      {/* Not sure? CTA */}
      <div style={{ background: 'var(--ml-bg-alt)', padding: '2.5rem', borderRadius: '2px' }}>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.75rem', fontWeight: 300, marginBottom: '0.75rem' }}>Not sure which size is right for your room?</h2>
        <p style={{ fontSize: '0.9375rem', color: 'var(--ml-text-mid)', lineHeight: 1.75, marginBottom: '1.5rem', maxWidth: '52ch' }}>
          Send us your room dimensions and we will advise on the best size and proportion for your space. We respond within 48 hours.
        </p>
        <button className="ml-btn ml-btn--primary" onClick={onContact}>Ask us →</button>
      </div>

    </div>
  );
}
