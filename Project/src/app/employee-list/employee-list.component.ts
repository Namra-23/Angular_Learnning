import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  public employees : any = [];
  public errorMsg : any;
  constructor(private _employeeService: EmployeeService){}

  ngOnInit(){
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data);
  }
}

