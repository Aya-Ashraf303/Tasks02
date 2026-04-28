import { Component, effect, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TodolistService } from '../../Service/todolist';
import { TodoTaskInterface } from '../../Core/interfaces/todo-task';
import { CheckboxModule } from 'primeng/checkbox';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { TodoFilterOptions } from './todo-filter-options/todo-filter-options';

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
export class TodoTask implements OnInit {
  constructor(private _todoService: TodolistService) {
    effect(() => {
      this.todoTasks.update(()=>(this._todoService.todoLists()));
      // this.todoTasks.update(()=>(this._todoService.tasksArray));

    });
  }
  ngOnInit(): void {
      this.todoTasks.set(this._todoService.todoLists());
    
  }
  createInputValue: string = '';
  todoTask = signal<TodoTaskInterface>({} as TodoTaskInterface);
  todoTasks = signal<TodoTaskInterface[]>([]);
  activeTasksCount = signal<number>(0);

  isInputRequired=signal<boolean>(true);

  AddNewTodoTask() {
    this.todoTask.set({
      id: Date.now(),
      name: this.createInputValue,
      status: 'active',
      checked: false,
    });
    if(this.createInputValue!==''){
    this._todoService.addNewTask(this.todoTask());
    this.activeTasksCount.set(this._todoService.todoLists().length);
    console.log(this._todoService.tasksArray);
      this.isInputRequired.set(true);

    this.reset();
    }else
    {
      this.isInputRequired.set(false);
    console.log(this._todoService.tasksArray);
      
    }
  }
  reset() {
    this.createInputValue = '';
  }

  toggleStatus(id: any) {
    this.todoTasks().forEach((task) => {
      if (task.id === id && task.status === 'active') {
        task.status = 'Completed';
        this.activeTasksCount.update((x) => x - 1);
      } else if (task.id === id && task.status === 'Completed') {
        task.status = 'active';
        this.activeTasksCount.update((x) => x + 1);
      }
    });
  }

  filterTodoList(filterOption: string) {
    this._todoService.todoListFilteration(filterOption);
  }

  ClearCompletedTasks() {
    this.todoTasks.update(() =>
      this.todoTasks().filter((task) => {
        return task.status !== 'Completed';
      }),
    );
  }

   deleteTask(id: number) {
    this._todoService.deleteTask(id);
    this.activeTasksCount.set(this._todoService.todoLists().length);
  }
}
