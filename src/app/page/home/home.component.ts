import {Component, OnDestroy, OnInit} from '@angular/core';



@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  title: string = 'Home';
  prenom: string = "John";
  age: number = 35;
  x: number = 0;
  y: number = 0;
  result: number = 0;
  operator: string = '';

  ngOnInit(): void {
    console.log('HomeComponent ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent ngOnDestroy');
  }

  onAction() {
    console.log('clicked onAction()');
  }

  onCalculate() {
    switch (this.operator) {
      case '+':
        this.result = this.x + this.y;
        break;
      case '-':
        this.result = this.x - this.y;
        break;
      case '*':
        this.result = this.x * this.y;
        break;
      case '/':
        if (this.y !== 0) {
          this.result = this.x / this.y;
        } else {
          this.result = NaN;
        }
        break;
      default:
        this.result = 0;
    }
  }
}

