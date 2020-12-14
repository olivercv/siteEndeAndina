import { Pipe, PipeTransform } from '@angular/core';
import { IConvocatory } from '../interfaces/interfaces';

@Pipe({
  name: 'convFilter'
})
export class ConvFilterPipe implements PipeTransform {

  validConv: IConvocatory[] = [] ;

  transform(items: IConvocatory[], estado: string): IConvocatory[] {

    items.forEach( convocatory => {
      if ( convocatory.estado === estado) {
        this.validConv.push(convocatory);
      }
    });

    return this.validConv;
  }

}
