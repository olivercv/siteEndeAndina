import { NgModule } from '@angular/core';
import { ImagePipe } from './image.pipe';
import { YoutubePipe } from './youtube.pipe';
import { TruncateTextPipe } from './truncate-text.pipe';
import { ObjectFilterPipe } from './object-filter.pipe';
import { FormatDatePipe } from './format-date.pipe';
import { DocsFilterPipe } from './docs-filter.pipe';
import { FilePipe } from './file.pipe';

@NgModule({
  imports: [],
  declarations: [
    ImagePipe,
    YoutubePipe,
    TruncateTextPipe,
    ObjectFilterPipe,
    FormatDatePipe,
    DocsFilterPipe,
    FilePipe
  ],
  exports: [
    ImagePipe,
    YoutubePipe,
    TruncateTextPipe,
    ObjectFilterPipe,
    FormatDatePipe,
    DocsFilterPipe,
    FilePipe
  ]
})
export class PipesModule { }