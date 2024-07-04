import {ChessBoardRow} from '../../../types/enum/chess-board-row.enum';

export const NUMBER_TO_CHESS_BOARD_ROW: {
	[k: number]: ChessBoardRow;
} = {
	1: ChessBoardRow.ONE,
	2: ChessBoardRow.TWO,
	3: ChessBoardRow.THREE,
	4: ChessBoardRow.FOUR,
	5: ChessBoardRow.FIVE,
	6: ChessBoardRow.SIX,
	7: ChessBoardRow.SEVEN,
	8: ChessBoardRow.EIGHT,
};
