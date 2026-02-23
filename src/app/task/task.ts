import { Component ,Input } from '@angular/core';
import { Tasks } from "./tasks/tasks";
import { NewTask } from './new-task/new-task';
import {  type NewTaskData } from './tasks/tasks.model';

@Component({
  selector: 'app-task',
  imports: [Tasks, NewTask],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
/*  @Input() name: string | undefined; */

    @Input({required: true}) userId!:string;

    // parent decides which user is selected.. task just displays.
    @Input({required: true}) name?: string;
    isAddingTask = false;

    tasks = [
      {
        id: 't1',
        userId: 'u1',
        title: 'Master Angular',
        summary: 'Learn all the basic and advanced features of Angular & How to applye them.',
        dueDate: '2026-2-16'
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
        summary: 'Prepare and describe an issue template which will help with project management',
        dueDate: '2024-06-15',
      },
    ]

    get selectedUserTasks() {
      return this.tasks.filter((task) => task.userId ===  this.userId);
    }

    onCompleteTask(id: string) {
      // ... 
      this.tasks = this.tasks.filter((task) => task.id !== id);
    }

    onStartaddTask(){
      this.isAddingTask = true;
    }

    OnCancelAddTask(){
      this.isAddingTask = false;

    }

    onAddTask(taskData: NewTaskData) {
      this.tasks.unshift({
        id: new Date().getTime().toString(),
        userId: this.userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date
      });
      this.isAddingTask = false;
    }    

}