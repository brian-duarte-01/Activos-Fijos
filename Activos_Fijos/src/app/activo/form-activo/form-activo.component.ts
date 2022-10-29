import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ActivoService } from 'src/app/services/activo.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { activo } from '../activo';

@Component({
  selector: 'app-form-activo',
  templateUrl: './form-activo.component.html',
  styleUrls: ['./form-activo.component.css']
})
export class FormActivoComponent implements OnInit {

  activo: activo = new activo();
  public tcategoria:Array<any> = []
  _url = 'https://localhost:44340/api/ACTIVOes'

  editarform = new FormGroup({
    ID_ACTIVO: new FormControl(''),
    ACT_NOMBRE: new FormControl('',[Validators.required])
  });

  constructor(
    private activoService: ActivoService,
    private router:Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute

  ) { 
    let ide = this.activatedRoute.snapshot.paramMap.get('id');
    var idd = String(ide)
    this.activoService.getsingleactivo(idd).subscribe(data => {
      this.activo = data;
      this.editarform.setValue({
        'ID_ACTIVO': this.activo.ID_ACTIVO,
        'ACT_NOMBRE': this.activo.ACT_NOMBRE

      })

    })
    console.log(this.editarform);
  }

  ngOnInit(): void {
  }

  ingresaract(){
    this.activoService.postact(this.activo)
    .subscribe((resp: any) => {
      this.activo=resp;
      this.router.navigate(['/activo'])
  })
  }

  editar(form:activo){
    this.activoService.putact(form).subscribe( data => {
      console.log(data)
      this.router.navigate(['/activo'])
  
    })
  }

  ingresarmaq():void{
    
    this.activoService.postact(this.activo)
    .subscribe((resp: any) => {
      this.activo=resp;
      this.router.navigate(['/activo'])
  })
}

}
