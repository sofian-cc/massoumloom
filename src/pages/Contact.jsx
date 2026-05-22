import React, { useState } from 'react';

const WEB3FORMS_KEY = 'cbc2591a-7490-4ed1-accf-2b5ad6386a2b';

export default function Contact({ enquiry, onClearEnquiry }) {
  const defaultSubject = enquiry ? `Enquiry: ${enquiry.title} (${enquiry.sku})` : '';
  const defaultMessage = enquiry
    ? `I am interested in ${enquiry.title}.\n\nPiece details:\n- Reference: ${enquiry.sku}\n- Collection: ${enquiry.collection === 'heritage' ? 'Heritage' : 'Modern'}${enquiry.width && enquiry.length ? `\n- Size: ${Math.max(enquiry.width, enquiry.length)} × ${Math.min(enquiry.width, enquiry.length)} cm` : ''}${enquiry.fieldColour ? `\n- Field colour: ${enquiry.fieldColour}` : ''}\n\nPlease send me more information on pricing and availability.`
    : '';
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: defaultSubject, message: defaultMessage });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSending(true);

    try {
      const data = new FormData();
      data.append('access_key', WEB3FORMS_KEY);
      data.append('name',    form.name);
      data.append('email',   form.email);
      data.append('phone',   form.phone);
      data.append('subject', form.subject || 'Enquiry via massoumloom.co.uk');
      data.append('message', form.message);
      data.append('from_name', 'Massoum Loom Website');

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (res.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setError('Something went wrong. Please email us directly or call 020 8191 7488.');
      }
    } catch {
      setError('Could not send. Please call 020 8191 7488 or email us directly.');
    }

    setSending(false);
  };

  const reset = () => {
    setSubmitted(false);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    setError('');
    if (onClearEnquiry) onClearEnquiry();
  };

  return (
    <div className="ml-contact-page">
      {/* Form column */}
      <div className="ml-contact-form-col">
        <h1>Get in touch.</h1>
        {enquiry && (
          <div style={{ background: 'var(--ml-bg-alt)', border: '1px solid var(--ml-border)', borderRadius: '3px', padding: '1rem 1.25rem', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
            <p style={{ fontWeight: 500, marginBottom: '0.25rem' }}>Enquiring about: {enquiry.title}</p>
            <p style={{ color: 'var(--ml-text-mid)' }}>Ref: {enquiry.sku} · The form below has been pre-filled with the piece details.</p>
          </div>
        )}
        <p className="ml-lede">
          Interested in a piece? Have a question about a rug's provenance or dimensions?
          We respond to every enquiry within 48 hours, Monday–Friday.
        </p>

        {submitted ? (
          <div className="ml-success">
            <div className="ml-success__tick">✓</div>
            <h3>Thank you, {form.name || 'there'}.</h3>
            <p>We've received your message and will be in touch within 48 hours.</p>
            <button className="ml-btn ml-btn--outline" onClick={reset}>Send another message</button>
          </div>
        ) : (
          <form className="ml-form" onSubmit={onSubmit} noValidate>
            <div className="ml-field">
              <label htmlFor="contact-name">01 Your name</label>
              <input
                id="contact-name"
                type="text"
                required
                value={form.name}
                onChange={set('name')}
                placeholder="Full name"
                autoComplete="name"
              />
            </div>

            <div className="ml-field">
              <label htmlFor="contact-email">02 Email address</label>
              <input
                id="contact-email"
                type="email"
                required
                value={form.email}
                onChange={set('email')}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>

            <div className="ml-field">
              <label htmlFor="contact-phone">03 Phone <span style={{ fontSize: '0.7rem', color: 'var(--ml-border)' }}>(optional)</span></label>
              <input
                id="contact-phone"
                type="tel"
                value={form.phone}
                onChange={set('phone')}
                placeholder="07000 000 000"
                autoComplete="tel"
              />
            </div>

            <div className="ml-field">
              <label htmlFor="contact-subject">04 Regarding</label>
              <input
                id="contact-subject"
                type="text"
                value={form.subject}
                onChange={set('subject')}
                placeholder="e.g. Enquiry about No. 22, delivery timescales, bespoke order…"
              />
            </div>

            <div className="ml-field">
              <label htmlFor="contact-message">05 Message</label>
              <textarea
                id="contact-message"
                required
                value={form.message}
                onChange={set('message')}
                placeholder="Tell us what you're looking for, which piece caught your eye, the room it's for, any questions about the rug."
              />
            </div>

            {error && <p className="ml-form__error">{error}</p>}

            <div className="ml-form__submit">
              <button type="submit" className="ml-btn ml-btn--primary" disabled={sending}>
                {sending ? 'Sending…' : 'Send enquiry →'}
              </button>
              <span className="ml-form__hint">We reply within 48 hours</span>
            </div>
          </form>
        )}
      </div>

      {/* Info column */}
      <div className="ml-contact-info-col">
        <div>
          <p className="ml-contact-block__label">Call us</p>
          <p className="ml-contact-block__value">
            <a href="tel:02081917488">020 8191 7488</a>
          </p>
          <p className="ml-contact-block__note">Monday–Friday, 9:00–17:30</p>
        </div>

        <div>
          <p className="ml-contact-block__label">Visit the studio</p>
          <p className="ml-contact-block__value" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Unit B2, 1 Chandos Road<br />
            London, NW10 6NF
          </p>
          <p className="ml-contact-block__note">By appointment. Please call ahead.</p>
        </div>

        <div>
          <p className="ml-contact-block__label">Instagram</p>
          <p className="ml-contact-block__value">
            <a href="https://www.instagram.com/massoumloom" target="_blank" rel="noopener noreferrer">
              @massoumloom
            </a>
          </p>
        </div>

        <div>
          <p className="ml-contact-block__label">Delivery</p>
          <p className="ml-contact-block__value" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', color: 'var(--ml-text-mid)', fontWeight: 300 }}>
            Free delivery within London. For other locations, delivery costs are quoted at time of order.
          </p>
        </div>

        <div>
          <p className="ml-contact-block__label">Sister business</p>
          <p className="ml-contact-block__value" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            <a href="https://www.carpetsclinic.co.uk" target="_blank" rel="noopener noreferrer">
              Carpets Clinic ↗
            </a>
          </p>
          <p className="ml-contact-block__note">Specialist rug cleaning, repair &amp; restoration, same studio.</p>
        </div>
      </div>
    </div>
  );
}
