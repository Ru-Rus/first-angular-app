import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { headerComponent } from './header/header.component';
import { User } from "./user/user";

@Component({
  selector: 'app-root',
  imports: [headerComponent, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
}
