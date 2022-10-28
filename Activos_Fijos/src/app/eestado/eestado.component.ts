import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiestadoService } from '../apiestado.service';
import { Estado } from '../Models/EstadoModel';

@Component({
  selector: 'app-eestado',
  templateUrl: './eestado.component.html',
  styleUrls: ['./eestado.component.css']
})
export class EestadoComponent implements OnInit {
  datosE!: Estado;

  form: FormGroup = this.fb.group({
    id_estado: ['', [Validators.required]],
    act_nombre: ['', (Validators.required)]
  })


  constructor(
    private apiRest: ApiestadoService,
    private fb: FormBuilder,
    private ar: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit(): void {

    let estadoid = this.ar.snapshot.paramMap.get('id');
    var eid = String(estadoid);
    this.apiRest.getAll(eid)
      .subscribe(data => {
        this.datosE = data;
        console.log(this.datosE);
        this.form.setValue({
          'id_estado': this.datosE.id_estado,
          'act_nombre': this.datosE.act_nombre
        });

      })
  }


  put(formulario: Estado) {
    this.apiRest.put(formulario)
      .subscribe(data => {
        console.log(data);
        this.route.navigate(['/estado'])
      })
    console.log(formulario);
  }

}
