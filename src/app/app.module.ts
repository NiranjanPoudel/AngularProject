import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './students/student/student.component';
import { MaterialModule } from './material/material.module';
import { StudentService } from './shared/student.service';
import { environment } from '../environments/environment';
import { NotificationService } from './shared/notification.service';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SignInComponent } from './Authentication/sign-in/sign-in.component';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './Authentication/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './Authentication/verify-email/verify-email.component';
import { DashboardComponent } from './Authentication/dashboard/dashboard.component';
import { AuthenticateService } from "./shared/authenticate.service";
import { AuthGuardGuard  } from './auth-guard.guard';



@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentComponent,
    StudentsListComponent,
    MatConfirmDialogComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    FlexLayoutModule,
    AngularFireAuthModule,
    AngularFirestoreModule
   
  ],
  providers: [StudentService,NotificationService,AuthenticateService,AuthGuardGuard ],
  bootstrap: [AppComponent],
  entryComponents:[StudentComponent,MatConfirmDialogComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
