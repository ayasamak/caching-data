import { Component } from '@angular/core';
import { UsersService } from '../../users.service';
import { NgxSpinnerService } from "ngx-spinner";
import { SpinnerComponent } from '../spinner/spinner.component';

interface USER {
  id: string;
  firstname: string;
  lastname: string;
  email:string
  avatar:string
}
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent extends SpinnerComponent {
  userData:USER[]=[]
   // MatPaginator Inputs
   page: number = 1;
   itemsPerPage = 6;
   totalItems : any;
   searchText:string=''
  constructor(public _UsersService:UsersService,spinner: NgxSpinnerService){
    super(spinner)
  }
  ngOnInit(): void {
    this.loadData(this.page);
    }

  loadData(page: any) {
    this._UsersService.returnUserData(page)
      .subscribe((data:any) =>{
        this.userData=data?.data
        this.itemsPerPage=data?.per_page
        this.totalItems=data?.total
        this.spinner.hide();
      }, error => {
        console.log(error);
        this.spinner.hide();
      });
  }

}
