import { Injectable } from "@angular/core";
import { interfaceNewTask } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService{
    private taskList = [
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

  constructor(){
    const tasks = localStorage.getItem('tasks');
    
    if(tasks){
        this.taskList = JSON.parse(tasks);
    }
  }


  getuserTasks(userId: string){
    return this.taskList.filter((taskList) => taskList.userId === userId);
  }

  addTask(taskData: interfaceNewTask, userId:string){
     this.taskList.unshift({
      id: 'x'+ new Date().getTime().toString() + 'x',
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate
    });
    this.saveTasks();
  }

  removeTask(userId:string){
    this.taskList = this.taskList.filter(task => task.id !== userId);
    this.saveTasks();
  }

  private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.taskList))
  }


}