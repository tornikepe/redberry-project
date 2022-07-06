import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  registerUrl: string = 'https://chess-tournament-api.devtest.ge/api/register';
  imageUrl: string = 'https://chess-tournament-api.devtest.ge/api/grandmasters';
  constructor(private http: HttpClient) {}

  addUser(obj: any) {
    return this.http.post(this.registerUrl, obj);
  }
  setData(data: any) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem('user-form', jsonData);
  }
  getData() {
    return localStorage.getItem('myData');
  }
  getImageData() {
    return this.http.get<any>(this.imageUrl);
  }
}
