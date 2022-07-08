import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
          Validators.maxLength(9),
          Validators.minLength(9),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      date_of_birth: [null, Validators.required],
    });
  }

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

    // ვინახავ ფორმის მონაცემებს სერვისში და შემდეგ chess-experience
    // კომპონენტში ვიყენენებ
    this.userService.data = obj;

    this.userService.setData(obj);
  }

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
}
