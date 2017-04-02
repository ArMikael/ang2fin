import { Component } from '@angular/core';
import { Router, CanDeactivate } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { UsersService } from '../users/users.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  // canDeactivate: any;
  userForm: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService
  ) {

    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: [],
      address: this.fb.group({
        street: [],
        suite: [],
        city: [],
        zipcode: []
      })
    });

  }

  onSubmit(form) {
    console.log(form);
    console.log(form.value.name);
    console.log(form.value.email);
  }

  routerCanDeactivate(next, prev){
    console.log(next);

    return confirm('Are you sure?')
  };

  save() {
    this.usersService.addUser(this.userForm.value)
      .subscribe(res => {
        this.router.navigate(['Users']);
      });
  }

  reset() {
    this.userForm.reset();
  }

}
