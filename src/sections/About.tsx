import { siteConfig } from '../config/site'
import { Icon } from '../components/Icon'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'

export function About() {
  const { about } = siteConfig

  return (
    <Section id="sobre" className="bg-white py-24 sm:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 -z-10 rounded-[2rem] bg-brand-100/50"
            />
            <img
              src={siteConfig.images.about}
              alt="Profissional da Nova Prime realizando manutenção em residência"
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-card-hover ring-1 ring-slate-900/10"
            />

            <div className="absolute -bottom-6 -right-3 w-40 overflow-hidden rounded-2xl border-4 border-white shadow-card sm:-right-6 sm:w-52">
              <img
                src={siteConfig.images.aboutSecondary}
                alt="Técnico ajustando ferramentas durante serviço"
                width={800}
                height={600}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            <div className="absolute -top-5 left-4 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/95 px-4 py-3 shadow-card backdrop-blur">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-white">
                <Icon name="shieldCheck" className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-slate-900">Garantia</p>
                <p className="text-xs text-slate-500">em todos os serviços</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
              {about.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {about.title}
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              {about.text}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <ul className="mt-7 space-y-3">
              {about.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-600">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-medium">{bullet}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-9">
              <Button href="#galeria" variant="secondary" size="lg">
                {about.cta}
                <Icon name="arrowRight" className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}