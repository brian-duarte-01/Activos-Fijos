import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DETALLE_VENTA } from './Models/Detalle_ventaModel';

@Injectable({
  providedIn: 'root'
})
export class ApidetalleventaService {

  constructor(
    private http: HttpClient
  ) { }

  get(url: string) {
    return this.http.get(url); //GET https://localhost:44340/api/DETALLE_VENTA
  }

  post(url: string, body: {id_detalle_venta: string; ven_nombre: string; ven_precio: string; ven_cantidad: string; ven_descripcion: string; id_activo: string;}) {
  return this.http.post(url, body);
}

// actualizar
getAll(id: string): Observable < DETALLE_VENTA > {
  let _url = 'https://localhost:44340/api/DETALLE_VENTA/' + id;
  return this.http.get<DETALLE_VENTA>(_url);
}

put(formulario: DETALLE_VENTA) {
  let _url = 'https://localhost:44340/api/DETALLE_VENTA' + '/' + formulario.id_detalle_venta;
  return this.http.put(_url, formulario);
}
}
