import { NgxSpinnerService } from 'ngx-spinner';
import { Component,AfterViewInit } from '@angular/core';
import { UsersService } from 'src/app/users/users.service';
import { SpinnerComponent } from '../../spinner/spinner.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends SpinnerComponent implements AfterViewInit {
data:any=[]
constructor(public _UsersService:UsersService,spinner: NgxSpinnerService){
super(spinner)
this._UsersService.USERID.subscribe(data=>{
 data !=0? this._UsersService.returnspecificdata(data).subscribe((res:any)=>{
  this.data=[res.data]
  this.spinner.hide();
 }) : this.spinner.hide();
})
}
ngAfterViewInit(){
  this.spinner.hide();
}
}
