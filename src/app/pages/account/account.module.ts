import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccountPageRoutingModule } from './account-routing.module';
import { AccountPage } from './account.page';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AccountOptionsComponent } from './account-options/account-options.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CheckEmailComponent } from './check-email/check-email.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { PasswordUpdatedComponent } from './password-updated/password-updated.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPageRoutingModule
  ],
  declarations: [
    AccountPage,
    RegisterComponent,
    SignInComponent,
    WelcomeComponent,
    AccountOptionsComponent,
    ResetPasswordComponent,
    CheckEmailComponent,
    SendEmailComponent,
    PasswordUpdatedComponent
  ]
})
export default class AccountPageModule {}
