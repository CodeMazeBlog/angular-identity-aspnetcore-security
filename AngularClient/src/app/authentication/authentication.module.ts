import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { TwoStepVerificationComponent } from './two-step-verification/two-step-verification.component';

@NgModule({
  declarations: [RegisterUserComponent, LoginComponent, ForgotPasswordComponent, ResetPasswordComponent, EmailConfirmationComponent, TwoStepVerificationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'register', component: RegisterUserComponent },
      { path: 'login', component: LoginComponent },
      { path: 'forgotpassword', component: ForgotPasswordComponent },
      { path: 'resetpassword', component: ResetPasswordComponent },
      { path: 'emailconfirmation', component: EmailConfirmationComponent },
      { path: 'twostepverification', component: TwoStepVerificationComponent }
    ])
  ]
})
export class AuthenticationModule { }
