import {Injectable} from '@angular/core';
import {UserService} from "./user.service";
import {HttpHeaders} from "@angular/common/http";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private userService: UserService) {
  }

  authenticate(username, password) {
    if (username === 'macon' && password === 'ssie') {
      console.log();
      sessionStorage.setItem('macon-authenticatedUser', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    const item = sessionStorage.getItem('macon-authenticatedUser');
    return !!item;
  }

  loggout() {
    sessionStorage.removeItem('macon-authenticatedUser');
  }

  executeLoginUser(username: string, password: string) {
    const requiredHeaders = this.createBasicAuthenticationHttpHeader('macon', 'ssie');

    return this.userService.login(requiredHeaders)
      // .pipe(tap(
      // () => {
      //   console.log('Its going up');
      //   sessionStorage.setItem('macon-authenticatedUser', username)
      // }))
      ;
  }

  private createBasicAuthenticationHttpHeader(username: string, password: string) {
    const userData = window.btoa(`${username}:${password}`);
    console.log('${username}' + password);
    const basicAuthenticationHttpHeaderString = `Basic ${userData}`;
    console.log('DEXX ::: ', basicAuthenticationHttpHeaderString);

    let headers = new HttpHeaders({'Authorization': basicAuthenticationHttpHeaderString});
    console.log('ddxxmm',headers);
    return headers;

    // return new HttpHeaders({
    //   'Authorization': basicAuthenticationHttpHeaderString
    // });
  }

}
