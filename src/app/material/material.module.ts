import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatListModule} from '@angular/material/list';
import {CdkTableModule} from '@angular/cdk/table';













const Material=[
  MatToolbarModule,
  MatGridListModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonModule,
  MatSnackBarModule,
  MatTableModule,
  MatIconModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatSidenavModule,
  FlexLayoutModule,
  MatListModule,
  CdkTableModule,
]

@NgModule({
  // declarations: [
    
  // ],

  imports: [
    // CommonModule,
    Material
  ],
  exports:[
      Material
  ]
})
export class MaterialModule { }
