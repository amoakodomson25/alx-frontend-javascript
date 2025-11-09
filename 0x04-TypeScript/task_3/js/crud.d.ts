// Import types from interface.ts
import { RowID, RowElement } from './interface';

// Declared the CRUD functions with type signatures
declare function insertRow(row: RowElement): number;
declare function updateRow(rowId: RowID, row: RowElement): void;
declare function deleteRow(rowId: RowID): void;
declare function getRow(rowId: RowID): RowElement;
