import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
function sizeIt(){
  var height = $( "#fpicture" ).height();
  var newH = 530-height-50;
  var h3 = Math.floor(newH).toString()+"px";
  $( "#fwords" ).height(h3);
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
  selector: 'app-firepower',
  templateUrl: './firepower.component.html',
  styleUrls: ['./firepower.component.css']
})
export class FirepowerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
