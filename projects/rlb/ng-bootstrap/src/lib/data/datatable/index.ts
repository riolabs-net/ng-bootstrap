export * from './rlb-dt-cell.component';
export * from './rlb-dt-header.component';
export * from './rlb-dt-row.component';
export * from './rlb-dt-table.component';

import { DtCellComponent } from "./rlb-dt-cell.component";
import { DtHeaderComponent } from "./rlb-dt-header.component";
import { DtRowComponent } from "./rlb-dt-row.component";
import { DataTableComponent } from "./rlb-dt-table.component";

export const TABLE = [
  DtCellComponent,
  DtHeaderComponent,
  DtRowComponent,
  DataTableComponent
]