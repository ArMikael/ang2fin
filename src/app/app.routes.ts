import { Routes, RouterModule, CanDeactivate } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { AddUserComponent } from './add-user/add-user.component';
import { CoursesComponent } from './courses/courses.component';
import { AppComponent } from './app.component';
import { Observable } from "rxjs/observable";

export class StopNav implements CanDeactivate<boolean>{
  canDeactivate(component: AppComponent): boolean{
    console.log("-==CanDEACTIVATE==-");

    return confirm('Are you sure?');
    // return false;
  }
}

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'users/new',
    component: AddUserComponent,
    canDeactivate: [StopNav]
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(routes);
