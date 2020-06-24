import { Component, OnInit } from '@angular/core';
import { ConvocatoriasService } from '../../services/convocatorias.service';

@Component({
  selector: 'app-convocatorias',
  templateUrl: './convocatorias.component.html',
  styleUrls: ['./convocatorias.component.scss']
})
export class ConvocatoriasComponent implements OnInit {

  conv: number  = 1;
  title: string = 'vigentes';
  documents: any = [];

  constructor( private convocatorias: ConvocatoriasService) { }

  ngOnInit(): void {
    this.showDocumets(this.title);
  }
  showDocumets(type: string) {
    this.title = type;

    this.documents = this.convocatorias.getDocuments(this.title);

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
