import { Component, ElementRef, ViewChild } from '@angular/core';
import { TodolistService } from '../../../Service/todolist';

@Component({
  selector: 'app-todo-filter-options',
  imports: [],
  templateUrl: './todo-filter-options.html',
  styleUrl: './todo-filter-options.css',
})
export class TodoFilterOptions {
  constructor(private _todoService: TodolistService) {}
  @ViewChild('filterActionAll') filterActionElementAll!: ElementRef;
  @ViewChild('filterActionActive') filterActionActive!: ElementRef;
  @ViewChild('filterActionComplted') filterActionCompleted!: ElementRef;

  filterTodoList(filterOption: string) {
    this._todoService.todoListFilteration(filterOption);
    this.filterOptionColor(filterOption);
  }
  filterOptionColor(status: any) {
    this.filterActionActive.nativeElement.classList.remove('filter-action-selected');
    this.filterActionCompleted.nativeElement.classList.remove('filter-action-selected');
    this.filterActionElementAll.nativeElement.classList.remove('filter-action-selected');
    if (status === 'active') {
      this.filterActionActive.nativeElement.classList.add('filter-action-selected');
    } else if (status === 'Completed') {
      this.filterActionCompleted.nativeElement.classList.add('filter-action-selected');
    } else {
      this.filterActionElementAll.nativeElement.classList.add('filter-action-selected');
    }
  }
}
