import { Component, OnInit } from '@angular/core';
import { TcategoriaService } from '../services/tcategoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tcategoria',
  templateUrl: './tcategoria.component.html',
  styleUrls: ['./tcategoria.component.css']
})
export class TcategoriaComponent implements OnInit {
  public tcategoria:Array<any> = []

  constructor (
    private tcategoriaService:TcategoriaService,
    private router:Router
    )
    {
     
    }

  ngOnInit(): void {
    this.gettcategoria();
  }

  public gettcategoria(){
    this.tcategoriaService.gettcategoria()
    .subscribe((resp: any) => {
      this.tcategoria=resp;

    })

  }

  findmaq (id: number){
    let maqactual = this.tcategoria.find((p) => {return p.ID_TIPO_CATEGORIA == id});
    console.log(maqactual);

  }

  elimimaq(id: number){
    this.tcategoriaService.delmaq(id).subscribe( data => {
      console.log(data)
      this.router.navigate(['/tcategoria'])
    location.href = 'tcategoria';
    })
    
  }

}
