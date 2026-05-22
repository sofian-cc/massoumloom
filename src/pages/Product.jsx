import React from 'react';
import { getProduct } from '../data/products.js';

function SpecRow({ label, value }) {
  if (!value) return null;
  return (
    <div className="ml-spec-row">
      <span className="ml-spec-row__label">{label}</span>
      <span className="ml-spec-row__value">{value}</span>
    </div>
  );
}

export default function Product({ handle, onCollection, onContact, onBack }) {
  const product = getProduct(handle);

  if (!product) {
    return (
      <div className="ml-shell" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <p style={{ color: 'var(--ml-text-mid)', marginBottom: '1.5rem' }}>Piece not found.</p>
        <button className="ml-btn ml-btn--outline" onClick={onBack}>← Go back</button>
      </div>
    );
  }

  const w = product.width;
  const l = product.length;
  const longer  = Math.max(w, l);
  const shorter = Math.min(w, l);
  const sizeStr = `${longer} × ${shorter} cm`;
  const collectionLabel = product.collection === 'heritage' ? 'Heritage' : 'Modern';

  const enquireSubject = encodeURIComponent(`Enquiry — Massoum Loom ${product.title} (${product.sku})`);

  return (
    <div>
      <div className="ml-product-page">
        {/* Image */}
        <div className="ml-product-page__image-col">
          <img
            src={product.image}
            alt={`${product.title} — ${product.fieldColour} ${collectionLabel} rug, ${sizeStr}`}
            loading="eager"
            width="800"
            height="1067"
          />
        </div>

        {/* Details */}
        <div className="ml-product-page__details">
          {/* Breadcrumb */}
          <button className="ml-product-page__back" onClick={onBack} aria-label="Go back">
            ← {collectionLabel} Collection
          </button>

          <p className="ml-product-page__sku">{product.sku}</p>

          <h1 className="ml-product-page__title">{product.title}</h1>

          <p className="ml-product-page__size">{sizeStr}</p>

          <hr className="ml-product-page__divider" />

          <p className="ml-product-page__price-label">Price</p>
          <p className="ml-product-page__price">Price upon request</p>

          <button
            className="ml-product-page__enquire"
            onClick={onContact}
          >
            Enquire about this piece →
          </button>

          <p style={{ fontSize: '0.8rem', color: 'var(--ml-text-mid)', textAlign: 'center' }}>
            Complimentary worldwide delivery
          </p>

          <hr className="ml-product-page__divider" />

          {/* Specs */}
          <div className="ml-product-page__specs">
            <p className="ml-product-page__specs-title">Details</p>

            <SpecRow label="Reference" value={product.sku} />
            <SpecRow label="Collection" value={collectionLabel} />
            <SpecRow label="Size" value={sizeStr} />
            <SpecRow label="Origin" value={`${product.province}, ${product.origin}`} />
            <SpecRow label="Pile" value={product.pile} />
            {product.knotDensity && <SpecRow label="Knot density" value={product.knotDensity} />}
            <SpecRow label="Field colour" value={product.fieldColour} />
            <SpecRow label="Border colour" value={product.borderColour} />
            {product.motifs && <SpecRow label="Motifs" value={product.motifs} />}
          </div>

          <hr className="ml-product-page__divider" />

          {/* Provenance note */}
          <p style={{ fontSize: '0.8125rem', color: 'var(--ml-text-mid)', lineHeight: 1.7, fontStyle: 'italic' }}>
            Hand-knotted in the Jowzjan province of northern Afghanistan by master
            weavers using traditional vertical looms, pure wool pile, and techniques
            unchanged for centuries.
          </p>
        </div>
      </div>
    </div>
  );
}
