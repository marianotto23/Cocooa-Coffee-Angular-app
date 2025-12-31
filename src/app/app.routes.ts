import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Cafe } from './pages/cafe/cafe';
import { Acompanamientos } from './pages/acompanamientos/acompanamientos';
import { Tentate } from './pages/tentate/tentate';
import { CafeDetalle } from './pages/cafe-detalle/cafe-detalle';
import { AcompanamientoDetalle } from './pages/acompanamientos-detalle/acompanamientos-detalle';
import { TentateDetalle } from './pages/tentate-detalle/tentate-detalle';



export const routes: Routes = [
    { path: '', component: Home },
    { path: 'cafe/:slug', component: CafeDetalle },
    { path: 'cafe', component: Cafe },
    { path: 'acompanamientos', component: Acompanamientos },
    { path: 'tentate', component: Tentate },
    { path: 'acompanamientos/:slug', component: AcompanamientoDetalle },
    { path: 'tentate/:slug', component: TentateDetalle },
    { path: 'tentate', component: Tentate },
    { path: '**', redirectTo: '' },
];
