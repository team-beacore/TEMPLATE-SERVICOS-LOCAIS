import type { IconName } from '../lib/icons'

export type Service = {
  id: string
  number: string
  icon: IconName
  title: string
  description: string
  /** Mensagem pré-preenchida enviada ao WhatsApp quando o cliente clica no CTA do card */
  waMessage: string
}

export const services: Service[] = [
  {
    id: 'manutencao-residencial',
    number: '01',
    icon: 'wrench',
    title: 'Manutenção Residencial',
    description: 'Pequenos reparos e ajustes em toda a casa, resolvidos de forma rápida e sem complicação.',
    waMessage: 'Olá! Gostaria de solicitar um orçamento para o serviço de Manutenção Residencial.',
  },
  {
    id: 'instalacoes',
    number: '02',
    icon: 'hammer',
    title: 'Instalações',
    description: 'Montagem de móveis, eletrodomésticos, luminárias e acessórios com precisão e segurança.',
    waMessage: 'Olá! Gostaria de solicitar um orçamento para o serviço de Instalações.',
  },
  {
    id: 'reparos-eletricos',
    number: '03',
    icon: 'zap',
    title: 'Reparos Elétricos',
    description: 'Troca de tomadas e disjuntores, correções de pontos de energia e pequenas instalações.',
    waMessage: 'Olá! Gostaria de solicitar um orçamento para o serviço de Reparos Elétricos.',
  },
  {
    id: 'reparos-hidraulicos',
    number: '04',
    icon: 'droplet',
    title: 'Reparos Hidráulicos',
    description: 'Vazamentos, torneiras, registros e descargas corrigidos com agilidade e limpeza.',
    waMessage: 'Olá! Gostaria de solicitar um orçamento para o serviço de Reparos Hidráulicos.',
  },
  {
    id: 'pintura-acabamento',
    number: '05',
    icon: 'paintbrush',
    title: 'Pintura e Acabamento',
    description: 'Retoques e repintura de ambientes com acabamento profissional e cuidado com sua casa.',
    waMessage: 'Olá! Gostaria de solicitar um orçamento para o serviço de Pintura e Acabamento.',
  },
  {
    id: 'manutencao-preventiva',
    number: '06',
    icon: 'shieldCheck',
    title: 'Manutenção Preventiva',
    description: 'Revisões periódicas para manter instalações e equipamentos sempre em perfeito estado.',
    waMessage: 'Olá! Gostaria de solicitar um orçamento para o serviço de Manutenção Preventiva.',
  },
]