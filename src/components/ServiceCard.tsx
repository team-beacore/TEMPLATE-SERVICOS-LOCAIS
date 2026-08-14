import type { Service } from '../data/services'
import { whatsappLink } from '../lib/whatsapp'
import { Icon } from './Icon'

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover sm:p-7">
      <span
        aria-hidden="true"
        className="absolute right-6 top-6 font-display text-3xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-brand-200 sm:right-7"
      >
        {service.number}
      </span>

      <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
        <Icon name={service.icon} className="h-6 w-6" />
      </span>

      <h3 className="mt-5 font-display text-lg font-bold text-slate-900">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{service.description}</p>

      <a
        href={whatsappLink(service.waMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
      >
        Solicitar orçamento
        <Icon
          name="arrowRight"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>
    </article>
  )
}