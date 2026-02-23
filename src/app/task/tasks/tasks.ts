import { Component , EventEmitter, Input , Output} from '@angular/core';
import { type Task } from './tasks.model';
import { required } from '@angular/forms/signals';
import { Card } from "../../shared/card/card";
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
/* interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
} */

@Component({
  selector: 'app-tasks',
  imports: [Card, CommonModule, DatePipe],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {

  @Input({required: true}) task!: Task;
  @Output() complate = new EventEmitter<string>();

  onCompleteTask(){
    this.complate.emit(this.task.id);
  }
}
