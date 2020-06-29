import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { SharedService } from './services/shared.service';




@NgModule({
  declarations: [PasswordInputComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    // SharedService
  ],
  exports:[
    PasswordInputComponent,
    // SharedService,
  ]
})
export class SharedModule { }
