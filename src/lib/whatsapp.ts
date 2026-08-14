import { siteConfig } from '../config/site'

export function whatsappLink(message?: string): string {
  const text = message ?? siteConfig.whatsappMessage
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`
}

export function telLink(): string {
  return `tel:+${siteConfig.phoneRaw}`
}