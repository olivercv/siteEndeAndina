import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ModalDialogComponent } from './modal-dialog.component';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [ModalDialogComponent],
  exports: [ModalDialogComponent],
  bootstrap: [ModalDialogComponent]
})
export class ModalDialogModule {}
