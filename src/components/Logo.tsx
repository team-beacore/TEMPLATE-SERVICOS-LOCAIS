import { siteConfig } from '../config/site'
import { cn } from '../lib/utils'
import { Icon } from './Icon'

type LogoProps = {
  /** Tema claro (sobre fundo escuro) */
  light?: boolean
  className?: string
}

export function Logo({ light = false, className }: LogoProps) {
  const [firstWord = 'Nova', ...rest] = siteConfig.name.split(' ')
  const lastWord = rest.length > 0 ? rest.join(' ') : firstWord

  return (
    <a
      href="#inicio"
      className={cn('flex items-center gap-2.5', className)}
      aria-label={`${siteConfig.fullName} - voltar ao início`}
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-600 text-white shadow-sm shadow-brand-600/30">
        <Icon name="wrench" className="h-5 w-5" />
      </span>
      <span
        className={cn(
          'font-display text-base font-bold uppercase tracking-wide sm:text-lg',
          light ? 'text-white' : 'text-slate-900',
        )}
      >
        {firstWord} <span className="text-brand-500">{lastWord}</span>
      </span>
    </a>
  )
}