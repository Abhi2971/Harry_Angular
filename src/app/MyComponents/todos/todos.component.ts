import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
    selector: 'app-todos',
    standalone: true,
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css'] // Corrected here
    ,
    imports: [CommonModule, TodoItemComponent, AddTodoComponent]
})

export class TodosComponent {
  todos: Todo[];

  constructor() {
    this.todos = [
      { sno: 1, title: "hello 1", desc: "how are you 1", active: true },
      { sno: 2, title: "hello 2", desc: "how are you 2", active: true },
      { sno: 3, title: "hello 3", desc: "how are you 3", active: true }
    ];
  }
  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
  }
}
