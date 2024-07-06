import {CHESS_BOARD_ROW_TO_NUMBER} from '../converters/chess-board-row/chess-board-row-to-number.converter';
import {CHESS_BOARD_COLUMN_TO_NUMBER} from '../converters/chess-board-column/chess-board-column-to-number.converter';
import type {ChessBoard} from '../../types/chess-board/chess-board.type';
import type {ChessPiecePosition} from '../../types/chess-piece/chess-piece-position.type';
import type {ChessPiece} from '../../types/chess-piece/chess-piece.type';
import {NUMBER_TO_CHESS_BOARD_ROW} from '../converters/chess-board-row/number-to-chess-board-row.converter';
import {NUMBER_TO_CHESS_BOARD_COLUMN} from '../converters/chess-board-column/number-to-chess-board-column.converter';

export const getAvailableKingMoves = (
	chessBoard: ChessBoard,
	position: ChessPiecePosition,
	piece: ChessPiece
): ChessPiecePosition[] => {
	const result: ChessPiecePosition[] = [];

	const rowNumber = CHESS_BOARD_ROW_TO_NUMBER[position.row];
	const columnNumber = CHESS_BOARD_COLUMN_TO_NUMBER[position.column];

	for (let i = -1; i <= 1; i++)
		for (let j = -1; j <= 1; j++) {
			const positionRowNumber = rowNumber + i;
			const positionColumnNumber = columnNumber + j;

			if (positionRowNumber < 1 || positionRowNumber > 8) continue;
			if (positionColumnNumber < 1 || positionColumnNumber > 8) continue;

			const positionRow = NUMBER_TO_CHESS_BOARD_ROW[positionRowNumber];
			const positionColumn = NUMBER_TO_CHESS_BOARD_COLUMN[positionColumnNumber];

			const positionPiece = chessBoard[positionRow][positionColumn].piece;

			if (
				(positionPiece && piece.color != positionPiece.color) ||
				!positionPiece
			)
				result.push({
					row: positionRow,
					column: positionColumn,
				});
		}

	return result;
};
