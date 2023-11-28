import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  http = inject(HttpClient);

  url = 'https://reqres.in/api/users?page=2';


  getUsers(){
    return this.http.get(this.url);
  }

}

