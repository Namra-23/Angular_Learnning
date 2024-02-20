import { Component, OnInit } from '@angular/core';
import { CounterOutputComponent } from '../counter-output/counter-output.component';
import { CounterButtonComponent } from '../counter-button/counter-button.component';
import { CustomCounterInputComponent } from "../custom-counter-input/custom-counter-input.component";

@Component({
    selector: 'app-counter',
    standalone: true,
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.css',
    imports: [CounterOutputComponent, CounterButtonComponent, CustomCounterInputComponent]
})
export class CounterComponent implements OnInit {
  ngOnInit(): void {};

}
