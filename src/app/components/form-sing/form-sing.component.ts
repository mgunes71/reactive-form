import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import {User} from "../../models/user";
import {Referance} from "../../models/referance";
import {UserAddService} from "../../services/user-add.service";

@Component({
  selector: 'app-form-sing',
  templateUrl: './form-sing.component.html',
  styleUrls: ['./form-sing.component.css']
})
export class FormSingComponent implements OnInit {
  loginForm = this.fb.group({
    id:["",  Validators.max(50000)],
    name:["",  Validators.required],
    job:["", Validators.required],
    age:["", Validators.required],
    country:["", Validators.required],
    contact: this.fb.group({
      email: ["", Validators.required],
      phone: ["", Validators.required],
      address: ["", Validators.required]
    }),
    referance: this.fb.array([
      this.fb.control("", Validators.required)
    ])
  });

  user: User;

  get referance() {
    return this.loginForm.get('referance') as FormArray;
  }

  newReferance(){
    this.referance.push(this.fb.control(""))
  }

  onSubmit(){
    this.user = Object.assign({}, this.loginForm.value);
    this.user.referances = Object.assign({}, Object.assign({}, this.loginForm.value).referances) as Referance[];



  };



  constructor(private fb:FormBuilder, private userAddService:UserAddService) { }

  ngOnInit(): void {
  }

  // addUser(idtxt, nametxt, jobtxt, agetxt, countrytxt, emailtxt, phonetxt, addresstxt, reftxt) {
  //   this.userAddService.addUser(idtxt, nametxt, jobtxt,
  //      agetxt, countrytxt, emailtxt, phonetxt, addresstxt, reftxt)
  // }
}
