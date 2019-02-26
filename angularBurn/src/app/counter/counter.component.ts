import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor() { }

  counter: number = 0

  ngOnInit() {
  }

  bump() {
    this.counter++
  }

}