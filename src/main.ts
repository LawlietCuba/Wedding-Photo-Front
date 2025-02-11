import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]), // Si tienes rutas, agrégalas aquí
    provideHttpClient(), // Configuración de HttpClient para Standalone Components
  ],
}).catch((err) => console.error(err));
