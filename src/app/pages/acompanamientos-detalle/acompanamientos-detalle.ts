import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ACOMPANAMIENTOS, type AcompanamientoData } from '../../data/acompanamientos.data';

@Component({
  selector: 'app-acompanamiento-detalle',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './acompanamientos-detalle.html',
  styleUrl: './acompanamientos-detalle.css',
})
export class AcompanamientoDetalle {
  slug = '';
  item?: AcompanamientoData;

  constructor(private route: ActivatedRoute) {
    this.slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.item = ACOMPANAMIENTOS.find((a) => a.slug === this.slug);
  }
}
