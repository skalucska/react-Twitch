import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {AuthService} from '../../auth/services/auth.service';
import {Injectable} from '@angular/core';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.authService.getToken();

    const cloneReq = request.clone({
      headers: request.headers
        .set('Client-ID', environment.api.clientId)
        .set('Authorization', `Bearer ${token}`),
      url: environment.api.baseUrl + request.url
    });

    return next.handle(cloneReq);
  }
}
