type CategoryNavProps = {
  categories: { id: string; name: string }[]
  activeId: string
  onSelect: (id: string) => void
}

export function CategoryNav({
  categories,
  activeId,
  onSelect,
}: CategoryNavProps) {
  return (
    <nav
      className="sticky top-[4.5rem] z-30 border-b border-line/60 bg-ink/90 backdrop-blur-md"
      aria-label="Categorias do cardápio"
    >
      <div className="mx-auto flex max-w-lg gap-1 overflow-x-auto px-3 py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((category) => {
          const isActive = category.id === activeId
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelect(category.id)}
              className={`shrink-0 rounded-sm px-3.5 py-2 text-sm tracking-wide transition-colors duration-200 ${
                isActive
                  ? 'bg-teal/25 text-cream'
                  : 'text-cream-muted hover:text-cream'
              }`}
            >
              <span className="relative">
                {category.name}
                {isActive ? (
                  <span className="animate-underline absolute -bottom-1 left-0 h-px w-full bg-coffee-soft" />
                ) : null}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
