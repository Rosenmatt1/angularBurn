import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor() { }

  count:number = 0
  newText:string = ""

 
  ngOnInit() {
  }

  increment = () => this.count++

  updateItem(e:any) {
    this.newText = e.target.value
  }
  


}
