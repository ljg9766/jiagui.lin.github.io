import { Outlet, useLocation } from 'react-router-dom'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

function footerVariantForPath(pathname: string) {
  if (pathname === '/') return 'hero' as const
  if (pathname === '/contact') return 'contact' as const
  if (pathname === '/about') return 'about' as const
  return 'default' as const
}

export function SiteLayout() {
  const { pathname } = useLocation()

  return (
    <div className="studio-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="studio-main">
        <div key={pathname} className="page-fade">
          <Outlet />
        </div>
      </main>
      <SiteFooter variant={footerVariantForPath(pathname)} />
      {pathname === '/about' ? (
        <div className="studio-footer__bar" aria-hidden="true" />
      ) : null}
    </div>
  )
}
