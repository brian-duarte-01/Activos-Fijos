import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ApiDepartamentoService } from '../api-departamento.service';

@Component({
  selector: 'app-ldepartamento',
  templateUrl: './ldepartamento.component.html',
  styleUrls: ['./ldepartamento.component.css']
})
export class LDepartamentoComponent implements OnInit {
  listar: any = [];

  constructor(
    private apiRest: ApiDepartamentoService,
    private fb: FormBuilder,
    private route: Router
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

  editar(id:number) {
   this.route.navigate(['edepartamento',id]);
  }











}
