export const categories = [
  'olio', 
  'pasta', 
  'vino', 
  'dolci',
  'antipasti', 
  'riso',
] as const;

export type Category = typeof categories[number];

export interface Product {
  id: string;
  name: string;
  descDE: string;
  descIT: string;
  origin: string;
  price?: string;
  image?: string;
}

// Category images mapping
export const categoryImages: Record<Category, string> = {
  olio: '/images/antipasti/antipasti-4.jpg',
  pasta: '/images/antipasti/antipasti-2.jpg',
  vino: '/images/wein/wein-1.jpg',
  dolci: '/images/geschenkkoerbe/geschenkkorb-1.jpg',
  antipasti: '/images/antipasti/antipasti-1.jpg',
  riso: '/images/geschenkkoerbe/geschenkkorb-2.jpg',
};

export const products: Record<Category, Product[]> = {
  olio: [
    { 
      id: 'o1', 
      name: 'Olio Extravergine al Peperoncino', 
      descDE: 'Natives Olivenöl extra mit Peperoncino - würzig und aromatisch.', 
      descIT: 'Olio extravergine di oliva aromatizzato al peperoncino.', 
      origin: 'Umbria',
      price: 'CHF 10',
      image: '/images/antipasti/antipasti-4.jpg' 
    },
    { 
      id: 'o2', 
      name: 'Olio Extravergine al Limone', 
      descDE: 'Natives Olivenöl extra mit frischem Zitronenaroma.', 
      descIT: 'Olio extravergine di oliva aromatizzato al limone.', 
      origin: 'Umbria',
      price: 'CHF 10',
      image: '/images/antipasti/antipasti-5.jpg' 
    },
    { 
      id: 'o3', 
      name: 'Olio Extravergine Classico', 
      descDE: 'Klassisches natives Olivenöl extra, erste Kaltpressung.', 
      descIT: 'Olio extravergine di oliva classico, prima spremitura a freddo.', 
      origin: 'Umbria',
      price: 'CHF 10',
      image: '/images/antipasti/antipasti-3.jpg' 
    },
  ],
  pasta: [
    { 
      id: 'p1', 
      name: 'Pasta D\'Amicis - Le Specialità', 
      descDE: 'Handwerkliche Pasta, bronzegezogen und langsam getrocknet. Verschiedene Sorten verfügbar.', 
      descIT: 'Pasta artigianale trafilata al bronzo, essiccata lentamente. Vari formati disponibili.', 
      origin: 'Puglia',
      price: 'CHF 5',
      image: '/images/antipasti/antipasti-1.jpg' 
    },
    { 
      id: 'p2', 
      name: 'Orecchiette Artigianali', 
      descDE: 'Typische Ohrenförmige Pasta aus Hartweizengriess.', 
      descIT: 'Tipiche orecchiette di semola di grano duro.', 
      origin: 'Puglia',
      price: 'CHF 5',
      image: '/images/antipasti/antipasti-2.jpg' 
    },
  ],
  vino: [
    { 
      id: 'v1', 
      name: 'Franciacorta Villa Elisa', 
      descDE: 'Eleganter Schaumwein aus der Lombardei. Brut oder Satèn.', 
      descIT: 'Elegante spumante dalla Lombardia. Brut o Satèn.', 
      origin: 'Lombardia',
      price: 'ab CHF 32',
      image: '/images/wein/wein-1.jpg' 
    },
    { 
      id: 'v2', 
      name: 'Prosecco Corvezzo 1955', 
      descDE: 'Bio-Prosecco DOC in eleganter Flasche. Rosé oder klassisch.', 
      descIT: 'Prosecco DOC biologico in bottiglia elegante. Rosé o classico.', 
      origin: 'Veneto',
      price: 'CHF 18',
      image: '/images/wein/wein-2.jpg' 
    },
    { 
      id: 'v3', 
      name: 'Chianti Classico DOCG', 
      descDE: 'Klassischer toskanischer Rotwein, vollmundig.', 
      descIT: 'Classico rosso toscano, corposo.', 
      origin: 'Toscana',
      price: 'ab CHF 22',
      image: '/images/wein/wein-5.jpg' 
    },
  ],
  dolci: [
    { 
      id: 'd1', 
      name: 'Amaretti Morbidi Classici', 
      descDE: 'Weiche Amaretti-Kekse, traditionelles Rezept. Glutenfrei.', 
      descIT: 'Amaretti morbidi classici, ricetta tradizionale. Senza glutine.', 
      origin: 'Piemonte',
      price: 'CHF 12',
      image: '/images/geschenkkoerbe/geschenkkorb-1.jpg' 
    },
    { 
      id: 'd2', 
      name: 'Chicche - Schokoladen-Pralinen', 
      descDE: 'Feine Schokoladen-Pralinen mit verschiedenen Füllungen.', 
      descIT: 'Praline di cioccolato con vari ripieni.', 
      origin: 'Piemonte',
      price: 'CHF 16',
      image: '/images/geschenkkoerbe/geschenkkorb-5.jpg' 
    },
    { 
      id: 'd3', 
      name: 'Tarallini Dolci al Limone', 
      descDE: 'Süsse Taralli mit Zitronengeschmack.', 
      descIT: 'Tarallini dolci al limone.', 
      origin: 'Puglia',
      price: 'CHF 6',
      image: '/images/geschenkkoerbe/geschenkkorb-6.jpg' 
    },
  ],
  antipasti: [
    { 
      id: 'a1', 
      name: 'Tarallini all\'Olio Extravergine', 
      descDE: 'Knusprige Taralli mit nativem Olivenöl. Perfekt zum Apéro.', 
      descIT: 'Tarallini croccanti con olio extravergine di oliva.', 
      origin: 'Puglia',
      price: 'CHF 4',
      image: '/images/antipasti/antipasti-3.jpg' 
    },
    { 
      id: 'a2', 
      name: 'Bruschette Gusto Classico', 
      descDE: 'Knusprige Bruschetta-Scheiben zum Belegen.', 
      descIT: 'Fette di bruschetta croccanti da farcire.', 
      origin: 'Puglia',
      price: 'CHF 5',
      image: '/images/antipasti/antipasti-4.jpg' 
    },
    { 
      id: 'a3', 
      name: 'Tomatensauce Arrabbiata', 
      descDE: 'Pikante Tomatensauce, handgemacht mit Liebe.', 
      descIT: 'Salsa di pomodoro piccante, fatta a mano con amore.', 
      origin: 'Puglia',
      price: 'CHF 8',
      image: '/images/antipasti/antipasti-5.jpg' 
    },
    { 
      id: 'a4', 
      name: 'Grüne Oliven Creme', 
      descDE: 'Cremige Olivenpaste, ideal für Crostini.', 
      descIT: 'Crema di olive verdi, ideale per crostini.', 
      origin: 'Puglia',
      price: 'CHF 8',
      image: '/images/antipasti/antipasti-1.jpg' 
    },
  ],
  riso: [
    { 
      id: 'r1', 
      name: 'Riso Carnaroli Pavese 1kg', 
      descDE: 'Premium Carnaroli Reis im hübschen Stoffsäckchen. Perfekt für cremiges Risotto.', 
      descIT: 'Riso Carnaroli premium in sacchetto di stoffa. Perfetto per risotti cremosi.', 
      origin: 'Lombardia',
      price: 'CHF 12',
      image: '/images/geschenkkoerbe/geschenkkorb-2.jpg' 
    },
  ],
};

