import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TcategoriaService } from 'src/app/services/tcategoria.service';
import { maquinaria } from '../maquinaria';
import { FormGroup, FormControl, Validators } from '@angular/forms';


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

  editarform = new FormGroup({
    ID_TIPO_CATEGORIA: new FormControl(''),
    DP_NOMBRE: new FormControl(''),
    DP_SERIE: new FormControl(''),
    DP_FECHA_DE_VENCIMIENTO: new FormControl(''),
    DP_DETALLES: new FormControl(''),
    DP_DISEÑO: new FormControl(''),
    ET_NOMBRE: new FormControl(''),
    ET_PLACA: new FormControl(''),
    ET_TIPO_DE_TRANSPORTE: new FormControl(''),
    ET_SERIE: new FormControl(''),
    ET_ANIO: new FormControl(''),
    MOB_NOMBRE: new FormControl(''),
    MO_DESCRIPCION: new FormControl(''),
    ACT_NOMBRE: new FormControl(''),
    INM_NOMBRE: new FormControl(''),
    INM_DIMENSIONES: new FormControl(''),
    INM_DIRECCION: new FormControl(''),
    ACT_MARCA: new FormControl(''),
    ACT_MODELO: new FormControl(''),
    ACT_SERIE: new FormControl(''),
    ACT_DESCRIPCION: new FormControl(''),
    EF_MARCA: new FormControl(''),
    EF_TIPO: new FormControl(''),
    EF_MODELO: new FormControl(''),
    EF_DESCRIPCION: new FormControl(''),
    MQ_FABRICANTE: new FormControl(''),
    MQ_TIPO: new FormControl(''),
    MQ_MODELO: new FormControl(''),
    MQ_DESCRIPCION: new FormControl('')


  }
    );


  constructor(
    private tcategoriaService:TcategoriaService,
    private router:Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.cargarmaq();
    this.gettcategoria();
    let ide = this.activatedRoute.snapshot.paramMap.get('id');
    var idd = String(ide)
    this.tcategoriaService.getsinglemaquinaria(idd).subscribe(data => {
      this.maquinaria = data;
      this.editarform.setValue({
        'ID_TIPO_CATEGORIA': this.maquinaria.ID_TIPO_CATEGORIA,
        'DP_NOMBRE': this.maquinaria.DP_NOMBRE,
        'DP_SERIE': this.maquinaria.DP_SERIE,
        'DP_FECHA_DE_VENCIMIENTO': this.maquinaria.DP_FECHA_DE_VENCIMIENTO,
        'DP_DETALLES': this.maquinaria.DP_DETALLES,
        'DP_DISEÑO': this.maquinaria.DP_DISEÑO,
        'ET_NOMBRE': this.maquinaria.ET_NOMBRE,
        'ET_PLACA': this.maquinaria.ET_PLACA,
        'ET_TIPO_DE_TRANSPORTE': this.maquinaria.ET_TIPO_DE_TRANSPORTE,
        'ET_SERIE': this.maquinaria.ET_SERIE,
        'ET_ANIO': this.maquinaria.ET_ANIO,
        'MOB_NOMBRE': this.maquinaria.MOB_NOMBRE,
        'MO_DESCRIPCION': this.maquinaria.MO_DESCRIPCION,
        'ACT_NOMBRE': this.maquinaria.ACT_NOMBRE,
        'INM_NOMBRE': this.maquinaria.INM_NOMBRE,
        'INM_DIMENSIONES': this.maquinaria.INM_DIMENSIONES,
        'INM_DIRECCION': this.maquinaria.INM_DIRECCION,
        'ACT_MARCA': this.maquinaria.ACT_MARCA,
        'ACT_MODELO': this.maquinaria.ACT_MODELO,
        'ACT_SERIE': this.maquinaria.ACT_SERIE,
        'ACT_DESCRIPCION': this.maquinaria.ACT_DESCRIPCION,
        'EF_MARCA': this.maquinaria.EF_MARCA,
        'EF_TIPO': this.maquinaria.EF_TIPO,
        'EF_MODELO': this.maquinaria.EF_MODELO,
        'EF_DESCRIPCION': this.maquinaria.EF_DESCRIPCION,
        'MQ_FABRICANTE': this.maquinaria.MQ_FABRICANTE,
        'MQ_TIPO': this.maquinaria.MQ_TIPO,
        'MQ_MODELO': this.maquinaria.MQ_MODELO,
        'MQ_DESCRIPCION': this.maquinaria.MQ_DESCRIPCION


      })

    })
    console.log(this.editarform);

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
    this.maquinaria.ID_TIPO_CATEGORIA=1;
    
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

public gettcategoria(){
  this.tcategoriaService.gettcategoria()
  .subscribe((resp: any) => {
    this.tcategoria=resp;

  })
}

findmaq (id: number){
  this.tcategoriaService.gettcategoria()
  .subscribe((resp: any) => {
    this.tcategoria=resp;

  })
  let maqactual = this.tcategoria.find((p) => {return p.ID_TIPO_CATEGORIA == id});
    console.log(maqactual);
}

editar(form:maquinaria){
  this.tcategoriaService.putmaq(form).subscribe( data => {
    console.log(data)
    this.router.navigate(['/tcategoria'])

  })
}

}
