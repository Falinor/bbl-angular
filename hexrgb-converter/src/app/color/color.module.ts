import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ColorRoutingModule } from './color-routing.module';
import { ColorDisplayComponent } from './color-display/color-display.component';
import { ColorComponent } from './color.component';
import { ColorFormComponent } from './color-form/color-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    ColorRoutingModule
  ],
  declarations: [
    ColorComponent,
    ColorDisplayComponent,
    ColorFormComponent
  ]
})
export class ColorModule { }
