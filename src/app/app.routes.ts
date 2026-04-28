import { Routes } from '@angular/router';
import { Products } from './Features/products/products';
import { Task01 } from './task01/task01';
import { ReactiveForm } from './Features/reactive-form/reactive-form';
import { TodoTask } from './Features/todo-task/todo-task';

export const routes: Routes = [
    {path:'' , component:TodoTask,title:'TODO'},
    // {path:'',component:Task01 , title:'signal+input'},
    // {path:'register-form' , component:ReactiveForm , title:'reactive-form'}

];
