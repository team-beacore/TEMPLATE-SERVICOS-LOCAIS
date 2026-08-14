import { siteConfig } from '../config/site'
import { whatsappLink } from '../lib/whatsapp'
import { Icon } from './Icon'

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversa no WhatsApp para solicitar orçamento"
      className="group fixed bottom-5 right-5 z-[60] grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg shadow-green-600/30 transition-transform duration-200 hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 animate-ping rounded-full bg-whatsapp/70"
      />
      <Icon name="whatsapp" className="h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 sm:block">
        Solicitar orçamento
      </span>
      <span className="sr-only">{siteConfig.cta.primary}</span>
    </a>
  )
}