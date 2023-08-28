import { Component, Input } from '@angular/core';
import { Color } from '../../shared/types';

@Component({
  selector: 'rlb-progress',
  template: `
    <div
      class="progress-bar{{ color ? (textColor ? ' bg-' + color : ' text-bg-' + color) : '' }}{{ textColor ? ' text-' + textColor : '' }}"
      [class.progress-bar-animated]="animated"
      [class.progress-bar-striped]="striped"
      [style.width.%]="getPercentValue()">
      <span *ngIf="showValue;else e">
        {{ getPercentValue()  }}
      </span>
      <ng-template #e>
        <ng-content></ng-content>
      </ng-template>
    </div>`,
  host: {
    'class': 'progress',
    'attr.role': 'progressbar',
    '[attr.aria-valuenow]': 'getPercentValue()',
    'aria-valuemin': '0',
    '[attr.aria-valuemax]': 'max',
    '[attr.aria-valuemin]': 'min',
    '[attr.aria-label]': 'ariaLabel',
    '[style.height.px]': 'height'
  }
})
export class ProgressComponent {

  @Input() max: number = 100;
  @Input() min: number = 0;
  @Input({ required: true }) value = 0;
  @Input() height!: number;
  @Input() animated: boolean = false;
  @Input() striped: boolean = false;
  @Input() ariaLabel!: string;
  @Input() showValue: boolean = false;
  @Input() color: Color = 'primary';
  @Input() textColor!: Color

  getPercentValue() {
    return (this.value - this.min) / (this.max - this.min) * 100
  }
}
