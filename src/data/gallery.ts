export type GalleryCategory = 'manutencao' | 'instalacao' | 'reparos'

export type GalleryItem = {
  id: string
  title: string
  category: GalleryCategory
  /** Imagem para o grid (menor) */
  src: string
  /** Imagem para o modal ampliado (maior) */
  srcFull: string
  alt: string
}

export const galleryCategories: Array<{ id: GalleryCategory | 'todos'; label: string }> = [
  { id: 'todos', label: 'Todos' },
  { id: 'manutencao', label: 'Manutenção' },
  { id: 'instalacao', label: 'Instalação' },
  { id: 'reparos', label: 'Reparos' },
]

export const galleryCategoryLabel = (category: GalleryCategory): string =>
  galleryCategories.find((c) => c.id === category)?.label ?? category

/**
 * Imagens de referência (Unsplash) para a demonstração.
 * Troque pelas fotos reais dos trabalhos do cliente.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Manutenção geral em residência',
    category: 'manutencao',
    src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=80',
    alt: 'Profissional realizando manutenção com furadeira em ambiente residencial',
  },
  {
    id: 'g2',
    title: 'Instalação hidráulica',
    category: 'instalacao',
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80',
    alt: 'Profissional instalando pia e torneira de cozinha',
  },
  {
    id: 'g3',
    title: 'Painel elétrico revisado',
    category: 'reparos',
    src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1600&q=80',
    alt: 'Técnico ajustando o painel elétrico residencial',
  },
  {
    id: 'g4',
    title: 'Higienização completa',
    category: 'manutencao',
    src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80',
    alt: 'Profissional de limpeza com luvas em ambiente residencial',
  },
  {
    id: 'g5',
    title: 'Reforma de banheiro',
    category: 'instalacao',
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80',
    alt: 'Banheiro reformado com acabamento finalizado',
  },
  {
    id: 'g6',
    title: 'Pintura de parede',
    category: 'reparos',
    src: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1600&q=80',
    alt: 'Pintura de parede com rolo de tinta',
  },
  {
    id: 'g7',
    title: 'Kit de ferramentas',
    category: 'manutencao',
    src: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1600&q=80',
    alt: 'Ferramentas profissionais organizadas sobre mesa',
  },
  {
    id: 'g8',
    title: 'Cozinha montada e finalizada',
    category: 'instalacao',
    src: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1600&q=80',
    alt: 'Cozinha residencial montada e limpa após instalação',
  },
  {
    id: 'g9',
    title: 'Instalação elétrica',
    category: 'reparos',
    src: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=80',
    srcFull: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1600&q=80',
    alt: 'Eletricista profissional realizando instalação elétrica',
  },
]