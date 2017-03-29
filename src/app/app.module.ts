import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routes';

import { NavBarComponent } from './navbar/navbar.component';
import { UsersComponent } from "./users/users.component";
import { PostsComponent } from './posts/posts.component';
import { UsersService } from "./users/users.service";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UsersComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
