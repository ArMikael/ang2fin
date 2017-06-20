import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { CanDeactivate } from '@angular/router';

import { AppComponent } from './app.component';
import { routing } from './app.routes';

import { NavBarComponent } from './navbar/navbar.component';
import { UsersComponent } from "./users/users.component";
import { PostsComponent } from './posts/posts.component';
import { UsersService } from "./users/users.service";
import { AddUserComponent } from './add-user/add-user.component';
import { CoursesComponent } from "./courses/courses.component";
import { CourseComponent } from './courses/course.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UsersComponent,
    PostsComponent,
    AddUserComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
