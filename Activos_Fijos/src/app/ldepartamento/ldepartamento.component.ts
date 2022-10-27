import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiDepartamentoService } from '../api-departamento.service';

@Component({
  selector: 'app-ldepartamento',
  templateUrl: './ldepartamento.component.html',
  styleUrls: ['./ldepartamento.component.css']
})
export class LDepartamentoComponent implements OnInit {
  listar: any = [];
  form!: FormGroup;

  constructor(
    private apiRest: ApiDepartamentoService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.get();

    this.form = this.fb.group({
      ID_DEPARTAMENTO: ['0'],
      DEP_NOMBRE: new FormControl('', [Validators.required])
    });
  }

  public get() {
    this.apiRest.get('https://localhost:44340/api/ACT_DEPARTAMENTO')
      .subscribe(respuesta => {
        this.listar = respuesta;
      })
  }











}
