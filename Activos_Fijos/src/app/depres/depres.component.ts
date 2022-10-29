import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DepresService } from '../services/depres.service';
import jspdf, { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

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
    this.downloadPDF();
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

  downloadPDF() {
    // Extraemos el
    const DATA: any = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_activos_fijos.pdf`);
    });
  }

}