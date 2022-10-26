import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TcategoriaService } from 'src/app/services/tcategoria.service';
import { maquinaria } from '../maquinaria';

@Component({
  selector: 'app-form-tcategoria',
  templateUrl: './form-tcategoria.component.html',
  styleUrls: ['./form-tcategoria.component.css']
})
export class FormTcategoriaComponent implements OnInit {
  titulo:string="Regristro de Tipo de Categoria";
  maquinaria: maquinaria = new maquinaria();
  _url = 'https://localhost:44340/api/TIPO_CATEGORIA'

  constructor(
    private tcategoriaService:TcategoriaService,
    private router:Router,
    private http: HttpClient

  ) { }

  ngOnInit(): void {
  }

  ingresarmaq():void{
    this.maquinaria.DP_NOMBRE="null";
    this.maquinaria.DP_SERIE="null";
    this.maquinaria.DP_FECHA_DE_VENCIMIENTO="null";
    this.maquinaria.DP_DETALLES="null";
    this.maquinaria.DP_DISEÑO="null";
    this.maquinaria.ET_NOMBRE="null";
    this.maquinaria.ET_PLACA="null";
    this.maquinaria.ET_TIPO_DE_TRANSPORTE="null";
    this.maquinaria.ET_SERIE="null";
    this.maquinaria.ET_ANIO="null";
    this.maquinaria.MOB_NOMBRE="null";
    this.maquinaria.MO_DESCRIPCION="null";
    this.maquinaria.ACT_NOMBRE="null";
    this.maquinaria.INM_NOMBRE="null";
    this.maquinaria.INM_DIMENSIONES="null";
    this.maquinaria.INM_DIRECCION="null";
    this.maquinaria.ACT_MARCA="null";
    this.maquinaria.ACT_MODELO="null";
    this.maquinaria.ACT_SERIE="null";
    this.maquinaria.ACT_DESCRIPCION="null";
    this.maquinaria.EF_MARCA="null";
    this.maquinaria.EF_TIPO="null";
    this.maquinaria.EF_MODELO="null";
    this.maquinaria.EF_DESCRIPCION="null";
    
    this.tcategoriaService.postmaq(this.maquinaria)
    .subscribe((resp: any) => {
      this.maquinaria=resp;
      this.router.navigate(['/tcategoria'])
  })


}
}
