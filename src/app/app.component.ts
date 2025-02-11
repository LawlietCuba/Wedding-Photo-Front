import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './components/photoComponent/photo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PhotoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'wedding-photo-app-front';
}
