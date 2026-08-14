import { siteConfig } from '../config/site'
import { telLink, whatsappLink } from '../lib/whatsapp'
import { Icon } from './Icon'
import { Logo } from './Logo'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="max-w-xs">
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed">
            {siteConfig.segment} em {siteConfig.city}, com atendimento rápido, transparente e
            profissional.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram: ${siteConfig.instagram}`}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-brand-500/50 hover:text-brand-400"
            >
              <Icon name="instagram" className="h-[18px] w-[18px]" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-brand-500/50 hover:text-brand-400"
            >
              <Icon name="whatsapp" className="h-[18px] w-[18px]" />
            </a>
            <a
              href={telLink()}
              aria-label={`Telefone: ${siteConfig.phone}`}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-brand-500/50 hover:text-brand-400"
            >
              <Icon name="phone" className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        <nav aria-label="Links do rodapé">
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {siteConfig.footerNav.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
            Serviços
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href="#servicos" className="transition-colors hover:text-white">
                Manutenção Residencial
              </a>
            </li>
            <li>
              <a href="#servicos" className="transition-colors hover:text-white">
                Instalações
              </a>
            </li>
            <li>
              <a href="#servicos" className="transition-colors hover:text-white">
                Reparos Elétricos e Hidráulicos
              </a>
            </li>
            <li>
              <a href="#servicos" className="transition-colors hover:text-white">
                Pintura e Acabamento
              </a>
            </li>
            <li>
              <a href="#servicos" className="transition-colors hover:text-white">
                Manutenção Preventiva
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={telLink()}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Icon name="phone" className="h-4 w-4 text-brand-500" />
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Icon name="whatsapp" className="h-4 w-4 text-brand-500" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Icon name="instagram" className="h-4 w-4 text-brand-500" />
                {siteConfig.instagram}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="mapPin" className="h-4 w-4 text-brand-500" />
              {siteConfig.city}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {year} {siteConfig.fullName}. Todos os direitos reservados.
          </p>
          <p>Site demonstrativo — template de serviços locais.</p>
        </div>
      </div>
    </footer>
  )
}