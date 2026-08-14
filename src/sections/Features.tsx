import { features, stats } from '../data/features'
import type { Stat } from '../data/features'
import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { useCountUp, useInView } from '../lib/hooks'

function StatBlock({ stat, started }: { stat: Stat; started: boolean }) {
  const value = useCountUp(stat.value, started)

  return (
    <div className="text-center">
      <p className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {value}
        <span className="text-brand-500">{stat.suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium text-slate-400">{stat.label}</p>
    </div>
  )
}

export function Features() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25)

  return (
    <Section id="diferenciais" className="relative overflow-hidden bg-slate-950 py-24 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-white" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 h-96 w-[52rem] max-w-full -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl"
      />

      <SectionHeading
        dark
        eyebrow="Diferenciais"
        title="Por que escolher a Nova Prime?"
        subtitle="Entregamos mais do que um serviço: entregamos tranquilidade."
      />

      <div className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 90}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-brand-500/40 hover:bg-white/[0.07]">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/15 text-brand-400">
                <Icon name={feature.icon} className="h-[22px] w-[22px]" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{feature.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div
        ref={ref}
        className="relative mt-16 grid gap-10 rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-10 backdrop-blur-sm sm:grid-cols-3 sm:gap-6 sm:py-12"
      >
        {stats.map((stat) => (
          <StatBlock key={stat.label} stat={stat} started={inView} />
        ))}
      </div>
    </Section>
  )
}