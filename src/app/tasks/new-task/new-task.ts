import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interfaceNewTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Output() close = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<interfaceNewTask>();
  inputTitle = '';
  inputSummary = '';
  inputDueDate='';

  onClose(){
    this.close.emit();
  }

  onSubmit(){
    this.addTask.emit({title: this.inputTitle, summary: this.inputSummary, dueDate: this.inputDueDate});
    this.onClose();
  }
}
