import { MenuItem } from './MenuItem'
import type { MenuCategory } from '../data/menu'

type MenuSectionProps = {
  category: MenuCategory
}

export function MenuSection({ category }: MenuSectionProps) {
  return (
    <section
      id={category.id}
      className="scroll-mt-36 animate-fade-in"
      aria-labelledby={`${category.id}-title`}
    >
      <div className="mb-2 flex items-end gap-3">
        <h2
          id={`${category.id}-title`}
          className="font-display text-3xl font-semibold tracking-wide text-teal-bright"
        >
          {category.name}
        </h2>
        <span className="mb-2 h-px flex-1 bg-gradient-to-r from-line to-transparent" />
      </div>
      <div>
        {category.items.map((item, index) => (
          <MenuItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}
