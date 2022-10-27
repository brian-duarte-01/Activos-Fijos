import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiDepartamentoService } from '../api-departamento.service';
import { Departamento } from '../Models/DepartamentoModel';


@Component({
  selector: 'app-rdepartamento',
  templateUrl: './rdepartamento.component.html',
  styleUrls: ['./rdepartamento.component.css']
})
export class RdepartamentoComponent implements OnInit {
  listar: any = [];
  respuesta: any = [];

  form!: FormGroup;
  constructor(
    private apiRest: ApiDepartamentoService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      ID_DEPARTAMENTO: ['0'],
      DEP_NOMBRE: new FormControl('',[Validators.required])
    });

  }


  post() {
    this.apiRest.post('https://localhost:44340/api/ACT_DEPARTAMENTO',
      {
        ID_DEPARTAMENTO: '0',
        DEP_NOMBRE: this.form.value.DEP_NOMBRE
      }
    )
      .subscribe(respuesta => {
       
        confirm('se envio correctamente');
        location.href='departamento';
        
      })
  }






}
