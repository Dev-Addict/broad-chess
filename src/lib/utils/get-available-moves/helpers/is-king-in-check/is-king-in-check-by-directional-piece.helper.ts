import type {ChessBoard} from '../../../../types/chess-board/chess-board.type';
import type {ChessPiecePosition} from '../../../../types/chess-piece/chess-piece-position.type';
import {CHESS_BOARD_ROW_TO_NUMBER} from '../../../converters/chess-board-row/chess-board-row-to-number.converter';
import {CHESS_BOARD_COLUMN_TO_NUMBER} from '../../../converters/chess-board-column/chess-board-column-to-number.converter';
import {NUMBER_TO_CHESS_BOARD_ROW} from '../../../converters/chess-board-row/number-to-chess-board-row.converter';
import {NUMBER_TO_CHESS_BOARD_COLUMN} from '../../../converters/chess-board-column/number-to-chess-board-column.converter';
import {ChessPieceType} from '../../../../types/enum/chess-piece-type.enum';

export const isKingInCheckByDirectionalPiece = (
	chessBoard: ChessBoard,
	position: ChessPiecePosition,
	pieceType: ChessPieceType,
	differences: [number, number][]
) => {
	for (const [rowDifference, columnDifference] of differences)
		for (let i = 1; i < 8; i++) {
			const rowNumber =
				CHESS_BOARD_ROW_TO_NUMBER[position.row] + rowDifference * i;
			const columnNumber =
				CHESS_BOARD_COLUMN_TO_NUMBER[position.column] + columnDifference * i;

			if (rowNumber < 1 || rowNumber > 8) break;
			if (columnNumber < 1 || columnNumber > 8) break;

			const row = NUMBER_TO_CHESS_BOARD_ROW[rowNumber];
			const column = NUMBER_TO_CHESS_BOARD_COLUMN[columnNumber];

			const piece = chessBoard[row][column].piece;

			if (piece && piece.color === chessBoard.turn) break;

			if (
				piece &&
				(piece.type === pieceType || piece.type === ChessPieceType.QUEEN)
			)
				return true;

			if (piece) break;
		}

	return false;
};
