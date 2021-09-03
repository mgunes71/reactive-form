import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserPageComponent} from "./components/user-page/user-page.component";
import {FormSingComponent} from "./components/form-sing/form-sing.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {LoginComponent} from "./components/login/login.component";
import {LoginGuard} from "./guards/login.guard";

const routes: Routes = [
  {path: 'users', component: UserPageComponent},
  {path: 'form', component: FormSingComponent , canActivate:[LoginGuard]},
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
