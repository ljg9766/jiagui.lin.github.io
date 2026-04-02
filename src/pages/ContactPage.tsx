import type { FormEvent } from 'react'

export default function ContactPage() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <>
      <div className="contact-page">
        <div className="contact-grid">
          <div className="contact-left">
            <h1>
              Let&apos;s
              <br />
              Connect.
            </h1>
            <div className="contact-links">
              <div className="contact-row">
                <a href="mailto:hello@studio.com">
                  <span>Email</span>
                  <span className="material-symbols-outlined" aria-hidden="true">
                    arrow_outward
                  </span>
                </a>
              </div>
              <div className="contact-row">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>GitHub</span>
                  <span className="material-symbols-outlined" aria-hidden="true">
                    arrow_outward
                  </span>
                </a>
              </div>
              <p className="contact-note">Other channels: TBD</p>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="contact-field">
                <label htmlFor="contact-name">Full Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="John Doe"
                />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="john@example.com"
                />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Briefly describe your inquiry..."
                />
              </div>
              <button type="submit">Send</button>
            </form>

            <div className="contact-aside">
              <h3>Project Availability</h3>
              <p>
                Currently accepting new creative partnerships for Q3 2024.
                Available for design systems, web architecture, and editorial
                direction.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-bottom">
        <div className="contact-bottom__rule" aria-hidden="true" />
        <div className="contact-bottom__grid">
          <div>
            <span className="label">Location</span>
            <span className="value">New York, NY / Remote</span>
          </div>
          <div>
            <span className="label">Timezone</span>
            <span className="value">EST (UTC-5)</span>
          </div>
          <div className="span-2">
            <p className="contact-bottom__quote">
              Information is architecture. Design is the structural rule.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
