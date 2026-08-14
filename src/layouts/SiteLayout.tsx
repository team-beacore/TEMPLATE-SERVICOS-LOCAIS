import type { ReactNode } from 'react'

type SiteLayoutProps = {
  children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a
        href="#conteudo"
        className="sr-only z-[80] rounded-lg bg-brand-600 px-4 py-2 font-semibold text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>
      {children}
    </div>
  )
}