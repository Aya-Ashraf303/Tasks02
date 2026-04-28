import { Injectable, signal } from '@angular/core';
import { TodoTaskInterface } from '../Core/interfaces/todo-task';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  tasksArray: TodoTaskInterface[] = [];
  todoLists = signal<TodoTaskInterface[]>([]);
  currentFilter = signal<'all' | 'active' | 'Completed'>('all');

  addNewTask(newTask: TodoTaskInterface) {
    this.tasksArray.push(newTask);
    this.todoLists.set([...this.tasksArray]);
  }
  todoListFilteration(filterOption: any) {
    this.currentFilter.set(filterOption);

    if (filterOption === 'active') {
      const filtered = this.tasksArray.filter((task) => {
        return task.status === 'active';
      });
      this.todoLists.set(filtered);
    } else if (filterOption === 'Completed') {
      const filtered = this.tasksArray.filter((task) => {
        return task.status === 'Completed';
      });
      this.todoLists.set(filtered);
    } else if (filterOption === 'all') {
      this.todoLists.set(this.tasksArray);
    }
  }

  clearCompletedTasks() {
    this.tasksArray = this.tasksArray.filter((task) => {
      return task.status !== 'Completed';
    });
    this.todoLists.set([...this.tasksArray]);
    this.currentFilter.set('all');
  }
  deleteTask(taskId: number) {
    this.tasksArray = this.tasksArray.filter((task) => {
      return task.id !== taskId;
    });

    this.todoLists.set(this.tasksArray);
  }
}
