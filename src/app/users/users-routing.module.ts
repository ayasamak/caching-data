import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { UserComponent } from './components/user-data/user/user.component';

const routes: Routes = [{ path: '', component: UsersComponent,children:[
  {
    path:'', component:UserDataComponent
  },
  {
    path: 'user', component:UserComponent
  }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
