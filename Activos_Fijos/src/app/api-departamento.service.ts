import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiDepartamentoService {

  constructor(
    private http: HttpClient
  ) { }

  get(url:string){
    return this.http.get(url); //GET  https://localhost:44340/api/ACT_DEPARTAMENTO
  }
}
