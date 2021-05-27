import { Component, Input } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // "styles": [
  //   "./node_modules/primeng/resources/themes/saga-blue/theme.css",
  //   "./node_modules/primeng/resources/primeng.min.css",
  //   "./node_modules/primeicons/primeicons.css",
  //   //...
  // ],
})
export class AppComponent {

  today = new Date();


  val: string = ''; 
  firstName: string = "Yallaling";
  title = 'employee';
  message = '';
  allEmployees: Array<Employee> = [];
  allEmployees2: Array<Employee> = [];

  constructor(private employeeService: EmployeeService, private httpClient:HttpClient) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  private getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(allEmployeyes => {
      this.allEmployees = allEmployeyes;
      // console.log(this.allEmployees);
    });
  }

  getAllEmployeesfilters(val:any) {
    this.employeeService.getAllEmployeesfilter(val).subscribe(allEmployees2 => {
      this.allEmployees2 = allEmployees2;
      // console.log(this.val);
    });
  }


}
