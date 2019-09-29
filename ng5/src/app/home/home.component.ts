import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  btnTxt: string = "Add an item";

  itemCount: number;
  goalText: string = "My first life goal";
  goals: string[] = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem(){
    this.goals.push(this.goalText);
    this.goalText ='';
    this.itemCount = this.goals.length;
  }

  removeItem(i){
    this.goals.splice(i, 1);
  }
}
