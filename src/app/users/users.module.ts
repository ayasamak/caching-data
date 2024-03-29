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
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipe/filter.pipe';
import { UserComponent } from './components/user-data/user/user.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerComponent } from './components/spinner/spinner.component';

// Available options
interface NgxSpinnerConfig {
  type?: string;
}
@NgModule({
  declarations: [
    UsersComponent,
    UserDataComponent,
    HeaderComponent,
    SharedTableComponent,
    FilterPipe,
    UserComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    NgxPaginationModule,
    MatProgressBarModule,
    FormsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
  ]
})
export class UsersModule { }
