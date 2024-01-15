import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule,FormControl,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { UsdInrPipe } from "./pipes/usd-inr.pipe";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, UsdInrPipe]
})
export class AppComponent {
  title = 'Namra joshi';
  userLogin(item:any){
    console.warn(item);
  }
  loginForm = new FormGroup({
    user : new FormControl('',Validators.required),
    password : new FormControl('')
  });
  loginUser(){
    console.warn(this.loginForm.value);
  }
  get user(){
    return this.loginForm.get('user');
  }
}
