import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private endpoint = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}
  // getPost(): Observable<any> {
  //   return this.http
  //     .get<any>(this.endpoint)
  //     .pipe(retry(1), catchError(this.handleError));
  // }
}
