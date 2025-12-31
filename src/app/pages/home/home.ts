import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

type Propuesta = {
  titulo: string;
  imagen: string;
  descripcion: string;
  link?: string;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  propuestas: Propuesta[] = [
    {
      titulo: 'Alfajores',
      imagen: 'alf3.jpeg',
      descripcion: 'Dejate tentar con nuestros alfajores y chocolates caseros',
      link: '/tentate',
    },
    {
      titulo: 'Cookies',
      imagen: 'coo2.jpeg',
      descripcion: 'Las cookies calentitas con nuestro chocolate: una combinación que vas a amar',
      link: '/tentate',
    },
    {
      titulo: 'Croissants',
      imagen: 'pan6.jpeg',
      descripcion: 'Vas a amar nuestros croissants. Son para chuparse los dedos',
      link: '/acompanamientos',
    },
    {
      titulo: 'Sandwiches',
      imagen: 'sal4.jpeg',
      descripcion: 'Dejate tentar por nuestros sandwiches de autor',
      link: '/acompanamientos',
    },
    {
      titulo: 'Sacramentos',
      imagen: 'sal7.jpeg',
      descripcion: 'Los sacramentos rellenos más ricos y calentitos te están esperando',
      link: '/acompanamientos',
    },
    {
      titulo: 'Bagel Patagónico',
      imagen: 'sal1.jpeg',
      descripcion: 'Nuestro bagel patagónico te va a dejar sin palabras',
      link: '/acompanamientos',
    },
  ];
}
