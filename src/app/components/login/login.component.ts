import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {UserLogin} from "../../models/user-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: UserLogin = new UserLogin();

  constructor(private accountService:AccountService ) { }

  ngOnInit(): void {
  }

  login(form:NgForm){
    this.accountService.login(this.model);
    console.log(this.model.userName);
    console.log(this.model.password);
    console.log(this.accountService.isLoggedIn());
  }


}
