import { AfterViewInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList, ViewChild, ViewContainerRef } from '@angular/core';
import { RlbDtHeaderComponent } from './rlb-dt-header.component';

export interface TableDataQuery {
  pagination?: { size: number },
  sorting?: { column: string, direction: string },
  filter?: { [k: string]: number | string | boolean }
}

@Component({
  selector: 'rlb-dt-table',
  templateUrl: './rlb-dt-table.component.html',
  styleUrls: ['./rlb-dt-table.component.scss'],
})
export class RlbDataTableComponent implements AfterViewInit {
  @Input() filtrable!: boolean;
  @Input() creationStrategy: 'none' | 'modal' | 'page' = 'none'
  @Input() creationUrl!: any[] | string | null | undefined
  @Output() createItem:EventEmitter<void> = new EventEmitter()
  @Output() queryChanged: EventEmitter<TableDataQuery> = new EventEmitter()
  
  private tableDataQuery: TableDataQuery = {};

  @ContentChildren(RlbDtHeaderComponent) columns!: QueryList<RlbDtHeaderComponent>;
  @ViewChild('projectedDisplayColumns', { read: ViewContainerRef }) _projectedDisplayColumns!: ViewContainerRef;

  ngAfterViewInit() {
    for (let i = this._projectedDisplayColumns.length; i > 0; i--) {
      this._projectedDisplayColumns.detach();
    }
    this.columns.forEach(column => {
      this._projectedDisplayColumns.insert(column._view);
    });
  }
}
