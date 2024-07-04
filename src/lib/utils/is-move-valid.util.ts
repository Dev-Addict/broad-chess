import {getAvailableMoves} from './get-available-moves/get-available-moves.util';
import type {ChessBoard} from '../types/chess-board/chess-board.type';
import type {ChessPiecePosition} from '../types/chess-piece/chess-piece-position.type';

export const isMoveValid = (
	chessBoard: ChessBoard,
	from: ChessPiecePosition,
	to: ChessPiecePosition
): boolean => {
	const availableMoves = getAvailableMoves(chessBoard, from);
	console.log(availableMoves);

	for (const availableMove of availableMoves)
		if (availableMove.row === to.row && availableMove.column === to.column)
			return true;
	return false;
};
