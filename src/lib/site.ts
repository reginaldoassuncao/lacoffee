/** Dados públicos da gelateria — usados no site e no cardápio. */
export const site = {
  name: "La Coffee Gelateria",
  shortName: "La Coffee",
  tagline: "Feito para transformar cada pausa em um momento especial",
  bio: "Para nós, cada detalhe importa",
  instagram: "https://www.instagram.com/lacoffeegelateria/",
  instagramHandle: "@lacoffeegelateria",
  /** Preencher na Fase 1 com o número real (somente dígitos, com DDI). */
  whatsapp: "",
  address: {
    street: "Avenida Telésforo Cândido de Resende, 947",
    neighborhood: "Centro",
    city: "Conselheiro Lafaiete",
    state: "MG",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Avenida+Tel%C3%A9sforo+C%C3%A2ndido+de+Resende+947+Conselheiro+Lafaiete",
  },
  hours: {
    label: "Terça a domingo",
    time: "12h às 20h",
    closed: "Segunda-feira",
  },
  categories: ["Cafés", "Gelatos", "Sobremesas", "Lanches"] as const,
} as const;
