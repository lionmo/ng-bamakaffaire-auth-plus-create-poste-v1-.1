import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  newpassword = new FormControl('', [Validators.required, Validators.minLength(4)])

  showAlert = false
  alertMsg = 'Verifie email'
  alertColor = 'blue'
  inSubmission = false

  public token: string | null
  public email: string | null
  constructor(
    private authService: AuthService,
    private currentRoute: ActivatedRoute
  ) { 
    this.token = this.currentRoute.snapshot.queryParamMap.get('token')
    this.email = this.currentRoute.snapshot.queryParamMap.get('email')
  }

  ngOnInit(): void {
    
  }

  resetPassword = () => {
    this.showAlert = true
    this.alertMsg = 'Réinitialisation du mot de passe en cours...'
    this.alertColor = 'blue'
    this.inSubmission = true
    if(this.token && this.email) {
      try {
        this.authService.resetPassword(this.token, this.email, this.newpassword.value).subscribe((response) => {
          const { error, error1, message } = response
          if(error) {
            this.alertMsg = error.message
            this.alertColor = 'red'
            this.inSubmission = false
            return 
          }
          if(error1) {
            this.alertMsg = error1
            this.alertColor = 'red'
            this.inSubmission = false
            return 
          }
          
        })
      } catch (error) {
        this.alertMsg = `Une erreur c'est produite, veuillez réessayer ulterieurement...`
        this.alertColor = 'red'
        this.inSubmission = false
        return
      }

      this.alertMsg = `Mot de passe changé avec succès!\nVeuillez vous connecter avec le nouveau mot de passe`
      this.alertColor = 'green'
      this.inSubmission = true
      return
    }

    this.alertMsg = `Lien invalide`
    this.alertColor = 'red'
    this.inSubmission = false
  }

}
