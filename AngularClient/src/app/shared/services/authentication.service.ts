import { TwoFactorDto } from './../../_interfaces/twoFactor/twoFactorDto.model';
import { ResetPasswordDto } from './../../_interfaces/resetPassword/resetPasswordDto.model';
import { ForgotPasswordDto } from '../../_interfaces/resetPassword/forgotPasswordDto.model';
import { AuthResponseDto } from './../../_interfaces/response/authResponseDto.model';
import { RegistrationResponseDto } from './../../_interfaces/response/registrationResponseDto.model';
import { UserForAuthenticationDto } from './../../_interfaces/user/userForAuthenticationDto.model';
import { UserForRegistrationDto } from './../../_interfaces/user/userForRegistrationDto.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';
import { Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CustomEncoder } from '../custom-encoder';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _authChangeSub = new Subject<boolean>()
  public authChanged = this._authChangeSub.asObservable();
  
  constructor(private _http: HttpClient, private _envUrl: EnvironmentUrlService, private _jwtHelper: JwtHelperService) {}

  public registerUser = (route: string, body: UserForRegistrationDto) => {
    return this._http.post<RegistrationResponseDto>(this.createCompleteRoute(route, this._envUrl.urlAddress), body);
  }

  public loginUser = (route: string, body: UserForAuthenticationDto) => {
    return this._http.post<AuthResponseDto>(this.createCompleteRoute(route, this._envUrl.urlAddress), body);
  }

  public logout = () => {
    localStorage.removeItem("token");
    this.sendAuthStateChangeNotification(false);
  }

  public forgotPassword = (route: string, body: ForgotPasswordDto) => {
    return this._http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body);
  }

  public resetPassword = (route: string, body: ResetPasswordDto) => {
    return this._http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body);
  }

  public confirmEmail = (route: string, token: string, email: string) => {
    let params = new HttpParams({ encoder: new CustomEncoder() })
    params = params.append('token', token);
    params = params.append('email', email);

    return this._http.get(this.createCompleteRoute(route, this._envUrl.urlAddress), { params: params });
  }

  public twoStepLogin = (route: string, body: TwoFactorDto) => {
    return this._http.post<AuthResponseDto>(this.createCompleteRoute(route, this._envUrl.urlAddress), body);
  }

  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    this._authChangeSub.next(isAuthenticated);
  }

  public isUserAuthenticated = (): boolean => {
    const token = localStorage.getItem("token");
 
    return token && !this._jwtHelper.isTokenExpired(token);
  }

  public isUserAdmin = (): boolean => {
    const token = localStorage.getItem("token");
    const decodedToken = this._jwtHelper.decodeToken(token);
    const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']

    return role === 'Administrator';
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }
}
