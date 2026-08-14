import { services } from '../data/services'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceCard } from '../components/ServiceCard'

export function Services() {
  return (
    <Section id="servicos" className="bg-white py-24 sm:py-28">
      <SectionHeading
        eyebrow="Nossos serviços"
        title="Serviços que resolvem o problema."
        subtitle="Conte com nossa equipe para manutenção, reparos e instalações."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {services.map((service, index) => (
          <Reveal key={service.id} delay={(index % 3) * 90}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}