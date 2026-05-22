import React from 'react';

const PAGES = {
  bespoke: {
    eyebrow: 'Made to order',
    title: 'Bespoke commissions',
    sections: [
      {
        heading: 'A rug made for your space',
        body: 'Every Massoum Loom rug is hand-knotted to order. If you have a specific size, colour palette, or motif in mind, we can work with our weavers to create something entirely unique to your home.',
      },
      {
        heading: 'The process',
        body: 'We begin with a consultation — in our London studio or remotely — to understand your space, your taste, and your timeline. From there, our team works with master weavers to design and produce your piece. Typical lead time is 6–10 months.',
      },
      {
        heading: 'Get in touch',
        body: 'To discuss a bespoke commission, contact us directly. We respond to all enquiries within 48 hours.',
      },
    ],
  },
  sustainability: {
    eyebrow: 'Our commitment',
    title: 'Sustainability',
    sections: [
      {
        heading: 'Natural materials',
        body: 'Every rug in our collection is made from natural wool pile, dyed with vegetable-derived pigments. No synthetic fibres. No chemical dyes. The same materials used for centuries.',
      },
      {
        heading: 'Made to last',
        body: 'A hand-knotted rug at 80–120 KPSI is built to last generations. We believe the most sustainable object is one you never have to replace.',
      },
      {
        heading: 'Direct sourcing',
        body: 'We work directly with weaving families, cutting out intermediaries and ensuring fair prices reach the people who do the work. Complete traceability from loom to home.',
      },
    ],
  },
  press: {
    eyebrow: 'Media',
    title: 'Press',
    sections: [
      {
        heading: 'Press enquiries',
        body: 'For press enquiries, editorial loans, or interview requests, please contact us directly at our London studio. We welcome coverage that tells the story of the craft.',
      },
      {
        heading: 'High-resolution images',
        body: 'A full press kit including high-resolution product images and brand assets is available on request.',
      },
    ],
  },
  delivery: {
    eyebrow: 'Shipping',
    title: 'Delivery',
    sections: [
      {
        heading: 'London delivery',
        body: 'We offer free delivery within London on all pieces. Every rug is handled with care and positioned in your home on delivery.',
      },
      {
        heading: 'Outside London',
        body: 'For deliveries outside London, we use insured specialist art couriers with full tracking and white-glove handling. Delivery costs are quoted at the time of order based on your location.',
      },
      {
        heading: 'Lead times',
        body: 'As all pieces are made to order, please allow 6–10 months from order confirmation. We will keep you updated throughout the weaving process and send photographs at key stages.',
      },
      {
        heading: 'Delivery day',
        body: 'Our team will contact you in advance to arrange a suitable delivery window. All pieces are carefully unrolled and positioned in your home.',
      },
    ],
  },
  'care-guide': {
    eyebrow: 'Maintenance',
    title: 'Care guide',
    sections: [
      {
        heading: 'Daily care',
        body: 'Vacuum regularly on a low setting, always in the direction of the pile. Avoid vacuuming the fringe directly — use a soft brush attachment instead.',
      },
      {
        heading: 'Rotation',
        body: 'Rotate your rug every 6–12 months to ensure even wear, particularly in high-traffic areas and where sunlight falls consistently.',
      },
      {
        heading: 'Spills',
        body: 'Blot spills immediately with a clean, dry white cloth. Work from the outside of the spill inward. Do not rub. For deep cleaning or stubborn stains, contact our sister business Carpets Clinic.',
      },
      {
        heading: 'Professional cleaning',
        body: 'We recommend professional cleaning every 3–5 years. Our sister business Carpets Clinic, based in the same London studio, specialises in hand-knotted rug cleaning and restoration.',
      },
    ],
  },
  returns: {
    eyebrow: 'Policy',
    title: 'Returns',
    sections: [
      {
        heading: 'Made to order',
        body: 'As all pieces are hand-knotted to order, we are unable to accept returns on standard purchases. Please review all dimensions, images, and specifications carefully before placing an order.',
      },
      {
        heading: 'Damaged goods',
        body: 'In the unlikely event that your rug arrives damaged, please photograph the damage immediately and contact us within 48 hours of delivery. We will arrange collection and remedy at no cost to you.',
      },
      {
        heading: 'Questions before you order',
        body: 'We strongly encourage all customers to contact us before ordering. We are happy to provide additional photographs, samples, and advice to ensure you are completely confident in your choice.',
      },
    ],
  },
};

export default function SimplePage({ page, onContact }) {
  const content = PAGES[page];
  if (!content) return null;

  return (
    <div style={{ maxWidth: 'var(--ml-shell)', margin: '0 auto', padding: 'clamp(4rem, 8vw, 8rem) var(--ml-px)' }}>
      <p style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ml-text-mid)', marginBottom: '1rem' }}>
        {content.eyebrow}
      </p>
      <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, lineHeight: 1.1, marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        {content.title}
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 36ch), 1fr))', gap: '3rem' }}>
        {content.sections.map(s => (
          <div key={s.heading} style={{ borderTop: '1px solid var(--ml-border)', paddingTop: '1.5rem' }}>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.375rem', fontWeight: 400, marginBottom: '0.75rem' }}>{s.heading}</h2>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: 'var(--ml-text-mid)' }}>{s.body}</p>
          </div>
        ))}
      </div>
      {(page === 'bespoke' || page === 'press') && (
        <button className="ml-btn ml-btn--primary" onClick={onContact} style={{ marginTop: '3rem' }}>
          Get in touch →
        </button>
      )}
    </div>
  );
}
