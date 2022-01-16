import { Component, OnInit } from '@angular/core';
import { Session } from '../session';
import { NgForm } from '@angular/forms';
import { FakeSessionItemService } from '../fake-session-item.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-session-edit-form',
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {
 private id:number=1;
  private sub: any;
 
 tracks = ['MEAN', 'Angular',
  'NodeJS', 'Android', 'Swift', 'Xamarin','Ionic'];
 session = new Session(1, 'Web', this.tracks[0], new 
 Date('2018-06-11'), 10, 'Lyon', 0, false);
  constructor(private route: ActivatedRoute ,private sessionItemService:FakeSessionItemService) { }

  ngOnInit(): void {
   this.session= this.sessionItemService.getSession(1);
   this.sub = this.route.params.subscribe(params => {
    this.id = params['id']; 
   
    });
    console.log('Session ID ' + this.id.toString());
    this.session = this.sessionItemService.getSession(this.id);
  }
  editSession(sessionItem: NgForm): void{
    console.log("Session Updated..."+JSON.stringify(sessionItem.value));
    }

}
