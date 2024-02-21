import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { changeText, customIncrement } from '../state/counter.actions';
import { getText } from '../state/counter.selectors';

@Component({
  selector: 'app-custom-counter-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-counter-input.component.html',
  styleUrl: './custom-counter-input.component.css'
})
export class CustomCounterInputComponent implements OnInit  {
  constructor(private store : Store<{counter : CounterState}>){
  }
  value : number = 0;
  text ?: string;
  ngOnInit() {
    this.store.select(getText).subscribe((text) => {
      console.log("Change Text Observable called");
      this.text = text;
    })
  }
  onAdd() {
    // console.warn(this.value);
    this.store.dispatch(customIncrement({value : +this.value}));
  }
  onChangeText(){
    this.store.dispatch(changeText());
  }
}
