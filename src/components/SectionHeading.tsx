import { cn } from '../lib/utils'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <p
          className={cn(
            'text-xs font-semibold uppercase tracking-[0.2em]',
            dark ? 'text-brand-400' : 'text-brand-600',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl',
          dark ? 'text-white' : 'text-slate-900',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed sm:text-lg',
            dark ? 'text-slate-400' : 'text-slate-600',
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}