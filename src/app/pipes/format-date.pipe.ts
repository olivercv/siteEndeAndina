import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(date: string, args: string): any {

    if (!date) { return ''; }
    if (!args ) { return date; }
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    // console.log('argumento ', args);
    const date1 = new Date(date);
    let result;

    if ( args === 'day' ) {
      result = date1.getDate();
    } else if ( args === 'month' ) {
      result = months[date1.getMonth()];
    } else {
      result = date1.getFullYear();
    }

    return result;

    }

}
