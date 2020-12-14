import { Component, OnInit } from '@angular/core';
import { ConvocatoriasService } from '../../services/convocatorias.service';
import { IConvocatory } from '../../interfaces/interfaces';
import { GLOBAL } from '../../config/global.service';
declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-convocatorias',
  templateUrl: './convocatorias.component.html',
  styleUrls: ['./convocatorias.component.scss']
})
export class ConvocatoriasComponent implements OnInit {

  conv  = 1;
  title = 'Vigente';
  // filters = ['vigente', 'adjudicado', 'desierto'];
  filterDoc: string;
  loading = true;
  documents: IConvocatory[] = [];
  total = 0;
  to = 0;
  ruta = GLOBAL.urlServices;

  constructor( private convocatoriasService: ConvocatoriasService) { }

  ngOnInit(): void {

    this.getConvocatories();
    this.showDocumets(this.title);
  }

  // getdocuments() {
  //   this.loading = true;
  //   this.filterDocuments( this.to)
  //   .subscribe( (result: any) => {
  //     this.documents.push(...result);
  //     this.loading = false;
  //   });


  // }

  

  getConvocatories() {
    this.loading = true;
    this.convocatoriasService.getConvocatories()
    .subscribe( (result: any) => {
      // console.log('datos', result);
      this.documents.push(...result);
      this.loading = false;

    });
  }

  downloadPdf(pdfUrl: string, pdfName: string ) {
    const url = GLOBAL.urlServices + '/file/docs/' + pdfUrl;
    FileSaver.saveAs(url, pdfName);
  }

  showDocumets(type: string) {
    this.title = type;
    // this.documents = this.filterDocuments(this.title);
    // console.log('filtrados ', this.documents);
    if ( type === 'Vigente') {
      this.conv = 1;
    } else if (type === 'Adjudicado') {
      this.conv = 2;
    } else {
      this.conv = 3;
    }
    console.log('presiono', type);

  }

}
