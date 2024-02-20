import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  standalone: true,
  imports: [],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css'
})
export class CounterButtonComponent {
  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();
  @Output() reset = new EventEmitter();
  onIncrement(){
    this.increment.emit();
  }
  onDecrement(){
    this.decrement.emit();
  }
  onReset(){
    this.reset.emit();
  }
}
