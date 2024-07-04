import {ChessBoardColumn} from '../../../types/enum/chess-board-column.enum';

export const CHESS_BOARD_COLUMN_TO_NUMBER: {
	[_ in ChessBoardColumn]: number;
} = {
	[ChessBoardColumn.A]: 1,
	[ChessBoardColumn.B]: 2,
	[ChessBoardColumn.C]: 3,
	[ChessBoardColumn.D]: 4,
	[ChessBoardColumn.E]: 5,
	[ChessBoardColumn.F]: 6,
	[ChessBoardColumn.G]: 7,
	[ChessBoardColumn.H]: 8,
};
