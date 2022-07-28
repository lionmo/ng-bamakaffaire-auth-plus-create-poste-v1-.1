import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import IAd from 'src/app/models/ad.model';
import { AdService } from 'src/app/services/ad.service';
import { ImagesUplaodService } from 'src/app/services/images-uplaod.service';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.scss']
})
export class CreateAdComponent implements OnInit {

  titre = new FormControl('', [Validators.required, Validators.maxLength(30) ])
  corps = new FormControl('', [Validators.maxLength(500)])
  categorie = new FormControl('',[Validators.required])
  prix = new FormControl('',[Validators.required, Validators.min(0)])
  tel = new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(8)])

  posterForm = new FormGroup({
    titre: this.titre,
    corps: this.corps,
    categorie: this.categorie,
    prix: this.prix,
    tel: this.tel
  })

  filesLimit = false
  files: any

  showAlert = false
  alertMsg = `Publication de l'annonce en cours...`
  alertColor = 'blue'
  inSubmission = false
  constructor(
      private el: ElementRef,
      private imgToFormData: ImagesUplaodService,
      private ad: AdService
    ) { }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }

  ngOnDestroy(): void {
    document.body.removeChild(this.el.nativeElement)
  }

  imagesChange(event: any) {
    console.log(event.target.files);
    this.filesLimit = event.target.files?.length > 4
    this.files = event.target.files
    
  }

  poster = () => {
    this.showAlert = true
    this.alertMsg = `Publication de l'annonce en cours...`
    this.alertColor = 'blue'
    this.inSubmission = true

    /**const poste: IAd = {
      titre: this.titre.value,
      corps: this.corps.value,
      prix: this.prix.value,
      tel: this.tel.value,
      categorie: this.categorie.value
    }**/
    try {
      let formData = this.imgToFormData.imagesToFormData(this.files)
    formData.append('titre', this.titre.value)
    formData.append('corps', this.corps.value)
    formData.append('prix', this.prix.value)
    formData.append('tel', this.tel.value)
    formData.append('categorie', this.categorie.value)
    
    
    this.ad.createAd(formData).subscribe((response) => {
      console.log('data sent');
      
      const { error, error1, message } = response
      if(error) {
        console.log(error)
        this.alertMsg = error.message
        this.alertColor = 'red'
        this.inSubmission = false
        return
      }
      if(error1) {
        console.log(error)
        this.alertMsg = error1
        this.alertColor = 'red'
        this.inSubmission = false
        return
      }
      this.alertMsg = `Votre annonce a ete poste avec succes`
      this.alertColor = 'green'
      this.inSubmission = true
    })
    } catch (error) {
      console.log(error)
      this.alertMsg = `Erreur inconnu veilleuz reessayer`
      this.alertColor = 'red'
      this.inSubmission = false
      return
    }
    
  }

}
