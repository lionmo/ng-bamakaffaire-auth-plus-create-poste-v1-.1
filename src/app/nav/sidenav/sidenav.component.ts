import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

  @Input() opened = false
  constructor(
    public modal: ModalService,
    public authService: AuthService
    ) { }

  ngOnInit(): void {
    this.modal.register('sidenav')
  }

  ngOnDestroy(): void {
    this.modal.unregister('sidenav')
  }

  openModal($event: Event) {
    $event.preventDefault()
    this.modal.toggleModal("auth")
  }


  preventDefault(event: Event) {
    event.preventDefault()
  } 
}
