import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {UserLogin} from "../../models/user-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  model: UserLogin = new UserLogin();
  userLogForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl("", Validators.required)
  });



  constructor(private accountService: AccountService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  // login(form: NgForm) {
  //   this.accountService.login(this.model);
  //   console.log(this.model.email);
  //   console.log(this.model.password);
  //   console.log(this.accountService.isLoggedIn());
  // }

  onSubmit() {
    this.model = this.userLogForm.value;
      this.accountService.login(this.model);
      console.log(this.model.email);
      console.log(this.model.password);
      console.log(this.accountService.isLoggedIn());
  }


}
