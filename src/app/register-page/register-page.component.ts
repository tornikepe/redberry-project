import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public getData: any;
  public show: boolean = false;
  public show2: boolean = false;
  public show3: boolean = false;
  public show4: boolean = false;

  ngOnInit(): void {
    const value = this.userService.getData();
    if (value) {
      const parsedValue = JSON.parse(value);

      this.form.setValue({
        date_of_birth: parsedValue.date_of_birth,
        name: parsedValue.name,
        email: parsedValue.email,
        phonenumber: parsedValue.phone,
      });
    }
  }
  constructor(private fb: FormBuilder, private userService: UserService) {
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

  // user-is Date გადამყავს short ფორმატში
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

    const userInfo = {
      name: this.form.value.name,
      email: this.form.value.email,
      phone: this.form.value.phonenumber as string,
      date_of_birth: userDate,
    };
    const userInfoForLocalStorage = {
      name: this.form.value.name,
      email: this.form.value.email,
      phone: this.form.value.phonenumber as string,
      date_of_birth: this.form.value.date_of_birth,
    };

    // ვინახავ ფორმის მონაცემებს სერვისში და შემდეგ chess-experience
    // კომპონენტში ვიყენენებ
    this.userService.data = userInfo;

    // ვინახავ localStorage ში ფორმის user ის data-ს
    this.userService.setData(userInfoForLocalStorage);
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
