import React from 'react';

export default function About({ onContact }) {
  return (
    <div>
      {/* Hero */}
      <div className="ml-shell">
        <div className="ml-about-hero">
          <p className="ml-about-hero__eyebrow">Our story</p>
          <h1 className="ml-about-hero__heading">
            A living tradition.<br />
            <em>Brought to the world.</em>
          </h1>
          <p className="ml-about-hero__body">
            Massoum Loom was founded to share the extraordinary craft of the Jowzjan
            weavers with a global audience. Each rug in our collection is sourced directly
            from master artisans in northern Afghanistan, where hand-knotting has been
            practised for generations.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="ml-about-specs">
        <div className="ml-about-specs__inner">
          {[
            ['80–120', 'Knots per sq. inch'],
            ['100%', 'Natural wool pile'],
            ['73+', 'Unique pieces'],
            ['∞', 'Worldwide delivery'],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="ml-stat__number">{n}</p>
              <p className="ml-stat__label">{l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      {/* Craftsman band */}
      <div style={{ overflow: 'hidden', maxHeight: '60vh' }}>
        <img
          src="assets/hero copy.jpg"
          alt="Master weaver at the loom"
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
        />
      </div>

      <div className="ml-shell">
        <div className="ml-about-content">
          <div className="ml-about-content__image">
            <img
              src="assets/Cotswold Home After copy.jpg"
              alt="Massoum Loom rug in a Cotswold home"
              loading="lazy"
            />
          </div>

          <div className="ml-about-content__text">
            <h2>Rooted in Jowzjan</h2>
            <p>
              The Jowzjan province of northern Afghanistan has produced some of the world's
              finest hand-knotted rugs for centuries. Its weavers work on traditional
              vertical looms, using the asymmetric Persian knot and natural wool dyed with
              plant-based pigments.
            </p>

            <h2>The craft</h2>
            <p>
              Each rug in our collection is knotted at 80–120 knots per square inch —
              a density that creates both remarkable detail and exceptional durability.
              At this count, a single square metre requires upwards of 800,000 individual
              hand-tied knots.
            </p>

            <h2>Sourced directly</h2>
            <p>
              We work directly with weavers and their families, ensuring fair prices and
              complete traceability from loom to home. Every piece comes with its full
              provenance — origin, dimensions, palette, and the motifs woven into its field.
            </p>

            <h2>Two collections</h2>
            <p>
              Our Heritage collection celebrates the classic Jowzjan vocabulary — rich
              jewel-toned fields, medallion compositions, and all-over arabesque patterns.
              The Modern collection applies the same mastery to quieter palettes and more
              contemporary scales, making these extraordinary objects accessible to a
              wider range of interiors.
            </p>

            <button className="ml-btn ml-btn--primary" onClick={onContact}>
              Get in touch →
            </button>
          </div>
        </div>

        {/* Studio */}
        <div style={{ borderTop: '1px solid var(--ml-border)', paddingTop: '3rem', paddingBottom: '4rem' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ml-accent)', marginBottom: '1.25rem' }}>
            Studio & showroom
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {[
              { label: 'Address', value: 'Unit B2, 1 Chandos Road\nLondon, NW10 6NF' },
              { label: 'Phone', value: '020 8191 7488', href: 'tel:02081917488' },
              { label: 'Sister business', value: 'Carpets Clinic\nRug cleaning & repair', href: 'https://www.carpetsclinic.co.uk' },
              { label: 'Instagram', value: '@massouloom', href: 'https://www.instagram.com/massouloom' },
            ].map(item => (
              <div key={item.label}>
                <p style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ml-text-mid)', marginBottom: '0.5rem' }}>{item.label}</p>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.125rem', whiteSpace: 'pre-line', lineHeight: 1.5 }}>
                    {item.value}
                  </a>
                ) : (
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.125rem', whiteSpace: 'pre-line', lineHeight: 1.5 }}>{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
