import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _tapName = signal<string>('');
  tabName = this._tapName.asReadonly();
  changeTapName(tapName:string)
  {
    this._tapName.set("Now you Clicked on "+tapName)
    console.log(this._tapName());
    
  }
}
