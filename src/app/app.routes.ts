import { Routes } from '@angular/router';
import { PhotoComponent } from './components/photoComponent/photo.component';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'photo', component: PhotoComponent },
];
