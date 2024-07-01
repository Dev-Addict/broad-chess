import {writable} from 'svelte/store';

import {INITIAL_CHESS_BOARD} from '../constants/initial-chess-board.constant';
import type {ChessBoard} from '../types/chess-board/chess-board.type';
import type {ChessPiecePosition} from '../types/chess-piece/chess-piece-position.type';

function createChessBoard() {
	const {subscribe, set, update} = writable<ChessBoard>(INITIAL_CHESS_BOARD);

	return {
		subscribe,
		movePiece: (from: ChessPiecePosition, to: ChessPiecePosition) =>
			update((board) => {
				const piece = board[from.row][from.column].piece;
				board[from.row][from.column].piece = null;
				board[to.row][to.column].piece = piece;

				set({...board});

				return {...board};
			}),
	};
}

export const chessBoard = createChessBoard();
export const dragPiece = writable<ChessPiecePosition | null>(null);
