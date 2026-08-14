import { testimonials, testimonialsDisclaimer } from '../data/testimonials'
import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { TestimonialCard } from '../components/TestimonialCard'

export function Testimonials() {
  return (
    <Section id="depoimentos" className="bg-white py-24 sm:py-28">
      <SectionHeading
        eyebrow="Depoimentos"
        title="Quem já contratou, recomenda."
        subtitle="A confiança dos nossos clientes é o nosso melhor cartão de visita."
      />

      <Reveal delay={100}>
        <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-slate-400">
          <Icon name="sparkles" className="h-3.5 w-3.5" />
          {testimonialsDisclaimer}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-7">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.id} delay={index * 110}>
            <TestimonialCard testimonial={testimonial} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}