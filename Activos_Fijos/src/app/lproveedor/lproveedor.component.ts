import { Component, OnInit } from '@angular/core';
import { ApiproveedorService } from '../apiproveedor.service';

@Component({
  selector: 'app-lproveedor',
  templateUrl: './lproveedor.component.html',
  styleUrls: ['./lproveedor.component.css']
})
export class LproveedorComponent implements OnInit {
  listar: any = [];
  constructor(
    private apiRest: ApiproveedorService
  ) { }

  ngOnInit(): void {
    this.get();
  }

  public get() {
    this.apiRest.get('https://localhost:44340/api/PROV_PRODUCTOS_DET')
      .subscribe(respuesta => {
        this.listar = respuesta;
      })
  }

}
