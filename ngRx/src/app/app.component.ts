import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterButtonComponent } from './counter/counter-button/counter-button.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CounterComponent,CounterButtonComponent,CounterOutputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngRx';
}
