import { useEffect, useState, type CSSProperties } from 'react'
import { CategoryNav } from '../components/CategoryNav'
import { Header } from '../components/Header'
import { MenuSection } from '../components/MenuSection'
import { menu } from '../data/menu'
import { site } from '../lib/site'

const STICKY_OFFSET = 150

export function CardapioPage() {
  const [activeId, setActiveId] = useState(menu[0]?.id ?? '')
  const [compactHeader, setCompactHeader] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setCompactHeader(window.scrollY > 24)

      let current = menu[0]?.id ?? ''
      for (const category of menu) {
        const el = document.getElementById(category.id)
        if (!el) continue
        if (el.getBoundingClientRect().top - STICKY_OFFSET <= 0) {
          current = category.id
        }
      }
      setActiveId(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function selectCategory(id: string) {
    setActiveId(id)
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - STICKY_OFFSET
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <div
      className="min-h-dvh pb-[max(4rem,env(safe-area-inset-bottom))]"
      style={
        {
          ['--header-h']: compactHeader ? '3.75rem' : '4.75rem',
        } as CSSProperties
      }
    >
      <Header compact={compactHeader} />
      <CategoryNav
        categories={menu}
        activeId={activeId}
        onSelect={selectCategory}
      />

      <main className="mx-auto max-w-lg px-4 pt-6">
        <div className="animate-fade-up mb-8 text-center">
          <p className="text-[0.65rem] font-medium tracking-[0.28em] text-coffee-soft uppercase">
            Cardápio
          </p>
          <h1 className="mt-1.5 font-display text-[2.35rem] leading-none font-semibold tracking-wide text-cream">
            {site.name}
          </h1>
          <p className="mt-2 text-sm text-cream-muted">{site.tagline}</p>
        </div>

        <div className="flex flex-col gap-10">
          {menu.map((category) => (
            <MenuSection key={category.id} category={category} />
          ))}
        </div>

        <footer className="mt-14 border-t border-line pt-7 pb-2 text-center">
          <p className="font-display text-lg tracking-wide text-teal-muted">
            {site.name} {site.subtitle}
          </p>
          <p className="mt-2 text-xs tracking-wide text-cream-muted">
            Escaneie o QR da mesa · preços sujeitos a alteração
          </p>
        </footer>
      </main>
    </div>
  )
}
