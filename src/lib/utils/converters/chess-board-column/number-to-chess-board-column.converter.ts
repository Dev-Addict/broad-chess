import {ChessBoardColumn} from '../../../types/enum/chess-board-column.enum';

export const NUMBER_TO_CHESS_BOARD_COLUMN: {
	[_: number]: ChessBoardColumn;
} = {
	1: ChessBoardColumn.A,
	2: ChessBoardColumn.B,
	3: ChessBoardColumn.C,
	4: ChessBoardColumn.D,
	5: ChessBoardColumn.E,
	6: ChessBoardColumn.F,
	7: ChessBoardColumn.G,
	8: ChessBoardColumn.H,
};
