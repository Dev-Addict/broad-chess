import {isKingInCheckByDirectionalPiece} from './is-king-in-check-by-directional-piece.helper';
import {isKingInCheckByKnight} from './is-king-in-check-by-knight.helper';
import {ChessPieceType} from '../../../../types/enum/chess-piece-type.enum';
import type {ChessBoard} from '../../../../types/chess-board/chess-board.type';
import type {ChessPiecePosition} from '../../../../types/chess-piece/chess-piece-position.type';
import {CHESS_BOARD_ROW_TO_NUMBER} from '../../../converters/chess-board-row/chess-board-row-to-number.converter';
import {CHESS_BOARD_COLUMN_TO_NUMBER} from '../../../converters/chess-board-column/chess-board-column-to-number.converter';
import {NUMBER_TO_CHESS_BOARD_ROW} from '../../../converters/chess-board-row/number-to-chess-board-row.converter';
import {NUMBER_TO_CHESS_BOARD_COLUMN} from '../../../converters/chess-board-column/number-to-chess-board-column.converter';
import {isKingInCheckByPawn} from './is-king-in-check-by-pawn.helper';

export const isKingInCheck = (
	chessBoard: ChessBoard,
	position: ChessPiecePosition
) => {
	let isKingInCheckInDiagonalDirection = isKingInCheckByDirectionalPiece(
		chessBoard,
		position,
		ChessPieceType.BISHOP,
		[
			[1, 1],
			[-1, 1],
			[1, -1],
			[-1, -1],
		]
	);

	if (isKingInCheckInDiagonalDirection) return true;

	let isKingInCheckInHorizontalDirection = isKingInCheckByDirectionalPiece(
		chessBoard,
		position,
		ChessPieceType.ROOK,
		[
			[1, 0],
			[-1, 0],
			[0, 1],
			[0, -1],
		]
	);

	if (isKingInCheckInHorizontalDirection) return true;

	if (isKingInCheckByKnight(chessBoard, position)) return true;

	if (isKingInCheckByPawn(chessBoard, position)) return true;

	for (const rowDifference of [-1, 0, 1])
		for (const columnDifference of [-1, 0, 1]) {
			if (rowDifference === 0 && columnDifference === 0) continue;

			const rowNumber = CHESS_BOARD_ROW_TO_NUMBER[position.row] + rowDifference;
			const columnNumber =
				CHESS_BOARD_COLUMN_TO_NUMBER[position.column] + columnDifference;

			if (rowNumber < 1 || rowNumber > 8) continue;
			if (columnNumber < 1 || columnNumber > 8) continue;

			const row = NUMBER_TO_CHESS_BOARD_ROW[rowNumber];
			const column = NUMBER_TO_CHESS_BOARD_COLUMN[columnNumber];

			const piece = chessBoard[row][column].piece;

			if (piece && piece.type === ChessPieceType.KING) return true;
		}

	return false;
};
