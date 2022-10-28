import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { activo } from '../activo/activo';

@Injectable({                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  providedIn: 'root'
})
export class ActivoService {

  _url = 'https://localhost:44340/api/ACTIVOes'

  constructor(
    private http: HttpClient
  ) { }

  getactivo(){
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')

      return this.http.get(this._url, {
          headers : header

      });
  }

  public postact(body: object){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')
    return this.http.post(this._url,body, {
      headers : header
  })
  }

  getsingleactivo(id: string):Observable<activo>{
    let direccion = this._url + "/" + id;
    return this.http.get<activo>(direccion);
  }

  putact(form:activo){
    let direccion = this._url + '/' + form.ID_ACTIVO
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')
    return this.http.put(direccion, form, {
      headers : header
  })
  }

  delact(id: number){

    let direccion = this._url + '/' + id
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')
    return this.http.delete(direccion)

  }


}
