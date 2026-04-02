import { Link } from 'react-router-dom'
import ClickSpark from '../components/ClickSpark'

export default function HomePage() {
  return (
    <ClickSpark
      sparkColor="#e11d48"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
      className="home-spark-wrap"
    >
      <div className="home-main">
        <section className="home-hero">
          <div className="home-hero__eyebrow">
            <span>PORTFOLIO MMXXIV</span>
          </div>
          <h1 className="home-hero__title">
            ELARA
            <br />
            VANCE
            <span className="home-hero__subtitle">Visual Architect</span>
          </h1>
          <div className="home-hero__geo" aria-hidden="true">
            <div className="home-hero__geo-rule" />
            <div className="home-hero__geo-square" />
          </div>
          <div className="home-hero__actions">
            <Link className="btn-brutal btn-brutal--fill" to="/works">
              View work
            </Link>
            <Link className="btn-brutal btn-brutal--ghost" to="/contact">
              Contact
            </Link>
          </div>
        </section>

        <section className="home-ia" aria-label="Practice pillars">
          <div className="home-ia__cell">
            <span className="home-ia__label">01 / Discipline</span>
            <h3>Typography as Architecture</h3>
            <p>
              Exploring the intersection of geometric precision and organic
              legibility. Every letter is a structural component of the visual
              experience.
            </p>
          </div>
          <div className="home-ia__cell">
            <span className="home-ia__label">02 / Philosophy</span>
            <h3>The Void is Content</h3>
            <p>
              Whitespace is not empty; it is a breathing room for thought. We use
              distance to communicate importance and hierarchy.
            </p>
          </div>
          <div className="home-ia__cell">
            <span className="home-ia__label">03 / Execution</span>
            <h3>High Contrast Logic</h3>
            <p>
              A monochrome palette removes distraction. It forces the eye to
              focus on form, weight, and the rhythm of the layout.
            </p>
          </div>
        </section>

        <section className="home-quote">
          <blockquote>
            &ldquo;Design is not about adding more, but about removing everything
            that does not speak.&rdquo;
          </blockquote>
          <div className="home-quote__meta">
            <div className="home-quote__meta-rule" aria-hidden="true" />
            <span>Principles of Brutalism</span>
          </div>
        </section>

        <section className="home-manifesto" aria-label="Manifesto">
          <div className="home-manifesto__main">
            <h4>THE MANIFESTO</h4>
            <div className="home-manifesto__list">
              <p>— NO SHADOWS</p>
              <p>— NO GRADIENTS</p>
              <p>— NO COMPROMISE</p>
              <p>— ONLY FORM</p>
            </div>
          </div>
          <div className="home-manifesto__deg">
            <span>90°</span>
          </div>
          <div className="home-manifesto__icon">
            <span className="material-symbols-outlined" aria-hidden="true">
              architecture
            </span>
          </div>
          <div className="home-manifesto__process">
            <span className="label">Process</span>
            <p>
              Grids are the skeleton of truth. Everything must align to the
              anchor points of the canvas.
            </p>
          </div>
        </section>
      </div>
    </ClickSpark>
  )
}
