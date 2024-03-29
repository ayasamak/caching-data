import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  USERID=new BehaviorSubject<number>(0)
  constructor(public httpClient:HttpClient) { }

  returnUserData(currentPage:number){
    return this.httpClient.get(`https://reqres.in/api/users?page=${currentPage}`)
  }

  returnspecificdata(id:number){
    return this.httpClient.get(`https://reqres.in/api/users/${id}`)
  }
}
