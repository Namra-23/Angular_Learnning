import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';

@Component({
  selector: 'app-counter-button',
  standalone: true,
  imports: [],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css'
})
export class CounterButtonComponent {

  constructor(private store : Store<{counter : {counter : number}}>){}

  onIncrement(){
    this.store.dispatch(increment());
  }
  onDecrement(){
    this.store.dispatch(decrement());
  }
  onReset(){
    this.store.dispatch(reset());
  }
}
