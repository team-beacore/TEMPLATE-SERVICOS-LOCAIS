import { useEffect, useState } from 'react'
import { siteConfig } from '../config/site'
import { useActiveSection, useIsScrolled } from '../lib/hooks'
import { whatsappLink } from '../lib/whatsapp'
import { cn } from '../lib/utils'
import { Button } from './Button'
import { Icon } from './Icon'
import { Logo } from './Logo'

const navHrefs = siteConfig.nav.map((link) => link.href)

export function Navbar() {
  const scrolled = useIsScrolled(10)
  const active = useActiveSection(navHrefs)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        solid
          ? 'border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav aria-label="Navegação principal" className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />

        <ul className="hidden items-center gap-0.5 lg:flex">
          {siteConfig.nav.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? 'true' : undefined}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  active === link.href
                    ? 'text-brand-700'
                    : 'text-slate-600 hover:bg-slate-100/70 hover:text-slate-900',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button href={whatsappLink()} size="sm" className="hidden sm:inline-flex">
            {siteConfig.cta.primary}
          </Button>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900 lg:hidden"
          >
            <Icon name={open ? 'x' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          'overflow-hidden border-t border-slate-200/70 bg-white/95 backdrop-blur-lg transition-[max-height,opacity] duration-300 ease-out lg:hidden',
          open ? 'max-h-[28rem] opacity-100' : 'max-h-0 border-t-0 opacity-0',
        )}
      >
        <ul className="container-page space-y-1 py-4">
          {siteConfig.nav.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active === link.href ? 'true' : undefined}
                className={cn(
                  'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                  active === link.href
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-slate-700 hover:bg-slate-100',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <Button
              href={whatsappLink()}
              size="md"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              {siteConfig.cta.primary}
            </Button>
          </li>
        </ul>
      </div>
    </header>
  )
}