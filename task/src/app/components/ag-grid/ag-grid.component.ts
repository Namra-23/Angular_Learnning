import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-quartz.css';

@Component({
  selector: 'app-ag-grid',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.css'
})
export class AgGridComponent {

  columnDefs: ColDef[] = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' },
    { headerName: 'Type', field: 'type' },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000, type: 'SUV'},
    { make: 'Ford', model: 'Mondeo', price: 32000 , type: 'SUV'},
    { make: 'Porsche', model: 'Boxster', price: 72000, type: 'Sedan'},
    { make: 'Mahindra', model: 'XUV', price: 42000, type: 'SUV'}
  ];
}
