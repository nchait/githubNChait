import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-two',
  templateUrl: './home-two.component.html',
  styleUrls: ['./home-two.component.css']
})
export class HomeTwoComponent implements OnInit {
  myInterval: number = 5000;

  constructor() { }

  ngOnInit() {
  }

}