import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/index';
import { AuthService } from './shared/auth.service';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [AuthService]
})
export class AuthModule { }
