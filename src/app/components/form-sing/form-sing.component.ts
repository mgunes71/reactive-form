import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import {User} from "../../models/user";
import {Referance} from "../../models/referance";
import {UserAddService} from "../../services/user-add.service";
import {BlacklistValidator} from "../../libs";

@Component({
  selector: 'app-form-sing',
  templateUrl: './form-sing.component.html',
  styleUrls: ['./form-sing.component.css']
})
export class FormSingComponent implements OnInit {
  loginForm = this.fb.group({
    id:["11111111111",  [Validators.minLength(1),Validators.maxLength(10), Validators.required]],
    name:["Murat", [ BlacklistValidator('ğ'), Validators.required]],
    job:["Makine Mühendisi and SoftWare Dev.", [Validators.required, Validators.maxLength(33)]],
    age:["27", Validators.required],
    country:["Turkiye", Validators.required],
    contact: this.fb.group({
      email: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
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
    console.log(this.loginForm)



  };



  constructor(private fb:FormBuilder, private userAddService:UserAddService) { }

  ngOnInit(): void {
  }

  // addUser(idtxt, nametxt, jobtxt, agetxt, countrytxt, emailtxt, phonetxt, addresstxt, reftxt) {
  //   this.userAddService.addUser(idtxt, nametxt, jobtxt,
  //      agetxt, countrytxt, emailtxt, phonetxt, addresstxt, reftxt)
  // }
}
