import { NgModule } from '@angular/core';
import { ImagePipe } from './image.pipe';
import { YoutubePipe } from './youtube.pipe';

@NgModule({
  imports: [],
  declarations: [
    ImagePipe,
    YoutubePipe
  ],
  exports: [
    ImagePipe,
    YoutubePipe
  ]
})
export class PipesModule { }