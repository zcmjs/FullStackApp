import {Component, OnInit} from '@angular/core';
import {ToDoListElement} from './api/ToDoListElement';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {
  todoList: Array<ToDoListElement>;

  constructor() {
  }

  ngOnInit() {
    this.todoList = this.prepareToDoListData();
  }

  private prepareToDoListData(): Array<ToDoListElement> {
    const todoList = new Array<ToDoListElement>();
    const elem = new ToDoListElement(1, 'First Element', false, new Date());
    const elem2 = new ToDoListElement(2, 'Second Element', false, new Date());
    const elem3 = new ToDoListElement(3, 'Third Element', false, new Date());
    const elem4 = new ToDoListElement(4, 'Fourth Element', false, new Date());

    todoList.push(elem);
    todoList.push(elem2);
    todoList.push(elem3);
    todoList.push(elem4);

    return todoList;
  }

}
