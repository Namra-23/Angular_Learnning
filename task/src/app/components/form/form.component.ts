import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  myForm: FormGroup;
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
      console.log(this.myForm.value);
      this.myForm.reset();
    }
  }

  //On Reset Form
  onReset() {
    this.myForm.reset();
  }
}
