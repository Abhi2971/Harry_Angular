import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
    selector: 'app-todos',
    standalone: true,
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css'],
    imports: [CommonModule, TodoItemComponent, AddTodoComponent]
})
export class TodosComponent {
  localItem: string | null;
  todos: Todo[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.localItem = localStorage.getItem("todos");
      if (this.localItem) {
        this.todos = JSON.parse(this.localItem);
      }
    } else {
      this.localItem = null;
    }
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }
}
