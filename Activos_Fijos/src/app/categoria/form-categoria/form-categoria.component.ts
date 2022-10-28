import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TcategoriaService } from 'src/app/services/tcategoria.service';
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

  constructor(
    private tcategoriaService:TcategoriaService,
    private router:Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  ingresarcat(){
    this.tcategoriaService.postmaq(this.categoria)
    .subscribe((resp: any) => {
      this.categoria=resp;
      this.router.navigate(['/categoria'])
  })
  }

}
