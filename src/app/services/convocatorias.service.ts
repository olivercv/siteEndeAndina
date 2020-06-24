import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConvocatoriasService {

  data = [
    {
      section : 'SEGUNDA CONVOCATORIA  N° 006/2020',
      type: 'vigentes',
      title: 'Perforación y Construcción de  2 pozos profundos para producción de agua – Ciclos combinados Planta Termoeléctrica Warnes.',
      Inital: '10/06/2020',
      meeting: '10/06/2020',
      presentation: '10/06/2020',
      detail: '',
      docs: [{
                title: 'TERMINOS DE REFERENCIA 2da CONVOCATORIA POZOS PROFUNDOS WARNES',
                url: 'assets/doc/adquisiciones/TERMINOS_DE_REFERENCIA_2da_CONVOCATORIA_POZOS+PROFUNDOS_WARNES.pdf',
                type: 'fa-file-pdf',
            },
            {
              title: 'PLIEGO DE CONDICIONES POZOS PROFUNDOS PTWAR (2da CONVOCATORIA)',
              url: 'assets/doc/adquisiciones/PLIEGO_DE_CONDICIONES_POZOS_PROFUNDOS_PTWAR_(2da_CONVOCATORIA).pdf',
              type: 'fa-file-pdf'
            },
            {
              title: 'Invitacion 006-2020 Pozos Profundos (2da Convocatoria)',
              url: 'assets/doc/adquisiciones/Invitacion_006-2020_Pozos_Profundos_(2da Convocatoria).pdf',
              type: 'fa-file-pdf'
            },
            {
              title: 'PLANOS PERFORACION Y CONSTRUCCIÓN DE 2 POZOS PROFUNDOS',
              url: 'assets/doc/adquisiciones/PLANOS_PERFORACION_Y_CONSTRUCCIÓN_DE_2 POZOS_PROFUNDOS.pdf',
              type: 'fa-file-pdf'
            },
            {
              title: 'FORMULARIOS PROCESO CONSTRUCCION POZOS PROFUNDOS',
              url: 'assets/doc/adquisiciones/FORMULARIOS_PROCESO_CONSTRUCCION_POZOS_PROFUNDOS.docx',
              type: 'fa-file-word'
            },
            {
              title: 'ESPECIFICACIONES TECNICAS GENERALES PERFORACION Y CONSTRUCCIÓN DE 2 POZOS PROFUNDOS',
              url: 'assets/doc/adquisiciones/ESPECIFICACIONES_TECNICAS_GENERALES PERFORACION_Y_CONSTRUCCIÓN_DE_2_POZOS_PROFUNDOS.pdf',
              type: 'fa-file-pdf'
            },
            {
              title: 'ESPECIFICACIONES TECNICAS ESPECIALES PERFORACION Y CONSTRUCCIÓN DE 2 POZOS PROFUNDOS',
              url: 'assets/doc/adquisiciones/ESPECIFICACIONES_TECNICAS_ESPECIALES_PERFORACION_Y_CONSTRUCCIÓN_DE_2_POZOS_PROFUNDOS.pdf',
              type: 'fa-file-pdf'
            }


          ]
    },
    // {
    //   section : 'SEGUNDA CONVOCATORIA  N° 007/2020',
    //   type: 'concluidas',
    //   title: 'Construcción de  2 pozos profundos para producción de agua – Ciclos combinados Planta Termoeléctrica Warnes.',
    //   Inital: '10/06/2020',
    //   meeting: '10/06/2020',
    //   presentation: '10/06/2020',
    //   detail: '',
    //   docs: [{
    //             title: 'TERMINOS DE REFERENCIA 2da CONVOCATORIA POZOS PROFUNDOS WARNES',
    //             url: 'assets/doc/adquisiciones/TERMINOS_DE_REFERENCIA_2da_CONVOCATORIA_POZOS+PROFUNDOS_WARNES.pdf',
    //             type: 'fa-file-pdf',
    //         },
    //         {
    //           title: 'PLIEGO DE CONDICIONES POZOS PROFUNDOS PTWAR (2da CONVOCATORIA)',
    //           url: 'assets/doc/adquisiciones/PLIEGO_DE_CONDICIONES_POZOS_PROFUNDOS_PTWAR_(2da_CONVOCATORIA).pdf',
    //           type: 'fa-file-pdf'
    //         }


    //       ]
    // }
  ];

  newData: any;

  constructor( private http: HttpClient ) {

    this.newData = this.getDocuments('vigentes');
    console.log(this.newData);
   }


  getDocuments(fl: string) {

    return this.data.filter( object => {
        return object['type'] == fl;
    });

  }


}
