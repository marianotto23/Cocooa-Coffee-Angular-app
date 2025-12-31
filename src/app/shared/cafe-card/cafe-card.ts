import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export type CafeItem = {
  nombre: string;
  imagen: string;
  descripcion: string;
  slug?: string;
};

@Component({
  selector: 'app-cafe-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cafe-card.html',
  styleUrl: './cafe-card.css',
})
export class CafeCard {
  @Input({ required: true }) cafe!: CafeItem;
  @Input({ required: true }) baseRoute!: string;

  get routerLink() {
    return this.cafe.slug ? ['/', this.baseRoute, this.cafe.slug] : null;
  }
}
