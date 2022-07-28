import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthModalService } from 'src/app/services/auth-modal.service';
import IUser from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
      private authModalService: AuthModalService,
      private auth: AuthService
    ) { }

  nom = new FormControl('', 
    [
      Validators.required, 
      Validators.minLength(2), 
      Validators.maxLength(25)
    ]
  )
  prenom = new FormControl('', 
    [
      Validators.required, 
      Validators.minLength(2), 
      Validators.maxLength(25)
    ]
  )
  email = new FormControl('', 
    [
      Validators.required, 
      Validators.email
    ]
  )
  motdepasse = new FormControl('', 
    [
      Validators.required, 
      Validators.minLength(4), 
      Validators.maxLength(25)
    ]
  )


  registerForm = new FormGroup({
    nom: this.nom,
    prenom: this.prenom,
    email: this.email,
    motdepasse: this.motdepasse
  })

  showAlert = false
  alertMsg = 'Veuillez remplir le formulaire.'
  alertColor = 'blue'
  inSubmission = false


  ngOnInit(): void {
  }

  tooggleSignin(event: Event) {
    event.preventDefault()
    this.authModalService.login()
  }

  register = () => {
    this.showAlert = true
    this.alertMsg = 'Création du compte en cours.'
    this.alertColor = 'blue'
    this.inSubmission = true
    const user: IUser = {
      lastname: this.nom.value,
      firstname: this.prenom.value,
      email: this.email.value,
      password: this.motdepasse.value
    }
    
    try {
      this.auth.register(user).subscribe((response) => {
        const { error, user } = response
        this.auth.getAuthStatus()
        if(error) { 
          console.log(error)
          this.alertMsg = error.message
          this.alertColor = 'red'
          this.inSubmission = false
          return
        }
        else {
          console.log(user)
          this.alertMsg = 'Compte crée avec succès.'
          this.alertColor = 'green'
        }
        
      })
    } catch (e) {
      this.alertMsg = 'Erreur lors de la création du compte.'
      this.alertColor = 'red'
      this.inSubmission = false
      console.log(`Couldn't submit the form`);
      return
    }
  }
}
