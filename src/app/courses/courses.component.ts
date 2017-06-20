import { Component } from '@angular/core';

@Component ({
    selector: 'courses',
    templateUrl: 'courses.component.html'
})
export class Courses {
    courses:any[];

    constructor(){
       this.courses = [
        {
          name: 'Math',
          author: 'Archimed'
        },
        {
          name: 'English',
          author: 'Barak Obama'
        },
        {
          name: 'Physics',
          author: 'Isaac Newton'
        }
      ];
    }
}
