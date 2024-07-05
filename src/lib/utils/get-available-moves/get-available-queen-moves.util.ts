import {getAvailableDirectionalMoves} from './helpers/get-available-directional-moves.util';
import type {ChessBoard} from '../../types/chess-board/chess-board.type';
import type {ChessPiecePosition} from '../../types/chess-piece/chess-piece-position.type';
import type {ChessPiece} from '../../types/chess-piece/chess-piece.type';

export const getAvailableQueenMoves = (
	chessBoard: ChessBoard,
	position: ChessPiecePosition,
	piece: ChessPiece
): ChessPiecePosition[] =>
	getAvailableDirectionalMoves(chessBoard, position, piece, [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
		[1, 1],
		[1, -1],
		[-1, 1],
		[-1, -1],
	]);
