import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  exports:[
    MatIconModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
