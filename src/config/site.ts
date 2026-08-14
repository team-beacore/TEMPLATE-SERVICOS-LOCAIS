/**
 * CONFIGURAÇÃO CENTRAL DO CLIENTE
 * ---------------------------------
 * Este é o único lugar que precisa ser alterado para transformar
 * esta demo em um site real de outro cliente:
 *
 * 1. Altere nome, cidade, telefone e redes sociais.
 * 2. Ajuste os textos abaixo (seção por seção).
 * 3. Troque os links de imagem em `images`.
 * 4. Para mudar as cores da marca, edite `tailwind.config.ts` (paleta `brand`).
 */

export const siteConfig = {
  // Identidade
  name: 'Nova Prime',
  fullName: 'Nova Prime Serviços',
  segment: 'Manutenção e Serviços Residenciais',
  city: 'São Paulo - SP',
  address: 'São Paulo, SP',

  // Contato
  phone: '(11) 99999-9999',
  phoneRaw: '5511999999999',
  whatsappNumber: '5511999999999',
  whatsappMessage: 'Olá! Gostaria de solicitar um orçamento.',
  email: 'contato@novaprimeservicos.com.br',
  instagram: '@novaprimeservicos',
  instagramUrl: 'https://www.instagram.com/novaprimeservicos',

  // Horários de atendimento
  hours: [
    { days: 'Segunda a sexta', time: '08:00 — 18:00' },
    { days: 'Sábado', time: '08:00 — 13:00' },
  ],

  // Navegação principal
  nav: [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ],

  // Links de navegação do rodapé
  footerNav: [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ],

  // CTAs
  cta: {
    primary: 'Solicitar orçamento',
    secondary: 'Conhecer serviços',
    whatsapp: 'Solicitar orçamento pelo WhatsApp',
  },

  // Hero
  hero: {
    badge: 'Manutenção e Serviços Residenciais',
    title: 'Serviços de confiança para cuidar do que realmente importa.',
    titleHighlight: 'confiança',
    subtitle:
      'Manutenção, reparos e instalações realizadas por profissionais experientes, com atendimento rápido e transparente.',
    trustPoints: ['Atendimento rápido', 'Profissionais experientes', 'Orçamento transparente'],
  },

  // Sobre
  about: {
    eyebrow: 'Sobre a Nova Prime',
    title: 'Experiência para resolver. Cuidado para entregar.',
    text: 'A Nova Prime nasceu para oferecer serviços residenciais com mais qualidade, transparência e profissionalismo. Nossa equipe trabalha para resolver cada problema de forma eficiente e deixar cada cliente seguro com o resultado.',
    bullets: [
      'Equipe própria, experiente e capacitada',
      'Orçamento gratuito e sem compromisso',
      'Garantia em todos os serviços realizados',
    ],
    cta: 'Conheça nosso trabalho',
  },

  // CTA final
  finalCta: {
    title: 'Precisa resolver um problema?',
    subtitle: 'Fale com nossa equipe e solicite um orçamento.',
    trustPoints: ['Orçamento gratuito', 'Atendimento rápido', 'Garantia do serviço'],
  },

  // Mapa / localização
  map: {
    label: 'São Paulo - SP',
    description: 'Atendemos toda a cidade e região metropolitana',
    url: 'https://www.google.com/maps/search/?api=1&query=S%C3%A3o+Paulo%2C+SP',
  },

  // SEO
  seo: {
    title: 'Nova Prime Serviços | Manutenção Residencial em São Paulo',
    description:
      'Manutenção, reparos e instalações residenciais com atendimento rápido e profissional em São Paulo.',
  },

  // Imagens (troque os links quando tiver as fotos do cliente)
  images: {
    hero: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1280&q=80',
    heroThumb: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=200&q=80',
    about: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    aboutSecondary:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
    finalCta: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
  },
} as const

export type SiteConfig = typeof siteConfig