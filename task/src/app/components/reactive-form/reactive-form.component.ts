import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
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
      const formData = this.myForm.value;
      console.log(formData);
      this.myForm.reset();
    }
  }

  //On Reset Form
  onReset() {
    this.myForm.reset();
  }
}
