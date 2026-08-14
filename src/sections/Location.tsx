import { siteConfig } from '../config/site'
import { ContactForm } from '../components/ContactForm'
import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { telLink, whatsappLink } from '../lib/whatsapp'

const contactChannels = [
  {
    icon: 'whatsapp' as const,
    label: 'WhatsApp',
    value: siteConfig.phone,
    href: whatsappLink(),
    external: true,
  },
  {
    icon: 'phone' as const,
    label: 'Telefone',
    value: siteConfig.phone,
    href: telLink(),
    external: false,
  },
  {
    icon: 'instagram' as const,
    label: 'Instagram',
    value: siteConfig.instagram,
    href: siteConfig.instagramUrl,
    external: true,
  },
  {
    icon: 'mapPin' as const,
    label: 'Localização',
    value: siteConfig.city,
    href: siteConfig.map.url,
    external: true,
  },
]

export function Location() {
  return (
    <Section id="contato" className="bg-white py-24 sm:py-28">
      <SectionHeading
        eyebrow="Contato e localização"
        title="Fale com a gente."
        subtitle="Tire dúvidas ou solicite um orçamento gratuito e sem compromisso."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-12">
        <div className="space-y-6 lg:col-span-2">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {contactChannels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card-hover"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon name={channel.icon} className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    {channel.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{channel.value}</p>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name="clock" className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base font-bold text-slate-900">Horário de atendimento</h3>
              </div>
              <dl className="mt-4 space-y-2.5 text-sm">
                {siteConfig.hours.map((hour) => (
                  <div key={hour.days} className="flex items-center justify-between gap-4">
                    <dt className="text-slate-600">{hour.days}</dt>
                    <dd className="font-semibold text-slate-900">{hour.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-card">
              <div aria-hidden="true" className="absolute inset-0 bg-grid-slate opacity-50" />
              <div className="relative flex aspect-[4/3] flex-col items-center justify-center gap-3 p-6 text-center">
                <span className="relative grid h-14 w-14 place-items-center rounded-full bg-brand-600 text-white shadow-lg shadow-brand-600/30">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 animate-ping rounded-full bg-brand-500/40"
                  />
                  <Icon name="mapPin" className="h-7 w-7" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-slate-900">{siteConfig.map.label}</p>
                  <p className="mt-0.5 text-sm text-slate-500">{siteConfig.map.description}</p>
                </div>
                <a
                  href={siteConfig.map.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                >
                  Ver no Google Maps
                  <Icon name="externalLink" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100} className="lg:col-span-3">
          <div className="h-full rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-card sm:p-8">
            <h3 className="font-display text-xl font-bold text-slate-900">
              Solicite seu orçamento
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
              Preencha o formulário e retornaremos com uma proposta clara e sem compromisso.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}