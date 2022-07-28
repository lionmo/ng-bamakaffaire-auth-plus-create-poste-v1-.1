import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email])

  showAlert = false
  alertMsg = 'Verifie email'
  alertColor = 'blue'
  inSubmission = false

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  sendEmail() {
    this.showAlert = true
    this.alertMsg = `Envoie de l'email en cours...`
    this.alertColor = 'blue'
    this.inSubmission = true
    try {
      this.authService.forgotPassword(this.email.value).subscribe(response => {
        const { error, error1, message } = response

        if(error1) {
          this.alertMsg = error1
          this.alertColor = 'red'
          this.inSubmission = false
          return
        }

        if(error) {
          this.alertMsg = error.message
          this.alertColor = 'red'
          this.inSubmission = false
          return
        }

        this.alertMsg = `Verifier votre email pour réinitialiser le mot de passe`
        this.alertColor = 'green'
        this.inSubmission = true

      })
    } catch (error) {
      this.alertMsg = `Erreur inconnu, veuillez réessayer ulterieurement`
      this.alertColor = 'red'
      this.inSubmission = false
      return
    }
  }

}
