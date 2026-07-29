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

/** Cardápio real da La Coffee. */
export const menu: MenuCategory[] = [
  {
    id: 'gelatos-copinho',
    name: 'Gelatos no copinho',
    items: [
      {
        id: 'gelato-p',
        name: 'Gelato (P) 80 ml',
        price: 23,
      },
      {
        id: 'gelato-m',
        name: 'Gelato (M) 120 ml',
        price: 26,
      },
      {
        id: 'gelato-g',
        name: 'Gelato (G) 150 ml',
        price: 29,
        highlight: true,
      },
      {
        id: 'gelato-500',
        name: 'Gelato 500 ml',
        price: 79,
      },
    ],
  },
  {
    id: 'gelatos-casquinha',
    name: 'Gelato na casquinha artesanal',
    items: [
      {
        id: 'casquinha-1',
        name: 'Casquinha 1 sabor',
        price: 31,
      },
      {
        id: 'casquinha-2',
        name: 'Casquinha 2 sabores',
        price: 35,
      },
      {
        id: 'cestinha-3',
        name: 'Cestinha 3 sabores',
        price: 39,
        highlight: true,
      },
    ],
  },
  {
    id: 'acrescimos-conezinho',
    name: 'Acréscimos — conezinho trufado no gelato',
    items: [
      {
        id: 'conezinho-ao-leite',
        name: 'Chocolate ao leite',
        price: 5,
      },
      {
        id: 'conezinho-branco',
        name: 'Chocolate branco',
        price: 5,
      },
      { id: 'conezinho-nutella', name: 'Nutella', price: 7 },
      { id: 'conezinho-pistache', name: 'Pistache', price: 7 },
    ],
  },
  {
    id: 'acrescimos-recheio-gelato',
    name: 'Acréscimos — recheio da casquinha/copinho',
    items: [
      { id: 'recheio-doce-leite', name: 'Doce de leite', price: 4 },
      { id: 'recheio-chocolate', name: 'Chocolate', price: 5 },
      {
        id: 'recheio-chocolate-branco',
        name: 'Chocolate branco',
        price: 5,
      },
      { id: 'recheio-pistache', name: 'Pistache', price: 7 },
      { id: 'recheio-nutella', name: 'Nutella', price: 7 },
    ],
  },
  {
    id: 'milkshakes',
    name: 'Milkshakes com gelato e chantilly',
    items: [
      {
        id: 'shake-ninho-nutella-200',
        name: 'Ninho com Nutella 200 ml',
        price: 20,
      },
      {
        id: 'shake-ninho-nutella-500',
        name: 'Ninho com Nutella 500 ml',
        price: 39,
        highlight: true,
      },
      {
        id: 'shake-ninho-frutas-200',
        name: 'Ninho com frutas vermelhas 200 ml',
        price: 20,
      },
      {
        id: 'shake-ninho-frutas-500',
        name: 'Ninho com frutas vermelhas 500 ml',
        price: 39,
      },
      {
        id: 'shake-ovomaltine-200',
        name: 'Ovomaltine 200 ml',
        price: 20,
      },
      {
        id: 'shake-ovomaltine-500',
        name: 'Ovomaltine 500 ml',
        price: 39,
      },
    ],
  },
  {
    id: 'sobremesas',
    name: 'Sobremesas',
    items: [
      {
        id: 'affogato',
        name: 'Affogato',
        description: 'Gelato fior di latte, doce de leite e café espresso',
        price: 29,
        highlight: true,
      },
      {
        id: 'tortelete-dia',
        name: 'Tortelete do dia',
        description: 'Consultar sabores',
        price: 25,
      },
      {
        id: 'semifreddo',
        name: 'Semifreddo',
        description: 'Torta de gelato por encomenda',
        price: 290,
      },
      {
        id: 'sobremesa-croissant-banoffe',
        name: 'Croissant de banoffe',
        description:
          'Croissant, banana caramelizada, doce de leite e chantilly',
        price: 28,
      },
      {
        id: 'sobremesa-croissant-ninho',
        name: 'Croissant ninho com Nutella',
        description:
          'Croissant, ganache de chocolate branco, Nutella e morango',
        price: 32,
      },
      {
        id: 'sobremesa-croissant-gelato',
        name: 'Croissant com gelato',
        description:
          'Croissant com duas bolas de gelato finalizado com ganache de chocolate',
        price: 46,
      },
      { id: 'cookies-recheados', name: 'Cookies recheados', price: 17 },
      {
        id: 'cookies-gelato-ganache',
        name: 'Cookies com gelato e ganache',
        price: 41,
      },
      {
        id: 'cookies-gelato-chantilly',
        name: 'Cookies com gelato e chantilly',
        price: 39,
      },
      { id: 'brownie', name: 'Brownie', price: 9 },
      {
        id: 'brownie-gelato-ganache',
        name: 'Brownie com gelato e ganache',
        price: 38,
      },
      {
        id: 'brownie-gelato-chantilly',
        name: 'Brownie com gelato e chantilly',
        price: 36,
      },
      {
        id: 'taca-brownie-gelato',
        name: 'Taça brownie com gelato',
        description:
          'Gelato fior di latte, ganache de chocolate branco, brownie, ganache de chocolate e morangos',
        price: 48,
        highlight: true,
      },
      {
        id: 'banana-split',
        name: 'Banana split',
        description:
          'Banana, uma bola de gelato, crumble e brigadeiro de caramelo salgado',
        price: 34,
      },
      {
        id: 'bolo-dia',
        name: 'Fatia de bolo do dia',
        price: 28,
      },
      {
        id: 'bolo-dia-ganache',
        name: 'Fatia de bolo do dia com ganache',
        price: 30,
      },
      {
        id: 'bolo-dia-gelato',
        name: 'Fatia de bolo do dia com gelato',
        price: 47,
      },
      {
        id: 'bolo-dia-gelato-ganache',
        name: 'Fatia de bolo do dia com gelato e ganache',
        price: 49,
      },
      {
        id: 'vulcaozinho-cenoura',
        name: 'Vulcãozinho de cenoura com muita ganache',
        price: 30,
      },
    ],
  },
  {
    id: 'cafes-chas',
    name: 'Cafés e chás',
    items: [
      {
        id: 'cafe-v60',
        name: 'Café V60',
        description:
          'Método sob percolação que entrega um coado limpo e equilibrado — 240 ml',
        price: 15,
      },
      {
        id: 'cafe-prensa-francesa',
        name: 'Café na prensa francesa',
        description:
          'Método sob infusão que permite a passagem dos óleos do café, com mais corpo, doçura e cafeína — 240 ml',
        price: 15,
      },
      {
        id: 'cafe-espresso',
        name: 'Café espresso',
        description:
          'Feito sob pressão, intenso e encorpado — 50 ml',
        price: 8,
      },
      {
        id: 'cafe-espresso-duplo',
        name: 'Café espresso duplo',
        description: 'Nosso espresso em dose dupla — 100 ml',
        price: 14,
      },
      {
        id: 'cafe-espresso-mineiro',
        name: 'Café espresso mineiro',
        description: 'Café espresso com doce de leite — 50 ml',
        price: 10,
        highlight: true,
      },
      {
        id: 'cafe-espresso-mineiro-duplo',
        name: 'Café espresso mineiro duplo',
        description: 'Café espresso com doce de leite — 100 ml',
        price: 18,
      },
      {
        id: 'cafe-descafeinado',
        name: 'Café descafeinado',
        description: 'Troque o café da sua bebida',
        price: 3,
      },
      {
        id: 'iced-coffee',
        name: 'Iced coffee',
        description: 'Café vaporizado, gelado e super refrescante',
        price: 15,
      },
      {
        id: 'vals-orange-coffee',
        name: "Val's orange coffee",
        description:
          'Suco de laranja natural, mel, café, água com gás e gelo',
        price: 18,
        highlight: true,
      },
      {
        id: 'cha',
        name: 'Chá',
        description: 'Consulte sabores — quente ou gelado — 240 ml',
        price: 7,
      },
      {
        id: 'leite-vegetal-sem-lactose',
        name: 'Leite vegetal ou sem lactose',
        description: 'Troque o leite da sua bebida',
        price: 3,
      },
    ],
  },
  {
    id: 'capuccinos',
    name: 'Capuccinos tradicionais',
    items: [
      {
        id: 'capuccino-italiano',
        name: 'Capuccino italiano',
        description:
          'Café espresso com leite vaporizado (canela e/ou baunilha opcional) — 200 ml',
        price: 12,
      },
      {
        id: 'capuccino-chocolate',
        name: 'Capuccino de chocolate',
        description: 'Café espresso, leite vaporizado e chocolate — 200 ml',
        price: 14,
      },
      {
        id: 'capuccino-chocolate-branco',
        name: 'Capuccino chocolate branco',
        description:
          'Café espresso, leite vaporizado e chocolate branco — 200 ml',
        price: 14,
      },
      {
        id: 'capuccino-mineiro',
        name: 'Capuccino mineiro',
        description:
          'Café espresso, leite vaporizado, doce de leite e canela — 200 ml',
        price: 14,
        highlight: true,
      },
      {
        id: 'capuccino-pistache',
        name: 'Capuccino de pistache',
        description:
          'Café espresso, leite vaporizado e ganache de pistache — 200 ml',
        price: 18,
      },
      {
        id: 'capuccino-nutella',
        name: 'Capuccino de Nutella',
        description:
          'Café espresso, leite vaporizado e ganache de Nutella — 200 ml',
        price: 16,
      },
      {
        id: 'capuccino-ovomaltine',
        name: 'Capuccino de Ovomaltine',
        description:
          'Café espresso, leite vaporizado e Ovomaltine — 200 ml',
        price: 16,
      },
      {
        id: 'chococcino-kids',
        name: 'Chococcino kids',
        description: 'Achocolatado com leite vaporizado — 200 ml',
        price: 10,
      },
    ],
  },
  {
    id: 'capuccino-gourmet',
    name: 'Capuccino gourmet com chantilly',
    items: [
      {
        id: 'gourmet-chocolate',
        name: 'Chocolate',
        description:
          'Ganache de chocolate nobre, preparo de frapê, café espresso, chantilly e cacau em pó — 300 ml',
        price: 25,
      },
      {
        id: 'gourmet-chocolate-branco',
        name: 'Chocolate branco',
        description:
          'Ganache de chocolate branco nobre, preparo de frapê, café espresso, chantilly e amêndoa — 300 ml',
        price: 25,
      },
      {
        id: 'gourmet-doce-de-leite',
        name: 'Doce de leite',
        description:
          'Doce de leite reserva, preparo de frapê, café espresso, chantilly e canela em pó — 300 ml',
        price: 24,
      },
      {
        id: 'gourmet-pistache',
        name: 'Pistache',
        description:
          'Ganache de pistache, preparo de frapê, café espresso, chantilly e grão de pistache — 300 ml',
        price: 30,
        highlight: true,
      },
      {
        id: 'gourmet-nutella',
        name: 'Nutella',
        description:
          'Ganache de Nutella, preparo de frapê, café espresso, chantilly e finalizado com Nutella — 300 ml',
        price: 28,
      },
      {
        id: 'gourmet-ovomaltine',
        name: 'Ovomaltine',
        description:
          'Ganache de Ovomaltine, leite vaporizado, café espresso, chantilly e finalizado com Ovomaltine — 300 ml',
        price: 28,
      },
    ],
  },
  {
    id: 'chocolate-quente',
    name: 'Chocolate quente com chantilly',
    items: [
      {
        id: 'choco-tradicional',
        name: 'Tradicional',
        description:
          'Chocolate quente cremoso com borda de doce de leite — 300 ml',
        price: 22,
      },
      {
        id: 'choco-branco',
        name: 'Chocolate branco',
        description:
          'Chocolate quente cremoso com morango e borda de chantilly — 300 ml',
        price: 22,
      },
      {
        id: 'choco-mineiro',
        name: 'Mineiro',
        description:
          'Doce de leite quente com borda de chantilly e canela — 300 ml',
        price: 20,
      },
      {
        id: 'choco-pistache',
        name: 'Pistache',
        description:
          'Chocolate quente cremoso de pistache com borda de chantilly — 300 ml',
        price: 28,
      },
      {
        id: 'choco-nutella',
        name: 'Nutella',
        description:
          'Chocolate quente cremoso de Nutella com borda de chantilly — 300 ml',
        price: 26,
      },
      {
        id: 'choco-ovomaltine',
        name: 'Ovomaltine',
        description:
          'Chocolate quente cremoso de Ovomaltine com borda de chantilly — 300 ml',
        price: 24,
      },
    ],
  },
  {
    id: 'frape',
    name: 'Frapê gelado com chantilly',
    items: [
      {
        id: 'frape-chocolate',
        name: 'Chocolate',
        description:
          'Ganache de chocolate nobre, preparo de frapê, café espresso, gelo, chantilly e cacau em pó — 350 ml',
        price: 25,
      },
      {
        id: 'frape-chocolate-branco',
        name: 'Chocolate branco',
        description:
          'Ganache de chocolate branco nobre, preparo de frapê, café espresso, gelo, chantilly e amêndoa — 350 ml',
        price: 25,
      },
      {
        id: 'frape-doce-de-leite',
        name: 'Frapê de doce de leite',
        description:
          'Doce de leite reserva, preparo de frapê, café espresso, gelo, chantilly e canela em pó — 350 ml',
        price: 24,
      },
      {
        id: 'frape-pistache',
        name: 'Frapê de pistache',
        description:
          'Ganache de pistache, preparo de frapê, café espresso, gelo, chantilly e grão de pistache — 350 ml',
        price: 30,
      },
      {
        id: 'frape-nutella',
        name: 'Nutella',
        description:
          'Nutella, preparo de frapê, café espresso, gelo, chantilly e avelã — 350 ml',
        price: 28,
      },
      {
        id: 'frape-ovomaltine',
        name: 'Ovomaltine',
        description:
          'Ganache de Ovomaltine, preparo de frapê, café espresso, gelo, chantilly e finalizado com Ovomaltine — 350 ml',
        price: 28,
      },
      {
        id: 'frape-frutas-vermelhas',
        name: 'Frutas vermelhas',
        description:
          'Geleia de frutas vermelhas da casa, preparo de frapê, gelo, chantilly e finalizado com geleia — 350 ml',
        price: 28,
        highlight: true,
      },
    ],
  },
  {
    id: 'refrigerantes-aguas',
    name: 'Refrigerante, suco, água e soda',
    items: [
      {
        id: 'soda-italiana',
        name: 'Soda italiana',
        description:
          'Geleia de frutas vermelhas da casa, gelo e água mineral com gás — 350 ml',
        price: 22,
        highlight: true,
      },
      {
        id: 'agua-pedra-azul-gas',
        name: 'Água mineral Pedra Azul com gás 510 ml',
        price: 5,
      },
      {
        id: 'agua-pedra-azul-sem-gas',
        name: 'Água mineral Pedra Azul sem gás 510 ml',
        price: 4,
      },
      {
        id: 'agua-sao-lourenco-gas',
        name: 'Água mineral São Lourenço com gás 510 ml',
        price: 8,
      },
      {
        id: 'agua-sao-lourenco-sem-gas',
        name: 'Água mineral São Lourenço sem gás 510 ml',
        price: 7,
      },
      {
        id: 'agua-tonica',
        name: 'Água tônica',
        price: 7,
      },
      {
        id: 'guarana-antarctica',
        name: 'Guaraná Antarctica 350 ml',
        price: 7,
      },
      {
        id: 'fanta-lata',
        name: 'Fanta lata 350 ml',
        price: 7,
      },
      {
        id: 'coca-cola-lata',
        name: 'Coca-Cola lata 350 ml',
        price: 8,
      },
      {
        id: 'coca-cola-zero',
        name: 'Coca-Cola Zero lata 350 ml',
        price: 9,
      },
      {
        id: 'suco-del-valle',
        name: 'Suco Del Valle 290 ml',
        description: 'Uva, manga, pêssego, morango ou maracujá',
        price: 9,
      },
    ],
  },
  {
    id: 'sucos-naturais',
    name: 'Suco natural',
    items: [
      { id: 'suco-morango', name: 'Morango', price: 18 },
      { id: 'suco-acerola', name: 'Acerola', price: 16 },
      { id: 'suco-abacaxi', name: 'Abacaxi', price: 14 },
      {
        id: 'suco-morango-laranja',
        name: 'Morango com laranja',
        price: 17,
      },
      { id: 'suco-limao', name: 'Limão', price: 14 },
      {
        id: 'suco-limonada-coco',
        name: 'Limonada com leite de coco',
        price: 17,
      },
      {
        id: 'suco-limonada-suica',
        name: 'Limonada suíça',
        price: 17,
      },
      { id: 'suco-laranja', name: 'Laranja', price: 14 },
      { id: 'suco-manga', name: 'Manga', price: 15 },
      { id: 'suco-maracuja', name: 'Maracujá', price: 15 },
    ],
  },
  {
    id: 'bebidas-alcoolicas',
    name: 'Drinks e bebidas alcoólicas',
    items: [
      {
        id: 'cerveja-long-neck',
        name: 'Cerveja long neck',
        description: 'Consultar do dia',
        price: 18,
      },
      {
        id: 'cachaca',
        name: 'Cachaça',
        description: 'Cachaça premium',
        price: 9,
      },
      {
        id: 'irish-coffee',
        name: 'Irish coffee',
        description: 'Whisky, gelo, espresso, açúcar mascavo e chantilly',
        price: 25,
        highlight: true,
      },
      {
        id: 'whisky-jack-daniels',
        name: "Whisky Jack Daniel's",
        price: 20,
      },
      {
        id: 'whisky-red-label',
        name: 'Whisky Red Label',
        price: 15,
      },
      { id: 'gin', name: 'Gin', price: 9 },
      { id: 'beats-redmix', name: 'Beats Redmix', price: 9 },
    ],
  },
  {
    id: 'drinks',
    name: 'Drinks com ou sem álcool',
    items: [
      {
        id: 'drink-aurora-morango',
        name: 'Drink aurora de morango',
        description: 'Morango, leite condensado, suco de uva integral e gelo',
        price: 26,
      },
      {
        id: 'drink-aurora-tropical',
        name: 'Drink aurora tropical',
        description:
          'Polpa de maracujá, leite condensado, gelo, Fanta laranja e limão para finalização',
        price: 28,
      },
      {
        id: 'drink-essencia-dourada',
        name: 'Drink essência dourada',
        description:
          'Manga, leite condensado, maracujá, leite fermentado, gelo e água com gás',
        price: 29,
      },
      {
        id: 'drink-morango-nevoa',
        name: 'Drink morango e névoa',
        description: 'Morango, leite condensado, gelo e energético',
        price: 26,
      },
      {
        id: 'drink-limoncoco',
        name: 'Drink limoncoco',
        description:
          'Limão, leite condensado, leite de coco e coco para finalização',
        price: 30,
        highlight: true,
      },
    ],
  },
  {
    id: 'croissants-salgados',
    name: 'Croissants salgados',
    items: [
      {
        id: 'croissant-manteiga',
        name: 'Croissant acompanhado com manteiga extra',
        price: 14,
      },
      {
        id: 'croissant-mussarela-presunto-calabresa',
        name: 'Croissant mussarela, presunto e calabresa',
        price: 26,
      },
      {
        id: 'croissant-carne-catupiry-bacon',
        name: 'Croissant de carne de boi com catupiry e geleia de bacon',
        price: 30,
      },
      {
        id: 'croissant-frango-catupiry-bacon',
        name: 'Croissant com frango, catupiry e bacon',
        price: 30,
      },
    ],
  },
  {
    id: 'croissants-doces',
    name: 'Croissants doces',
    items: [
      {
        id: 'croissant-ninho-nutella',
        name: 'Croissant de ninho com Nutella',
        description: 'Ganache de ninho, Nutella e morangos',
        price: 32,
        highlight: true,
      },
      {
        id: 'croissant-banoffe',
        name: 'Croissant de banoffe',
        description: 'Banana caramelizada, doce de leite, chantilly e canela',
        price: 28,
      },
      {
        id: 'croissant-gelato',
        name: 'Croissant com gelato',
        description:
          'Duas bolas de gelato finalizado com ganache de chocolate',
        price: 46,
      },
    ],
  },
  {
    id: 'tosts',
    name: 'Tosts e sanduíches fermentação natural',
    items: [
      {
        id: 'tost-kiss',
        name: 'Tost Kiss',
        description:
          'Pão de fermentação natural tostado na chapa, geleia de frutas vermelhas da casa e chantilly',
        price: 26,
      },
      {
        id: 'tost-korn',
        name: 'Tost Korn',
        description:
          'Pão de fermentação natural tostado na chapa, requeijão, parmesão, tomate e orégano',
        price: 26,
      },
      {
        id: 'tost-beatles',
        name: 'Tost Beatles',
        description:
          'Pão de fermentação natural tostado na chapa, ovos cremosos, bacon crocante e chimichurri',
        price: 24,
      },
      {
        id: 'tost-rush',
        name: 'Tost Rush',
        description:
          'Pão de fermentação natural tostado na chapa, catupiry, geleia de frutas vermelhas e bacon crocante',
        price: 29,
      },
      {
        id: 'croque-monselhor',
        name: 'Croque Monselhor',
        description:
          'Pão de fermentação natural tostado na chapa, molho bechamel, presunto, mussarela e chimichurri',
        price: 37,
      },
      {
        id: 'croque-madame',
        name: 'Croque Madame',
        description:
          'Pão de fermentação natural tostado na chapa, molho bechamel, presunto, mussarela, ovo e chimichurri',
        price: 39,
      },
      {
        id: 'panhoca-palmito',
        name: 'Panhoca de palmito',
        description:
          'Pão de fermentação natural, palmito ao molho La Coffee, croutons, mussarela, requeijão, parmesão, azeite extra virgem e orégano',
        price: 44,
        highlight: true,
      },
      {
        id: 'panhoca-carne',
        name: 'Panhoca de carne',
        description:
          'Pão de fermentação natural, carne bovina ao molho La Coffee, croutons, mussarela, requeijão, parmesão, azeite extra virgem e chimichurri',
        price: 45,
      },
    ],
  },
  {
    id: 'sanduiches-pao-frances',
    name: 'Sanduíches de pão francês',
    items: [
      {
        id: 'raul-seixas',
        name: 'Raul Seixas',
        description: 'Pão francês com manteiga extra na chapa',
        price: 6,
      },
      {
        id: 'tom-jobim',
        name: 'Tom Jobim',
        description:
          'Pão francês com queijos e requeijão na chapa, finalizado com orégano e tomate',
        price: 19,
      },
      {
        id: 'renato-russo',
        name: 'Renato Russo',
        description:
          'Pão francês com mussarela e presunto na chapa, finalizado com orégano e tomate',
        price: 16,
      },
      {
        id: 'elis-regina',
        name: 'Elis Regina',
        description:
          'Pão francês com mussarela e bacon na chapa, finalizado com chimichurri e tomate',
        price: 16,
      },
      {
        id: 'belchior',
        name: 'Belchior',
        description:
          'Pão francês, carne de boi ao molho branco e mussarela na chapa, finalizado com chimichurri e tomate',
        price: 22,
      },
    ],
  },
  {
    id: 'pao-de-queijo-recheado',
    name: 'Pão de queijo recheado',
    items: [
      {
        id: 'pdq-carne-requeijao',
        name: 'Carne com requeijão',
        price: 18,
      },
      {
        id: 'pdq-frango-requeijao',
        name: 'Frango com requeijão',
        price: 17,
      },
      {
        id: 'pdq-presunto-mussarela',
        name: 'Presunto e mussarela',
        price: 13,
      },
      {
        id: 'pdq-sem-recheio',
        name: 'Pão de queijo sem recheio',
        price: 8,
      },
    ],
  },
  {
    id: 'pao-de-queijo-doce',
    name: 'Pão de queijo recheado doce',
    items: [
      { id: 'pdq-nutella', name: 'Nutella', price: 17 },
      {
        id: 'pdq-goiabada-canastra',
        name: 'Goiabada com queijo Canastra',
        price: 13,
      },
      {
        id: 'pdq-doce-leite-canastra',
        name: 'Doce de leite com queijo Canastra',
        price: 16,
      },
      {
        id: 'pdq-ganache-chocolate',
        name: 'Ganache de chocolate',
        price: 15,
      },
      {
        id: 'pdq-ganache-branco',
        name: 'Ganache de chocolate branco',
        price: 15,
      },
      {
        id: 'pdq-ganache-pistache',
        name: 'Ganache de pistache',
        price: 18,
      },
      {
        id: 'pdq-geleia-frutas',
        name: 'Geleia de frutas vermelhas',
        price: 16,
      },
    ],
  },
  {
    id: 'porcoes',
    name: 'Porções',
    items: [
      {
        id: 'porcao-coxinha',
        name: 'Porção de coxinha',
        description: '10 unidades — acompanha maionese da casa',
        price: 20,
      },
      {
        id: 'porcao-bolinha-queijo',
        name: 'Porção de bolinha de queijo',
        description: '10 unidades — acompanha maionese da casa',
        price: 20,
      },
      {
        id: 'porcao-pao-de-queijo',
        name: 'Porção de pão de queijo',
        description: '10 unidades',
        price: 17,
      },
    ],
  },
  {
    id: 'salgados',
    name: 'Salgados',
    items: [
      { id: 'salgado-pao-de-queijo', name: 'Pão de queijo', price: 8 },
      {
        id: 'coxinha-frango-catupiry',
        name: 'Coxinha frango com catupiry',
        price: 13,
      },
      {
        id: 'hamburguer-assado',
        name: 'Hambúrguer assado',
        price: 18,
      },
      {
        id: 'paozinho-frango-catupiry',
        name: 'Pãozinho de frango catupiry',
        price: 9,
      },
      {
        id: 'tortinha-frango',
        name: 'Tortinha de frango',
        description: 'Escolha: catupiry, bacon ou azeitona',
        price: 15,
      },
      {
        id: 'empada-frango',
        name: 'Empada de frango',
        description: 'Escolha: catupiry, bacon ou azeitona',
        price: 7,
      },
      {
        id: 'pizza-brotinho',
        name: 'Pizza brotinho à moda',
        price: 20,
      },
    ],
  },
  {
    id: 'acrescimos',
    name: 'Acréscimos',
    items: [
      {
        id: 'acr-bacon',
        name: 'Bacon frito (20 g)',
        price: 10,
      },
      {
        id: 'acr-carne-molho-branco',
        name: 'Carne de boi ao molho branco (40 g)',
        price: 10,
      },
      {
        id: 'acr-mussarela',
        name: 'Mussarela (1 fatia)',
        price: 4,
      },
      {
        id: 'acr-presunto',
        name: 'Presunto (1 fatia)',
        price: 4,
      },
      {
        id: 'acr-ovo',
        name: 'Ovo (1 unidade)',
        price: 4,
      },
      {
        id: 'acr-requeijao',
        name: 'Requeijão / catupiry',
        price: 10,
      },
      {
        id: 'acr-geleia-goiabada',
        name: 'Geleia de goiabada (40 g)',
        price: 5,
      },
      {
        id: 'acr-geleia-frutas',
        name: 'Geleia de frutas (40 g)',
        price: 15,
      },
      {
        id: 'acr-ganache-chocolate',
        name: 'Ganache de chocolate (40 g)',
        price: 10,
      },
      {
        id: 'acr-ganache-branco',
        name: 'Ganache de chocolate branco (40 g)',
        price: 10,
      },
      {
        id: 'acr-ganache-pistache',
        name: 'Ganache de pistache',
        price: 15,
      },
      {
        id: 'acr-doce-leite',
        name: 'Doce de leite',
        price: 6,
      },
      {
        id: 'acr-nutella',
        name: 'Nutella (40 g)',
        price: 12,
      },
      {
        id: 'acr-chantilly',
        name: 'Chantilly (10 g)',
        price: 4,
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
