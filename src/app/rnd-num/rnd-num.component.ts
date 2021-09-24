import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rnd-num',
  templateUrl: './rnd-num.component.html',
  styleUrls: ['./rnd-num.component.css']
})
export class RndNumComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  defaultNumber = 0;
  rndNumber = (Math.random() * 10).toFixed(0);

  
  encriment(){
    this.defaultNumber =  this.defaultNumber += Math.floor(Math.random( ) * 10);
    
  }
  decriment(){
    this.defaultNumber =  this.defaultNumber -= Math.floor(Math.random( ) * 10);
  }
}
