import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms'
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [LoginComponent, HeaderComponent, FooterComponent, RegisterComponent],
  imports: [
    CommonModule,FormsModule,MaterialModule
  ],
  exports:[LoginComponent, HeaderComponent, FooterComponent, RegisterComponent]
})
export class CoreModule { }
