import {Injectable} from '@angular/core';
import {UserLogin} from "../models/user-login";

@Injectable()
export class AccountService {

  constructor() {
  }

  loggedIn = false;

  login(user: UserLogin): boolean {
    if (user.userName == "murat" && user.password == "1453") {
      this.loggedIn = true;
      localStorage.setItem("isLogged", user.userName);
      return true;

    }
    return false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  logOut() {
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  }

}
