import { Component } from '@angular/core';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {MymodalComponent} from './mymodal/mymodal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngModelExample';

  closeResult: string;
  modalOptions: NgbModalOptions;

  constructor(private modalService: NgbModal){
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  open() {
    const modalRef = this.modalService.open(MymodalComponent);
    modalRef.componentInstance.customModalTitle = 'I your title';
    modalRef.componentInstance.customModalContent = 'I am your content';
  }
}
