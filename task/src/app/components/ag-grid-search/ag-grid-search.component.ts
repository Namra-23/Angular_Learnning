import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid-search',
  standalone: true,
  imports: [AgGridAngular, CommonModule, FormsModule],
  templateUrl: './ag-grid-search.component.html',
  styleUrl: './ag-grid-search.component.css'
})
export class AgGridSearchComponent {
  gridApi !: GridApi

  colDefs: ColDef[] = [
    { headerName: 'DocTitle', field: 'docTitle', filter: true },
    { headerName: 'DocVersion', field: 'docVersion' },
    { headerName: 'DocStatus', field: 'docStatus' },
    { headerName: 'DocType', field: 'docType' }
  ]
  demoObj = [{
    'docTitle': 'software management',
    'docVersion': '1',
    'docStatus': 'valid',
    'docType': 'technical'
  },
  {
    'docTitle': 'document management',
    'docVersion': '1',
    'docStatus': 'valid',
    'docType': 'technical'
  },
  {
    'docTitle': 'software update',
    'docVersion': '1',
    'docStatus': 'valid',
    'docType': 'technical'
  },
  {
    'docTitle': 'software requirement',
    'docVersion': '1',
    'docStatus': 'valid',
    'docType': 'technical'
  }];
  defaultColDef = {
    flex: 1,
    minWidth: 100
  }
  filteredData = this.demoObj;
  searchQuery = '';

  onSearchClick(searchQuery: string) {
    const query = searchQuery.toLowerCase();
    if (this.gridApi) {
      this.gridApi.setFilterModel({
        docTitle: { filterType: 'text', type: 'contains', filter: query },
      });
    }
  }
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }
}
