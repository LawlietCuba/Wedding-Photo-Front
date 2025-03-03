import { Routes } from '@angular/router';
import { PhotoComponent } from './components/photoComponent/photo.component';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirección por defecto
  { path: 'home', component: HomePageComponent },
  { path: 'photo', component: PhotoComponent },
  { path: '**', redirectTo: 'home' } // Maneja rutas no encontradas
];
