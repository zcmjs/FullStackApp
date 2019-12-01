import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const basicAuthenticationHttpHeaderString = this.createBasicAuthenticationHttpHeader('macon', 'ssacz');
    console.log('Nie powinno mnie być !!!');
    request = request.clone({

      setHeaders : {
        Authorization: basicAuthenticationHttpHeaderString
      }
    });
    return next.handle(request);
  }

  private createBasicAuthenticationHttpHeader(username: string, password: string) {
    const userData = window.btoa(`${username}:${password}`);
    return `Basic ${userData}`;
  }

}
