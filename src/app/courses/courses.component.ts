import { Component } from '@angular/core';
import { Course } from './courses.model';

@Component ({
		selector: 'courses',
		templateUrl: 'courses.component.html'
})
export class CoursesComponent {
		courses:Course[];

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

		clickHandler(course) {
        console.log(course);
		}
}
