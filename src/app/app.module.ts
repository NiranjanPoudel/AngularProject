import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

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



@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentComponent,
    StudentsListComponent,
    MatConfirmDialogComponent
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
    FlexLayoutModule
   
  ],
  providers: [StudentService,NotificationService ],
  bootstrap: [AppComponent],
  entryComponents:[StudentComponent,MatConfirmDialogComponent]
})
export class AppModule { }
