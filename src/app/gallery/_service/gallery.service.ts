import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  baseUrl = "https://picsum.photos/v2/list?page=2";

  constructor(
    private http: HttpClient
  ) { }

  getAllImages(query): Observable<any> {
    return this.http.get(`${this.baseUrl}&limit=${query || 50}`);
  }

}
