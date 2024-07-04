import {CHESS_BOARD_ROW_TO_NUMBER} from '../converters/chess-board-row/chess-board-row-to-number.converter';
import {NUMBER_TO_CHESS_BOARD_ROW} from '../converters/chess-board-row/number-to-chess-board-row.converter';
import {CHESS_BOARD_COLUMN_TO_NUMBER} from '../converters/chess-board-column/chess-board-column-to-number.converter';
import {NUMBER_TO_CHESS_BOARD_COLUMN} from '../converters/chess-board-column/number-to-chess-board-column.converter';
import {ChessPieceColor} from '../../types/enum/chess-piece-color.enum';
import type {ChessBoard} from '../../types/chess-board/chess-board.type';
import type {ChessPiecePosition} from '../../types/chess-piece/chess-piece-position.type';
import type {ChessPiece} from '../../types/chess-piece/chess-piece.type';

// Todo: Add En Passant
// Todo: Add Pawn Promotion

export const getAvailablePawnMoves = (
	chessBoard: ChessBoard,
	position: ChessPiecePosition,
	piece: ChessPiece
): ChessPiecePosition[] => {
	const result: ChessPiecePosition[] = [];

	{
		const to: ChessPiecePosition = {
			row: NUMBER_TO_CHESS_BOARD_ROW[
				CHESS_BOARD_ROW_TO_NUMBER[position.row] +
					(piece.color === ChessPieceColor.WHITE ? 1 : -1)
			],
			column: position.column,
		};

		if (!chessBoard[to.row][to.column].piece) result.push(to);
	}

	outer: {
		if (piece.moved) break outer;

		for (let i = 1; i <= 2; i++) {
			const to: ChessPiecePosition = {
				row: NUMBER_TO_CHESS_BOARD_ROW[
					CHESS_BOARD_ROW_TO_NUMBER[position.row] +
						(piece.color === ChessPieceColor.WHITE ? i : -1 * i)
				],
				column: position.column,
			};

			if (chessBoard[to.row][to.column].piece) break outer;
		}

		const to: ChessPiecePosition = {
			row: NUMBER_TO_CHESS_BOARD_ROW[
				CHESS_BOARD_ROW_TO_NUMBER[position.row] +
					(piece.color === ChessPieceColor.WHITE ? 2 : -2)
			],
			column: position.column,
		};

		result.push(to);
	}

	{
		for (const i of [-1, 1]) {
			const columnNumber = CHESS_BOARD_COLUMN_TO_NUMBER[position.column] + i;

			if (columnNumber < 1 || columnNumber > 8) continue;

			const to: ChessPiecePosition = {
				row: NUMBER_TO_CHESS_BOARD_ROW[
					CHESS_BOARD_ROW_TO_NUMBER[position.row] +
						(piece.color === ChessPieceColor.WHITE ? 1 : -1)
				],
				column: NUMBER_TO_CHESS_BOARD_COLUMN[columnNumber],
			};

			if (
				chessBoard[to.row][to.column].piece &&
				chessBoard[to.row][to.column].piece?.color !== piece.color
			)
				result.push(to);
		}
	}

	return result;
};
