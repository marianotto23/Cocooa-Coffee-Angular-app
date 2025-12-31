import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeCard } from '../../shared/cafe-card/cafe-card';
import { TENTACIONES } from '../../data/tentate.data';

@Component({
  selector: 'app-tentate',
  standalone: true,
  imports: [CommonModule, CafeCard],
  templateUrl: './tentate.html',
  styleUrl: './tentate.css',
})
export class Tentate {
  titulo = 'Dejate tentar por nuestras delicias...';
  tentaciones = TENTACIONES;

  cambiarTitulo() {
    this.titulo = '¡Tentate ahora!'
  }
}
