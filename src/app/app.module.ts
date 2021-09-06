import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { FormSingComponent } from './components/form-sing/form-sing.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import {AccountService} from "./services/account.service";
import {LoginGuard} from "./libs/guards/login.guard";
import {UserAddService} from "./services/user-add.service";
import {HighligthDirective} from "./libs";
import {UsersService} from "./services/users.service";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormSingComponent,
    // HomePageComponent,
    LoginComponent,
    HighligthDirective

    // UserPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [AccountService,UserAddService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
