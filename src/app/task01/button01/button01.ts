import { Component } from '@angular/core';
import { Button } from "primeng/button";
import { TaskService } from '../../Service/task-service';

@Component({
  selector: 'app-button01',
  imports: [Button],
  templateUrl: './button01.html',
  styleUrl: './button01.css',
})
export class Button01 {
  constructor(private _tapService : TaskService){}
  get ChangeTapName()
  {    
   return this._tapService.changeTapName('Tap 1')
  }
}
