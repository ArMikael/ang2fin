import { Component, OnInit } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements CanDeactivate<any> {
  canDeactivate: any;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
    console.log(form.value.name);
    console.log(form.value.email);
  }

  routerCanDeactivate(next, prev) {
    console.log(next)
    return confirm('Are you sure?')
  };

}
