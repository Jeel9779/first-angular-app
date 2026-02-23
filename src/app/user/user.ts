import { Component, Input , Output , output ,EventEmitter, input} from '@angular/core';
import {  type Userr } from './user.model';
import { Card } from "../shared/card/card";
@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {

  // parent send data to child
  @Input({required: true}) user!: Userr;
 
  @Input({required: true}) selected!: boolean;
  // child must notify parent when clicked. c-p
  @Output() select = new EventEmitter<string>(); 



  // imagePath Getter
  get imagePath(){
    return '/users/' + this.user.avatar;
  } 


  // why emit id -- parent stores ID as state.
  onSelectUser(){
   this.select.emit(this.user.id) ;
 
  } 








  /*   id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>(); 
  select = output<string>(); */

    /* avatar = input<string>(); 
  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => {
    return '/users/' + this.avatar;
  }); */
}


