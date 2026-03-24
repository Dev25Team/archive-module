import { useMemo, useState } from 'react'
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'

const capabilities = [
  'Global sourcing strategy',
  'Wholesale coordination',
  'Supplier discovery and alignment',
  'Trade-ready communication',
]

const tradePillars = [
  {
    title: 'Sourcing With Intent',
    text:
      'We position sourcing as a disciplined commercial function: selective, documented, and built around long-term supply confidence rather than short-term noise.',
  },
  {
    title: 'Wholesale With Structure',
    text:
      'Our approach centers on clear coordination, stable counterpart expectations, and export-minded trade relationships that can scale with precision.',
  },
  {
    title: 'Presence With Credibility',
    text:
      'ARCHIVE MODULE SOL LLC was formed in Ohio in 2025, giving the business a registered operating base while presenting a modern international trade posture.',
  },
]

const narrativeSteps = [
  'Built for wholesale and global sourcing',
  'Designed to move between suppliers, buyers, and markets with clarity',
  'Positioned as a sharp, premium-facing trade company rather than a generic reseller',
]

const inquiryOptions = [
  'Wholesale Inquiry',
  'Supplier Introduction',
  'Sourcing Partnership',
  'General Business Inquiry',
]

const contactEmail = 'contact@archivemodulesolllc.online'
const websiteUrl = 'https://www.archivemodulesolllc.online/'

function App() {
  return (
    <BrowserRouter>
      <SiteShell />
    </BrowserRouter>
  )
}

function SiteShell() {
  const location = useLocation()

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grain" />
      <header className="topbar">
        <Link className="brand" to="/">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-glyph brand-glyph-left" />
            <span className="brand-glyph brand-glyph-right" />
            <span className="brand-core">A</span>
          </span>
          <span className="brand-text">
            <strong>ARCHIVE MODULE SOL LLC</strong>
            <em>Ohio • Global Sourcing • Wholesale</em>
          </span>
        </Link>

        <nav className="nav">
          {[
            ['/', 'Home'],
            ['/about', 'About'],
            ['/contact', 'Contact'],
          ].map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `nav-link${isActive ? ' nav-link-active' : ''}`
              }
              end={to === '/'}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Link className="button button-primary nav-cta" to="/contact">
          Start a Conversation
        </Link>
      </header>

      <main key={location.pathname} className="page-enter">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <footer className="footer">
        <div>
          <p className="footer-label">Registered Presence</p>
          <p>ARCHIVE MODULE SOL LLC</p>
          <p>Ohio, United States</p>
        </div>
        <div>
          <p className="footer-label">Formation Detail</p>
          <p>Effective date: June 25, 2025</p>
          <p>Purpose filed as wholesale and global sourcing</p>
        </div>
        <div>
          <p className="footer-label">Contact Layer</p>
          <p>Email: {contactEmail}</p>
          <p>
            Website:{' '}
            <a href={websiteUrl} target="_blank" rel="noreferrer">
              archivemodulesolllc.online
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero section-frame">
        <div className="eyebrow">Global trade presence, sharpened.</div>
        <div className="hero-grid">
          <div>
            <p className="hero-kicker">ARCHIVE MODULE SOL LLC</p>
            <h1>A sharper face for sourcing and wholesale.</h1>
          </div>
          <div className="hero-copy">
            <p>
              Built in Ohio and positioned for international commerce, ARCHIVE
              MODULE SOL LLC presents a trade-facing identity for buyers,
              partners, and sourcing conversations that require confidence from
              the first screen.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/contact">
                Open Inquiry
              </Link>
              <Link className="button button-secondary" to="/about">
                View Company Profile
              </Link>
            </div>
          </div>
        </div>

        <div className="ticker" aria-label="Company capabilities">
          <div className="ticker-track">
            {[...capabilities, ...capabilities].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-grid section-frame">
        <div className="section-heading">
          <p className="eyebrow">Positioning</p>
          <h2>Wholesale and global sourcing, translated into a premium B2B presence.</h2>
        </div>
        <div className="manifesto">
          <p>
            This first release is intentionally text-led. The brand is carried
            by composition, language, rhythm, and controlled motion instead of
            stock visuals or decorative corporate filler.
          </p>
          <p>
            The result is a trade website that feels deliberate: elegant enough
            for first contact, grounded enough for serious commercial dialogue.
          </p>
        </div>
      </section>

      <section className="cards cards-three">
        {tradePillars.map((pillar) => (
          <article className="panel" key={pillar.title}>
            <p className="panel-index">{pillar.title}</p>
            <p>{pillar.text}</p>
          </article>
        ))}
      </section>

      <section className="trust-band section-frame">
        <div className="trust-copy">
          <p className="eyebrow">Trust Layer</p>
          <h2>Registered in Ohio. Framed for cross-border trade.</h2>
          <p>
            The company formation became effective on June 25, 2025. That legal
            footing stays present in the background while the front of the brand
            stays focused on sourcing, movement, and commercial readiness.
          </p>
        </div>
        <div className="trust-facts">
          <div>
            <span>State</span>
            <strong>Ohio</strong>
          </div>
          <div>
            <span>Effective Date</span>
            <strong>06.25.2025</strong>
          </div>
          <div>
            <span>Filed Purpose</span>
            <strong>Wholesale and global sourcing</strong>
          </div>
        </div>
      </section>

      <section className="cta-block section-frame">
        <p className="eyebrow">Next Move</p>
        <h2>Use the site as an introduction. Use the conversation to define the trade path.</h2>
        <p>
          Whether the inquiry starts with sourcing, supply alignment, or market
          entry, the contact flow is designed to make that first step feel
          intentional.
        </p>
        <Link className="button button-primary" to="/contact">
          Contact ARCHIVE MODULE SOL LLC
        </Link>
      </section>
    </>
  )
}

