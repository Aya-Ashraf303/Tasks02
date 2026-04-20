import { Component } from '@angular/core';
import { Button } from "primeng/button";
import { TaskService } from '../../Service/task-service';

@Component({
  selector: 'app-button02',
  imports: [Button],
  templateUrl: './button02.html',
  styleUrl: './button02.css',
})
export class Button02 {
  constructor(private _tapService : TaskService){}
  get changeTapName()
  {
     return this._tapService.changeTapName('Tap 2')
  }

}
