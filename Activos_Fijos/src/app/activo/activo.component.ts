import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ActivoService } from '../services/activo.service';

@Component({
  selector: 'app-activo',
  templateUrl: './activo.component.html',
  styleUrls: ['./activo.component.css']
})
export class ActivoComponent implements OnInit {
  public activo:Array<any> = []
  constructor(
    private activoService: ActivoService,
    private router:Router

  ) { 
    console.log("Servicio Activo")
  }

  ngOnInit(): void {
    this.getactivo();
  }

  getactivo(){
    this.activoService.getactivo().subscribe((resp : any) => {
      console.log(resp)
      this.activo = resp

    })
  }

  findact (id: number){
    let catactual = this.activo.find((p) => {return p.ID_ACTIVO == id});
    console.log(catactual);

  }

  elimiact(id: number){
    this.activoService.delact(id).subscribe( data => {
      console.log(data)
      this.router.navigate(['/activo'])
    location.href = 'activo';
    })
    
  }

}
