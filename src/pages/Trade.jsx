import React, { useState } from 'react';

const WEB3FORMS_KEY = 'cbc2591a-7490-4ed1-accf-2b5ad6386a2b';

const BENEFITS = [
  { heading: 'Trade pricing', body: 'Preferential pricing for qualified interior designers and specifiers on all in-stock and made-to-order pieces.' },
  { heading: 'Priority access', body: 'First access to new pieces and the ability to reserve items for client proposals before they are listed publicly.' },
  { heading: 'Sample loans', body: 'Borrow samples for up to 10 days for client presentations. Available for London-based designers with studio collection.' },
  { heading: 'Bespoke service', body: 'Direct access to our bespoke programme — custom sizes, colours, and designs developed to your brief and your client\'s space.' },
  { heading: 'Studio visits', body: 'Private viewing appointments at our NW10 studio. Bring clients or visit alone to review the collection in person.' },
  { heading: 'White-label delivery', body: 'Discreet delivery and installation in your client\'s home, coordinated through you. No Massoum Loom branding at point of delivery if preferred.' },
];

export default function Trade() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', website: '', discipline: '', notes: '',
  });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  const onSubmit = async e => {
    e.preventDefault();
    setError('');
    setSending(true);
    try {
      const data = new FormData();
      data.append('access_key', WEB3FORMS_KEY);
      data.append('from_name', 'Massoum Loom Website — Trade');
      data.append('subject', `Trade account application from ${form.name} — ${form.company}`);
      data.append('name', form.name);
      data.append('email', form.email);
      data.append('message',
        `TRADE APPLICATION\n\nName: ${form.name}\nCompany: ${form.company}\nWebsite: ${form.website}\nDiscipline: ${form.discipline}\nPhone: ${form.phone}\n\nNotes:\n${form.notes}`
      );
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST', headers: { Accept: 'application/json' }, body: data,
      });
      if (res.ok) setSubmitted(true);
      else setError('Something went wrong. Please email us directly.');
    } catch {
      setError('Could not send. Please call 020 8191 7488.');
    }
    setSending(false);
  };

  const fieldStyle = { display: 'flex', flexDirection: 'column', gap: '0.4rem' };
  const labelStyle = { fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ml-text-mid)' };
  const inputStyle = {
    border: 'none', borderBottom: '1px solid var(--ml-border)', padding: '0.6rem 0',
    fontSize: '0.9375rem', fontFamily: 'inherit', background: 'transparent',
    outline: 'none', color: 'var(--ml-text)', width: '100%',
  };

  return (
    <div>
      {/* Header */}
      <div style={{ background: 'var(--ml-bg)', padding: 'clamp(4rem, 8vw, 8rem) var(--ml-px)' }}>
        <div style={{ maxWidth: 'var(--ml-shell)', margin: '0 auto' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ml-text-mid)', marginBottom: '1rem' }}>Designers &amp; specifiers</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '20ch' }}>
            The trade programme.
          </h1>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: 'var(--ml-text-mid)', maxWidth: '54ch' }}>
            We work closely with interior designers, architects, and specifiers across London and beyond. Our trade programme offers dedicated pricing, priority access, and a direct line to our studio for bespoke commissions.
          </p>
        </div>
      </div>

      {/* Benefits grid */}
      <div style={{ background: 'var(--ml-white)', padding: 'clamp(3rem, 6vw, 5rem) var(--ml-px)' }}>
        <div style={{ maxWidth: 'var(--ml-shell)', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 30ch), 1fr))', gap: '2.5rem' }}>
            {BENEFITS.map(b => (
              <div key={b.heading} style={{ borderTop: '1px solid var(--ml-border)', paddingTop: '1.5rem' }}>
                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.6rem' }}>{b.heading}</h2>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--ml-text-mid)' }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application form */}
      <div style={{ background: 'var(--ml-bg)', padding: 'clamp(4rem, 8vw, 6rem) var(--ml-px)' }}>
        <div style={{ maxWidth: 'var(--ml-shell)', margin: '0 auto' }} className="ml-form-two-col">
          <div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ml-text-mid)', marginBottom: '1rem' }}>Apply</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, lineHeight: 1.2, marginBottom: '1.25rem' }}>
              Register for<br /><em>trade access.</em>
            </h2>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--ml-text-mid)' }}>
              Tell us a little about your practice. We review all applications within 48 hours and will follow up with your trade account details and an invitation to visit the studio.
            </p>
          </div>

          <div>
            {submitted ? (
              <div style={{ padding: '2rem', background: 'var(--ml-white)', borderRadius: '2px', textAlign: 'center' }}>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 300, marginBottom: '0.75rem' }}>Application received.</p>
                <p style={{ color: 'var(--ml-text-mid)', lineHeight: 1.7 }}>We will review your application and be in touch within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                <div className="ml-form-row-two">
                  <div style={fieldStyle}>
                    <label style={labelStyle}>Name *</label>
                    <input required style={inputStyle} value={form.name} onChange={set('name')} placeholder="Full name" />
                  </div>
                  <div style={fieldStyle}>
                    <label style={labelStyle}>Email *</label>
                    <input required type="email" style={inputStyle} value={form.email} onChange={set('email')} placeholder="you@practice.com" />
                  </div>
                </div>
                <div style={fieldStyle}>
                  <label style={labelStyle}>Practice / company *</label>
                  <input required style={inputStyle} value={form.company} onChange={set('company')} placeholder="Studio or company name" />
                </div>
                <div style={fieldStyle}>
                  <label style={labelStyle}>Website</label>
                  <input type="url" style={inputStyle} value={form.website} onChange={set('website')} placeholder="https://yourpractice.com" />
                </div>
                <div style={fieldStyle}>
                  <label style={labelStyle}>Discipline</label>
                  <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.discipline} onChange={set('discipline')}>
                    <option value="">Select</option>
                    <option>Interior designer</option>
                    <option>Interior architect</option>
                    <option>Architect</option>
                    <option>Property developer</option>
                    <option>Hospitality designer</option>
                    <option>Stylist / set designer</option>
                    <option>Other</option>
                  </select>
                </div>
                <div style={fieldStyle}>
                  <label style={labelStyle}>Phone</label>
                  <input type="tel" style={inputStyle} value={form.phone} onChange={set('phone')} placeholder="Optional" />
                </div>
                <div style={fieldStyle}>
                  <label style={labelStyle}>Anything you'd like us to know</label>
                  <textarea style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }} value={form.notes} onChange={set('notes')} placeholder="Current projects, typical rug budgets, how you found us…" />
                </div>
                {error && <p style={{ color: 'red', fontSize: '0.875rem' }}>{error}</p>}
                <button type="submit" className="ml-btn ml-btn--primary" disabled={sending} style={{ alignSelf: 'flex-start' }}>
                  {sending ? 'Sending…' : 'Apply for trade access →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
