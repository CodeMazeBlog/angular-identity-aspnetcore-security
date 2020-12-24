import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from './../../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.css']
})
export class EmailConfirmationComponent implements OnInit {
  showSuccess: boolean;
  showError: boolean;
  errorMessage: string;
  
  constructor(private _authService: AuthenticationService, private _route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.confirmEmail();
  }
  
  private confirmEmail = () => {
    this.showError = this.showSuccess = false;

    const token = this._route.snapshot.queryParams['token'];
    const email = this._route.snapshot.queryParams['email'];
    this._authService.confirmEmail('api/accounts/emailconfirmation', token, email)
    .subscribe({
      next: (_) => this.showSuccess = true,
      error: (err: HttpErrorResponse) => {
        this.showError = true;
        this.errorMessage = err.message;
      }
    })
  }
}