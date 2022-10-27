import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departamento } from './Models/DepartamentoModel';

@Injectable({
  providedIn: 'root'
})
export class ApiDepartamentoService {

  _url = 'https://localhost:44340/api/ACT_DEPARTAMENTO';


  constructor(
    private http: HttpClient
  ) { }

  get(url: string) {
    return this.http.get(url); //GET  https://localhost:44340/api/ACT_DEPARTAMENTO
  }

  post(url: string, body: { ID_DEPARTAMENTO: string; DEP_NOMBRE: string; }) {
    return this.http.post(url, body);
  }

  




}
