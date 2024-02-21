import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { getCounter } from '../state/counter.selectors';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent implements OnInit{
  counter !: number;

  constructor(private store: Store<{counter : CounterState}>) {}

  ngOnInit() {
    this.store.select(getCounter).subscribe(data => {
      console.log("Counter observale is called");
      this.counter = data;
    });
  }
  
}
