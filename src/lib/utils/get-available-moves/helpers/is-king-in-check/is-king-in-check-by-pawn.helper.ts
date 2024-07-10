import type {ChessBoard} from '../../../../types/chess-board/chess-board.type';
import type {ChessPiecePosition} from '../../../../types/chess-piece/chess-piece-position.type';
import {ChessPieceColor} from '../../../../types/enum/chess-piece-color.enum';
import {CHESS_BOARD_ROW_TO_NUMBER} from '../../../converters/chess-board-row/chess-board-row-to-number.converter';
import {CHESS_BOARD_COLUMN_TO_NUMBER} from '../../../converters/chess-board-column/chess-board-column-to-number.converter';
import {NUMBER_TO_CHESS_BOARD_ROW} from '../../../converters/chess-board-row/number-to-chess-board-row.converter';
import {NUMBER_TO_CHESS_BOARD_COLUMN} from '../../../converters/chess-board-column/number-to-chess-board-column.converter';
import {ChessPieceType} from '../../../../types/enum/chess-piece-type.enum';

export const isKingInCheckByPawn = (
	chessBoard: ChessBoard,
	position: ChessPiecePosition
) => {
	const ratio = chessBoard.turn === ChessPieceColor.WHITE ? 1 : -1;

	const row = CHESS_BOARD_ROW_TO_NUMBER[position.row] + ratio;

	if (row < 1 || row > 8) return false;

	for (const columnDifference of [-1, 1]) {
		const column =
			CHESS_BOARD_COLUMN_TO_NUMBER[position.column] + columnDifference;

		if (column < 1 || column > 8) continue;

		const piece =
			chessBoard[NUMBER_TO_CHESS_BOARD_ROW[row]][
				NUMBER_TO_CHESS_BOARD_COLUMN[column]
			].piece;

		if (piece?.type === ChessPieceType.PAWN && piece.color !== chessBoard.turn)
			return true;
	}

	return false;
};
