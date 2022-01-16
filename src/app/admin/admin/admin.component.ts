import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 sess:any;
  constructor() { }
  ngOnInit(): void {
  }
  sessionajoutee(event:any):void{
    this.sess=event.value;
  }
}
