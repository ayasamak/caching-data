import { Component, Input } from '@angular/core';
import { UsersService } from '../../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.scss']
})
export class SharedTableComponent {
@Input() items:any=[]
@Input() page:number=0
@Input() totalItems:number=0
@Input() itemsPerPage:number=0
@Input() searchText:string=''
constructor(public _UsersService:UsersService,public router:Router){}
userDetail(item:any){
this._UsersService.USERID.next(item.id)
this.router.navigate(['/user'])
}
}
