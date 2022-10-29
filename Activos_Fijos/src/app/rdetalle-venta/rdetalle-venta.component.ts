import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApidetalleventaService } from '../apidetalleventa.service';

@Component({
  selector: 'app-rdetalle-venta',
  templateUrl: './rdetalle-venta.component.html',
  styleUrls: ['./rdetalle-venta.component.css']
})
export class RdetalleVentaComponent implements OnInit {

  listar: any = [];
  respuesta: any = [];
  form!: FormGroup;
  constructor(
    private apiRest: ApidetalleventaService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      id_detalle_venta: ['0'],
      ven_nombre : new FormControl('',[Validators.required]),
      ven_precio : new FormControl('',[Validators.min(0), Validators.required]),
      ven_cantidad : new FormControl('',[Validators.required]),
      ven_descripcion : new FormControl('',[Validators.required]),
      id_activo : new FormControl('',[Validators.required]),
    });

  }

  post() {
    this.apiRest.post('https://localhost:44340/api/DETALLE_VENTA',
      {
        id_detalle_venta: '0',
        ven_nombre: this.form.value.ven_nombre,
        ven_precio: this.form.value.ven_precio,
        ven_cantidad: this.form.value.ven_cantidad,
        ven_descripcion: this.form.value.ven_descripcion,
        id_activo: this.form.value.id_activo,

      }
    )
      .subscribe(respuesta => {
       
        confirm('se envio correctamente');
        location.href='detalleventa';
        
      })
  }

}
