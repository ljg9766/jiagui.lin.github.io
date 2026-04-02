import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About', end: false },
  { to: '/works', label: 'Works', end: false },
  { to: '/contact', label: 'Contact', end: false },
] as const

function linkClass(active: boolean) {
  return active
    ? 'studio-nav__link studio-nav__link--active'
    : 'studio-nav__link'
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="studio-nav" aria-label="Primary">
      <NavLink className="studio-nav__brand" to="/" end onClick={() => setOpen(false)}>
        STUDIO
      </NavLink>

      <ul className="studio-nav__links">
        {LINKS.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink to={to} end={end} className={({ isActive }) => linkClass(isActive)}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="studio-nav__menu-btn"
        aria-expanded={open}
        aria-controls="studio-nav-drawer"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
      </button>

      {open ? (
        <div id="studio-nav-drawer" className="studio-nav__drawer">
          {LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => linkClass(isActive)}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      ) : null}
    </nav>
  )
}
