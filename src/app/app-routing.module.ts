import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './Authentication/sign-in/sign-in.component';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './Authentication/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './Authentication/verify-email/verify-email.component';
import { DashboardComponent } from './Authentication/dashboard/dashboard.component';
import { AuthGuardGuard } from "./auth-guard.guard";





const routes: Routes = [{
  path:'', redirectTo: '/sign-in', pathMatch:'full'},
  {path:'sign-in', component:SignInComponent},
  {path:'sign-up', component:SignUpComponent},
  {path: 'dashboard',component:DashboardComponent, canActivate:[AuthGuardGuard]},
  {path:'forgot-password', component:ForgotPasswordComponent},
  {path:'verify-email', component:VerifyEmailComponent},
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


