import { Component, OnInit, signal } from '@angular/core';
import { Button01 } from "./button01/button01";
import { Button02 } from "./button02/button02";
import { TaskService } from '../Service/task-service';

@Component({
  selector: 'app-task01',
  imports: [Button01, Button02],
  templateUrl: './task01.html',
  styleUrl: './task01.css',
})
export class Task01 {
constructor(public _taskService:TaskService){
}

}
