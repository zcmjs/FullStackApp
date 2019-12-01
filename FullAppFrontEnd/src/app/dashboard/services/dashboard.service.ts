import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DashBoardDto} from '../dtos/DashboardDto';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {
  }

  getCustomizedData(): Observable<DashBoardDto> {
    return this.http.get<DashBoardDto>('http://localhost:8080/dashboard/welcome');
  }

  //Zakomentowany przykład, jak dodać własny header do apki
  getCustomizedDataWithParameter(name): Observable<DashBoardDto> {
    // const basicAuthenticationHttpHeaderString = this.createBasicAuthenticationHttpHeader('macon', 'ssacz');
    // const headers = new HttpHeaders({Authorization: basicAuthenticationHttpHeaderString});
    //js zrobi nam z obiektu {headers} na {headers: headers}
    // return this.http.get<DashBoardDto>(`http://localhost:8080/dashboard/welcome/${name}`, {headers});
    return this.http.get<DashBoardDto>(`http://localhost:8080/dashboard/welcome/${name}`);
  }

  // private createBasicAuthenticationHttpHeader(username: string, password: string) {
  //   const userData = window.btoa(`${username}:${password}`);
  //   return `Basic ${userData}`;
  // }

}
