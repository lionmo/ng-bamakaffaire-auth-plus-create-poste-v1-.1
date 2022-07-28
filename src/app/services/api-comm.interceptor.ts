import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { GlobalVariablesService } from './global-variables.service';

@Injectable()
export class ApiCommInterceptor implements HttpInterceptor {

  constructor(private globals: GlobalVariablesService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        map(response => {
          this.globals.hasCommError = false          
          return response
        }),
        catchError((error:HttpErrorResponse) => {
          this.globals.hasCommError = true
         return throwError(() => new Error('test'))
        })
      );
  }
}
