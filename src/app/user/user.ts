import { Component, computed, Input, input } from '@angular/core';

import { DUMMY_USERS } from '../dummy-user';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})


export class User {
  // @Input({required:true}) image!: string;
  // @Input({required:true}) name!: string;

  image = input.required<string>();
  name = input.required<string>();

  // get imagePath(){
  //   return 'assets/users/' + this.image;
  // }

  imagePath = computed(()=> {
    return 'assets/user/' + this.image();
  });

  onSelectedUserClick(){
  }

}
