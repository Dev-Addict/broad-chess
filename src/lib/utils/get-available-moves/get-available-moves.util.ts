import {getAvailablePawnMoves} from './get-available-pawn-moves.util';
import {getAvailableKnightMoves} from './get-available-knight-moves.util';
import {getAvailableBishopMoves} from './get-available-bishop-moves.util';
import {ChessPieceType} from '../../types/enum/chess-piece-type.enum';
import type {ChessBoard} from '../../types/chess-board/chess-board.type';
import type {ChessPiecePosition} from '../../types/chess-piece/chess-piece-position.type';

export const getAvailableMoves = (
	chessBoard: ChessBoard,
	position: ChessPiecePosition
): ChessPiecePosition[] => {
	const piece = chessBoard[position.row][position.column].piece;

	if (!piece) return [];

	switch (piece.type) {
		case ChessPieceType.PAWN:
			return getAvailablePawnMoves(chessBoard, position, piece);
		case ChessPieceType.KNIGHT:
			return getAvailableKnightMoves(chessBoard, position, piece);
		case ChessPieceType.BISHOP:
			return getAvailableBishopMoves(chessBoard, position, piece);
		default:
			return [];
	}
};