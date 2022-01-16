import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FakeSessionItemService } from '../fake-session-item.service';
;

@Component({
  selector: 'app-session-add-form',
  templateUrl: './session-add-form.component.html',
  styleUrls: ['./session-add-form.component.css']
})
export class SessionAddFormComponent implements OnInit {

  constructor(private itemService:FakeSessionItemService) { }
  
  ngOnInit(): void {
  }

  addSession(sessionItem: any) {
    console.log("Logs...."+JSON.stringify(sessionItem.value));
    this.itemService.add(sessionItem);
      
     }
}
