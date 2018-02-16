import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.css']
})
export class HomeOneComponent implements OnInit {
  sof="I have been developing software for 7 years now and I am adept at multiple languages. Through my projects and academics, I have been introduced to a wide variety of methodologies, algorithms and frameworks."
  bus="By working in sales and finance, I have seen how startups grow from within present on the outside. In all my roles I have worked closely with the C-Suite, often doing special projects due to my wide array of knowledge."
  constructor() {   }

  ngOnInit() {
  }
  value=1;
  setVal(x){
    this.value=x;
  }
}
