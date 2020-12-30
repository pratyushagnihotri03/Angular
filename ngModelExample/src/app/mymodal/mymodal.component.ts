import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mymodal',
  templateUrl: './mymodal.component.html',
  styleUrls: ['./mymodal.component.scss']
})
export class MymodalComponent implements OnInit {

  @Input() customModalTitle;
  @Input() customModalContent;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
