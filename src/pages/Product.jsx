import React, { useState } from 'react';
import { getProduct, getImages, imgUrl } from '../data/products.js';
import useSEO from '../useSEO.js';

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
  const [tab, setTab] = useState('details');
  const images = product ? getImages(product) : [];
  const [activeImg, setActiveImg] = useState(0);

  const w = product?.width;
  const l = product?.length;
  const longer  = w && l ? Math.max(w, l) : null;
  const shorter = w && l ? Math.min(w, l) : null;
  const sizeStr = longer ? `${longer} × ${shorter} cm` : 'Dimensions on request';
  const collectionLabel = product?.collection === 'heritage' ? 'Heritage' : 'Modern';

  const productLd = product ? {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `https://massoumloom.co.uk/rug/${product.handle}`,
    'name': `Massoum Loom ${product.title}`,
    'description': `Hand-knotted ${product.pile || 'wool'} rug from ${product.province || product.origin || 'Afghanistan'}. ${product.knotDensity || '80–120 KPSI'}. Field colour: ${product.fieldColour}. ${sizeStr}.`,
    'image': images.map(src => `https://massoumloom.co.uk/${src}`),
    'brand': { '@type': 'Brand', 'name': 'Massoum Loom' },
    'material': product.pile || 'Wool',
    'offers': {
      '@type': 'Offer',
      'availability': 'https://schema.org/InStock',
      'priceCurrency': 'GBP',
      'seller': { '@type': 'Organization', 'name': 'Massoum Loom', 'url': 'https://massoumloom.co.uk' },
    },
    'additionalProperty': [
      { '@type': 'PropertyValue', 'name': 'Origin', 'value': product.origin },
      product.province && { '@type': 'PropertyValue', 'name': 'Province', 'value': product.province },
      { '@type': 'PropertyValue', 'name': 'Pile', 'value': product.pile },
      { '@type': 'PropertyValue', 'name': 'Knot density', 'value': product.knotDensity },
      { '@type': 'PropertyValue', 'name': 'Field colour', 'value': product.fieldColour },
      product.borderColour && { '@type': 'PropertyValue', 'name': 'Border colour', 'value': product.borderColour },
      longer && { '@type': 'PropertyValue', 'name': 'Dimensions', 'value': sizeStr },
    ].filter(Boolean),
  } : null;

  useSEO(product ? {
    title: `${product.title} — Hand-Knotted ${product.pile || 'Wool'} Rug | Massoum Loom`,
    description: `Hand-knotted ${product.pile || 'wool'} rug from ${product.province || product.origin}. ${product.knotDensity}. ${product.fieldColour} field. ${sizeStr}. ${collectionLabel} collection.`,
    path: `/rug/${product.handle}`,
    jsonLd: productLd,
  } : { title: 'Massoum Loom', description: '' });

  if (!product) {
    return (
      <div className="ml-shell" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <p style={{ color: 'var(--ml-text-mid)', marginBottom: '1.5rem' }}>Piece not found.</p>
        <button className="ml-btn ml-btn--outline" onClick={onBack}>← Go back</button>
      </div>
    );
  }

  const enquireSubject = encodeURIComponent(`Enquiry: Massoum Loom ${product.title} (${product.sku})`);

  return (
    <div>
      <div className="ml-product-page">
        {/* Image gallery */}
        <div className="ml-product-page__image-col">
          <img
            key={images[activeImg]}
            src={imgUrl(images[activeImg], 1200)}
            alt={`${product.title}, ${product.fieldColour} ${collectionLabel} rug, ${sizeStr}`}
            loading="eager"
            fetchpriority="high"
            width="800"
            height="1067"
          />

          {/* Prev / Next arrows */}
          {images.length > 1 && (
            <>
              <button
                className="ml-product-page__arrow ml-product-page__arrow--prev"
                onClick={() => setActiveImg(i => (i - 1 + images.length) % images.length)}
                aria-label="Previous image"
              >‹</button>
              <button
                className="ml-product-page__arrow ml-product-page__arrow--next"
                onClick={() => setActiveImg(i => (i + 1) % images.length)}
                aria-label="Next image"
              >›</button>
            </>
          )}

          {/* Thumbnail strip */}
          {images.length > 1 && (
            <div className="ml-product-page__thumbs">
              {images.map((src, i) => (
                <button
                  key={i}
                  className={`ml-product-page__thumb${i === activeImg ? ' ml-product-page__thumb--active' : ''}`}
                  onClick={() => setActiveImg(i)}
                  aria-label={`View image ${i + 1}`}
                  style={{ backgroundImage: `url("${imgUrl(src, 120).replace(/"/g, '%22')}")` }}
                />
              ))}
            </div>
          )}
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
          <p className="ml-product-page__price">Available on enquiry</p>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ml-text-mid)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            All pieces are made to order. Contact us for pricing, lead times, and availability. We respond within 48 hours.
          </p>

          <button
            className="ml-product-page__enquire"
            onClick={() => onContact(product)}
          >
            Enquire about this piece →
          </button>

          <p style={{ fontSize: '0.8rem', color: 'var(--ml-text-mid)', textAlign: 'center' }}>
            Free delivery within London
          </p>

          <hr className="ml-product-page__divider" />

          {/* Tabs */}
          <div className="ml-tabs">
            <div className="ml-tabs__nav">
              {['details', 'delivery', 'care'].map(t => (
                <button
                  key={t}
                  className={`ml-tabs__btn${tab === t ? ' ml-tabs__btn--active' : ''}`}
                  onClick={() => setTab(t)}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>

            {tab === 'details' && (
              <div className="ml-tabs__panel">
                <SpecRow label="Reference" value={product.sku} />
                <SpecRow label="Collection" value={collectionLabel} />
                <SpecRow label="Size" value={sizeStr} />
                <SpecRow label="Origin" value={`${product.province}, ${product.origin}`} />
                <SpecRow label="Pile" value={product.pile} />
                {product.knotDensity && <SpecRow label="Knot density" value={product.knotDensity} />}
                <SpecRow label="Field colour" value={product.fieldColour} />
                <SpecRow label="Border colour" value={product.borderColour} />
                {product.motifs && <SpecRow label="Motifs" value={product.motifs} />}
                <p style={{ marginTop: '1.25rem', fontStyle: 'italic', fontSize: '0.8125rem' }}>
                  Hand-knotted in north-west Afghanistan by master weavers using traditional
                  vertical looms, pure wool pile, and techniques unchanged for centuries.
                </p>
              </div>
            )}

            {tab === 'delivery' && (
              <div className="ml-tabs__panel">
                <p>Free delivery is available within London. For deliveries outside London, we will provide a quote based on your location.</p>
                <p>All pieces are made to order. Estimated lead time is 6–10 months from order confirmation, depending on weaving complexity.</p>
                <p>We use insured specialist couriers with full tracking and white-glove handling. You will receive photographs at key stages throughout the weaving process.</p>
              </div>
            )}

            {tab === 'care' && (
              <div className="ml-tabs__panel">
                <p>Rotate your rug every 6–12 months to ensure even wear, particularly in high-traffic areas.</p>
                <p>Vacuum regularly on a low setting, always in the direction of the pile. Avoid vacuuming the fringe.</p>
                <p>Blot spills immediately with a clean, dry cloth. Do not rub. For deep cleaning, we recommend our sister business Carpets Clinic, based in the same studio.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