function AboutPage() {
  return (
    <div className="inner-page">
      <section className="section-frame page-intro">
        <p className="eyebrow">About the Company</p>
        <h1>Trade presence with discipline, not noise.</h1>
        <p className="lead">
          ARCHIVE MODULE SOL LLC is positioned around wholesale and global
          sourcing, with a presentation built to support serious business
          conversations from the first interaction.
        </p>
      </section>

      <section className="section-grid">
        <div className="panel large-panel">
          <p className="eyebrow">Narrative</p>
          <p>
            The company enters the market with a clear posture: measured,
            capable, and international in outlook. Instead of looking like a
            generic catalog operation, it is framed as a sourcing-focused
            business that values structure, clarity, and premium business
            presentation.
          </p>
        </div>
        <div className="panel large-panel">
          <p className="eyebrow">Operating Philosophy</p>
          <p>
            The language, visual system, and site architecture all support the
            same idea: buyers and partners should immediately understand that
            this business is designed to coordinate trade with intention.
          </p>
        </div>
      </section>

      <section className="sequence">
        {narrativeSteps.map((step, index) => (
          <div className="sequence-row" key={step}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{step}</p>
          </div>
        ))}
      </section>

      <section className="cards cards-two">
        <article className="panel">
          <p className="panel-index">Commercial Readiness</p>
          <p>
            The company story is intentionally concise: formed in Ohio, aligned
            to wholesale and global sourcing, and presented through a brand
            system that communicates seriousness without resorting to stale
            corporate patterns.
          </p>
        </article>
        <article className="panel">
          <p className="panel-index">Brand Intent</p>
          <p>
            Every section is meant to feel directional. Typography carries the
            weight. Motion adds tempo. The absence of people-card clichés keeps
            the focus on capability, credibility, and contact.
          </p>
        </article>
      </section>
    </div>
  )
}

