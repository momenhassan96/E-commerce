import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LoginComponent, HeaderComponent, FooterComponent, RegisterComponent],
  imports: [
    CommonModule,FormsModule,MaterialModule,RouterModule,SharedModule,ReactiveFormsModule
  ],
  exports:[LoginComponent, HeaderComponent, FooterComponent, RegisterComponent]
})
export class CoreModule { }
