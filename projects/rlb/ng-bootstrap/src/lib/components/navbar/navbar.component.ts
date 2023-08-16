import { Component, Input } from '@angular/core';
import { Color } from '../../shared/colors';
import { UniqueIdService } from '../../shared/unique-id.service';

@Component({
  selector: 'rlb-navbar',
  template: `
    <nav class="navbar bg-{{color}} {{placement}} {{_navExpand}}" [attr.data-bs-theme]="dark">
      <div class="container-fluid">
        <ng-content select="[rlb-nav-brand]"/>
        <button
          class="navbar-toggler"
          type="button"
          rlb-button
          toggle="collapse"
          [toggle-target]="navId"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" [id]="navId">
          <ng-content select="[rlb-nav-container], span[rlb-nav-item]"/>
        </div>
      </div>
    </nav>`
})
export class NavbarComponent {

  @Input() dark: boolean = false
  @Input() color: Color = 'primary'
  @Input() placement!: 'fixed-top' | 'fixed-bottom' | 'sticky-top' | 'sticky-bottom'
  @Input() expand!: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'always'

  private _navId: string
  public get navId(): string { return this._navId }
  constructor(private idService: UniqueIdService) {
    this._navId = `nav${this.idService.id}`
  }

  get _navExpand(): string | undefined {
    if (!this.expand) return undefined
    else if (this.expand === 'always') return 'navbar-expand'
    else return `navbar-expand-${this.expand}`
  }
}