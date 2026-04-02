type FooterVariant = 'hero' | 'default' | 'about' | 'contact'

type SiteFooterProps = {
  variant: FooterVariant
}

export function SiteFooter({ variant }: SiteFooterProps) {
  const links = (
    <div className="studio-footer__links">
      <a href="mailto:hello@studio.practice">Email</a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </div>
  )

  if (variant === 'about') {
    return (
      <footer className="studio-footer studio-footer--about">
        <div className="studio-footer__meta">
          <span>© 2024 ALL RIGHTS RESERVED</span>
        </div>
        {links}
      </footer>
    )
  }

  if (variant === 'contact') {
    return (
      <footer className="studio-footer studio-footer--contact">
        {links}
        <div className="studio-footer__copyright">© 2024 ALL RIGHTS RESERVED</div>
      </footer>
    )
  }

  if (variant === 'hero') {
    return (
      <footer className="studio-footer">
        <div className="studio-footer__meta">
          <span>© 2024 ALL RIGHTS RESERVED</span>
          <span className="studio-footer__tag">DESIGNED IN THE VOID</span>
        </div>
        {links}
      </footer>
    )
  }

  return (
    <footer className="studio-footer">
      <div className="studio-footer__meta">
        <span>© 2024 ALL RIGHTS RESERVED</span>
      </div>
      {links}
    </footer>
  )
}
