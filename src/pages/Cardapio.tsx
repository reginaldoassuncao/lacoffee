import { useEffect, useState } from 'react'
import { CategoryNav } from '../components/CategoryNav'
import { Header } from '../components/Header'
import { MenuSection } from '../components/MenuSection'
import { menu } from '../data/menu'
import { site } from '../lib/site'

export function CardapioPage() {
  const [activeId, setActiveId] = useState(menu[0]?.id ?? '')
  const [compactHeader, setCompactHeader] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setCompactHeader(window.scrollY > 40)

      const offset = 180
      let current = menu[0]?.id ?? ''
      for (const category of menu) {
        const el = document.getElementById(category.id)
        if (!el) continue
        if (el.getBoundingClientRect().top - offset <= 0) {
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
    const top = el.getBoundingClientRect().top + window.scrollY - 160
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <div className="min-h-dvh pb-16">
      <Header compact={compactHeader} />
      <CategoryNav
        categories={menu}
        activeId={activeId}
        onSelect={selectCategory}
      />

      <main className="mx-auto max-w-lg px-5 pt-8">
        <div className="animate-fade-up mb-10 text-center">
          <p className="text-[0.7rem] font-medium tracking-[0.28em] text-coffee-soft uppercase">
            Cardápio
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-wide text-cream sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-2 text-sm text-cream-muted">{site.tagline}</p>
        </div>

        <div className="flex flex-col gap-12">
          {menu.map((category) => (
            <MenuSection key={category.id} category={category} />
          ))}
        </div>

        <footer className="mt-16 border-t border-line pt-8 text-center">
          <p className="font-display text-lg tracking-wide text-teal-muted">
            {site.name} {site.subtitle}
          </p>
          <p className="mt-2 text-xs tracking-wide text-cream-muted">
            Preços de exemplo — confirme com a casa
          </p>
        </footer>
      </main>
    </div>
  )
}
