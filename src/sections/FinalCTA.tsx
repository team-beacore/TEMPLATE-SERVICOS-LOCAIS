import { siteConfig } from '../config/site'
import { Icon } from '../components/Icon'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { telLink, whatsappLink } from '../lib/whatsapp'

export function FinalCTA() {
  const { finalCta } = siteConfig

  return (
    <Section className="relative overflow-hidden py-24 sm:py-32" contained={false}>
      <img
        src={siteConfig.images.finalCta}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px]"
      />

      <div className="container-page relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {finalCta.title}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {finalCta.subtitle}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={whatsappLink()} variant="whatsapp" size="lg">
              <Icon name="whatsapp" className="h-5 w-5" />
              {siteConfig.cta.whatsapp}
            </Button>
            <Button href={telLink()} variant="outlineLight" size="lg">
              <Icon name="phone" className="h-4 w-4" />
              {siteConfig.phone}
            </Button>
          </div>
        </Reveal>
        <Reveal delay={300}>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5 text-sm font-medium text-slate-300">
            {finalCta.trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <Icon name="checkCircle" className="h-4 w-4 text-brand-400" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}