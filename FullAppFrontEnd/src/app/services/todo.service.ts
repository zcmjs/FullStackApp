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
    return this.http.get<Array<ToDoListElement>>(`http://localhost:8080/users/${username}/todos`);
  }

  getById(username: string, id: number) {
    return this.http.get<ToDoListElement>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  removeById(username: string, id: number) {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  update(username: string, id: number, todo: ToDoListElement) {
    return this.http.put<ToDoListElement>(`http://localhost:8080/users/${username}/todos/${id}`, todo);
  }

  save(username: string, todo: ToDoListElement) {
    return this.http.post<ToDoListElement>(`http://localhost:8080/users/${username}/todos/`, todo);
  }

}
