import { AuthResponseDto } from './../../_interfaces/response/authResponseDto.model';
import { HttpErrorResponse } from '@angular/common/http';
import { TwoFactorDto } from './../../_interfaces/twoFactor/twoFactorDto.model';
import { AuthenticationService } from './../../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-two-step-verification',
  templateUrl: './two-step-verification.component.html',
  styleUrls: ['./two-step-verification.component.css']
})
export class TwoStepVerificationComponent implements OnInit {
  private provider: string;
  private email: string;
  private returnUrl: string;
  
  twoStepForm: FormGroup;
  showError: boolean;
  errorMessage: string;
  
  constructor(private authService: AuthenticationService, private route: ActivatedRoute, 
    private router: Router) { }
    
  ngOnInit(): void {
    this.twoStepForm = new FormGroup({
      twoFactorCode: new FormControl('', [Validators.required]),
    });
    
      this.provider = this.route.snapshot.queryParams['provider'];
      this.email = this.route.snapshot.queryParams['email'];
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  }

  validateControl = (controlName: string) => {
    return this.twoStepForm.get(controlName).invalid && this.twoStepForm.get(controlName).touched
  }

  hasError = (controlName: string, errorName: string) => {
    return this.twoStepForm.get(controlName).hasError(errorName)
  }

  loginUser = (twoStepFromValue) => {
    this.showError = false;
    
    const formValue = { ...twoStepFromValue };

    let twoFactorDto: TwoFactorDto = {
      email: this.email,
      provider: this.provider,
      token: formValue.twoFactorCode
    }

    this.authService.twoStepLogin('api/accounts/twostepverification', twoFactorDto)
    .subscribe({
      next: (res:AuthResponseDto) => {
        localStorage.setItem("token", res.token);
        this.authService.sendAuthStateChangeNotification(res.isAuthSuccessful);
        this.router.navigate([this.returnUrl]);
      },
      error: (err: HttpErrorResponse) => {
        this.errorMessage = err.message;
        this.showError = true;
      }
    })
  }  
}
