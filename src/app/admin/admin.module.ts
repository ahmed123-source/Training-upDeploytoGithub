import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { InscriptionDisableDirectiveDirective } from './inscription-disable-directive.directive';
import { FormsModule, NgForm } from '@angular/forms';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import { FakeSessionItemService } from './fake-session-item.service';
import { RouterModule,Routes } from '@angular/router';


const adminRoutes: Routes = [
  {
  path: 'admin',
  component: AdminComponent,
  children: [
     { path: 'add', component: SessionAddFormComponent },
     { path: 'edit/:id', component: 
    SessionEditFormComponent },
     { path: 'list', component: SessionItemListComponent 
    },
     { path: '', redirectTo: 'list', pathMatch: 'full' }
     ]
  }
   ];
@NgModule({
  declarations: [
    AdminComponent,SessionItemComponent,SessionItemListComponent, SessionAddFormComponent,InscriptionDisableDirectiveDirective, SessionEditFormComponent
  ],
  imports:[
  
    RouterModule.forChild(adminRoutes),
    CommonModule,
    FormsModule
  ],
  providers:[FakeSessionItemService],
  bootstrap:[AdminComponent]
})
export class AdminModule { }
