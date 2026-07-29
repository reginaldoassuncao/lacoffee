import { formatPrice, type MenuItem as MenuItemType } from '../data/menu'

type MenuItemProps = {
  item: MenuItemType
  index: number
}

export function MenuItem({ item, index }: MenuItemProps) {
  return (
    <article
      className="animate-fade-up grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 border-b border-line/70 py-4 last:border-b-0"
      style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}
    >
      <div>
        <h3 className="font-display text-xl font-semibold tracking-wide text-cream">
          {item.name}
          {item.highlight ? (
            <span className="ml-2 align-middle font-sans text-[0.65rem] font-medium tracking-[0.14em] text-coffee-soft uppercase">
              destaque
            </span>
          ) : null}
        </h3>
        {item.description ? (
          <p className="mt-1 text-sm leading-relaxed text-cream-muted">
            {item.description}
          </p>
        ) : null}
      </div>
      <p className="pt-1 text-sm font-medium tracking-wide text-teal-muted tabular-nums">
        {formatPrice(item.price)}
      </p>
    </article>
  )
}
