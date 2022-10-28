import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { maquinaria } from '../tcategoria/maquinaria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  _url = 'https://localhost:44340/api/ACT_CATEGORIA'
  constructor(
    private http: HttpClient
  ) { 
    console.log(' servicio categoria ')
  }


  getcategoria(){
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')

      return this.http.get(this._url, {
          headers : header

      });
  }

}
