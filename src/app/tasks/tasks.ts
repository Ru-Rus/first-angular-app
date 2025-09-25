import { Component, Input } from '@angular/core';
import { headerComponent } from '../header/header.component';
import { User } from '../user/user';
import { Task } from "./task/task";
@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input() name?: string;
}
