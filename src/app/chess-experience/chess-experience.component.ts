import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-chess-experience',
  templateUrl: './chess-experience.component.html',
  styleUrls: ['./chess-experience.component.scss'],
})
export class ChessExperienceComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  imagesData: any = [];
  images: any = [];
  // characters.forEach(function(elem,i){
  // let id = data[i].id
  // let image = data[id-1].image
  // elem.innerHTML = <li class="character"> ${data[id-1].name} <img src="https://chess-tournament-api.devtest.ge/${image}" alt=""></li>;
  ngOnInit(): void {
    this.userService.getImageData().subscribe((res: any) => {
      this.imagesData = res;
      this.imagesData.map((e: any) => {
        console.log(e);
      });
    });
  }
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.fb.group({
      experience_level: [null, [Validators.required]],
      participated: [null, [Validators.required]],
      character: [null, [Validators.required]],
    });
  }

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

    // სტრინგი გადამყავს Boolean ში, ფუნქციით
    let participated = this.isTrue(this.form.value.participated);

    const obj = {
      experience_level: experience_level,
      already_participated: participated,
      character_id: 2,
    };
    console.log(obj);

    // const currentObj = this.userService.setData2(obj);
    // const fullObj = localStorage.getItem('user-form');

    // this.userService.addUser(obj).subscribe(
    //   (res) => {
    // this.form.reset();
    //   },
    //   (err) => {
    //     alert('Something went wrong');
    //   }
    // );
  }
}
