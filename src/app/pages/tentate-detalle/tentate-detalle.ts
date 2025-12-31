import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { TENTACIONES, type TentateData } from '../../data/tentate.data';

@Component({
  selector: 'app-tentate-detalle',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tentate-detalle.html',
  styleUrl: './tentate-detalle.css',
})
export class TentateDetalle {
  slug = '';
  item?: TentateData;

  constructor(private route: ActivatedRoute) {
    this.slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.item = TENTACIONES.find((t) => t.slug === this.slug);
  }
}
