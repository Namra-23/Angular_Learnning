import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from '../employee';
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }
}
