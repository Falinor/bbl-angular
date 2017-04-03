import { Component, OnInit } from '@angular/core';

import { Color } from './shared/color.model';
import { dec2hex } from '../shared/utils';

@Component({
  selector: 'octo-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  color: string;

  constructor() {
    this.color = '#000000';
  }

  ngOnInit() {
  }

  onColorChange(c: Color): void {
    const red = dec2hex(c.red);
    const green = dec2hex(c.green);
    const blue = dec2hex(c.blue);
    this.color = `#${red}${green}${blue}`;
  }

}
