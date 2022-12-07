import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
 
  public progress1 : number = 25;
  public progress2 : number = 55;

  getProgress1(){
    return `${ this.progress1 }%`; 
  }
  
  getProgress2(){
    return `${ this.progress2 }%`; 
  }

  constructor(){}
}
