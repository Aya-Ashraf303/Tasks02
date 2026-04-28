import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { TodolistService } from '../../../Service/todolist';

@Component({
  selector: 'app-todo-filter-options',
  imports: [],
  templateUrl: './todo-filter-options.html',
  styleUrl: './todo-filter-options.css',
})
export class TodoFilterOptions {
  constructor(public _todoService: TodolistService) {}

  filterTodoList(filterOption: string) {
    this._todoService.todoListFilteration(filterOption);
  }
 
}
