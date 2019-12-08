import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {BasicAuthenticationService} from "./basic-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(private authentication: BasicAuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const basicAuthorizationHeader = this.authentication.getAuthenticationToken();
    if (basicAuthorizationHeader) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthorizationHeader
        }
      });
    }
    return next.handle(request);
  }

}
