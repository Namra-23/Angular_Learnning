import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent implements OnInit{
  counter?: number;
  constructor(private store: Store<{counter : {counter : number}}>) {}
  ngOnInit() {
    this.store.select('counter').subscribe(data => {
      this.counter = data.counter;
    })
  }
}
