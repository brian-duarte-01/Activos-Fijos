import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  public categoria:Array<any> = []
  constructor(
    private categoriaService: CategoriaService,
    private router:Router
  ) { 
    console.log("Servicio Categoria")
    
  }

  ngOnInit(): void {
    this.getcategoria();
  }

  getcategoria(){
    this.categoriaService.getcategoria().subscribe((resp : any) => {
      console.log(resp)
      this.categoria = resp

    })
  }

  findmaq (id: number){
    let catactual = this.categoria.find((p) => {return p.ID_CATEGORIA == id});
    console.log(catactual);

  }

  elimimaq(id: number){
    this.categoriaService.delmaq(id).subscribe( data => {
      console.log(data)
      this.router.navigate(['/categoria'])
    location.href = 'categoria';
    })
    
  }

}
