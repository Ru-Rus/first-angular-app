import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interfaceNewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  // @Output() addTask = new EventEmitter<interfaceNewTask>();
  inputTitle = '';
  inputSummary = '';
  inputDueDate='';

  private tasksService = inject(TasksService)

  onClose(){
    this.close.emit();
    console.log('closed');
  }

  onSubmit(){
    // this.addTask.emit({title: this.inputTitle, summary: this.inputSummary, dueDate: this.inputDueDate});
    // this.onClose();
    this.tasksService.addTask({
      title: this.inputTitle,
      summary: this.inputSummary,
      dueDate: this.inputDueDate
    },this.userId);
     this.close.emit();
  }
}
