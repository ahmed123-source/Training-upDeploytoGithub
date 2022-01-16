import { Component, Input, OnInit } from '@angular/core';
import { InscriptionDisableDirectiveDirective } from 'src/app/inscription-disable-directive.directive';
import { FakeSessionItemService } from '../fake-session-item.service';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
 
  @Input() session:any;

  

  constructor(private sessionItem:FakeSessionItemService) { }

  ngOnInit(): void {
  }
  inscrire(): void{
    this.session.participants++;
    console.log(this.session.participants);
    if(this.session.participants===20){this.session.isCompleted=true;}
  }
  onDelete():void{
    this.sessionItem.delete(this.session);

  }
}
