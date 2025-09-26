import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';

import { DUMMY_USERS } from '../dummy-user';

import { interfaceUser } from './user.model';
import { Card } from "../shared/card/card";


@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css'
})


export class User {

  @Input({required:true}) user!: interfaceUser;
  @Output() select = new EventEmitter<string>();
  @Input({required:true}) selectedUser!:boolean;
  // image = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(()=> {
  //   return 'assets/user/' + this.image();
  // });

  //select = output<string>();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }



  onSelectedUserClick(){
    this.select.emit(this.user.id);
  }

  }


