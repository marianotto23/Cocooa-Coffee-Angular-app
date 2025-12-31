import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeCard } from '../../shared/cafe-card/cafe-card';

type CafeItem = {
  slug: string;
  nombre: string;
  imagen: string;
  descripcion: string;
};

@Component({
  selector: 'app-cafe',
  standalone: true,
  imports: [CommonModule, CafeCard],
  templateUrl: './cafe.html',
  styleUrl: './cafe.css',
})
export class Cafe {
  cafes: CafeItem[] = [
    {
      slug: 'expreso',
      nombre: 'Expreso',
      imagen: 'caf7.jpeg',
      descripcion:
        'Se caracteriza por su rápida preparación a una alta presión y por un sabor y textura más concentrados.',
    },
    {
      slug: 'capuccino',
      nombre: 'Capuccino',
      imagen: 'caf8.jpeg',
      descripcion:
        'El capuccino es una bebida de café originaria de Italia, que se prepara con café expreso, leche vaporizada y espuma de leche.',
    },
    {
      slug: 'latte',
      nombre: 'Latte',
      imagen: 'caf5.jpeg',
      descripcion:
      'Bebida originaria de Italia, que se prepara con café expreso y leche vaporizada.',
  },
  {
    slug: 'irish',
    nombre: 'Irish',
    imagen: 'caf11.jpeg',
    descripcion:
      'Bebida alcohólica caliente que combina el sabor del café con el whisky irlandés, endulzado con azúcar y coronado con crema batida.',
  },
  {
    slug: 'vainilla-latte',
    nombre: 'Vainilla Latte',
    imagen: 'caf1.jpeg',
    descripcion:
      'Café expreso con leche vaporizada y un toque de vainilla. Más leche que un cappuccino y una espuma más fina.',
  },
  {
    slug: 'caramelo-latte',
    nombre: 'Café al coñac',
    imagen: 'caf9.jpeg',
    descripcion:
      'Bebida caliente que combina la intensidad del café con el aroma y calor del coñac.',
  },
  {
    slug: 'mocca',
    nombre: 'Mocca',
    imagen: 'caf2.jpeg',
    descripcion:
      'Bebida caliente que combina la intensidad del café con el rico aroma y sabor del chocolate.',
  },
  {
    slug: 'bombon',
    nombre: 'Bombón',
    imagen: 'caf4.jpeg',
    descripcion:
      'Bebida dulce que combina la intensidad del café con la cremosidad de la leche condensada.',
  },
  {
    slug: 'bombon-18',
    nombre: 'Bombón +18',
    imagen: 'caf12.jpeg',
    descripcion:
      'Bebida dulce que combina café, leche condensada y un toque de licor.',
    },
  ];

  trackByNombre = (_: number, item: CafeItem) => item.nombre;
}
