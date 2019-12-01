import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationBean} from "../api/AuthenticationBean";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  login(headers: any) {
    console.log('headers :: ', headers);
    return this.http.post(`http://localhost:8080/user/login`, null);
  }
}
