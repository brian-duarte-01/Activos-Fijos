import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}


