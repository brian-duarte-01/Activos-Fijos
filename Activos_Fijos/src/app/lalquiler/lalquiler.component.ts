import { Component, OnInit } from '@angular/core';
import { ApialquilerService } from '../apialquiler.service';

@Component({
  selector: 'app-lalquiler',
  templateUrl: './lalquiler.component.html',
  styleUrls: ['./lalquiler.component.css']
})
export class LalquilerComponent implements OnInit {
  listar: any = [];
  constructor(

    private apiRest: ApialquilerService
  ) { }

  ngOnInit(): void {
    this.get();
  }

  public get() {
    this.apiRest.get('https://localhost:44340/api/ACT_ALQUILER')
      .subscribe(respuesta => {
        this.listar = respuesta;
      })
  }

}
