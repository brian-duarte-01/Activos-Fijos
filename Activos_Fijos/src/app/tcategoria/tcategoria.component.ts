import { Component, OnInit } from '@angular/core';
import { TcategoriaService } from '../services/tcategoria.service';

@Component({
  selector: 'app-tcategoria',
  templateUrl: './tcategoria.component.html',
  styleUrls: ['./tcategoria.component.css']
})
export class TcategoriaComponent implements OnInit {
  public tcategoria:Array<any> = []

  constructor (
    private tcategoriaService:TcategoriaService
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

}
