import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CAFES, type CafeData } from '../../data/cafes.data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cafe-detalle',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cafe-detalle.html',
  styleUrl: './cafe-detalle.css',
})
export class CafeDetalle {
  slug = '';
  cafe?: CafeData;

  constructor(private route: ActivatedRoute) {
    this.slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.cafe = CAFES.find((c) => c.slug === this.slug);
  }
}
