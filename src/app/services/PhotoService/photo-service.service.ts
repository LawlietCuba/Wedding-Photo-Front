import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { api_url } from '../../../api_config_url';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private photo_URL = 'photos';

  constructor(private http: HttpClient) {}

  uploadPhoto(photoData: FormData) {
    return this.http.post(`${api_url}/${this.photo_URL}`, photoData);
  }
}
