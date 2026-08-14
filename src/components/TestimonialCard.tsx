import type { Testimonial } from '../data/testimonials'
import { Icon } from './Icon'

function initials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-8">
      <div className="flex items-center gap-1" aria-label={`Avaliação: ${testimonial.rating} de 5 estrelas`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Icon
            key={index}
            name="star"
            className={
              index < testimonial.rating ? 'h-4 w-4 text-amber-400' : 'h-4 w-4 text-slate-200'
            }
          />
        ))}
      </div>

      <blockquote className="mt-4 flex-1">
        <p className="leading-relaxed text-slate-600">“{testimonial.quote}”</p>
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
        <span
          aria-hidden="true"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white"
        >
          {initials(testimonial.name)}
        </span>
        <div>
          <p className="font-semibold text-slate-900">{testimonial.name}</p>
          <p className="text-sm text-slate-500">{testimonial.role}</p>
        </div>
      </figcaption>
    </figure>
  )
}