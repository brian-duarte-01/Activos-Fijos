import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ApiDepartamentoService } from '../api-departamento.service';

@Component({
  selector: 'app-ldepartamento',
  templateUrl: './ldepartamento.component.html',
  styleUrls: ['./ldepartamento.component.css']
})
export class LDepartamentoComponent implements OnInit {
  listar: any = [];

  constructor(
    private apiRest: ApiDepartamentoService
  ) { }

  ngOnInit(): void {
    this.get();
  }

  public get() {
    this.apiRest.get('https://localhost:44340/api/ACT_DEPARTAMENTO')
      .subscribe(respuesta => {
        this.listar = respuesta;
      })
  }






}
