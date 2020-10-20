import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'objFilter'
})
export class ObjectFilterPipe implements PipeTransform {
  transform(items: any, arg: any): any[] {
    if (!items) { return []; }

    if (!arg || arg.length < 3) { return items; }

    const resultPost = [];

    for ( const post of items ) {
        if ( post.title.toLowerCase().indexOf(arg.toLowerCase()) > -1 ) {
          resultPost.push(post);
        }
    }

    // items.filter((listing: any) => listing.type > 2);
    
    
    // console.log('recuperados ', items);
    return resultPost;
  }
}
