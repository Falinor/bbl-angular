import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { Color } from '../shared/color.model';
import { minValue, maxValue } from '../../shared/validators';

@Component({
  selector: 'octo-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.scss']
})
export class ColorFormComponent implements OnInit {
  color: Color;
  colorForm: FormGroup;
  @Output() colorChange = new EventEmitter<Color>();

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.color = new Color();
    this.buildForm();
    this.watchFormChanges();
  }

  private buildForm(): void {
    this.colorForm = this.builder.group({
      red: [this.color.red, [
        Validators.required,
        minValue(0),
        maxValue(255)
      ]],
      green: [this.color.green, [
        Validators.required,
        minValue(0),
        maxValue(255)
      ]],
      blue: [this.color.blue, [
        Validators.required,
        minValue(0),
        maxValue(255)
      ]],
    });
  }

  private watchFormChanges() {
    this.colorForm.valueChanges.forEach(value => {
      if (this.colorForm.valid) {
        this.colorChange.emit(value);
      }
    });
  }

  get controls(): {[p: string]: AbstractControl} {
    return this.colorForm.controls;
  }

}
