import { Injectable } from '@angular/core';
import IUser from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  updateUser = () => {

  }
  getAllUsers = () => {
    return this.http.get(environment.api+'/users')
  }
  getSingleUser = () => {

  }
}
