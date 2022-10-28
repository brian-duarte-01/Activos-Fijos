import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiestadoService } from '../apiestado.service';

@Component({
  selector: 'app-lestado',
  templateUrl: './lestado.component.html',
  styleUrls: ['./lestado.component.css']
})
export class LestadoComponent implements OnInit {
  listar: any = [];
  constructor(
    private apiRest: ApiestadoService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.get();
  }

  public get() {
    this.apiRest.get('https://localhost:44340/api/ACT_ESTADO')
      .subscribe(respuesta => {
        this.listar = respuesta;
      })
  }

  editar(id:number) {
    this.route.navigate(['eestado',id]);
   }

}
