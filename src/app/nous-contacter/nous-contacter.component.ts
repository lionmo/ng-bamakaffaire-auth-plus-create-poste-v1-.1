import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nous-contacter',
  templateUrl: './nous-contacter.component.html',
  styleUrls: ['./nous-contacter.component.scss']
})
export class NousContacterComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email])
  subject = new FormControl('', [Validators.required, Validators.maxLength(50)])
  message = new FormControl('', [Validators.required])

  contactForm = new FormGroup({
    email: this.email,
    subject: this.subject,
    message: this.message
  })

  showAlert = false
  alertMsg = ``
  alertColor = 'blue'
  inSubmission = false

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  envoyer() {
    this.inSubmission = true
    try {
      this.http.post(environment.api+'/nous-contacter', {
        email: this.email.value,
        subject: this.subject.value,
        message: this.message.value
      }, {withCredentials: true}).subscribe(response => {
        this.alertColor = 'green'
        this.alertMsg = 'Votre email a ete envoye avec succes.'
        this.showAlert = true
      })
    } catch (error) {
      this.alertColor = 'red'
        this.alertMsg = `Erreur! Veuillez reessayer s'il vous plait.`
        this.showAlert = true
        return 
    }
  }

}
