import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { CachResolverService } from '../service/cach-resolver.service';
@Injectable()
export class CacheInterceptorInterceptor implements HttpInterceptor {
  constructor(private _CachResolverService: CachResolverService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Pass through if it's not GET call
    if (req.method !== 'GET') {
      return next.handle(req);
    }   

   //Catch
    const cachedResponse = this._CachResolverService.get(req.url);
    return cachedResponse ? of(cachedResponse) : this.sendRequest(req, next);
  }
  sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this._CachResolverService.set(req.url, event);
        }
      })
    );
  }
}



