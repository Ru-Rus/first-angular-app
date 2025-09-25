import { Component, Input } from '@angular/core';
import { headerComponent } from '../header/header.component';
import { User } from '../user/user';
@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input() name?: string;
}
