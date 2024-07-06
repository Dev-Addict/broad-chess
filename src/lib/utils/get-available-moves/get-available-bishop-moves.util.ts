import {getAvailableDirectionalMoves} from './helpers/get-available-directional-moves.helper';
import type {ChessBoard} from '../../types/chess-board/chess-board.type';
import type {ChessPiecePosition} from '../../types/chess-piece/chess-piece-position.type';
import type {ChessPiece} from '../../types/chess-piece/chess-piece.type';

export const getAvailableBishopMoves = (
	chessBoard: ChessBoard,
	position: ChessPiecePosition,
	piece: ChessPiece
): ChessPiecePosition[] =>
	getAvailableDirectionalMoves(chessBoard, position, piece, [
		[1, 1],
		[1, -1],
		[-1, 1],
		[-1, -1],
	]);
