import { useEffect, useRef } from 'react'
import type { GalleryItem } from '../data/gallery'
import { galleryCategoryLabel } from '../data/gallery'
import { useScrollLock } from '../lib/hooks'
import { Icon } from './Icon'

type GalleryModalProps = {
  items: GalleryItem[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export function GalleryModal({ items, index, onClose, onNavigate }: GalleryModalProps) {
  const closeRef = useRef<HTMLButtonElement | null>(null)
  const item = items[index]

  useScrollLock(true)

  useEffect(() => {
    closeRef.current?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onNavigate((index - 1 + items.length) % items.length)
      if (event.key === 'ArrowRight') onNavigate((index + 1) % items.length)
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, items.length, onClose, onNavigate])

  if (!item) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Visualização ampliada: ${item.title}`}
      className="fixed inset-0 z-[70] flex flex-col bg-slate-950/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="min-w-0">
          <h3 className="truncate font-display text-base font-bold text-white sm:text-lg">{item.title}</h3>
          <p className="mt-0.5 text-sm text-brand-400">{galleryCategoryLabel(item.category)}</p>
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar visualização ampliada"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
        >
          <Icon name="x" className="h-5 w-5" />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-4 pb-6 sm:px-16" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={() => onNavigate((index - 1 + items.length) % items.length)}
          aria-label="Imagem anterior"
          className="absolute left-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-slate-900/60 text-white transition-colors hover:bg-white/10 sm:left-5"
        >
          <Icon name="chevronLeft" className="h-5 w-5" />
        </button>

        <img
          src={item.srcFull}
          alt={item.alt}
          className="max-h-full w-auto max-w-full rounded-xl object-contain shadow-2xl"
        />

        <button
          type="button"
          onClick={() => onNavigate((index + 1) % items.length)}
          aria-label="Próxima imagem"
          className="absolute right-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-slate-900/60 text-white transition-colors hover:bg-white/10 sm:right-5"
        >
          <Icon name="chevronRight" className="h-5 w-5" />
        </button>
      </div>

      <p className="pb-5 text-center text-sm text-slate-400">
        {index + 1} de {items.length}
      </p>
    </div>
  )
}