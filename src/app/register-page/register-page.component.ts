import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  show: boolean = false;
  toggle() {
    this.show = !this.show;
    console.log(this.show);
  }
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: [null, [Validators.required, Validators.minLength(2)]],
      email: [
        null,
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/[a-z0-9]+@redberry.ge/),
        ],
      ],
      phonenumber: [null, [Validators.required, Validators.minLength(9)]],
      date_of_birth: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    // const obj = {
    //   name: this.form.value.name,
    //   email: this.form.value.email,
    //   password: this.form.value.passGroup.password,
    //   number: this.form.value.number,
    // };
    // this.userService.addUser(obj).subscribe(
    //   (res) => {
    //     this.form.reset();
    //     this.router.navigate(["login"]);
    //   },
    //   (err) => {
    //     alert("Something went wrong");
    //   }
    // );
    console.log(this.form.value.name);
  }
}
