import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public httpClient:HttpClient) { }

  returnUserData(currentPage:number){
    return this.httpClient.get(`https://reqres.in/api/users?page=${currentPage}`)
  }
}
