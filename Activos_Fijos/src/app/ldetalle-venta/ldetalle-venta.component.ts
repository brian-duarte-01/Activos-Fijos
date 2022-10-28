import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApidetalleventaService } from '../apidetalleventa.service';

@Component({
  selector: 'app-ldetalle-venta',
  templateUrl: './ldetalle-venta.component.html',
  styleUrls: ['./ldetalle-venta.component.css']
})
export class LdetalleVentaComponent implements OnInit {
  listar: any = [];
  constructor(
    private apiRest: ApidetalleventaService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.get();
  }

  public get() {
    this.apiRest.get('https://localhost:44340/api/DETALLE_VENTA')
      .subscribe(respuesta => {
        this.listar = respuesta;
      })
  }

}
