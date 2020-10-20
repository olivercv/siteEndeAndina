import { Component, OnInit } from '@angular/core';
import { ConvocatoriasService } from '../../services/convocatorias.service';
import { IConvocatory } from '../../interfaces/interfaces';
import { GLOBAL } from '../../config/global.service';
declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-convocatorias',
  templateUrl: './convocatorias.component.html',
  styleUrls: ['./convocatorias.component.scss']
})
export class ConvocatoriasComponent implements OnInit {

  conv: number  = 1;
  title: string = 'vigente';
  // documents: any = [];
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

  filterDocuments(fl: string) {
    console.log('llega ', fl)
    return this.documents.filter( object => {
        return object['estado'] == fl;
    });

  }

  getConvocatories() {
    this.loading = true;
    this.convocatoriasService.getConvocatories()
    .subscribe( (result: any) => {
      console.log('datos', result);
      this.documents.push(...result);
      this.loading = false;
    });
  }

  downloadPdf(pdfUrl: string, pdfName: string ) {
    let url = GLOBAL.urlServices + '/file/docs/' + pdfUrl;
    FileSaver.saveAs(url, pdfName);
  }

  showDocumets(type: string) {
    this.title = type;

    this.documents = this.filterDocuments(this.title);
    console.log('filtrados ', this.documents)
    if( type == 'vigentes') {
      this.conv = 1;
    } else if(type == 'concluidas') {
      this.conv = 2;

    } else {
      this.conv = 3;
    }
    console.log('presiono', type);

  }

}
