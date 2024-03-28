import { Component } from '@angular/core';
import { UsersService } from '../../users.service';
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
export class UserDataComponent {
  userData:USER[]=[]
  isLoading = false;
   // MatPaginator Inputs
   page: number = 1;
   itemsPerPage = 6;
   totalItems : any;
  constructor(public _UsersService:UsersService){}
  ngOnInit(): void {
    //Load initial data
    this.loadData(this.page);
    }

  loadData(page: any) {
    this.isLoading = true;
    this._UsersService.returnUserData(page)
      .subscribe((data:any) =>{
        this.userData=data?.data
        this.itemsPerPage=data?.per_page
        this.totalItems=data?.total
        this.isLoading = false;
      }, error => {
        console.log(error);
        this.isLoading = false;
      });
  }
    
}
