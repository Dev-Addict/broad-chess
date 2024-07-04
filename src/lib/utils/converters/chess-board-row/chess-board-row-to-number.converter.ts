import {ChessBoardRow} from '../../../types/enum/chess-board-row.enum';

export const CHESS_BOARD_ROW_TO_NUMBER: {
	[_ in ChessBoardRow]: number;
} = {
	[ChessBoardRow.ONE]: 1,
	[ChessBoardRow.TWO]: 2,
	[ChessBoardRow.THREE]: 3,
	[ChessBoardRow.FOUR]: 4,
	[ChessBoardRow.FIVE]: 5,
	[ChessBoardRow.SIX]: 6,
	[ChessBoardRow.SEVEN]: 7,
	[ChessBoardRow.EIGHT]: 8,
};
