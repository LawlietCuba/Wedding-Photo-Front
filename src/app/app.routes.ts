import { Routes } from '@angular/router';
import { PhotoComponent } from './components/photoComponent/photo.component';

export const routes: Routes = [
  { path: 'photos', component: PhotoComponent, data: { reuse: true } },
  { path: '', redirectTo: '/photos', pathMatch: 'full' },
];
