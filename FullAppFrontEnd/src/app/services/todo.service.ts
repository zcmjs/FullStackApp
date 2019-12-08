import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToDoListElement} from '../list-todo/api/ToDoListElement';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  getAllToDo(username: string): Observable<Array<ToDoListElement>> {
    return this.http.get<Array<ToDoListElement>>(`/api/users/${username}/todos`);
  }

  getById(username: string, id: number) {
    return this.http.get<ToDoListElement>(`/api/users/${username}/todos/${id}`);
  }

  removeById(username: string, id: number) {
    return this.http.delete(`/api/users/${username}/todos/${id}`);
  }

  update(username: string, id: number, todo: ToDoListElement) {
    return this.http.put<ToDoListElement>(`/api/users/${username}/todos/${id}`, todo);
  }

  save(username: string, todo: ToDoListElement) {
    return this.http.post<ToDoListElement>(`/api/users/${username}/todos/`, todo);
  }

}
