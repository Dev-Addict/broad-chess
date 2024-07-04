import {ChessPieceType} from '../types/enum/chess-piece-type.enum';
import {
	CHESS_BOARD_ROWS,
	ChessBoardRow,
} from '../types/enum/chess-board-row.enum';
import {CHESS_BOARD_COLUMNS} from '../types/enum/chess-board-column.enum';
import {
	CHESS_PIECE_COLORS,
	ChessPieceColor,
} from '../types/enum/chess-piece-color.enum';
import type {ChessBoard} from '../types/chess-board/chess-board.type';

export const FIRST_ROW_PIECES = [
	ChessPieceType.ROOK,
	ChessPieceType.KNIGHT,
	ChessPieceType.BISHOP,
	ChessPieceType.QUEEN,
	ChessPieceType.KING,
	ChessPieceType.BISHOP,
	ChessPieceType.KNIGHT,
	ChessPieceType.ROOK,
];

export const INITIAL_CHESS_BOARD = ((): ChessBoard => {
	const initialChessBoard: {[key: string]: any} = {
		isGame: true,
		turn: ChessPieceColor.WHITE,
	};

	for (const row of CHESS_BOARD_ROWS) {
		initialChessBoard[row] = {};

		for (const column of CHESS_BOARD_COLUMNS)
			initialChessBoard[row][column] = {piece: null};
	}

	for (const column of CHESS_BOARD_COLUMNS) {
		initialChessBoard[ChessBoardRow.TWO][column].piece = {
			id: `WP${column}`,
			type: ChessPieceType.PAWN,
			color: ChessPieceColor.WHITE,
			moved: false,
		};
		initialChessBoard[ChessBoardRow.SEVEN][column].piece = {
			id: `BP${column}`,
			type: ChessPieceType.PAWN,
			color: ChessPieceColor.BLACK,
			moved: false,
		};
	}

	for (const color of CHESS_PIECE_COLORS) {
		const row =
			color === ChessPieceColor.WHITE ? ChessBoardRow.ONE : ChessBoardRow.EIGHT;

		for (const i in CHESS_BOARD_COLUMNS)
			initialChessBoard[row][CHESS_BOARD_COLUMNS[i]].piece = {
				id: `${color[0]}${CHESS_BOARD_COLUMNS[i][0]}${i}`,
				type: FIRST_ROW_PIECES[i],
				color,
				moved: false,
			};
	}

	return initialChessBoard as ChessBoard;
})();
