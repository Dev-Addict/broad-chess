import type {ChessBoard} from '../../../../types/chess-board/chess-board.type';
import type {ChessPiecePosition} from '../../../../types/chess-piece/chess-piece-position.type';
import {CHESS_BOARD_ROW_TO_NUMBER} from '../../../converters/chess-board-row/chess-board-row-to-number.converter';
import {CHESS_BOARD_COLUMN_TO_NUMBER} from '../../../converters/chess-board-column/chess-board-column-to-number.converter';
import {NUMBER_TO_CHESS_BOARD_ROW} from '../../../converters/chess-board-row/number-to-chess-board-row.converter';
import {NUMBER_TO_CHESS_BOARD_COLUMN} from '../../../converters/chess-board-column/number-to-chess-board-column.converter';
import {ChessPieceType} from '../../../../types/enum/chess-piece-type.enum';

export const isKingInCheckByKnight = (
	chessBoard: ChessBoard,
	position: ChessPiecePosition
) => {
	for (const singleDifference of [-1, 1])
		for (const doubleDifference of [-2, 2])
			for (const [rowDifference, columnDifference] of [
				[singleDifference, doubleDifference],
				[doubleDifference, singleDifference],
			]) {
				const rowNumber =
					CHESS_BOARD_ROW_TO_NUMBER[position.row] + rowDifference;
				const columnNumber =
					CHESS_BOARD_COLUMN_TO_NUMBER[position.column] + columnDifference;

				if (rowNumber < 1 || rowNumber > 8) continue;
				if (columnNumber < 1 || columnNumber > 8) continue;

				const row = NUMBER_TO_CHESS_BOARD_ROW[rowNumber];
				const column = NUMBER_TO_CHESS_BOARD_COLUMN[columnNumber];

				const piece = chessBoard[row][column].piece;

				if (
					piece?.type === ChessPieceType.KNIGHT &&
					piece?.color !== chessBoard.turn
				)
					return true;
			}

	return false;
};
