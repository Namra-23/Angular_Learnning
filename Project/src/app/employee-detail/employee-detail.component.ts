import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css'
})
export class EmployeeDetailComponent {
  public employees : any = [];
  public errorMsg !: string;
  constructor(private _employeeService: EmployeeService){}

  ngOnInit(){
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data);
  }
}
