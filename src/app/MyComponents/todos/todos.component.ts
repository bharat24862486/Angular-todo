import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim() !== '') {
      const todo: Todo = {
        id: this.todos.length + 1,
        title: this.newTodo,
        completed: false
      };
      this.todos.push(todo);
      this.newTodo = '';
    }
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }
}
