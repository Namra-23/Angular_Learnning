import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from '../employee';
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "http://localhost:3000/client";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }
  saveColor(data :any){
    return this.http.post(this._url, data)
  }
}
