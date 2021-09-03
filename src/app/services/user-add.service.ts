import {Injectable} from '@angular/core';
import {User} from "../models/user";

@Injectable()
export class UserAddService {
  user = new User();

  constructor() {
  }

  // addUser(idtxt, nametxt, jobtxt,  agetxt, countrytxt, emailtxt, phonetxt, addresstxt, reftxt) {
  //   this.user.push({id:idtxt.value, name:nametxt.value, job:jobtxt.value,  age:agetxt.value, country:countrytxt.value,
  //     contact:{email:emailtxt.value, phone:phonetxt.value, address:addresstxt.value}, referance:[reftxt.value]});
  //
  // }
}


