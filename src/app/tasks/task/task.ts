import { Component, EventEmitter, Input, Output } from '@angular/core';

import { interfaceTask } from './task.model';
@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required:true}) taskList!:interfaceTask;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask(){
    this.complete.emit(this.taskList.id);
  }
}
