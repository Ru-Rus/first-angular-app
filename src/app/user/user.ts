import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';

import { DUMMY_USERS } from '../dummy-user';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})


export class User {
  @Input({required:true}) id!: string;
  @Input({required:true}) image!: string;
  @Input({required:true}) name!: string;
  @Output() select = new EventEmitter();

  // image = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(()=> {
  //   return 'assets/user/' + this.image();
  // });

  get imagePath(){
    return 'assets/users/' + this.image;
  }



  onSelectedUserClick(){
    this.select.emit(this.id);
  }

  }


