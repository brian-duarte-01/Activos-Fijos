import { Component, OnInit } from '@angular/core';
import { ApiproductoService } from '../apiproducto.service';

@Component({
  selector: 'app-lproducto',
  templateUrl: './lproducto.component.html',
  styleUrls: ['./lproducto.component.css']
})
export class LproductoComponent implements OnInit {
  listar: any = [];
  constructor(
    private apiRest: ApiproductoService
  ) { }

  ngOnInit(): void {
    this.get();
  }

  public get() {
    this.apiRest.get('https://localhost:44340/api/PROVEEDORES')
      .subscribe(respuesta => {
        this.listar = respuesta;
      })
  }

}
