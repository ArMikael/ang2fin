import { Routes, RouterModule, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AppComponent } from './app.component';
import { Observable } from "rxjs/observable";

// export class Test implements CanDeactivate<AppComponent>{
//   canDeactivate(component: AppComponent, route: ActivatedRouteSnapshot,
//                 state: RouterStateSnapshot): Observable<boolean> | boolean{
//     console.log("in");
//     return false;
//   }
// }

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
    // canDeactivate: [Test]
  },
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(routes);
