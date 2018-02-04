import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.css']
})
export class HomeOneComponent implements OnInit {
  sof="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex ante, placerat tempor enim vel, semper facilisis leo. Nunc et turpis nec quam fermentum ornare. Etiam porttitor quam ac nulla rutrum."
  bus="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex ante, placerat tempor enim vel, semper facilisis leo. Nunc et turpis nec quam fermentum ornare. Etiam porttitor quam ac nulla rutrum."
  constructor() {   }

  ngOnInit() {
  }
  value=1;
  setVal(x){
    this.value=x;
  }
}
