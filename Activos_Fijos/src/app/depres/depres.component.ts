import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DepresService } from '../services/depres.service';

@Component({
  selector: 'app-depres',
  templateUrl: './depres.component.html',
  styleUrls: ['./depres.component.css']
})
export class DepresComponent implements OnInit {
  public depres:Array<any> = []
  constructor(
    private depresService: DepresService,
    private router:Router
  ) {
    console.log("Servicio Depresiaciones")
   }

  ngOnInit(): void {
    this.getcategoria();
  }

  getcategoria(){
    this.depresService.getcategoria().subscribe((resp : any) => {
      console.log(resp)
      this.depres = resp

    })
  }
}
