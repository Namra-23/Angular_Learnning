import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

interface RowData {
  docTitle: string;
  docVersion: string;
  docStatus: string;
  docType: string;
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, AgGridAngular,AgGridModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  myForm: FormGroup;
  rowData : RowData[] = [];
  colDefs: ColDef[] = [
    { headerName: 'DocTitle', field: 'docTitle' },
    { headerName: 'DocVersion', field: 'docVersion' },
    { headerName: 'DocStatus', field: 'docStatus' },
    { headerName: 'DocType', field: 'docType' }
  ]

  demoObj = {
    'docTitle': 'software management',
    'docVersion': '1',
    'docStatus': 'valid',
    'docType': 'technical'
  }

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      docTitle: ['', [Validators.required]],
      docVersion: ['', [Validators.required]],
      docStatus: ['', [Validators.required]],
      docType: ['', [Validators.required]]
    });
    this.myForm.patchValue(this.demoObj);
  }

  //On Submit Form
  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      this.rowData.push(formData);
      this.rowData = [...this.rowData];
      console.log(formData);
      this.myForm.reset();
    }
  }

  //On Reset Form
  onReset() {
    this.myForm.reset();
  }
  defaultColDef = {
    flex: 1,
    minWidth: 100
  }
}
