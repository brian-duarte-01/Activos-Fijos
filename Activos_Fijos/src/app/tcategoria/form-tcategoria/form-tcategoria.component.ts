import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
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
  public tcategoria:Array<any> = []
  _url = 'https://localhost:44340/api/TIPO_CATEGORIA'


  constructor(
    private tcategoriaService:TcategoriaService,
    private router:Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.cargarmaq();
    let ide = this.activatedRoute.snapshot.paramMap.get('id');
    this.findmaq(ide);

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

cargarmaq():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.tcategoria.find((p) => {p.ID_TIPO_CATEGORIA == id})
        
        }
      }

    );

}

findmaq (id: any){
  let maqactual = this.tcategoria.find((p) => {return p.ID_TIPO_CATEGORIA == id});
    console.log(maqactual);
}


}
