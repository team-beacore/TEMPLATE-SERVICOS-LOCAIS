export type FaqItem = {
  id: string
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    id: 'regioes',
    question: 'Quais regiões vocês atendem?',
    answer:
      'Atendemos toda a cidade de São Paulo e região metropolitana. Consulte a disponibilidade para o seu endereço pelo WhatsApp.',
  },
  {
    id: 'orcamento',
    question: 'Vocês fazem orçamento?',
    answer:
      'Sim. O orçamento é gratuito e sem compromisso, enviado de forma clara e transparente antes da execução do serviço.',
  },
  {
    id: 'garantia',
    question: 'Existe garantia nos serviços?',
    answer:
      'Sim. Todos os serviços contam com garantia e suporte após a conclusão, para você ficar tranquilo com o resultado.',
  },
  {
    id: 'prazo',
    question: 'Quanto tempo leva para realizar o atendimento?',
    answer:
      'Em geral, realizamos o primeiro atendimento em até 24 horas úteis após a confirmação do orçamento, dependendo da complexidade do serviço.',
  },
  {
    id: 'como-solicitar',
    question: 'Como posso solicitar um orçamento?',
    answer:
      'Pelo WhatsApp, pelo telefone ou pelo formulário de contato. Envie uma foto ou uma descrição do problema e retornamos rapidamente.',
  },
]