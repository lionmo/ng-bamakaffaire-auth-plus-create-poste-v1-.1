import { Component, OnInit } from '@angular/core';
import { AuthModalService } from 'src/app/services/auth-modal.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = {
    email: '',
    motdepasse:''
  }
  showAlert = false
  alertMsg = 'Connexion en cours...'
  alertColor = 'blue'
  inSubmission = false
  constructor(
    private authModalService: AuthModalService,
    private auth: AuthService
    ) { }

  ngOnInit(): void {
  }

  tooggleSignup(event: Event) {
    event.preventDefault()
    this.authModalService.register()
  }

  login = () => {
    this.showAlert = true
    this.alertMsg = 'Connexion en cours...'
    this.alertColor = 'blue'
    this.inSubmission = true
    try {
      this.auth.login(this.credentials.email, this.credentials.motdepasse).subscribe((response) => {
        const { error, error1, user } = response
        this.auth.getAuthStatus()
        if(error) {
          console.log(error)
          this.alertMsg = error.message
          this.alertColor = 'red'
          this.inSubmission = false
          return
        } else if(error1) {
          console.log(error1)
          this.alertMsg = error1
          this.alertColor = 'red'
          this.inSubmission = false
          return
        } else {
          console.log(user)
          this.alertMsg = 'Connecté.'
          this.alertColor = 'green'
        }
      })
    } catch (error) {
      this.inSubmission = false
    }
  }

}
