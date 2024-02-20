import { Component, OnInit } from '@angular/core';
import { CounterOutputComponent } from '../counter-output/counter-output.component';
import { CounterButtonComponent } from '../counter-button/counter-button.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CounterOutputComponent,CounterButtonComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {
  ngOnInit(): void {};

}
