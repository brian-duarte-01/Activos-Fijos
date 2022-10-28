import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TcategoriaService } from 'src/app/services/tcategoria.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { categoria } from '../categoria';

@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.css']
})
export class FormCategoriaComponent implements OnInit {
  titulo:string="Regristro de Tipo de Categoria";
  categoria: categoria = new categoria();
  public tcategoria:Array<any> = []
  _url = 'https://localhost:44340/api/ACT_CATEGORIA'

  editarform = new FormGroup({
    ID_CATEGORIA: new FormControl(''),
    ID_TIPO_CATEGORIA: new FormControl('')
  });

  constructor(
    private categoriaService: CategoriaService,
    private router:Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { 
    let ide = this.activatedRoute.snapshot.paramMap.get('id');
    var idd = String(ide)
    this.categoriaService.getsinglecategoria(idd).subscribe(data => {
      this.categoria = data;
      this.editarform.setValue({
        'ID_CATEGORIA': this.categoria.ID_CATEGORIA,
        'ID_TIPO_CATEGORIA': this.categoria.ID_TIPO_CATEGORIA

      })

    })
    console.log(this.editarform);
  }

  ngOnInit(): void {
  }

  ingresarcat(){
    this.categoriaService.postmaq(this.categoria)
    .subscribe((resp: any) => {
      this.categoria=resp;
      this.router.navigate(['/categoria'])
  })
  }

  editar(form:categoria){
    this.categoriaService.putmaq(form).subscribe( data => {
      console.log(data)
      this.router.navigate(['/categoria'])
  
    })
  }

  ingresarmaq():void{
    
    this.categoriaService.postmaq(this.categoria)
    .subscribe((resp: any) => {
      this.categoria=resp;
      this.router.navigate(['/categoria'])
  })
}
}
