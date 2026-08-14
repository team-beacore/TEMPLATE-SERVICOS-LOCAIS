export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
  rating: number
}

/**
 * Depoimentos fictícios para fins de demonstração.
 * Substitua pelos depoimentos reais do cliente.
 */
export const testimonials: Testimonial[] = [
  {
    id: 'mariana-costa',
    quote:
      'Precisava resolver um problema hidráulico rapidamente e fui muito bem atendida. O serviço foi excelente e o ambiente ficou limpo ao final.',
    name: 'Mariana Costa',
    role: 'Cliente residencial · Zona Sul',
    rating: 5,
  },
  {
    id: 'carlos-eduardo',
    quote:
      'Profissionais pontuais e com muito cuidado. O orçamento foi exatamente o valor final, sem surpresas. Recomendo para quem busca tranquilidade.',
    name: 'Carlos Eduardo Martins',
    role: 'Condomínio · Zona Oeste',
    rating: 5,
  },
  {
    id: 'ana-beatriz',
    quote:
      'Contratei a instalação de luminárias e a montagem de alguns móveis. Tudo feito no mesmo dia, com acabamento impecável.',
    name: 'Ana Beatriz Lima',
    role: 'Apartamento · Centro',
    rating: 5,
  },
]

export const testimonialsDisclaimer =
  'Depoimentos ilustrativos para fins de demonstração do template.'