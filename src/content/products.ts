export const categories = [
  'antipasti', 
  'pasta', 
  'dolci', 
  'olio', 
  'vino', 
  'grappa', 
  'kaffee', 
  'saefte'
] as const;

export type Category = typeof categories[number];

export interface Product {
  id: string;
  name: string;
  descDE: string;
  descIT: string;
  origin: string;
  image?: string;
}

// Category images mapping
export const categoryImages: Record<Category, string> = {
  antipasti: '/images/antipasti/antipasti-1.jpg',
  pasta: '/images/antipasti/antipasti-2.jpg',
  dolci: '/images/geschenkkoerbe/geschenkkorb-1.jpg',
  olio: '/images/antipasti/antipasti-4.jpg',
  vino: '/images/wein/wein-1.jpg',
  grappa: '/images/wein/wein-3.jpg',
  kaffee: '/images/geschenkkoerbe/geschenkkorb-2.jpg',
  saefte: '/images/wein/wein-2.jpg',
};

export const products: Record<Category, Product[]> = {
  antipasti: [
    { id: 'a1', name: 'Carciofini Grigliati', descDE: 'Gegrillte Artischocken in Olivenöl.', descIT: 'Carciofini grigliati sott\'olio.', origin: 'Puglia', image: '/images/antipasti/antipasti-3.jpg' },
    { id: 'a2', name: 'Pomodori Secchi', descDE: 'Sonnengetracknete Tomaten.', descIT: 'Pomodori secchi.', origin: 'Sicilia', image: '/images/antipasti/antipasti-4.jpg' },
    { id: 'a3', name: 'Olive Taggiasche', descDE: 'Feine Oliven aus Ligurien.', descIT: 'Olive taggiasche liguri.', origin: 'Liguria', image: '/images/antipasti/antipasti-5.jpg' },
  ],
  pasta: [
    { id: 'p1', name: 'Orecchiette Artigianali', descDE: 'Handgemachte Pasta aus Hartweizen.', descIT: 'Pasta artigianale di grano duro.', origin: 'Puglia', image: '/images/antipasti/antipasti-1.jpg' },
    { id: 'p2', name: 'Risotto Carnaroli', descDE: 'Perfekter Reis für cremiges Risotto.', descIT: 'Riso perfetto per risotti cremosi.', origin: 'Piemonte', image: '/images/antipasti/antipasti-2.jpg' },
    { id: 'p3', name: 'Spaghettoni', descDE: 'Extra dicke Spaghetti, bronzegezogen.', descIT: 'Spaghettoni trafilati al bronzo.', origin: 'Napoli', image: '/images/catering/catering-4.jpg' },
  ],
  dolci: [
    { id: 'd1', name: 'Cantuccini alle Mandorle', descDE: 'Klassisches Mandelgebäck.', descIT: 'Classici biscotti alle mandorle.', origin: 'Toscana', image: '/images/geschenkkoerbe/geschenkkorb-1.jpg' },
    { id: 'd2', name: 'Torrone Morbido', descDE: 'Weicher Nougat mit Haselnüssen.', descIT: 'Torrone morbido alle nocciole.', origin: 'Piemonte', image: '/images/geschenkkoerbe/geschenkkorb-5.jpg' },
    { id: 'd3', name: 'Panettone Artigianale', descDE: 'Traditioneller Weihnachtskuchen (Saison).', descIT: 'Panettone tradizionale (Stagionale).', origin: 'Milano', image: '/images/geschenkkoerbe/geschenkkorb-6.jpg' },
  ],
  olio: [
    { id: 'o1', name: 'Olio Extra Vergine DOP', descDE: 'Fruchtig, erste Kaltpressung.', descIT: 'Fruttato, prima spremitura a freddo.', origin: 'Umbria', image: '/images/antipasti/antipasti-4.jpg' },
    { id: 'o2', name: 'Aceto Balsamico di Modena', descDE: 'Gereift im Holzfass.', descIT: 'Invecchiato in botti di legno.', origin: 'Modena', image: '/images/antipasti/antipasti-5.jpg' },
  ],
  vino: [
    { id: 'v1', name: 'Prosecco Superiore DOCG', descDE: 'Trocken, feinperlig.', descIT: 'Secco, perlage fine.', origin: 'Valdobbiadene', image: '/images/wein/wein-4.jpg' },
    { id: 'v2', name: 'Amarone della Valpolicella', descDE: 'Vollmundiger Rotwein.', descIT: 'Vino rosso corposo.', origin: 'Veneto', image: '/images/wein/wein-1.jpg' },
    { id: 'v3', name: 'Chianti Classico', descDE: 'Klassischer Rotwein aus der Toskana.', descIT: 'Classico rosso toscano.', origin: 'Toscana', image: '/images/wein/wein-5.jpg' },
  ],
  grappa: [
    { id: 'g1', name: 'Grappa di Barolo', descDE: 'Gereift, bernsteinfarben.', descIT: 'Invecchiata, ambrata.', origin: 'Piemonte', image: '/images/wein/wein-2.jpg' },
    { id: 'g2', name: 'Grappa Bianca', descDE: 'Klar und kräftig.', descIT: 'Chiara e forte.', origin: 'Veneto', image: '/images/wein/wein-3.jpg' },
  ],
  kaffee: [
    { id: 'k1', name: 'Espresso Miscela Bar', descDE: 'Kräftige Röstung, ganze Bohnen.', descIT: 'Tostatura forte, grani interi.', origin: 'Napoli', image: '/images/catering/catering-5.jpg' },
    { id: 'k2', name: 'Caffè Macinato Moka', descDE: 'Gemahlen für die Moka-Kanne.', descIT: 'Macinato per la Moka.', origin: 'Italia', image: '/images/catering/catering-6.jpg' },
  ],
  saefte: [
    { id: 's1', name: 'Succo d\'Uva Rossa', descDE: 'Roter Traubensaft, 100% Frucht.', descIT: 'Succo d\'uva rossa, 100% frutta.', origin: 'Piemonte', image: '/images/wein/wein-4.jpg' },
    { id: 's2', name: 'Succo d\'Uva Bianca', descDE: 'Weisser Traubensaft, süss und frisch.', descIT: 'Succo d\'uva bianca, dolce e fresco.', origin: 'Piemonte', image: '/images/wein/wein-5.jpg' },
  ]
};
