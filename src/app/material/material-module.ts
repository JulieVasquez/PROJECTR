import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatSelectionList} from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // 👈 AÑADE ESTA LÍNEA
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectionList,  
    MatListModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatSidenavModule
  ],
  exports:[
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectionList,
    
    MatListModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatSidenavModule
    
  ]
})
export class MaterialModule { }
