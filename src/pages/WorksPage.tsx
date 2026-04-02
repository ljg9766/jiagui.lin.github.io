import { Link } from 'react-router-dom'

const PROJECTS = [
  {
    tag: '01 / ARCHITECTURE',
    title: 'Monolith Pavilion',
    body: 'An exploration of brutalist geometry and natural light within a high-density urban environment. Investigating the tension between concrete and void.',
  },
  {
    tag: '02 / INTERFACE',
    title: 'Ethos OS',
    body: 'A minimalist operating system concept designed to reduce cognitive load through typographic hierarchy and spatial awareness.',
  },
  {
    tag: '03 / IDENTITY',
    title: 'Fragment Collective',
    body: 'Visual identity for a decentralised art studio. Built on a modular grid system that adapts across physical and digital mediums.',
  },
  {
    tag: '04 / PUBLICATION',
    title: 'Negative Space',
    body: 'A limited edition hardcover book exploring the philosophy of silence in modern design. Printed on high-gsm uncoated paper.',
  },
] as const

export default function WorksPage() {
  return (
    <div className="works-main">
      <header className="works-header">
        <h1>Selected Projects.</h1>
        <div className="works-header__rule" aria-hidden="true" />
      </header>

      <section className="works-section" aria-label="Project list">
        <div className="works-grid">
          {PROJECTS.map((p) => (
            <article key={p.tag} className="work-card">
              <div className="work-card__preview">
                <span>Project Preview</span>
              </div>
              <div className="work-card__body">
                <span className="work-card__tag">{p.tag}</span>
                <h2>{p.title}</h2>
                <p>{p.body}</p>
                <a className="work-card__link" href="#">
                  Details
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="works-cta" aria-label="Collaboration">
        <h2>Interested in collaborating?</h2>
        <Link className="btn-brutal btn-brutal--ghost" to="/contact">
          Get in touch
        </Link>
      </section>
    </div>
  )
}
