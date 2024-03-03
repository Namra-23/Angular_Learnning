import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid-search',
  standalone: true,
  imports: [AgGridAngular,CommonModule,FormsModule],
  templateUrl: './ag-grid-search.component.html',
  styleUrl: './ag-grid-search.component.css'
})
export class AgGridSearchComponent {
  
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
  onSearchClick() {
    const query = this.searchQuery.toLowerCase();
    this.filteredData = this.demoObj.filter(item =>
      item.docTitle.toLowerCase().includes(query) ||
      item.docVersion.toLowerCase().includes(query) ||
      item.docStatus.toLowerCase().includes(query) ||
      item.docType.toLowerCase().includes(query)
    );
  }
}
