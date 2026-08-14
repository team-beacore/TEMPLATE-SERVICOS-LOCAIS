import type { ReactNode } from 'react'
import { cn } from '../lib/utils'

type SectionProps = {
  id?: string
  className?: string
  children: ReactNode
  /** Define se o conteúdo usa o container padrão com largura máxima */
  contained?: boolean
}

export function Section({ id, className, children, contained = true }: SectionProps) {
  return (
    <section id={id} className={className}>
      {contained ? <div className="container-page">{children}</div> : children}
    </section>
  )
}