import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { Dummy_Person } from './dummy-users';
import { Task } from "./task/task";

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Header, User, Task]
})
export class App {
  protected readonly title = signal('first-angular-app');

    users = Dummy_Person;
    selectedUserID?: string; // ? - Because initially: No user is selected.


    // we store only id , form id -> we compute full user objedt called derived state (vi)
    get selectedUser() {
      return this.users.find(
        (user) => user.id === this.selectedUserID)!;
    }


    // child emits id - parent receives - parent update it - ui
    onSelectUser(id: string){
     this.selectedUserID = id;
      
    }


}
