import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../lib/utils'

type Variant = 'primary' | 'secondary' | 'outline' | 'outlineLight' | 'white' | 'whatsapp'
type Size = 'sm' | 'md' | 'lg'

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60'

const variantClasses: Record<Variant, string> = {
  primary: 'bg-brand-600 text-white shadow-sm shadow-brand-600/30 hover:bg-brand-700',
  secondary: 'bg-slate-900 text-white hover:bg-slate-800',
  outline: 'border border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50',
  outlineLight:
    'border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:border-white/40 hover:bg-white/10',
  white: 'bg-white text-slate-900 hover:bg-slate-100',
  whatsapp: 'bg-whatsapp text-white shadow-sm shadow-green-600/30 hover:bg-whatsapp-dark',
}

const sizeClasses: Record<Size, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-sm',
  lg: 'h-14 px-8 text-base',
}

type BaseProps = {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children } = props
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className)

  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } =
      props as ButtonAsLink
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  const { variant: _v2, size: _s2, className: _c2, children: _ch2, ...rest } = props as ButtonAsButton
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}