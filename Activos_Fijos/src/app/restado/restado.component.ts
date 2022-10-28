import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiDepartamentoService } from '../api-departamento.service';
import { ApiestadoService } from '../apiestado.service';

@Component({
  selector: 'app-restado',
  templateUrl: './restado.component.html',
  styleUrls: ['./restado.component.css']
})
export class RestadoComponent implements OnInit {
  respuesta: any = [];
  form!: FormGroup;



  constructor(
    private apiRest: ApiestadoService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id_estado: ['0'],
      act_nombre: new FormControl('',[Validators.required])
    });
  }

  post() {
    this.apiRest.post('https://localhost:44340/api/ACT_ESTADO',
      {
        id_estado: '0',
        act_nombre: this.form.value.act_nombre
      }
    )
      .subscribe(respuesta => {
       
        confirm('se envio correctamente');
        location.href='estado';
        
      })
  }

}
