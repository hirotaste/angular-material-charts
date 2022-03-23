import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _http: HttpClient) {}

  getUsers() {
    return firstValueFrom(this._http.get<User[]>('https://jsonplaceholder.typicode.com/users'));
  }
}
