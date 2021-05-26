import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  allEmployees:any= [];
  url = 'http://127.0.0.1:9999/employee/angajati';

  constructor(private httpClient:HttpClient) { }

  getAllEmployees(): Observable<Array<any>>{
    return this.httpClient.get<Array<any>>(this.url);
  }

}