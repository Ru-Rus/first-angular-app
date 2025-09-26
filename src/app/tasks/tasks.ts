import { Component, Input } from '@angular/core';
import { headerComponent } from '../header/header.component';
import { User } from '../user/user';
import { Task } from "./task/task";
import { NewTask } from "./new-task/new-task";
import { interfaceNewTask } from './task/task.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({required: true}) userId!: string;
  @Input() name?: string;
  isAddingTask: boolean= false;

  constructor(private tasksService:TasksService){}

  get selectedUserTask(){
    return this.tasksService.getuserTasks(this.userId);
  }

  // onCompleteTask(id: string){
    
  // }

  onNewTask(){
    this.isAddingTask = true;
  }

  onCloseNewTask(){
    this.isAddingTask = false;
  }

  // onAddTask(taskData:interfaceNewTask){
   
  //   this.isAddingTask = false;
  // }
}
