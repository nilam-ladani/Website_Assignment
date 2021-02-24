import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageGalleryService {

  baseUrl = 'https://picsum.photos/v2/list';
  constructor(
    private http: HttpClient
  ) { }


  getImages(): Observable<any> {
    return this.http.get(this.baseUrl, this.httpOptionsImage());
  }

  httpOptionsImage() {

    return {
      headers: new HttpHeaders({
        dataType:'jsonp',
      }),
      // responseType: 'blob' as 'json'
    };
  }
}
