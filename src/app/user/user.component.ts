import { Component, computed, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length) 

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 @Input({required: true}) id!: string;
 @Input({required: true}) avatar!: string;
 @Input({required: true}) name!: string;
 @Output() select = new EventEmitter(); 
 // selectedUser = signal(DUMMY_USERS[randomIndex]); SIGNAL EXAMPLE
 // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar) //SIGNAL EXAMPLE
  /*get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }*/
    get imagePath(){
      return 'assets/users/' + this.avatar;
      //const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
      //this.selectedUser.set(DUMMY_USERS[randomIndex]); //SIGNAL MODE
      //this.selectedUser = DUMMY_USERS[randomIndex];
    }
  onSelectUser(){
    this.select.emit(this.id);
    //const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    //this.selectedUser.set(DUMMY_USERS[randomIndex]); //SIGNAL MODE
    //this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
