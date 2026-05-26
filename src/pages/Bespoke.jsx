import React, { useState } from 'react';

const WEB3FORMS_KEY = 'cbc2591a-7490-4ed1-accf-2b5ad6386a2b';

const STEPS = [
  { num: '01', label: 'Brief', desc: 'Tell us about your space and vision.' },
  { num: '02', label: 'Consultation', desc: 'We review your brief and arrange a call or studio visit.' },
  { num: '03', label: 'Design', desc: 'Our team develops a design proposal with samples.' },
  { num: '04', label: 'Weaving', desc: '4–8 months of careful hand-knotting to your specifications.' },
  { num: '05', label: 'Delivery', desc: 'White-glove delivery and installation in your home.' },
];

export default function Bespoke({ onContact }) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    roomType: '', size: '', colours: '', motifs: '', timeline: '', budget: '', notes: '',
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
      data.append('from_name', 'Massoum Loom Website — Bespoke');
      data.append('subject', `Bespoke commission brief from ${form.name}`);
      data.append('name', form.name);
      data.append('email', form.email);
      data.append('phone', form.phone);
      data.append('message',
        `BESPOKE BRIEF\n\nRoom type: ${form.roomType}\nSize: ${form.size}\nColours: ${form.colours}\nMotifs: ${form.motifs}\nTimeline: ${form.timeline}\nBudget: ${form.budget}\n\nAdditional notes:\n${form.notes}`
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

  const fieldStyle = {
    display: 'flex', flexDirection: 'column', gap: '0.4rem',
  };
  const labelStyle = {
    fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ml-text-mid)',
  };
  const inputStyle = {
    border: 'none', borderBottom: '1px solid var(--ml-border)', padding: '0.6rem 0',
    fontSize: '0.9375rem', fontFamily: 'inherit', background: 'transparent',
    outline: 'none', color: 'var(--ml-text)', width: '100%',
  };

  return (
    <div>
      {/* Hero */}
      <div style={{ background: 'var(--ml-bg-dark)', color: '#fff', padding: 'clamp(4rem, 8vw, 8rem) var(--ml-px)' }}>
        <div style={{ maxWidth: 'var(--ml-shell)', margin: '0 auto' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>Made to order</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, lineHeight: 1.05, marginBottom: '1.5rem', maxWidth: '16ch' }}>
            A rug made<br /><em>for your space.</em>
          </h1>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', maxWidth: '50ch' }}>
            Every Massoum Loom rug is hand-knotted to order. If you have a specific size, colour palette, or motif in mind, we can work with our weavers to create something entirely unique to your home.
          </p>
        </div>
      </div>

      {/* Process */}
      <div style={{ background: 'var(--ml-white)', padding: 'clamp(3rem, 6vw, 5rem) var(--ml-px)' }}>
        <div style={{ maxWidth: 'var(--ml-shell)', margin: '0 auto' }}>
          <div className="ml-bespoke-process">
            {STEPS.map((s, i) => (
              <div key={s.num} className={`ml-bespoke-step${i < 4 ? ' ml-bespoke-step--border' : ''}`}>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 300, color: 'var(--ml-border)', lineHeight: 1, marginBottom: '2rem' }}>{s.num}</p>
                <p style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.4rem' }}>{s.label}</p>
                <p style={{ fontSize: '0.8125rem', lineHeight: 1.65, color: 'var(--ml-text-mid)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <div style={{ background: 'var(--ml-bg)', padding: 'clamp(4rem, 8vw, 6rem) var(--ml-px)' }}>
        <div style={{ maxWidth: 'var(--ml-shell)', margin: '0 auto' }} className="ml-form-two-col">

          <div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ml-text-mid)', marginBottom: '1rem' }}>Start your brief</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 300, lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Tell us about<br /><em>your room.</em>
            </h2>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--ml-text-mid)' }}>
              Fill in as much or as little as you know. We will follow up with a call or studio visit to understand your space, your taste, and your timeline before any design work begins.
            </p>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--ml-text-mid)', marginTop: '1rem' }}>
              Typical lead time is 6–10 months from design sign-off.
            </p>
          </div>

          <div>
            {submitted ? (
              <div style={{ padding: '2rem', background: 'var(--ml-white)', borderRadius: '2px', textAlign: 'center' }}>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 300, marginBottom: '0.75rem' }}>Thank you.</p>
                <p style={{ color: 'var(--ml-text-mid)', lineHeight: 1.7, marginBottom: '1.5rem' }}>We have received your brief and will be in touch within 48 hours to arrange a consultation.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                {/* Contact */}
                <div className="ml-form-row-two">
                  <div style={fieldStyle}>
                    <label style={labelStyle}>Name *</label>
                    <input required style={inputStyle} value={form.name} onChange={set('name')} placeholder="Full name" />
                  </div>
                  <div style={fieldStyle}>
                    <label style={labelStyle}>Email *</label>
                    <input required type="email" style={inputStyle} value={form.email} onChange={set('email')} placeholder="you@example.com" />
                  </div>
                </div>
                <div style={fieldStyle}>
                  <label style={labelStyle}>Phone</label>
                  <input type="tel" style={inputStyle} value={form.phone} onChange={set('phone')} placeholder="Optional" />
                </div>

                {/* Brief */}
                <div style={fieldStyle}>
                  <label style={labelStyle}>Room type</label>
                  <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.roomType} onChange={set('roomType')}>
                    <option value="">Select a room</option>
                    {['Living room', 'Dining room', 'Bedroom', 'Hallway', 'Study / library', 'Reception / entrance', 'Other'].map(r => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>
                <div style={fieldStyle}>
                  <label style={labelStyle}>Approximate size (cm or ft)</label>
                  <input style={inputStyle} value={form.size} onChange={set('size')} placeholder="e.g. 280 × 380 cm" />
                </div>
                <div style={fieldStyle}>
                  <label style={labelStyle}>Colours / palette</label>
                  <input style={inputStyle} value={form.colours} onChange={set('colours')} placeholder="e.g. Warm ivory field, deep blue border" />
                </div>
                <div style={fieldStyle}>
                  <label style={labelStyle}>Design preferences</label>
                  <input style={inputStyle} value={form.motifs} onChange={set('motifs')} placeholder="e.g. Traditional medallion, geometric, minimal" />
                </div>
                <div className="ml-form-row-two">
                  <div style={fieldStyle}>
                    <label style={labelStyle}>Timeline</label>
                    <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.timeline} onChange={set('timeline')}>
                      <option value="">Select</option>
                      <option>Flexible (12+ months)</option>
                      <option>Within 12 months</option>
                      <option>Within 6 months</option>
                      <option>Urgent — please discuss</option>
                    </select>
                  </div>
                  <div style={fieldStyle}>
                    <label style={labelStyle}>Budget (approx.)</label>
                    <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.budget} onChange={set('budget')}>
                      <option value="">Select</option>
                      <option>Under £5,000</option>
                      <option>£5,000 – £10,000</option>
                      <option>£10,000 – £20,000</option>
                      <option>£20,000+</option>
                      <option>To be discussed</option>
                    </select>
                  </div>
                </div>
                <div style={fieldStyle}>
                  <label style={labelStyle}>Anything else</label>
                  <textarea style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }} value={form.notes} onChange={set('notes')} placeholder="Inspiration images, existing furniture, other details…" />
                </div>
                {error && <p style={{ color: 'red', fontSize: '0.875rem' }}>{error}</p>}
                <button type="submit" className="ml-btn ml-btn--primary" disabled={sending} style={{ alignSelf: 'flex-start' }}>
                  {sending ? 'Sending…' : 'Submit brief →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
