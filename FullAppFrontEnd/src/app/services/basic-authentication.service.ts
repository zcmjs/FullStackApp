import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationBean} from "./AuthenticationBean";
import {DashBoardDto} from "../dashboard/dtos/DashboardDto";
import {map} from "rxjs/operators";
import {TOKEN} from "../shared/constants";

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) {
  }

  isUserLoggedIn() {
    const item = sessionStorage.getItem('macon-authenticatedUser');
    return !!item;
  }

  getAuthenticationToken() {
    return sessionStorage.getItem(TOKEN);
  }

  loggout() {
    sessionStorage.removeItem('macon-authenticatedUser');
    sessionStorage.removeItem(TOKEN);
  }


  executeBasicAuthentication(username: string, password: string) {
    let basicAuthString = this.getHeader(username, password);
    let headers = new HttpHeaders({
      Authorization: basicAuthString
    });

    return this.http.get<AuthenticationBean>('/api/basicauth', {headers: headers}).pipe(map(data =>{
      sessionStorage.setItem('macon-authenticatedUser', username);
      sessionStorage.setItem(TOKEN, basicAuthString);
    }));
  }

  private getHeader(username: string, password: string): string {
    const encodedUserData = btoa(`${username}:${password}`);
    return `Basic ${encodedUserData}`;
  }

}
