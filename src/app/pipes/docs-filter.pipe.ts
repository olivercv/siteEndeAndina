import { Pipe, PipeTransform } from '@angular/core';
import { IConvocatory, Idocument } from '../interfaces/interfaces';

@Pipe({
  name: 'docsFilter'
})
export class DocsFilterPipe implements PipeTransform {

  transform(items: IConvocatory[], arg: any, type: any): any[] {
    if (!items) { return []; }
    console.log('tipo ', type);
    // if (!arg || arg.length < 3) { return items; }

    const result = [];
    let found: boolean;
    for ( const conv of items ) {
        found = false;

        if (conv.estado.toLowerCase() === type.toLowerCase()) {

            // if (arg.length < 1) {
            //   found = true;
            // }


            if ( conv.titulo.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
                conv.correo.toLowerCase().indexOf(arg.toLowerCase()) > -1
              ) {
                found = true;
            }

            for (const doc of conv.docs) {
              if (doc.titulo.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
    
                found = true;
              }
            }
       }


        if (found) {
          result.push(conv);
        }

    }

    // items.filter((listing: any) => listing.type > 2);


    // console.log('recuperados ', items);
    return result;
  }

}
