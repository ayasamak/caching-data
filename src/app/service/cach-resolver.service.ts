import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CachResolverService {
  //cach
  private cache = new Map<string, [HttpResponse<any>]>();
  constructor() { }
  set(key:any, value:any) {
  this.cache.set(key, [value]);
  }

  get(key:any) {
    const tuple = this.cache.get(key);
    if(!tuple) return null;
    const httpSavedResponse = tuple[0];
    return httpSavedResponse;
  }
}