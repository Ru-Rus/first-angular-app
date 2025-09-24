import { Component, Input } from '@angular/core';

import { DUMMY_USERS } from '../dummy-user';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})


export class User {
  @Input({required:true}) image!: string;
  @Input({required:true}) name!: string;

  get imagePath(){
    return 'assets/users/' + this.image;
  }

  onSelectedUserClick(){
  }

}
