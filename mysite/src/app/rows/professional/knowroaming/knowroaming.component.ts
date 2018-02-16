import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
function sizeIt(){
  var height = $( "#kpicture" ).height();
  var newH = 530-height-50;
  var h3 = Math.floor(newH).toString()+"px";
  $( "#kwords" ).height(h3);
}
$( document ).ready(function(){
  setInterval(sizeIt(), 1000);
});
var width = $(window).width();
$(window).on('resize', function(){
   if($(this).width() != width){
      width = $(this).width();
      sizeIt();
   }
});
@Component({
  selector: 'app-knowroaming',
  templateUrl: './knowroaming.component.html',
  styleUrls: ['./knowroaming.component.css']
})
export class KnowroamingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
