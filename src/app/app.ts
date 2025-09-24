import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { headerComponent } from './header.components';

@Component({
  selector: 'app-root',
  imports: [ headerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
}