// Gift basket options with real prices
export const giftBasketOptions = [
  {
    id: 'piccolo',
    name: 'Piccolo',
    size: 'S',
    priceRange: 'CHF 40',
    description: {
      de: 'Ideal als kleine Aufmerksamkeit',
      it: 'Ideale come piccolo pensiero'
    },
    examples: {
      de: 'z.B. Pasta, Sugo, Olivenöl',
      it: 'es. Pasta, sugo, olio d\'oliva'
    },
    image: '/images/geschenkkoerbe/geschenkkorb-1.jpg'
  },
  {
    id: 'medio',
    name: 'Medio',
    size: 'M',
    priceRange: 'CHF 80',
    description: {
      de: 'Der Klassiker für Freunde & Familie',
      it: 'Il classico per amici e famiglia'
    },
    examples: {
      de: 'z.B. Wein, Risotto, Antipasti, Dolci',
      it: 'es. Vino, risotto, antipasti, dolci'
    },
    image: '/images/geschenkkoerbe/geschenkkorb-2.jpg'
  },
  {
    id: 'grande',
    name: 'Grande',
    size: 'L',
    priceRange: 'CHF 95',
    description: {
      de: 'Für den grossen Genuss oder Geschäftspartner',
      it: 'Per grandi occasioni o partner commerciali'
    },
    examples: {
      de: 'z.B. Prosecco, Franciacorta, grosse Antipasti-Auswahl, Spezialitäten',
      it: 'es. Prosecco, Franciacorta, grande selezione di antipasti, specialità'
    },
    image: '/images/geschenkkoerbe/geschenkkorb-3.jpg'
  },
  {
    id: 'tasche',
    name: 'Deluxe Tasche',
    size: 'S',
    priceRange: 'CHF 40-80',
    description: {
      de: 'Elegante Variante ohne Karton, nur mit Tasche',
      it: 'Variante elegante senza cartone, solo con borsa'
    },
    examples: {
      de: 'z.B. Pasta, Sugo, Olivenöl',
      it: 'es. Pasta, sugo, olio d\'oliva'
    },
    image: '/images/geschenkkoerbe/geschenkkorb-4.jpg'
  }
];
