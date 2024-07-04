import {CHESS_BOARD_ROW_TO_NUMBER} from '../converters/chess-board-row/chess-board-row-to-number.converter';
import {NUMBER_TO_CHESS_BOARD_ROW} from '../converters/chess-board-row/number-to-chess-board-row.converter';
import {CHESS_BOARD_COLUMN_TO_NUMBER} from '../converters/chess-board-column/chess-board-column-to-number.converter';
import {NUMBER_TO_CHESS_BOARD_COLUMN} from '../converters/chess-board-column/number-to-chess-board-column.converter';
import type {ChessBoard} from '../../types/chess-board/chess-board.type';
import type {ChessPiecePosition} from '../../types/chess-piece/chess-piece-position.type';
import type {ChessPiece} from '../../types/chess-piece/chess-piece.type';

export const getAvailableKnightMoves = (
	chessBoard: ChessBoard,
	position: ChessPiecePosition,
	piece: ChessPiece
): ChessPiecePosition[] => {
	const result: ChessPiecePosition[] = [];

	const rowNumber = CHESS_BOARD_ROW_TO_NUMBER[position.row];
	const columnNumber = CHESS_BOARD_COLUMN_TO_NUMBER[position.column];

	function addPosition(
		positionRowNumber: number,
		positionColumnNumber: number
	) {
		if (positionRowNumber < 1 || positionRowNumber > 8) return;
		if (positionColumnNumber < 1 || positionColumnNumber > 8) return;

		const positionRow = NUMBER_TO_CHESS_BOARD_ROW[positionRowNumber];
		const positionColumn = NUMBER_TO_CHESS_BOARD_COLUMN[positionColumnNumber];

		const positionPiece = chessBoard[positionRow][positionColumn].piece;

		if ((positionPiece && piece.color != positionPiece.color) || !positionPiece)
			result.push({
				row: positionRow,
				column: positionColumn,
			});
	}

	for (const singleDifference of [-1, 1])
		for (const doubleDifference of [-2, 2]) {
			addPosition(
				rowNumber + doubleDifference,
				columnNumber + singleDifference
			);
			addPosition(
				rowNumber + singleDifference,
				columnNumber + doubleDifference
			);
		}

	return result;
};
