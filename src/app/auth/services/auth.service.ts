import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectToAuthenticationPage(): void {
    window.location.href = environment.api.authLink;
  }

  extractTokenFromUrlParams(accessTokenParams: string): string {
    const accessTokenString = accessTokenParams.split('&')[0];
    return accessTokenString.replace('access_token=', '');
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
}
