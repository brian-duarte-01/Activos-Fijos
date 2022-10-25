import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TcategoriaService {
  _url = 'https://localhost:44340/api/TIPO_CATEGORIA'
  constructor(
    private http: HttpClient

  ) { 
    console.log(' servicio categoria ')

  }

  gettcategoria(){
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')

      return this.http.get(this._url, {
          headers : header

      });
  }
}
