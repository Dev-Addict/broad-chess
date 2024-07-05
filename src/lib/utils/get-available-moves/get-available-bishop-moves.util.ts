import {CHESS_BOARD_ROW_TO_NUMBER} from '../converters/chess-board-row/chess-board-row-to-number.converter';
import {NUMBER_TO_CHESS_BOARD_ROW} from '../converters/chess-board-row/number-to-chess-board-row.converter';
import {CHESS_BOARD_COLUMN_TO_NUMBER} from '../converters/chess-board-column/chess-board-column-to-number.converter';
import {NUMBER_TO_CHESS_BOARD_COLUMN} from '../converters/chess-board-column/number-to-chess-board-column.converter';
import type {ChessBoard} from '../../types/chess-board/chess-board.type';
import type {ChessPiecePosition} from '../../types/chess-piece/chess-piece-position.type';
import type {ChessPiece} from '../../types/chess-piece/chess-piece.type';

export const getAvailableBishopMoves = (
	chessBoard: ChessBoard,
	position: ChessPiecePosition,
	piece: ChessPiece
): ChessPiecePosition[] => {
	const result: ChessPiecePosition[] = [];

	for (const rowDifference of [-1, 1])
		for (const columnDifference of [-1, 1])
			for (let i = 1; i < 8; i++) {
				const positionRowNumber =
					CHESS_BOARD_ROW_TO_NUMBER[position.row] + rowDifference * i;
				const positionColumnNumber =
					CHESS_BOARD_COLUMN_TO_NUMBER[position.column] + columnDifference * i;

				if (positionRowNumber < 1 || positionRowNumber > 8) break;
				if (positionColumnNumber < 1 || positionColumnNumber > 8) break;

				const positionRow = NUMBER_TO_CHESS_BOARD_ROW[positionRowNumber];
				const positionColumn =
					NUMBER_TO_CHESS_BOARD_COLUMN[positionColumnNumber];

				const positionPiece = chessBoard[positionRow][positionColumn].piece;

				if (
					(positionPiece && piece.color != positionPiece.color) ||
					!positionPiece
				)
					result.push({
						row: positionRow,
						column: positionColumn,
					});

				if (positionPiece) break;
			}

	return result;
};
