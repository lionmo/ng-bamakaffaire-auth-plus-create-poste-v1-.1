import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import IAd from '../models/ad.model';


interface IPostsArray {
  id: string,
  postsArray: IAd[],
  skip: number,
  pendindRequest: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AdService {
  categoriesId = new Map() 

  //Categories map methods
  setCategorieId(id: string) {
    let postsArray: IPostsArray =  {
      id: id,
      postsArray: [],
      skip: 0,
      pendindRequest: false
    }
    this.categoriesId.set(id, postsArray)
  }

  //Not needed at the moment
  deleteCategorieId(id: string) {

  }

  constructor(private http: HttpClient) { }

  createAd = (formData: FormData ): Observable<any> => {
    return this.http.post(environment.api+'/ads/', 
      formData, {withCredentials: true}).pipe(
      delay(1000)
    )
  }

  getAds = (id:string): Observable<any> => {
    return this.http.get(environment.api+'/ads/?skip=' + 
    this.categoriesId.get(id).skip 
      + '&categorie=' + this.categoriesId.get(id).id, {withCredentials:true})
  }

  getSingleAd = (id: string): Observable<any> => {
    return this.http.get(environment.api+'/ads/:' + id, {withCredentials:true})
  }
}
