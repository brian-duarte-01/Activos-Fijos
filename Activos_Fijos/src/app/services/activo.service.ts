import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { maquinaria } from '../tcategoria/maquinaria';

@Injectable({
  providedIn: 'root'
})
export class ActivoService {

  _url = 'https://localhost:44340/api/ACTIVOes'

  constructor(
    private http: HttpClient
  ) { }

  gettcategoria(){
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')

      return this.http.get(this._url, {
          headers : header

      });
  }




}
