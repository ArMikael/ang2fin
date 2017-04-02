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
  form: any;

  constructor(
    // fb: FormBuilder,
    private router: Router,
    private usersService: UsersService
  ) {
    //this.form = fb.group({
      // name: ['', Validators.required],
      // email: [],
      // phone: [],
      // address: fb.group({
      //   street: [],
      //   suite: [],
      //   city: [],
      //   zipcode: []
      // })
    //})

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
    this.usersService.addUser(this.form.value)
      .subscribe(res => {
        this.router.navigate(['Users']);
      });
  }

}
