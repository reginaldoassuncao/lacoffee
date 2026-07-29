import { site } from '../lib/site'

type HeaderProps = {
  compact?: boolean
}

export function Header({ compact = false }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/85 backdrop-blur-md">
      <div
        className={`mx-auto flex max-w-lg items-center justify-center px-4 ${
          compact ? 'py-2.5' : 'py-4'
        }`}
      >
        <img
          src={site.logo}
          alt={`${site.name} ${site.subtitle}`}
          className={`w-auto select-none transition-[height] duration-300 ${
            compact ? 'h-11' : 'h-14'
          }`}
          draggable={false}
        />
      </div>
    </header>
  )
}
