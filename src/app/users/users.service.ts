import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

interface IUser {
  name: string;
  email: string;
}

@Injectable()
export class UsersService {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get(this.usersUrl)
      .map(res => res.json());
  }

  addUser(userData): Observable<IUser> {
    console.log('Data were send', userData);

    return userData;
  }
}
