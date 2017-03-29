import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get(this.usersUrl)
      .map(res => res.json());
  }
}
