import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountPage } from './account.page';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { CheckEmailComponent } from './check-email/check-email.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PasswordUpdatedComponent } from './password-updated/password-updated.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AccountPage,
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent,
      },
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    children: [
      {
        path: 'send-email',
        component: SendEmailComponent,
      },
      {
        path: 'check-email',
        component: CheckEmailComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
      },
      {
        path: 'password-updated',
        component: PasswordUpdatedComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountPageRoutingModule {}
