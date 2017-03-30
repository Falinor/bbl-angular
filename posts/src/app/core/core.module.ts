import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { requestOptionsProvider } from './default-request-options.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    requestOptionsProvider
  ]
})
export class CoreModule { }
