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
    return this.http.get<DashBoardDto>('/api/dashboard/welcome');
  }

  getCustomizedDataWithParameter(name): Observable<DashBoardDto> {
    return this.http.get<DashBoardDto>(`/api/dashboard/welcome/${name}`, {headers: this.getHeader()});
  }

  private getHeader() {
    const username = "macon";
    const password = "ssac";
    const encodedUserData = btoa(`${username}:${password}`);
    const bassicc = `Basic ${encodedUserData}`;

    return new HttpHeaders({
      'Authorization': bassicc
    });
  }

}
