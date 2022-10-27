import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timeStamp } from 'console';
import { Observable } from 'rxjs';
import { Departamento } from './Models/DepartamentoModel';

@Injectable({
  providedIn: 'root'
})
export class ApiDepartamentoService {




  constructor(
    private http: HttpClient
  ) { }

  get(url: string) {
    return this.http.get(url); //GET  https://localhost:44340/api/ACT_DEPARTAMENTO
  }

  post(url: string, body: { ID_DEPARTAMENTO: string; DEP_NOMBRE: string; }) {
    return this.http.post(url, body);
  }

  // actualizar
  getAll(id: string): Observable<Departamento> {
    let _url = 'https://localhost:44340/api/ACT_DEPARTAMENTO/' + id;
    return this.http.get<Departamento>(_url);
  }

  put(formulario: Departamento) {
    let _url = 'https://localhost:44340/api/ACT_DEPARTAMENTO'+'/'+formulario.ID_DEPARTAMENTO;
    return this.http.put(_url, formulario);
  }






}
