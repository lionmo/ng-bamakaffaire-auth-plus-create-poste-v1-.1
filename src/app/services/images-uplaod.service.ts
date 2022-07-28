import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesUplaodService {

  constructor() { }

  imagesToFormData = (images: any): FormData => {
    let formData = new FormData()
    if(!images) return formData
    for (let i = 0; i < images.length; i++) {
      formData.append('img'+(i+1), images[i])
    }
    return formData
  }
}
