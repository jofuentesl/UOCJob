import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; 

/*
import { FlexLayoutModule } from '@angular/flex-layout';
 import {


 
  MatRippleModule,

} from '@angular/material'; */

@NgModule({
  imports:[
    FlexLayoutModule,
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule, 
    MatListModule,
    MatTooltipModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    FlexLayoutModule,
    MatButtonModule, 
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatTooltipModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})

export class MaterialModule {}