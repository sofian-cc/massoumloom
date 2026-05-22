import React, { useState, useMemo } from 'react';
import { products, getImages } from '../data/products.js';

function ProductCard({ product, onClick }) {
  const w = product.width;
  const l = product.length;
  const longer  = w && l ? Math.max(w, l) : null;
  const shorter = w && l ? Math.min(w, l) : null;
  const sizeStr = longer ? `${longer} × ${shorter} cm` : '';

  return (
    <article
      className="ml-card"
      onClick={() => onClick(product.handle)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick(product.handle)}
      aria-label={`View ${product.title}`}
    >
      <div className="ml-card__image-wrap">
        <img
          src={getImages(product)[0]}
          alt={`${product.title}`}
          loading="lazy"
          width="400"
          height="533"
        />
      </div>
      <div className="ml-card__info">
        <p className="ml-card__title">{product.title}</p>
        <p className="ml-card__sub">{product.fieldColour}{product.collection ? ` · ${product.collection === 'heritage' ? 'Heritage' : 'Modern'}` : ''}</p>
        {sizeStr && <p className="ml-card__size">{sizeStr}</p>}
        <span className="ml-card__cta">View piece →</span>
      </div>
    </article>
  );
}

const COLOUR_GROUPS = ['Red & Deep Red', 'Blue', 'Ivory & Beige', 'Grey & Neutral', 'Other'];

function colourGroup(fc) {
  const f = (fc || '').toLowerCase();
  if (f.includes('red'))                                  return 'Red & Deep Red';
  if (f.includes('blue'))                                 return 'Blue';
  if (f === 'ivory' || f === 'beige' || f.includes('ivory') || f.includes('beige')) return 'Ivory & Beige';
  if (f.includes('grey') || f === 'chestnut' || f === 'walnut') return 'Grey & Neutral';
  return 'Other';
}

function area(p) { return (p.width || 0) * (p.length || 0); }

export default function Collection({ initialCollection = 'all', onProduct }) {
  const [collFilter, setCollFilter] = useState(initialCollection);
  const [colourFilter, setColourFilter] = useState('All');
  const [sort, setSort] = useState('featured');

  // Reset colour filter when collection changes
  const handleCollFilter = (val) => {
    setCollFilter(val);
    setColourFilter('All');
  };

  const visible = useMemo(() => {
    let list = collFilter === 'all'
      ? products
      : products.filter(p => p.collection === collFilter);

    if (colourFilter !== 'All') {
      list = list.filter(p => colourGroup(p.fieldColour) === colourFilter);
    }

    if (sort === 'size-asc')  list = [...list].sort((a, b) => area(a) - area(b));
    if (sort === 'size-desc') list = [...list].sort((a, b) => area(b) - area(a));

    return list;
  }, [collFilter, colourFilter, sort]);

  const btnBase = {
    fontSize: '0.7rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    padding: '0.55rem 1.25rem',
    border: '1px solid var(--ml-border)',
    borderRadius: '2px',
    cursor: 'pointer',
    fontFamily: 'inherit',
    transition: 'all 0.15s',
  };

  const btnActive   = { ...btnBase, background: 'var(--ml-text)', color: '#fff', borderColor: 'var(--ml-text)' };
  const btnInactive = { ...btnBase, background: 'transparent', color: 'var(--ml-text-mid)', borderColor: 'var(--ml-border)' };

  return (
    <div>
      {/* Header */}
      <div style={{ background: 'var(--ml-bg)', padding: 'clamp(3rem, 6vw, 6rem) var(--ml-px) 2.5rem', maxWidth: 'var(--ml-shell)', margin: '0 auto' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ml-text-mid)', marginBottom: '1rem' }}>
          Massoum Loom
        </p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 300, lineHeight: 1, marginBottom: '2.5rem' }}>
          The Collection
        </h1>

        {/* Primary filters: All / Heritage / Modern */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: collFilter !== 'all' ? '1rem' : '0' }}>
          {[['all', 'All'], ['heritage', 'Heritage'], ['modern', 'Modern']].map(([val, label]) => (
            <button key={val} onClick={() => handleCollFilter(val)} style={collFilter === val ? btnActive : btnInactive}>
              {label}
            </button>
          ))}
        </div>

        {/* Sub-filters: colour (only when Heritage or Modern selected) */}
        {collFilter !== 'all' && (
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
            {['All', ...COLOUR_GROUPS].map(g => (
              <button
                key={g}
                onClick={() => setColourFilter(g)}
                style={colourFilter === g ? btnActive : btnInactive}
              >
                {g}
              </button>
            ))}
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              style={{ ...btnInactive, marginLeft: 'auto', paddingRight: '0.75rem' }}
            >
              <option value="featured">Featured</option>
              <option value="size-asc">Size: Small to Large</option>
              <option value="size-desc">Size: Large to Small</option>
            </select>
          </div>
        )}

        <p style={{ fontSize: '0.8125rem', color: 'var(--ml-text-mid)', marginTop: '1.5rem', letterSpacing: '0.04em' }}>
          {visible.length} piece{visible.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Grid */}
      {visible.length > 0 ? (
        <div className="ml-grid">
          {visible.map(p => (
            <ProductCard key={p.handle} product={p} onClick={onProduct} />
          ))}
        </div>
      ) : (
        <div style={{ padding: '4rem var(--ml-px)', textAlign: 'center', color: 'var(--ml-text-mid)' }}>
          No pieces match this filter.
        </div>
      )}

      <div style={{ height: '4rem' }} />
    </div>
  );
}
