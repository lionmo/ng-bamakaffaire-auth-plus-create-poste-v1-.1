import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(public openModal: ModalService) { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.openModal.toggleModal('sidenav')
  }

}
