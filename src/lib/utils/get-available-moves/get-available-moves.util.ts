import {getAvailablePawnMoves} from './get-available-pawn-moves.util';
import {getAvailableKnightMoves} from './get-available-knight-moves.util';
import {getAvailableBishopMoves} from './get-available-bishop-moves.util';
import {getAvailableRookMoves} from './get-available-rook-moves.util';
import {getAvailableQueenMoves} from './get-available-queen-moves.util';
import {ChessPieceType} from '../../types/enum/chess-piece-type.enum';
import type {ChessBoard} from '../../types/chess-board/chess-board.type';
import type {ChessPiecePosition} from '../../types/chess-piece/chess-piece-position.type';
import {getAvailableKingMoves} from './get-available-king-moves.util';
import {removeInvalidMoves} from './helpers/remove-invalid-moves.helper';

export const getAvailableMoves = (
	chessBoard: ChessBoard,
	position: ChessPiecePosition
): ChessPiecePosition[] => {
	const piece = chessBoard[position.row][position.column].piece;

	if (!piece) return [];

	let availableMoves: ChessPiecePosition[];

	switch (piece.type) {
		case ChessPieceType.PAWN:
			availableMoves = getAvailablePawnMoves(chessBoard, position, piece);
			break;
		case ChessPieceType.KNIGHT:
			availableMoves = getAvailableKnightMoves(chessBoard, position, piece);
			break;
		case ChessPieceType.BISHOP:
			availableMoves = getAvailableBishopMoves(chessBoard, position, piece);
			break;
		case ChessPieceType.ROOK:
			availableMoves = getAvailableRookMoves(chessBoard, position, piece);
			break;
		case ChessPieceType.QUEEN:
			availableMoves = getAvailableQueenMoves(chessBoard, position, piece);
			break;
		case ChessPieceType.KING:
			availableMoves = getAvailableKingMoves(chessBoard, position, piece);
			break;
		default:
			availableMoves = [];
	}

	return removeInvalidMoves(chessBoard, availableMoves, position);
};
