import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

}
