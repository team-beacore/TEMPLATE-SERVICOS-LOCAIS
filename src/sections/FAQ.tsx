import { useState } from 'react'
import { faqItems } from '../data/faq'
import { FAQItem } from '../components/FAQItem'
import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { whatsappLink } from '../lib/whatsapp'

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null)

  return (
    <Section id="faq" className="bg-slate-50 py-24 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Perguntas frequentes"
            title="Ainda tem dúvidas?"
            subtitle="Separamos as respostas para as perguntas que mais recebemos no dia a dia."
          />

          <Reveal delay={160}>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <p className="font-semibold text-slate-900">Não encontrou o que procurava?</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                Fale diretamente com nossa equipe pelo WhatsApp e receba uma resposta rápida.
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                Chamar no WhatsApp
                <Icon name="arrowRight" className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-slate-200 bg-white shadow-card">
            {faqItems.map((item, index) => (
              <FAQItem
                key={item.id}
                item={item}
                index={index}
                isOpen={openId === item.id}
                onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}