import { Component } from '@angular/core';
//import {jsFileObject}  from '../assets/practice';
import { TableComponent } from './table/table.component';
import {trigger,state,style,animate,transition,keyframes} from '@angular/animations';
//declare const practice: any;
//import * as abdc  from 'abc';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('navigation', [
      state('true' , style({ left:'-20%'})), 
      state('false', style({ left:'0%'})),
      transition('0 => 1', animate('.2s')),
      transition('1 => 0', animate('.2s'))
    ]),
    trigger('showOverlay', [
      state('true' , style({ opacity: 1,display:"block" })), 
      state('false', style({ opacity: 0,display:"none" })),
      transition('0 => 1', animate('.2s')),
      transition('1 => 0', animate('.5s'))
    ])
  ]
})
export class AppComponent {

  constructor() {
    // var a = new practice();
    // console.log(a);
  }
  navigation:boolean = true;
  showOverlay:boolean = false;
  navigationDrawer(){
      this.navigation = !this.navigation;
      this.showOverlay = !this.showOverlay;
  }
}
