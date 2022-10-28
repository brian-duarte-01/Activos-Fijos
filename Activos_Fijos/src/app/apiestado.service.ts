import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Estado } from './Models/EstadoModel';

@Injectable({
  providedIn: 'root'
})
export class ApiestadoService {

  constructor(
    private http: HttpClient
  ) { }

  get(url: string) {
    return this.http.get(url); //GET  https://localhost:44340/api/ACT_ESTADO
  }

  post(url: string, body: { id_estado: string; act_nombre: string; }) {
    return this.http.post(url, body);
  }

  // actualizar
  getAll(id: string): Observable<Estado> {
    let _url = 'https://localhost:44340/api/ACT_ESTADO/' + id;
    return this.http.get<Estado>(_url);
  }

  put(formulario: Estado) {
    let _url = 'https://localhost:44340/api/ACT_ESTADO'+'/'+formulario.id_estado;
    return this.http.put(_url, formulario);
  }

}


