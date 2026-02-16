import { Component, Input , Output , output ,EventEmitter, input} from '@angular/core';

/* type User =  {
    id: string;
    avatar: string;
    name: string;
  }; */

interface Userr {
    id: string;
    avatar: string;
    name: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  @Input({required: true}) user!: Userr;
  @Output() select = new EventEmitter<string>(); 

/*   id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>(); 
  select = output<string>(); */
 
  get imagePath(){
    return '/users/' + this.user.avatar;
  } 

  onSelectUser(){
   this.select.emit(this.user.id) ;
 
  } 

    /* avatar = input<string>(); 
  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => {
    return '/users/' + this.avatar;
  }); */
}


