import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthModalService {
  private registration = false
  private openLogin = false
  constructor() { }

  getRegistration() {
    return this.registration
  }

  getOpenLogin() {
    return this.openLogin
  }

  register() {
    this.openLogin = false
    this.registration = true
  }

  login() {
    this.registration = false
    this.openLogin = true
  }
}
