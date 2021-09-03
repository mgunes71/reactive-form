import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { FormSingComponent } from './components/form-sing/form-sing.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import {AccountService} from "./services/account.service";
import {LoginGuard} from "./guards/login.guard";
import {UserAddService} from "./services/user-add.service";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserPageComponent,
    FormSingComponent,
    HomePageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AccountService,LoginGuard,UserAddService],
  bootstrap: [AppComponent]
})
export class AppModule { }
