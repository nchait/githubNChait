import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triplet-but',
  templateUrl: './triplet-but.component.html',
  styleUrls: ['./triplet-but.component.css']
})
export class TripletButComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  value=1;
  setVal(x){
    this.value=x;
  }
}
