import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-chess-experience',
  templateUrl: './chess-experience.component.html',
  styleUrls: ['./chess-experience.component.scss'],
})
export class ChessExperienceComponent implements OnInit {
  show: boolean = false;

  form: FormGroup = new FormGroup({});
  imagesData: any = [];
  userData: any = {};
  userId: number = 0;
  ngOnInit(): void {
    this.userService.getImageData().subscribe((res: any) => {
      this.imagesData = res;
    });

    this.userData = this.userService.data;
  }
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.form = this.fb.group({
      experience_level: ['', [Validators.required]],
      participated: [null, [Validators.required]],
    });
  }
  characters = new FormControl('', [Validators.required]);

  isTrue(value: any) {
    if (typeof value === 'string') {
      value = value.trim().toLowerCase();
    }
    switch (value) {
      case true:
      case 'true':
      case 1:
      case '1':
      case 'on':
      case 'yes':
        return true;
      default:
        return false;
    }
  }

  onSubmit() {
    // აქ რექვესთვისთვის ვამზადებ, რადგან დაბალ რეგისტრში ეშვება პოსტ რექუესტი
    const str = this.form.value.experience_level || '';
    let experience_level = typeof str === 'string' ? str.toLowerCase() : '';

    if (experience_level === 'intermediate') {
      experience_level = 'normal';
    }
    // სტრინგი გადამყავს Boolean ში, ფუნქციით isTrue()
    let participated = this.isTrue(this.form.value.participated);

    const obj = {
      experience_level: experience_level,
      already_participated: participated,
      character_id: this.userId,
    };

    // ინახება მთლიანი data user ის
    const final = { ...this.userData, ...obj };

    // const currentObj = this.userService.setData2(obj);
    // const fullObj = localStorage.getItem('user-form');

    // ვუშვებ post request-ს
    this.userService.addUser(final).subscribe(
      (res) => {
        console.log('success');
      },
      (err) => {
        alert('Something went wrong');
      }
    );
  }
  catchId(id: number) {
    this.userId = id;
  }
  toggle1() {
    this.show = !this.show;
  }
}
