import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  boxes: number[] = [];
  inputValue= '';
  constructor() {
    // fill boxes with 10 items
    for (let i = 0; i < 40; i++) {
      this.boxes.push(i);
    }
  }


  onInputChange() {

  }
}