function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    inquiryType: inquiryOptions[0],
    message: '',
  })
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const errors = useMemo(() => {
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!form.company.trim()) nextErrors.company = 'Please enter your company name.'
    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please use a valid email address.'
    }
    if (!form.message.trim()) {
      nextErrors.message = 'Please outline your inquiry.'
    } else if (form.message.trim().length < 20) {
      nextErrors.message = 'Add a little more detail so the inquiry is actionable.'
    }

    return nextErrors
  }, [form])

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function handleBlur(event) {
    const { name } = event.target
    setTouched((current) => ({ ...current, [name]: true }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setTouched({
      name: true,
      company: true,
      email: true,
      inquiryType: true,
      message: true,
    })

    if (Object.keys(errors).length > 0) return

    setIsSubmitting(true)

    window.setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setForm({
        name: '',
        company: '',
        email: '',
        inquiryType: inquiryOptions[0],
        message: '',
      })
      setTouched({})
    }, 900)
  }

  return (
    <div className="contact-layout">
      <section className="section-frame contact-intro">
        <p className="eyebrow">Contact</p>
        <h1>Start the first serious conversation.</h1>
        <p className="lead">
          Use this form for sourcing inquiries, supplier introductions, and
          wholesale discussions. The interface is production-ready in structure
          and currently presents your live domain with a domain-matched contact
          email.
        </p>

        <div className="contact-meta">
          <div>
            <span>Email</span>
            <strong>{contactEmail}</strong>
          </div>
          <div>
            <span>Website</span>
            <strong>
              <a href={websiteUrl} target="_blank" rel="noreferrer">
                archivemodulesolllc.online
              </a>
            </strong>
          </div>
          <div>
            <span>Operating base</span>
            <strong>Ohio, United States</strong>
          </div>
        </div>
      </section>

      <section className="contact-grid">
        <form className="contact-form panel" onSubmit={handleSubmit} noValidate>
          {submitted ? (
            <div className="success-banner" role="status" aria-live="polite">
              <div className="success-icon" aria-hidden="true">
                ✓
              </div>
              <div>
                <p className="success-title">Inquiry sent successfully.</p>
                <p className="success-text">
                  Thank you. Your request has been recorded and is ready for the
                  next contact step. You can submit another inquiry any time.
                </p>
              </div>
            </div>
          ) : null}

          <label>
            <span>Name</span>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Your name"
            />
            {touched.name && errors.name ? (
              <small className="field-error">{errors.name}</small>
            ) : null}
          </label>

          <label>
            <span>Company</span>
            <input
              name="company"
              type="text"
              value={form.company}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Company name"
            />
            {touched.company && errors.company ? (
              <small className="field-error">{errors.company}</small>
            ) : null}
          </label>

          <label>
            <span>Email</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="name@company.com"
            />
            {touched.email && errors.email ? (
              <small className="field-error">{errors.email}</small>
            ) : null}
          </label>

          <label>
            <span>Inquiry Type</span>
            <select
              name="inquiryType"
              value={form.inquiryType}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {inquiryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Message</span>
            <textarea
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Tell us what market, sourcing path, or trade objective you want to discuss."
            />
            {touched.message && errors.message ? (
              <small className="field-error">{errors.message}</small>
            ) : null}
          </label>

          <button
            className="button button-primary"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending Inquiry...' : 'Send Inquiry'}
          </button>

          {submitted ? (
            <p className="submit-note">
              Success state is now visible on the page. The next production step
              is connecting this form to {contactEmail} or your CRM endpoint.
            </p>
          ) : (
            <p className="submit-note muted">
              Current behavior is front-end only by design for this version.
            </p>
          )}
        </form>

        <div className="contact-side panel">
          <p className="eyebrow">Use Cases</p>
          <h2>Built for direct business inquiries.</h2>
          <ul className="plain-list">
            <li>Wholesale buying discussions</li>
            <li>Supplier relationship openings</li>
            <li>Cross-border sourcing coordination</li>
            <li>Early-stage partnership exploration</li>
          </ul>

          <div className="divider" />

          <p className="eyebrow">Launch Note</p>
          <p>
            The contact layer is aligned to your live domain. If the final inbox
            uses a different mailbox name, the site copy can be updated without
            changing the layout.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App
