export type AcompanamientoData = {
  nombre: string;
  slug: string;
  imagen: string;
  descripcion: string;
};

export const ACOMPANAMIENTOS: AcompanamientoData[] = [
  {
    nombre: 'Croissant Estrellado',
    slug: 'croissant-estrellado',
    imagen: 'sal2.jpeg',
    descripcion:
      'Este sándwich te hará sentir como si estuvieras en un café parisino, con su combinación de sabores frescos y nutritivos.',
  },
  {
    nombre: 'Salmon Azul',
    slug: 'salmon-azul',
    imagen: 'sal5.jpeg',
    descripcion:
      'Este sándwich te hará sentir como si estuvieras en un bistró francés, con su combinación de sabores suaves y fuertes.',
  },
  {
    nombre: 'Tuna-Salmón-Avocado',
    slug: 'tuna-salmon-avocado',
    imagen: 'sal8.jpeg',
    descripcion:
      'Baguette tostada, relleno de atún en aceite, salmón fresco, palta madura y huevo duro.',
  },
  {
    nombre: 'Bagel Patagonico',
    slug: 'bagel-patagonico',
    imagen: 'sal1.jpeg',
    descripcion:
      'Bagel esponjoso, relleno de salmón rosado, hierbas aromáticas y un huevo a la plancha.',
  },
  {
    nombre: 'Santo Sacramentos',
    slug: 'santo-sacramentos',
    imagen: 'sal9.jpeg',
    descripcion:
      'Medialuna dorada rellena de jamón cocido y queso fundido.',
  },
  {
    nombre: 'Tostado',
    slug: 'tostado',
    imagen: 'sal11.jpeg',
    descripcion:
      'Clásico sándwich de jamón y queso.',
  },
];
