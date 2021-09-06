import {Injectable} from '@angular/core';
import {UserLogin} from "../models/user-login";

@Injectable()
export class AccountService {

  constructor() {
  }

  loggedIn = false;

  login(user: UserLogin): boolean {
    if (user.email == "muro71@gmail.com" && user.password == "2565583") {
      this.loggedIn = true;
      localStorage.setItem("isLogged", user.email);
      return true;

    }
    alert("Email or password is incorrect");
    return false;
  }

  isLoggedIn() {
    return this.loggedIn;
  };

  logOut() {
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  };



}
