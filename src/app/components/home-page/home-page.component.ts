import { Component, NgModule, OnInit } from '@angular/core';
import { PhotoService } from '../../services/PhotoService/photo-service.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home-page',
    imports: [CommonModule],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  photos: string[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.getAllPhotos().subscribe({
      next: (data: any) => {
        this.photos = data.photos;
      },
      error: (err) => {
        console.error('Error fetching photos', err);
      },
    });
  }

  logPhoto(photo: string): string {
    console.log(photo);
    return '';
  }
}
