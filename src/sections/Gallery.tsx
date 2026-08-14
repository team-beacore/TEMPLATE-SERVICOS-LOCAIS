import { useCallback, useMemo, useState } from 'react'
import { galleryCategories, galleryItems } from '../data/gallery'
import type { GalleryCategory } from '../data/gallery'
import { GalleryModal } from '../components/GalleryModal'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { cn } from '../lib/utils'

type Filter = GalleryCategory | 'todos'

export function Gallery() {
  const [filter, setFilter] = useState<Filter>('todos')
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const visibleItems = useMemo(
    () => (filter === 'todos' ? galleryItems : galleryItems.filter((item) => item.category === filter)),
    [filter],
  )

  const handleClose = useCallback(() => setSelectedIndex(null), [])
  const handleNavigate = useCallback((index: number) => setSelectedIndex(index), [])

  return (
    <Section id="galeria" className="bg-slate-50 py-24 sm:py-28">
      <SectionHeading
        eyebrow="Galeria"
        title="Trabalhos que falam por nós."
        subtitle="Conheça um pouco do que já entregamos em lares de São Paulo."
      />

      <Reveal delay={120}>
        <div
          role="group"
          aria-label="Filtrar trabalhos por categoria"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              aria-pressed={filter === category.id}
              onClick={() => setFilter(category.id)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                filter === category.id
                  ? 'bg-brand-600 text-white shadow-sm shadow-brand-600/30'
                  : 'border border-slate-300 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-900',
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div key={filter} className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {visibleItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelectedIndex(index)}
            aria-label={`Ampliar imagem: ${item.title}`}
            style={{ animationDelay: `${index * 40}ms` }}
            className={cn(
              'group relative animate-fade-in overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600',
              index === 0 && 'col-span-2 row-span-2',
            )}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className={cn(
                'w-full object-cover transition-transform duration-500 group-hover:scale-105',
                index === 0 ? 'aspect-[4/3] h-full' : 'aspect-[4/3]',
              )}
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-4 text-left">
              <span className="translate-y-1 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.title}
              </span>
              <span
                aria-hidden="true"
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/90 text-slate-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </span>
            </span>
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <GalleryModal
          items={visibleItems}
          index={selectedIndex}
          onClose={handleClose}
          onNavigate={handleNavigate}
        />
      )}
    </Section>
  )
}