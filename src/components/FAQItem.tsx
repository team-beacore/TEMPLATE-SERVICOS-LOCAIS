import type { FaqItem } from '../data/faq'
import { cn } from '../lib/utils'
import { Icon } from './Icon'

type FAQItemProps = {
  item: FaqItem
  index: number
  isOpen: boolean
  onToggle: () => void
}

export function FAQItem({ item, index, isOpen, onToggle }: FAQItemProps) {
  const buttonId = `faq-button-${item.id}`
  const panelId = `faq-panel-${item.id}`

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
        >
          <span className="font-semibold text-slate-900">
            <span className="mr-2 font-display text-sm font-bold text-brand-600">
              {String(index + 1).padStart(2, '0')}
            </span>
            {item.question}
          </span>
          <span
            aria-hidden="true"
            className={cn(
              'grid h-7 w-7 shrink-0 place-items-center rounded-full border border-slate-300 text-slate-500 transition-all duration-300',
              isOpen && 'rotate-180 border-brand-600 bg-brand-600 text-white',
            )}
          >
            <Icon name="chevronDown" className="h-4 w-4" />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          'grid transition-[grid-template-rows] duration-300 ease-out',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6 sm:text-base">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}