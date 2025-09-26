import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { interfaceTask } from './task.model';
import { Card } from "../../shared/card/card";
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required:true}) taskList!:interfaceTask;
  // @Output() complete = new EventEmitter<string>();

  private tasksService = inject(TasksService);

  onCompleteTask(){
    // this.complete.emit(this.taskList.id);
    this.tasksService.removeTask(this.taskList.id);
  }
}
