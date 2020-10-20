import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';



declare var jQuery:any;

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  constructor( private modalService: NgbModal ) {
   }

  ngOnInit(): void {
    // this.open();
  }

  open() {
    const modalRef = this.modalService.open(ModalDialogComponent, { size: 'lg', scrollable: true });
    modalRef.componentInstance.modal_title = 'Comunicado - Se SUSPENDEN los plazos de gestiones de denuncias';
    modalRef.componentInstance.modal_content = '';
  }

}
