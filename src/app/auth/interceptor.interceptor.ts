import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { SharedService } from '../shared/shared.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private sharedService : SharedService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.sharedService.getUserInfo()?.accessToken || ''
    const tokenizedReq = request.clone({
      headers: request.headers
        .set('authorization', `Bearer ${token}`)
        .set('Cache-Control', 'no-cache, no-store, must-revalidate')
        .set('Pragma', 'no-cache')
        .set('Expires', '0'),
    });
    return next.handle(tokenizedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('the error in HttpErrorResponse', error);
        return throwError(error);
      })
    );
  }
}
