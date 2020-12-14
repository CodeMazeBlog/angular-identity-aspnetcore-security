import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthenticationService, private _router: Router){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
    if (this._authService.isUserAuthenticated()) {
      return true;
    }

    this._router.navigate(['/authentication/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
  
}
