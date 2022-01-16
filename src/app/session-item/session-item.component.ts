import { Component, Input, OnInit } from '@angular/core';
import { InscriptionDisableDirectiveDirective } from '../inscription-disable-directive.directive';
@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
 
  @Input() session:any;

  

  constructor() { }

  ngOnInit(): void {
  }
  inscrire(): void{
    this.session.participants++;
    console.log(this.session.participants);
    if(this.session.participants===20){this.session.isCompleted=true;}
  }
}
