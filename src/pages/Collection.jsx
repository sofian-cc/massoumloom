import React, { useState, useMemo } from 'react';
import { getCollection, getImages } from '../data/products.js';

function ProductCard({ product, onClick }) {
  const w = product.width;
  const l = product.length;
  const longer = Math.max(w, l);
  const shorter = Math.min(w, l);
  const sizeStr = `${longer} × ${shorter} cm`;

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
          alt={`${product.title}, ${product.fieldColour} rug from ${product.province}, ${product.origin}`}
          loading="lazy"
          width="400"
          height="533"
        />
      </div>
      <div className="ml-card__info">
        <p className="ml-card__title">{product.title}</p>
        <p className="ml-card__sub">{product.fieldColour}{product.motifs ? ` · ${product.motifs.split(',')[0].trim()}` : ''}</p>
        <p className="ml-card__size">{sizeStr}</p>
        <span className="ml-card__cta">View piece →</span>
      </div>
    </article>
  );
}

const COLOUR_GROUPS = [
  'All',
  'Red & Deep Red',
  'Blue',
  'Ivory & Beige',
  'Grey & Neutral',
  'Other',
];

function colourGroup(fc) {
  const f = (fc || '').toLowerCase();
  if (f.includes('red')) return 'Red & Deep Red';
  if (f.includes('blue')) return 'Blue';
  if (f === 'ivory' || f === 'beige') return 'Ivory & Beige';
  if (f === 'grey' || f === 'chestnut' || f === 'walnut') return 'Grey & Neutral';
  return 'Other';
}

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'size-asc',  label: 'Size: Small to Large' },
  { value: 'size-desc', label: 'Size: Large to Small' },
];

function area(p) { return (p.width || 0) * (p.length || 0); }

export default function Collection({ collection, onProduct }) {
  const all = useMemo(() => getCollection(collection), [collection]);
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('featured');

  const visible = useMemo(() => {
    let list = filter === 'All' ? all : all.filter(p => colourGroup(p.fieldColour) === filter);
    if (sort === 'size-asc')  list = [...list].sort((a, b) => area(a) - area(b));
    if (sort === 'size-desc') list = [...list].sort((a, b) => area(b) - area(a));
    return list;
  }, [all, filter, sort]);

  const label = collection === 'heritage' ? 'Heritage' : 'Modern';
  const desc  = collection === 'heritage'
    ? 'Classic compositions in rich jewel-toned fields. Shah Abbasi medallions, arabesque borders, and centuries of craft.'
    : 'Contemporary palettes and quieter geometries, the same mastery, a different mood.';

  return (
    <div>
      {/* Header */}
      <div className="ml-shell">
        <div className="ml-collection-page__header">
          <p className="ml-collection-page__eyebrow">Afghanistan · North-West</p>
          <h1 className="ml-collection-page__title">{label}</h1>
          <p style={{ color: 'var(--ml-text-mid)', maxWidth: '52ch', lineHeight: 1.7, fontSize: '0.9375rem', marginBottom: '1.5rem' }}>
            {desc}
          </p>
          <p className="ml-collection-page__count">{visible.length} piece{visible.length !== 1 ? 's' : ''}</p>
        </div>

        {/* Filters + sort row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {COLOUR_GROUPS.map(g => (
              <button
                key={g}
                onClick={() => setFilter(g)}
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '0.4rem 0.9rem',
                  border: '1px solid',
                  borderRadius: '2px',
                  borderColor: filter === g ? 'var(--ml-accent)' : 'var(--ml-border)',
                  background: filter === g ? 'var(--ml-accent)' : 'transparent',
                  color: filter === g ? '#fff' : 'var(--ml-text-mid)',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                }}
              >
                {g}
              </button>
            ))}
          </div>
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.4rem 0.75rem',
              border: '1px solid var(--ml-border)',
              borderRadius: '2px',
              background: 'transparent',
              color: 'var(--ml-text-mid)',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
      </div>

      {/* Grid */}
      {visible.length > 0 ? (
        <div className="ml-grid">
          {visible.map(p => (
            <ProductCard key={p.handle} product={p} onClick={onProduct} />
          ))}
        </div>
      ) : (
        <div className="ml-shell" style={{ padding: '4rem 0', textAlign: 'center', color: 'var(--ml-text-mid)' }}>
          No pieces match this filter.
        </div>
      )}

      {/* Bottom spacer */}
      <div style={{ height: '4rem' }} />
    </div>
  );
}
