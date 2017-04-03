import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * Tests whether a value is greater or equal than a minimum value.
 * @param min The minimum value to apply
 * @returns {(control:AbstractControl)=>{[p: string]: any}}
 */
export function minValue(min: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const value: number = control.value;
    // Test whether the value is greater or equal than min value
    const no = value < min;
    return no ? {'minValue': {value}} : null;
  };
}

/**
 * Tests whether a value is lesser or equal than a maximum value.
 * @param max The maximum value to apply
 * @returns {(control:AbstractControl)=>{[p: string]: any}}
 */
export function maxValue(max: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const value: number = control.value;
    // Test whether the value is greater or equal than min value
    const no = value > max;
    return no ? {'maxValue': {value}} : null;
  };
}
