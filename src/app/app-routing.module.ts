import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserPageComponent} from "./components/user-page/user-page.component";
import {FormSingComponent} from "./components/form-sing/form-sing.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {LoginComponent} from "./components/login/login.component";
import {LoginGuard} from "./libs";


const routes: Routes = [
  {path: 'home',
  loadChildren: () => import('./components/home-page/home.module').then(m => m.HomeModule)},
  {path: 'form', component: FormSingComponent , canActivate:[LoginGuard]},

  {path: 'users', component: UserPageComponent,
  loadChildren: () => import('./components/user-page/user.module').then(m=> m.UserModule),
  canActivate:[LoginGuard]
  },

  {path: 'login', component: LoginComponent},
  {path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
