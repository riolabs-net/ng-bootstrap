import { Component, EventEmitter, Input, OnInit, Output, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'rlb-collapse',
  template: `<ng-content></ng-content>`,
  host: {
    'class': 'collapse',
    '[class.show]': 'open',
    '[class.collapse-horizontal]': 'orientation === "horizontal"',
  }
})
export class CollapseComponent implements OnInit, OnDestroy {

  @Input({ alias: 'id', required: true }) id!: string;
  @Input() orientation: 'horizontal' | 'vertical' = 'vertical';
  @Input() open: boolean = false;
  @Output() openChange = new EventEmitter<boolean>();

  private _open_f = (e: Event) => {
    this.open = true;
    this.openChange.emit(true);
  }
  private _close_f = (e: Event) => {
    this.open = false;
    this.openChange.emit(false)
  };

  ngOnInit(): void {
    const element = document.getElementById(this.id)
    element?.addEventListener('hidden.bs.collapse', (this._close_f))
    element?.addEventListener('shown.bs.collapse', this._open_f)
  }

  ngOnDestroy(): void {
    const element = document.getElementById(this.id)
    element?.removeEventListener('hidden.bs.collapse', this._close_f)
    element?.removeEventListener('shown.bs.collapse', this._open_f)
  }
}
