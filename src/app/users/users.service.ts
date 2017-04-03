import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
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

  private handleServerError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get(this.usersUrl)
      .map(res => res.json());
  }

  addUser(userData) {
    console.log('Data were send', userData);

    return this.http.get(userData)
      .map(res => res.json())
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }
}
