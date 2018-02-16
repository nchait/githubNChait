import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;
function sizeIt(){
  var height = $( "#lpicture" ).height();
  var newH = 530-height-50;
  var h3 = Math.floor(newH).toString()+"px";
  $( "#lwords" ).height(h3);
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
  selector: 'app-lastcall',
  templateUrl: './lastcall.component.html',
  styleUrls: ['./lastcall.component.css']
})
export class LastcallComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
