export default function AboutPage() {
  return (
    <div className="about-main">
      <div className="about-grid">
        <aside className="about-margin about-margin--left" aria-hidden="true">
          <div className="about-margin__inner">
            <div className="about-square-sm" />
            <div className="about-square-sm" />
            <div className="about-square-sm" />
          </div>
        </aside>

        <div className="about-content">
          <section className="about-hero">
            <p className="about-hero__label">SECTION 01 / PHILOSOPHY</p>
            <h1 className="about-hero__title">About the Practice.</h1>
            <div className="about-rule" aria-hidden="true" />
          </section>

          <article className="about-article">
            <div className="about-block">
              <p className="lead">
                The practice of STUDIO is rooted in the rigorous interrogation of
                the digital form. We do not design for the eye alone; we design
                for the structural integrity of communication. By stripping away
                the ornament, we reveal the raw architecture of the message,
                ensuring that every pixel serves a programmatic purpose.
              </p>
              <div className="about-rule" aria-hidden="true" />
            </div>

            <div className="about-block about-block--right">
              <p className="pull">
                &ldquo;In an era of visual overstimulation, silence is the most
                aggressive statement a brand can make.&rdquo;
              </p>
              <p>
                Our methodology rejects the current trend of ephemeral
                &lsquo;user delight&rsquo; in favor of enduring structural
                utility. We utilize a monochrome palette not as a limitation,
                but as a deliberate framework that forces clarity. This is the
                Typographic Brutalist approach: where the weight of the font is
                the primary driver of the user&apos;s emotional response.
              </p>
              <div className="about-rule" aria-hidden="true" />
            </div>

            <div className="about-block">
              <p className="mono-label">Structural Foundations</p>
              <p>
                We operate at the intersection of traditional Swiss editorial
                design and contemporary technological precision. Each project
                begins with a 0-radius grid—a mathematical certainty that
                governs every alignment. From high-end editorial portals to
                technical documentations, our work prioritizes the hierarchy of
                information above all else. We do not use imagery to fill space;
                we use space to define the intellectual weight of the content.
              </p>
              <div className="about-rule" aria-hidden="true" />
            </div>

            <div className="about-block about-block--right">
              <p>
                The absence of shadow is the presence of truth. By eliminating the
                Z-axis, we bring the viewer closer to the typography, creating a
                tactile relationship with the screen that mirrors the experience
                of printed matter. Our practice is an ongoing experiment in the
                limits of minimalism, proving that information is architecture.
              </p>
              <div className="about-rule about-rule--thick" aria-hidden="true" />
            </div>
          </article>

          <section className="about-cta">
            <div className="about-cta__grid">
              <div>
                <h3>CONTACT</h3>
                <a href="mailto:hello@studio.practice">hello@studio.practice</a>
              </div>
              <div className="about-cta__accent">
                <div className="about-cta__square" aria-hidden="true" />
              </div>
            </div>
          </section>
        </div>

        <aside className="about-margin about-margin--right" aria-hidden="true">
          <div className="about-margin__inner">
            <div className="about-square-lg" />
            <div className="about-bar-v" />
            <div className="about-square-lg" />
          </div>
        </aside>
      </div>
    </div>
  )
}
