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
      className="sticky top-[var(--header-h)] z-30 border-b border-line/60 bg-ink/90 backdrop-blur-md"
      aria-label="Categorias do cardápio"
    >
      <div className="mx-auto flex max-w-lg gap-1.5 overflow-x-auto overscroll-x-contain px-3 py-2 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
        {categories.map((category) => {
          const isActive = category.id === activeId
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelect(category.id)}
              ref={(node) => {
                if (isActive && node) {
                  node.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center',
                    block: 'nearest',
                  })
                }
              }}
              className={`min-h-11 shrink-0 rounded-sm px-3.5 py-2.5 text-left text-[0.8rem] leading-snug tracking-wide transition-colors duration-200 active:scale-[0.98] ${
                isActive
                  ? 'bg-teal/25 text-cream'
                  : 'text-cream-muted active:text-cream'
              }`}
            >
              <span className="relative inline-block max-w-[11rem]">
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
