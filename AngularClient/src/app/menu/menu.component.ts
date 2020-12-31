import { SocialAuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../shared/services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public isUserAuthenticated: boolean;
  public isExternalAuth: boolean;

  constructor(private _authService: AuthenticationService, private _router: Router, 
    private _socialAuthService: SocialAuthService) { 
    this._authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
    })
   }

  ngOnInit(): void {
    this.authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
    })

    this._socialAuthService.authState.subscribe(user => {
      this.isExternalAuth = user != null;
    })
  }

  public logout = () => {
    this._authService.logout();

    if(this.isExternalAuth)
      this._authService.signOutExternal();

    this._router.navigate(["/"]);
  }

}
