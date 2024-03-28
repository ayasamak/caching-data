import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { HeaderComponent } from './components/user-data/header/header.component';
import { SharedTableComponent } from './components/shared-table/shared-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


@NgModule({
  declarations: [
    UsersComponent,
    UserDataComponent,
    HeaderComponent,
    SharedTableComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule, 
    NgxPaginationModule,
    MatProgressBarModule
  ]
})
export class UsersModule { }
