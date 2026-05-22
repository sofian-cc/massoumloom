import React from 'react';
import { getFeatured, getImages } from '../data/products.js';

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
          src={getImages(product)[0]}
          alt={`${product.title}, ${product.fieldColour} ${product.collection} rug`}
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

export default function Home({ onCollection, onProduct, onAbout }) {
  const featured = getFeatured(6);

  return (
    <>
      <a className="ml-skip-link" href="#MainContent">Skip to content</a>

      {/* ── Hero ── */}
      <section className="ml-hero" aria-label="Hero">
        <div className="ml-hero__content">
          <p className="ml-hero__eyebrow">Handwoven · Central Asia</p>
          <h1 className="ml-hero__heading">
            The art of<br /><em>the loom,</em><br />reborn.
          </h1>
          <p className="ml-hero__body">
            Each Massoum Loom rug carries centuries of Central Asian tradition,
            reinterpreted for the modern interior.
          </p>
          <div className="ml-hero__actions">
            <button className="ml-btn ml-btn--primary" onClick={() => onCollection('heritage')}>
              Shop Collection
            </button>
            <button className="ml-btn ml-btn--outline" onClick={() => onAbout()}>
              Our Story
            </button>
          </div>
        </div>
        <div className="ml-hero__image-col">
          <img
            src="assets/belgravia-hero.png"
            alt="Massoum Loom rug in a Belgravia living room"
            loading="eager"
            width="1080"
            height="1080"
            style={{ objectPosition: 'center center' }}
          />
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="ml-marquee" aria-hidden="true">
        <div className="ml-marquee__track">
          {[0, 1].map(i => (
            <span key={i}>
              {[
                'Hand-knotted wool & silk',
                '180–260 KPSI',
                'Central Asian heritage',
                'Modern interpretation',
                'Made to order',
              ].map(text => (
                <span key={text} className="ml-marquee__item">
                  {text} <span className="ml-marquee__dot">·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

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
              dyes, asymmetric Persian knot, the same methods unchanged for centuries.
            </p>
            <button className="ml-btn ml-btn--outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }} onClick={() => onCollection('heritage')}>
              Explore Heritage →
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {[
              ['71', 'Pieces in the collection'],
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

      {/* ── Brand story strip ── */}
      <div className="ml-story">
        <div className="ml-story__inner">
          <div>
            <p className="ml-story__eyebrow">The making</p>
            <h2 className="ml-story__quote">"Each knot is a decision."</h2>
            <p className="ml-story__body">
              At 80–120 knots per square inch, a single square metre requires upwards of
              800,000 individual hand-tied knots. Our weavers spend months on a single
              piece, working from memory and pattern — no two rugs are ever identical.
            </p>
          </div>
          <div className="ml-story__image">
            <img
              src="assets/hero copy.jpg"
              alt="Master weaver at the loom"
              loading="lazy"
            />
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
              body: 'Classic compositions: medallions, Shah Abbasi, and all-over arabesque patterns in jewel-toned fields.',
              img: featured.find(p => p.collection === 'heritage')?.image,
            },
            {
              slug: 'modern',
              label: 'Collection II',
              title: 'Modern',
              body: 'A contemporary sensibility applied to age-old technique: quieter palettes, bolder geometry, intimate scales.',
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

      {/* ── Promise bar ── */}
      <div className="ml-promise">
        <div className="ml-promise__inner">
          {[
            { icon: '◈', label: 'Made to Order', desc: 'Every piece is unique and available to commission' },
            { icon: '◇', label: 'Free Delivery', desc: 'Complimentary worldwide delivery on all orders' },
            { icon: '◉', label: '10-Year Guarantee', desc: 'We stand behind every rug we sell' },
            { icon: '◎', label: 'Bespoke Service', desc: 'Custom sizes and colourways available' },
          ].map(item => (
            <div key={item.label} className="ml-promise__item">
              <p className="ml-promise__icon">{item.icon}</p>
              <p className="ml-promise__label">{item.label}</p>
              <p className="ml-promise__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Sister service strip ── */}
      <div className="ml-sister">
        <div className="ml-sister__inner">
          <div>
            <p className="ml-sister__eyebrow">Sister business</p>
            <h2 className="ml-sister__heading">Expert rug cleaning &amp; restoration</h2>
            <p className="ml-sister__body">
              Carpets Clinic, based in the same studio, offers specialist cleaning,
              repair and restoration for rugs of all kinds.
            </p>
          </div>
          <a
            href="https://www.carpetsclinic.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-btn ml-btn--outline"
            style={{ flexShrink: 0 }}
          >
            Visit Carpets Clinic ↗
          </a>
        </div>
      </div>

      {/* ── CTA band ── */}
      <section className="ml-section ml-shell" aria-label="Enquire">
        <div style={{ textAlign: 'center', maxWidth: '52ch', marginInline: 'auto' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ml-accent)', marginBottom: '1rem' }}>
            Bespoke &amp; enquiries
          </p>
          <h2 className="ml-section__title" style={{ marginBottom: '1rem' }}>
            Every piece is available<br />to enquire about.
          </h2>
          <p style={{ color: 'var(--ml-text-mid)', lineHeight: 1.75, marginBottom: '2rem', fontSize: '0.9375rem' }}>
            We offer worldwide delivery and can arrange bespoke commissions.
            Reach us directly. We respond within 48 hours.
          </p>
          <button className="ml-btn ml-btn--primary" onClick={() => onCollection('heritage')} style={{ marginInline: 'auto' }}>
            View Full Collection →
          </button>
        </div>
      </section>
    </>
  );
}
