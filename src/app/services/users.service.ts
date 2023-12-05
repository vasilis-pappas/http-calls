import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  http = inject(HttpClient);

  url = 'https://reqres.in/api/users';


  getUsers() {
    return this.http.get(this.url);
  }

  postUser(data: any) {

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('crossDomain', 'true')

    return this.http.post(this.url, JSON.stringify(data), { headers }) // headers: headers
    .pipe(
      retry(1),
      catchError(error => throwError(() => 'Something is wrong....'))
    );
    
  
  
  }

}

