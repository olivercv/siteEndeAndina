import { Pipe, PipeTransform } from '@angular/core';
import { GLOBAL } from '../config/global.service';

@Pipe({
  name: 'file'
})
export class FilePipe implements PipeTransform {

  transform(file: string, type: string = 'docs'): any {

    let url = GLOBAL.urlServices + '/file';

    // if (!file) {return; }

    // if (image.indexOf('https') >= 0 ) {
    //     return image;
    // }
    console.log('ruta actual ', type);

    switch( type ) {

      case 'docs':
         url += '/docs/' + file;
        break;
      default :
        console.log('Tipo de archivo no existe');
        url += '/docs/nofile';
        break;

    }

    
    return url;
  }
}
