import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { headerComponent } from './header/header.component';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-user';
import { Tasks } from "./tasks/tasks";
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [headerComponent, User, Tasks, NgFor, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('first-angular-app');
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }


  onSelectUser(id:string){
   this.selectedUserId = id;
  };
}
