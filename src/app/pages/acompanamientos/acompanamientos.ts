import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeCard } from '../../shared/cafe-card/cafe-card';
import { ACOMPANAMIENTOS } from '../../data/acompanamientos.data';

@Component({
  selector: 'app-acompanamientos',
  standalone: true,
  imports: [CommonModule, CafeCard],
  templateUrl: './acompanamientos.html',
  styleUrl: './acompanamientos.css',
})
export class Acompanamientos {
  acompanamientos = ACOMPANAMIENTOS;
}
