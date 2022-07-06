import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  show: boolean = false;
  show2: boolean = false;
  show3: boolean = false;
  show4: boolean = false;
  // show5: boolean = false;

  ngOnInit(): void {}
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(2)]],
      email: [
        null,
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^[A-Za-z0-9._%+-]+@redberry.ge$/),
        ],
      ],
      phonenumber: [
        null,
        [
          Validators.required,
          Validators.minLength(9),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      date_of_birth: [null, Validators.required],
      // experience_level: [null, [Validators.required]],
      // participated: [null, [Validators.required]],
      // character: [null, [Validators.required]],
    });
  }
  // isTrue(value: any) {
  //   if (typeof value === 'string') {
  //     value = value.trim().toLowerCase();
  //   }
  //   switch (value) {
  //     case true:
  //     case 'true':
  //     case 1:
  //     case '1':
  //     case 'on':
  //     case 'yes':
  //       return true;
  //     default:
  //       return false;
  //   }
  // }
  padTo2Digits(num: any) {
    return num.toString().padStart(2, '0');
  }

  formatDate(date: any) {
    return [
      this.padTo2Digits(date.getMonth() + 1),
      this.padTo2Digits(date.getDate()),
      date.getFullYear(),
    ].join('/');
  }
  onSubmit() {
    const userDate = this.formatDate(this.form.value.date_of_birth);

    const obj = {
      name: this.form.value.name,
      email: this.form.value.email,
      phone: this.form.value.phonenumber as string,
      date_of_birth: userDate,
    };
    this.userService.setData(obj);
    console.log(this.form.valid);

    // this.userService.addUser(obj).subscribe(
    //   (res) => {
    //     this.form.reset();
    //   },
    //   (err) => {
    //     alert('Something went wrong');
    //   }
    // );
  }
  // onSubmit2() {
  //   const str = this.form.value.experience_level || '';
  //   let experience_level = typeof str === 'string' ? str.toLowerCase() : '';

  //   if (experience_level === 'intermediate') {
  //     experience_level = 'normal';
  //   }

  //   let participated = this.isTrue(this.form.value.participated);
  //   console.log(experience_level, participated);

  //   const obj = {
  //     experience_level: experience_level,
  //     already_participated: participated,
  //     character_id: 2,
  //   };
  //   const currentObj = this.userService.setData2(obj);
  //   const fullObj = localStorage.getItem('user-form');
  //   console.log(fullObj);
  //   console.log(currentObj);
  //   // this.userService.addUser(obj).subscribe(
  //   //   (res) => {
  //   this.form.reset();
  //   //   },
  //   //   (err) => {
  //   //     alert('Something went wrong');
  //   //   }
  //   // );
  // }
  toggle1() {
    this.show = !this.show;
  }
  toggle2() {
    this.show2 = !this.show2;
  }
  toggle3() {
    this.show3 = !this.show3;
  }
  toggle4() {
    this.show4 = !this.show4;
  }
  // toggle5() {
  //   this.show5 = !this.show5;
  // }
}
