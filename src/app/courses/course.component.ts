import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'course',
    template:
    `
      <div>{{ this.courseData.name }} - {{ this.courseData.author }}</div>
    `
})
export class CourseComponent implements OnInit {
    @Input() courseData: any;

    constructor(){

    }

    ngOnInit(){

    };

}
