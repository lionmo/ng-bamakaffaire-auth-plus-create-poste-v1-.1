import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, first, tap, switchMap, pluck } from 'rxjs/operators'
import IUser from '../models/user.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated$: Observable<boolean>
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.isAuthenticated$ = this.http.get(environment.api+'/auth/authentication-status', {withCredentials: true}).pipe(
      pluck('user'),
      map(user => {
        console.log(user);
        
        return !!user})
    )
    this.isAuthenticated$.subscribe(res => {console.log(res);}
    )
    
   }

  register = (user: IUser): Observable<any> => {
    return this.http.post(environment.api+'/auth/register', user, {withCredentials: true}).pipe(
      delay(1000)
    )
  }

  login = (email: string, password: string): Observable<any> => {
    return this.http.post(
      environment.api+'/auth/login', 
      {email: email, password: password}, 
      {withCredentials: true}
    ).pipe(
      delay(1000)
    )
  }


  logout = () => {
      try {
        this.http.delete(environment.api+'/auth/logout', {withCredentials: true}).subscribe(() => {
          this.getAuthStatus()
        })
      } catch (error) {
        
      }
  }

  forgotPassword = (email: string): Observable<any> => {
    return this.http.post(environment.api+'/auth/forgot-password', {email}, {withCredentials: true})
  }

  resetPassword = (token: string, email: string, newPassword: string): Observable<any> => {
    return this.http.post(environment.api+'/auth/reset-password', {token, email, password: newPassword}, {withCredentials: true})
  }

  getAuthStatus() {
    this.isAuthenticated$ =  this.http.get(environment.api+'/auth/authentication-status', {withCredentials: true}).pipe(
      pluck('user'),
      map(user => {
        console.log(user);
        
        return !!user})
    )
  }
}
