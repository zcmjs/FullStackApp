import {Component, OnInit} from '@angular/core';
import {ToDoListElement} from './api/ToDoListElement';
import {TodoService} from '../services/todo.service';
import {Observable} from 'rxjs';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {
  todoList: Observable<Array<ToDoListElement>>;
  message: string;

  constructor(private todoService: TodoService,
              private router: Router) {
  }

  ngOnInit() {
    this.refreshToDos();
  }

  removeToDo(todo: ToDoListElement) {
    this.todoService.removeById('macon', todo.id).subscribe(response => {
      this.message = `Todo number ${todo.id} deleted`;
      this.refreshToDos();
    });
  }

  private refreshToDos() {
    this.todoList = this.todoService.getAllToDo('macon');
  };

  addNewToDo() {
    this.router.navigate(['/todo/0']);
  }
}
