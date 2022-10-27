import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { maquinaria } from '../tcategoria/maquinaria';

@Injectable({
  providedIn: 'root'
})
export class TcategoriaService {
  _url = 'https://localhost:44340/api/TIPO_CATEGORIA'
  createtcategoria: any;
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

  public postmaq(body: object){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')
    return this.http.post(this._url,body, {
      headers : header
  })
  }

  getsinglemaquinaria(id: string):Observable<maquinaria>{
    let direccion = this._url + "/" + id;
    return this.http.get<maquinaria>(direccion);
  }

  putmaq(form:maquinaria){
    let direccion = this._url + '/' + form.ID_TIPO_CATEGORIA
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
