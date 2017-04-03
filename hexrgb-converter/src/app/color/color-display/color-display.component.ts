import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'octo-color-display',
  template: '',
  styleUrls: ['./color-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorDisplayComponent {
  /**
   * The background color to display in the template
   */
  @Input()
  @HostBinding('style.background')
  bgColor: string;

}
