import { Component, OnInit, Input, ElementRef, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() modalID = ''
  @Input() class1 = ''
  @Input() class2 = ''
  constructor(
      public modal: ModalService,
      private el: ElementRef
    ) { }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }

  ngOnDestroy(): void {
    document.body.removeChild(this.el.nativeElement)
  }
  
  closeModal() {
    this.modal.toggleModal(this.modalID)
  }

}
