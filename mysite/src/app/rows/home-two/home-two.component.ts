import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-two',
  templateUrl: './home-two.component.html',
  styleUrls: ['./home-two.component.css']
})
export class HomeTwoComponent implements OnInit {
  myInterval: number = 5000;
  last =  "While working on at Last Call, I had the chance to compile a Zoho CRM that was the backbone of our outbound sales strategy. Upon finishing the internship I provided the company with a set of recommendations that were very well received.";
  fire =  "I assisted a four-person team by making initial critiques to financial models and providing technical knowledge on the more complex companies. I also developed a VBA model to compile monthly statements into quarterly statements.";
  know =  "Knowroaming was my introduction to workflow and workflow tools. As part of quality assurance, I was responsible for reporting bugs to the right developers using tools such as JIRA and Slack. I also became acquainted with web scraping and automation.";
  constructor() { }

  ngOnInit() {
  }

}
