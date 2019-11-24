import {Component, OnInit} from '@angular/core';
import {TodoService} from "../services/todo.service";
import {ToDoListElement} from "../list-todo/api/ToDoListElement";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  private id: number;
  public toDo: ToDoListElement;

  constructor(private toDoService: TodoService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.params['id']);
    if (this.id !== 0) {
      this.toDoService.getById('macon', this.id)
        .subscribe(toDo => this.toDo = toDo);
    } else {
      this.toDo = new ToDoListElement(null, null, null, null, null);
    }

  }

  save() {
    if (this.id !== 0) {
      this.toDoService.update('macon', this.id, this.toDo).subscribe(data => this.toDo = data);
    } else {
      this.toDoService.save('macon', this.toDo).subscribe(data => this.toDo = data);
    }
  }
}
