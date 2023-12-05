import { HttpClient, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { retry, catchError, throwError, Observable } from 'rxjs';
import { NasaData } from '../models/nasa-data';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  http = inject(HttpClient);

  // url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
  url = 'https://api.nasa.gov/planetary/apod';


  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'crossDomain': 'true'
    }),
    params: new HttpParams({
      'api_key': 'DEMO_KEY'
    } as HttpParamsOptions)
  };

  get(): Observable<NasaData> {
    return this.http.get<NasaData>(this.url, this.options) 
    .pipe( 
        retry(1),
        catchError(error => throwError(() => 'Something wrong...'))
      )
  }

}
