import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee';
  message = '';
  test = 'im super man';
  allEmployees: Array<Employee> = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getAllEmployees();
  }


  private getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(allEmployeyes => {
      this.allEmployees = allEmployeyes;
      // console.log(this.allEmployees);
    });
  }

  
}
