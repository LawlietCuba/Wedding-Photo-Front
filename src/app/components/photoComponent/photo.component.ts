import { Component } from '@angular/core';
import { PhotoService } from '../../services/PhotoService/photo-service.service';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

@Component({
    selector: 'app-photo',
    imports: [CommonModule],
    providers: [PhotoService],
    templateUrl: './photo.component.html',
    styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  imagenes: File[] = [];
  imagenesPreview: string[] = [];

  constructor(private photoService: PhotoService) {}

  onFileSelected(event: any) {
    const archivos = event.target.files;
    this.imagenes = [];
    this.imagenesPreview = [];

    for (let archivo of archivos) {
      this.imagenes.push(archivo);

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagenesPreview.push(e.target.result);
      };
      reader.readAsDataURL(archivo);
    }
  }

  uploadPhotos() {
    if (this.imagenes.length === 0) return;

    const formData = new FormData();
    this.imagenes.forEach((img) => {
      formData.append('imagenes', img, img.name); // Asegúrate de incluir el nombre del archivo si es necesario
    });

    this.photoService.uploadPhoto(formData).subscribe((response) => {
      console.log('Fotos subidas:', response);
      alert('Fotos subidas con éxito');
      this.imagenes = [];
      this.imagenesPreview = [];
    });
  }

  // Método para eliminar una imagen seleccionada
  removeImage(img: string) {
    this.imagenesPreview = this.imagenesPreview.filter(
      (image) => image !== img
    );
  }
}
