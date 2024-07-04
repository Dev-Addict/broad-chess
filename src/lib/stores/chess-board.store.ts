import {writable} from 'svelte/store';

import {isMoveValid} from '../utils/is-move-valid.util';
import {INITIAL_CHESS_BOARD} from '../constants/initial-chess-board.constant';
import {ChessPieceColor} from '../types/enum/chess-piece-color.enum';
import type {ChessBoard} from '../types/chess-board/chess-board.type';
import type {ChessPiecePosition} from '../types/chess-piece/chess-piece-position.type';
import type {ChessPiece} from '../types/chess-piece/chess-piece.type';

function createChessBoard() {
	const {subscribe, set, update} = writable<ChessBoard>(INITIAL_CHESS_BOARD);

	return {
		subscribe,
		movePiece: (from: ChessPiecePosition, to: ChessPiecePosition) =>
			update((board) => {
				const piece = board[from.row][from.column].piece;

				if (board.isGame)
					if (piece?.color !== board.turn || !isMoveValid(board, from, to))
						return board;

				if (piece && board.isGame) piece.moved = true;
				board[from.row][from.column].piece = null;
				board[to.row][to.column].piece = piece;

				return {
					...board,
					turn: board.isGame
						? board.turn === ChessPieceColor.WHITE
							? ChessPieceColor.BLACK
							: ChessPieceColor.WHITE
						: board.turn,
				};
			}),
		addPiece: (piece: ChessPiece, position: ChessPiecePosition) =>
			update((board) => {
				if (board.isGame) return board;

				board[position.row][position.column].piece = piece;

				set({...board});

				return {...board};
			}),
		startGame: () =>
			update((board) => {
				board.isGame = true;

				set({...board});

				return {...board};
			}),
		startSetup: () =>
			update((board) => {
				board.isGame = false;

				set({...board});

				return {...board};
			}),
	};
}

export const chessBoard = createChessBoard();
export const dragPiece = writable<ChessPiecePosition | null>(null);
export const extraPiece = writable<ChessPiece | null>(null);
