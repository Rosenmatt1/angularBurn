import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularBurn';

  season8:boolean = false

  

  reveal() {
    this.season8 = !this.season8
  }

}
