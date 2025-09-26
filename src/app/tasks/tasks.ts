import { Component, Input } from '@angular/core';
import { headerComponent } from '../header/header.component';
import { User } from '../user/user';
import { Task } from "./task/task";
import { NewTask } from "./new-task/new-task";
import { interfaceNewTask } from './task/task.model';
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
  taskList = [
    {
      id: 'task1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Summary',
      dueDate: '2025-12-31'
    },

    {
      id: 't1',
      userId: 'u4',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },

    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },

    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get selectedUserTask(){
    return this.taskList.filter((taskList) => taskList.userId === this.userId);
  }

  onCompleteTask(id: string){
    this.taskList = this.taskList.filter(task => task.id !== id);
  }

  onNewTask(){
    this.isAddingTask = true;
  }

  onCancelNewTask(){
    this.isAddingTask = false;
  }

  onAddTask(taskData:interfaceNewTask){
    this.taskList.unshift({
      id: 'x'+ new Date().getTime().toString() + 'x',
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate
    })
    this.isAddingTask = false;
  }
}
