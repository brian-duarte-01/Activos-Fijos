import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiDepartamentoService } from '../api-departamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamento } from '../Models/DepartamentoModel';
import { data } from 'jquery';
@Component({
  selector: 'app-edepartamento',
  templateUrl: './edepartamento.component.html',
  styleUrls: ['./edepartamento.component.css']
})
export class EdepartamentoComponent implements OnInit {
////
  form: FormGroup = this.fb.group({
    ID_DEPARTAMENTO: ['',[Validators.required]],
    DEP_NOMBRE: ['', (Validators.required)]

  });
///
  datosD!: Departamento;

  constructor(
    private apiRest: ApiDepartamentoService,
    private fb: FormBuilder,
    private ar: ActivatedRoute,
    private route: Router
  ) { }

  //
  ngOnInit(): void {
    let departamentoid = this.ar.snapshot.paramMap.get('id');
    var did = String(departamentoid);
    this.apiRest.getAll(did)
      .subscribe(data => {
        this.datosD = data;
        console.log(this.datosD);
        this.form.setValue({
          'ID_DEPARTAMENTO': this.datosD.ID_DEPARTAMENTO,
          'DEP_NOMBRE': this.datosD.DEP_NOMBRE
        });

      })

  }


///
  put(formulario:Departamento){
    this.apiRest.put(formulario)
    .subscribe(data=>{
      console.log(data);
      this.route.navigate(['/departamento'])
    })
console.log(formulario);
  }

}
