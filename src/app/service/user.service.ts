import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public registerUrl: string =
    'https://chess-tournament-api.devtest.ge/api/register';
  public imageUrl: string =
    'https://chess-tournament-api.devtest.ge/api/grandmasters';
  public data: any = {};

  constructor(private http: HttpClient) {}

  addUser(obj: any) {
    return this.http.post(this.registerUrl, obj);
  }

  setData(data: any) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem('user-form', jsonData);
  }

  getData() {
    return localStorage.getItem('user-form');
  }

  removeData() {
    return localStorage.removeItem('user-form');
  }

  getImageData() {
    return this.http.get<any>(this.imageUrl);
  }
}
