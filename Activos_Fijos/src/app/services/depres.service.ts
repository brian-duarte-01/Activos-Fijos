import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { depres } from '../depres/depres';

@Injectable({
  providedIn: 'root'
})
export class DepresService {
  _url = 'https://localhost:44340/api/DET_ACTIVO'
  depres: depres = new depres();

  constructor(
    private http: HttpClient
  ) { 
    console.log(' servicio Depresiaciones')
  }

  getcategoria(){
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')

      return this.http.get(this._url, {
          headers : header

      });
  }


}
