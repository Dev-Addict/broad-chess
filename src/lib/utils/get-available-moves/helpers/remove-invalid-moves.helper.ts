import type {ChessBoard} from '../../../types/chess-board/chess-board.type';
import type {ChessPiecePosition} from '../../../types/chess-piece/chess-piece-position.type';
import {CHESS_BOARD_ROWS} from '../../../types/enum/chess-board-row.enum';
import {CHESS_BOARD_COLUMNS} from '../../../types/enum/chess-board-column.enum';
import {ChessPieceType} from '../../../types/enum/chess-piece-type.enum';
import {isKingInCheck} from './is-king-in-check/is-king-in-check.helper';

export const removeInvalidMoves = (
	chessBoard: ChessBoard,
	availableMoves: ChessPiecePosition[],
	position: ChessPiecePosition
): ChessPiecePosition[] => {
	const result: ChessPiecePosition[] = [];

	let kingPosition: ChessPiecePosition | null = null;

	if (
		chessBoard[position.row][position.column].piece?.type !==
		ChessPieceType.KING
	)
		for (const row of CHESS_BOARD_ROWS)
			for (const column of CHESS_BOARD_COLUMNS) {
				const piece = chessBoard[row][column].piece;

				if (
					piece?.type === ChessPieceType.KING &&
					piece.color === chessBoard.turn
				)
					kingPosition = {row, column};
			}

	for (const availableMove of availableMoves) {
		const newBoard = structuredClone(chessBoard);

		newBoard[position.row][position.column].piece = null;
		newBoard[availableMove.row][availableMove.column].piece =
			chessBoard[position.row][position.column].piece;

		if (!isKingInCheck(newBoard, kingPosition || availableMove))
			result.push(availableMove);
	}

	return result;
};
