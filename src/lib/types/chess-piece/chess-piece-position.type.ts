import type {ChessBoardRow} from '../enum/chess-board-row.enum';
import type {ChessBoardColumn} from '../enum/chess-board-column.enum';

export interface ChessPiecePosition {
	row: ChessBoardRow;
	column: ChessBoardColumn;
}
