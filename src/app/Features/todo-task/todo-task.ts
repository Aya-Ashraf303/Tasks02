import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TodolistService } from '../../Service/todolist';
import { TodoTaskInterface } from '../../Core/interfaces/todo-task';
import { CheckboxModule } from 'primeng/checkbox';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { TodoFilterOptions } from './todo-filter-options/todo-filter-options';
import { tree } from '@primeuix/themes/aura/treeselect';

@Component({
  selector: 'app-todo-task',
  imports: [
    InputTextModule,
    FormsModule,
    CheckboxModule,
    InputGroupAddonModule,
    InputGroupModule,
    TodoFilterOptions,
  ],
  templateUrl: './todo-task.html',
  styleUrl: './todo-task.css',
})
export class TodoTask {
  constructor(private _todoService: TodolistService) {
    effect(() => {
      this.todoTasks.update(() => this._todoService.todoLists());
      if (this.todoTasks().length <= 0) {
        this.isArrayEmpty.set(true);
        this.activeTasksCount.set(this.todoTasks().length);
      }
    });
  }

  createInputValue: string = '';
  todoTask = signal<TodoTaskInterface>({} as TodoTaskInterface);
  todoTasks = signal<TodoTaskInterface[]>([]);
  activeTasksCount = signal<number>(0);
  isArrayEmpty = signal<boolean>(false);
  isInputRequired = signal<boolean>(true);

  addNewTodoTask() {
    if (this.createInputValue !== '') {
      this.todoTask.set({
        id: Date.now(),
        name: this.createInputValue,
        status: 'active',
        checked: false,
      });

      this._todoService.addNewTask(this.todoTask());
      this.activeTasksCount.set(this._todoService.todoLists().length);
      this.isInputRequired.set(true);
      this.reset();
    } else {
      this.isInputRequired.set(false);
    }
  }
  reset() {
    this.createInputValue = '';
  }
  toggleStatus(id: any) {
    this.todoTasks().forEach((task) => {
      if (task.id === id) {
        task.status = task.status === 'active' ? 'Completed' : 'active';
      }
    });

    this.updateActiveCount();
  }
  updateActiveCount() {
    const activeCount = this._todoService.tasksArray.filter(
      (task) => task.status === 'active',
    ).length;

    this.activeTasksCount.set(activeCount);
  }
  filterTodoList(filterOption: string) {
    this._todoService.todoListFilteration(filterOption);
  }

  clearCompletedTasks() {
    this._todoService.clearCompletedTasks();

  this._todoService.todoListFilteration('all');
  }

  deleteTask(id: number) {
    this._todoService.deleteTask(id);
    this.updateActiveCount();
  }
}
