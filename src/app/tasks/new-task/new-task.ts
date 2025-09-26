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
  @Output() cancel = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<interfaceNewTask>();
  inputTitle = '';
  inputSummary = '';
  inputDueDate='';

  onClose(){
    this.cancel.emit();
    console.log('closed');
  }

  onSubmit(){
    this.addTask.emit({title: this.inputTitle, summary: this.inputSummary, dueDate: this.inputDueDate});
    this.onClose();
  }
}
