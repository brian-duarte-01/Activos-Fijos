import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { categoria } from '../categoria/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  _url = 'https://localhost:44340/api/ACT_CATEGORIA'
  categoria: categoria = new categoria();

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
  public postmaq(body: object){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')
    return this.http.post(this._url,body, {
      headers : header
  })
  }

  getsinglecategoria(id: string):Observable<categoria>{
    let direccion = this._url + "/" + id;
    return this.http.get<categoria>(direccion);
  }

  putmaq(form:categoria){
    let direccion = this._url + '/' + form.ID_CATEGORIA
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')
    return this.http.put(direccion, form, {
      headers : header
  })
  }

  delmaq(id: number){

    let direccion = this._url + '/' + id
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')
    return this.http.delete(direccion)

  }
}

