import React from 'react';
import { getFeatured } from '../data/products.js';

function ProductCard({ product, onClick }) {
  const w = product.width;
  const l = product.length;
  const sizeStr = `${Math.max(w, l)} × ${Math.min(w, l)} cm`;

  return (
    <article className="ml-card" onClick={() => onClick(product.handle)} role="button" tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick(product.handle)}
      aria-label={`View ${product.title}`}
    >
      <div className="ml-card__image-wrap">
        <img
          src={product.image}
          alt={`${product.title} — ${product.fieldColour} ${product.collection} rug`}
          loading="lazy"
          width="400"
          height="533"
        />
      </div>
      <div className="ml-card__info">
        <p className="ml-card__title">{product.title}</p>
        <p className="ml-card__sub">{product.fieldColour} · {product.collection === 'heritage' ? 'Heritage' : 'Modern'}</p>
        <p className="ml-card__size">{sizeStr}</p>
        <span className="ml-card__cta">View piece →</span>
      </div>
    </article>
  );
}

export default function Home({ onCollection, onProduct }) {
  const featured = getFeatured(6);

  return (
    <>
      <a className="ml-skip-link" href="#MainContent">Skip to content</a>

      {/* ── Hero ── */}
      <section className="ml-hero" aria-label="Hero">
        <div className="ml-hero__image-col">
          <img
            src="assets/hero copy.jpg"
            alt="Master weaver at the loom — Massoum Loom"
            loading="eager"
            width="900"
            height="1200"
          />
        </div>
        <div className="ml-hero__content">
          <p className="ml-hero__eyebrow">Afghanistan · Jowzjan Province</p>
          <h1 className="ml-hero__heading">
            Handwoven<br />in <em>Afghanistan.</em><br />For the World.
          </h1>
          <p className="ml-hero__body">
            Each rug is hand-knotted by master weavers in the Jowzjan province of
            Afghanistan, using centuries-old techniques and natural wool dyes.
            No two pieces are alike.
          </p>
          <div className="ml-hero__actions">
            <button className="ml-btn ml-btn--primary" onClick={() => onCollection('heritage')}>
              Heritage Collection →
            </button>
            <button className="ml-btn ml-btn--outline" onClick={() => onCollection('modern')}>
              Modern Collection
            </button>
          </div>
        </div>
      </section>

      {/* ── Dark intro band ── */}
      <div className="ml-intro-band">
        <div className="ml-intro-band__inner">
          <div>
            <h2 className="ml-intro-band__heading">
              80–120 knots per square inch.<br />
              <em style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}>
                A lifetime of craft in every piece.
              </em>
            </h2>
            <p className="ml-intro-band__body">
              Our rugs are woven on traditional vertical looms by artisans whose families
              have practised this craft for generations. Pure wool pile, vegetable-derived
              dyes, asymmetric Persian knot — the same methods unchanged for centuries.
            </p>
            <button className="ml-btn ml-btn--outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }} onClick={() => onCollection('heritage')}>
              Explore Heritage →
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {[
              ['73', 'Pieces in the collection'],
              ['80–120', 'Knots per sq. inch'],
              ['100%', 'Natural wool pile'],
              ['∞', 'Worldwide delivery'],
            ].map(([n, l]) => (
              <div key={l}>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 300, color: '#fff', lineHeight: 1, marginBottom: '0.4rem' }}>{n}</p>
                <p style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Collections ── */}
      <section className="ml-section ml-shell" aria-label="Collections">
        <div className="ml-section__header">
          <h2 className="ml-section__title">The Collections</h2>
        </div>
        <div className="ml-collection-bands">
          {[
            {
              slug: 'heritage',
              label: 'Collection I',
              title: 'Heritage',
              body: 'Classic Jowzjan compositions — medallions, Shah Abbasi, and all-over arabesque patterns in jewel-toned fields.',
              img: featured.find(p => p.collection === 'heritage')?.image,
            },
            {
              slug: 'modern',
              label: 'Collection II',
              title: 'Modern',
              body: 'A contemporary sensibility applied to age-old technique — quieter palettes, bolder geometry, intimate scales.',
              img: featured.find(p => p.collection === 'modern')?.image,
            },
          ].map(col => (
            <div
              key={col.slug}
              className="ml-collection-band"
              onClick={() => onCollection(col.slug)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && onCollection(col.slug)}
              aria-label={`View ${col.title} collection`}
            >
              {col.img ? (
                <img src={col.img} alt={`${col.title} collection`} loading="lazy" />
              ) : (
                <div className="ml-hero__placeholder"><span className="ml-hero__placeholder-text">{col.title}</span></div>
              )}
              <div className="ml-collection-band__overlay">
                <p className="ml-collection-band__label">{col.label}</p>
                <h3 className="ml-collection-band__title">{col.title}</h3>
                <span className="ml-collection-band__cta">Browse {col.title} →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured pieces ── */}
      <section className="ml-section" style={{ background: '#fff', paddingInline: 0 }} aria-label="Featured pieces">
        <div className="ml-shell">
          <div className="ml-section__header">
            <h2 className="ml-section__title">Selected Pieces</h2>
            <button className="ml-section__link" onClick={() => onCollection('heritage')}>View all →</button>
          </div>
        </div>
        <div className="ml-grid ml-grid--3" style={{ paddingInline: 0 }}>
          {featured.slice(0, 6).map(p => (
            <ProductCard key={p.handle} product={p} onClick={onProduct} />
          ))}
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className="ml-section ml-shell" aria-label="Enquire">
        <div style={{ textAlign: 'center', maxWidth: '52ch', marginInline: 'auto' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ml-accent)', marginBottom: '1rem' }}>
            Bespoke & enquiries
          </p>
          <h2 className="ml-section__title" style={{ marginBottom: '1rem' }}>
            Every piece is available<br />to enquire about.
          </h2>
          <p style={{ color: 'var(--ml-text-mid)', lineHeight: 1.75, marginBottom: '2rem', fontSize: '0.9375rem' }}>
            We offer worldwide delivery and can arrange bespoke commissions.
            Reach us directly — we respond within 48 hours.
          </p>
          <button className="ml-btn ml-btn--primary" onClick={() => onCollection('heritage')} style={{ marginInline: 'auto' }}>
            View Full Collection →
          </button>
        </div>
      </section>
    </>
  );
}
