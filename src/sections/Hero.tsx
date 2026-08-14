import { siteConfig } from '../config/site'
import { whatsappLink } from '../lib/whatsapp'
import { Icon } from '../components/Icon'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'

export function Hero() {
  const { hero } = siteConfig
  const [before, after] = hero.title.split(hero.titleHighlight)

  return (
    <Section
      id="inicio"
      className="relative overflow-hidden bg-slate-50"
      contained={false}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-grid-slate opacity-40" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-brand-400/10 blur-3xl"
      />

      <div className="container-page relative grid items-center gap-14 pb-20 pt-32 sm:pt-36 lg:grid-cols-2 lg:gap-12 lg:pb-28 lg:pt-44">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
              {hero.badge}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
              {before}
              <span className="text-brand-600">{hero.titleHighlight}</span>
              {after}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappLink()} size="lg">
                {siteConfig.cta.primary}
              </Button>
              <Button href="#servicos" variant="outline" size="lg">
                {siteConfig.cta.secondary}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-sm font-medium text-slate-700">
              {hero.trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <Icon name="checkCircle" className="h-4 w-4 text-brand-600" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 -z-10 rounded-[2rem] bg-brand-100/60"
            />
            <img
              src={siteConfig.images.hero}
              alt="Profissional da Nova Prime realizando manutenção elétrica em residência"
              width={1280}
              height={960}
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-card-hover ring-1 ring-slate-900/10"
            />

            <div className="animate-float absolute -top-5 right-4 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/95 p-3 pr-4 shadow-card backdrop-blur sm:-right-5 sm:top-8">
              <img
                src={siteConfig.images.heroThumb}
                alt=""
                aria-hidden="true"
                width={48}
                height={48}
                loading="lazy"
                className="h-12 w-12 rounded-xl object-cover"
              />
              <div>
                <p className="font-display text-base font-bold text-slate-900">8+ anos</p>
                <p className="text-xs text-slate-500">de experiência</p>
              </div>
            </div>

            <div className="animate-float absolute -bottom-4 left-4 flex items-center gap-2 rounded-full border border-slate-100 bg-white/95 px-4 py-2.5 shadow-card backdrop-blur sm:-left-5 sm:bottom-8" style={{ animationDelay: '1.2s' }}>
              <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-100 text-brand-600">
                <Icon name="check" className="h-3.5 w-3.5" />
              </span>
              <p className="text-xs font-semibold text-slate-800">Orçamento transparente</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}