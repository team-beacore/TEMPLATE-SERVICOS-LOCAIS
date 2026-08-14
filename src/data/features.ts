import type { IconName } from '../lib/icons'

export type Feature = {
  icon: IconName
  title: string
  description: string
}

export const features: Feature[] = [
  {
    icon: 'clock',
    title: 'Atendimento rápido',
    description: 'Chegamos no dia seguinte ao seu contato, com horário combinado e pontualidade garantida.',
  },
  {
    icon: 'users',
    title: 'Profissionais experientes',
    description: 'Equipe própria, treinada e com anos de prática em serviços residenciais.',
  },
  {
    icon: 'receipt',
    title: 'Orçamento transparente',
    description: 'Valores claros e sem surpresas, informados antes de qualquer serviço ser executado.',
  },
  {
    icon: 'shieldCheck',
    title: 'Garantia do serviço',
    description: 'Todo trabalho realizado tem garantia e suporte após a conclusão.',
  },
]

export type Stat = {
  value: number
  suffix: string
  label: string
}

export const stats: Stat[] = [
  { value: 500, suffix: '+', label: 'Atendimentos realizados' },
  { value: 8, suffix: '+', label: 'Anos de experiência' },
  { value: 98, suffix: '%', label: 'Clientes satisfeitos' },
]