export type MenuItem = {
  id: string
  name: string
  description?: string
  price: number
  highlight?: boolean
}

export type MenuCategory = {
  id: string
  name: string
  items: MenuItem[]
}

/** Itens de exemplo — trocar pelos preços reais do amigo. */
export const menu: MenuCategory[] = [
  {
    id: 'gelatos',
    name: 'Gelatos',
    items: [
      {
        id: 'pistache',
        name: 'Pistache',
        description: 'Cremoso, com pistache torrado',
        price: 18,
        highlight: true,
      },
      {
        id: 'chocolate-belga',
        name: 'Chocolate belga',
        description: '70% cacau, intenso',
        price: 16,
      },
      {
        id: 'baunilha-madagascar',
        name: 'Baunilha Madagascar',
        description: 'Fava natural, clássico',
        price: 15,
      },
      {
        id: 'doce-de-leite',
        name: 'Doce de leite',
        description: 'Caramelizado na casa',
        price: 15,
      },
      {
        id: 'morango',
        name: 'Morango',
        description: 'Fruta fresca da estação',
        price: 15,
      },
      {
        id: 'limao-siciliano',
        name: 'Limão siciliano',
        description: 'Refrescante e cítrico',
        price: 15,
      },
    ],
  },
  {
    id: 'especiais',
    name: 'Especiais',
    items: [
      {
        id: 'affogato',
        name: 'Affogato',
        description: 'Gelato de baunilha com espresso quente',
        price: 22,
        highlight: true,
      },
      {
        id: 'copo-duo',
        name: 'Copo duo',
        description: 'Dois sabores à escolha',
        price: 20,
      },
      {
        id: 'copo-trio',
        name: 'Copo trio',
        description: 'Três sabores à escolha',
        price: 26,
      },
      {
        id: 'milkshake',
        name: 'Milkshake',
        description: 'Gelato batido — sabor do dia',
        price: 24,
      },
    ],
  },
  {
    id: 'cafes',
    name: 'Cafés',
    items: [
      {
        id: 'espresso',
        name: 'Espresso',
        price: 8,
      },
      {
        id: 'americano',
        name: 'Americano',
        price: 9,
      },
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        description: 'Espuma aveludada',
        price: 14,
        highlight: true,
      },
      {
        id: 'latte',
        name: 'Latte',
        price: 14,
      },
      {
        id: 'mocha',
        name: 'Mocha',
        description: 'Café, chocolate e leite',
        price: 16,
      },
    ],
  },
  {
    id: 'bebidas',
    name: 'Bebidas',
    items: [
      {
        id: 'cha-gelado',
        name: 'Chá gelado',
        description: 'Limão ou pêssego',
        price: 12,
      },
      {
        id: 'suco-natural',
        name: 'Suco natural',
        description: 'Laranja ou limão',
        price: 12,
      },
      {
        id: 'agua',
        name: 'Água',
        description: 'Com ou sem gás',
        price: 6,
      },
      {
        id: 'refrigerante',
        name: 'Refrigerante',
        price: 8,
      },
    ],
  },
]

export function formatPrice(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
