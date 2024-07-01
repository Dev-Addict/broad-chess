import {ChessPieceColor} from '../types/enum/chess-piece-color.enum';
import {ChessPieceType} from '../types/enum/chess-piece-type.enum';

export const CHESS_PIECE_IMAGES: {
	[k in keyof typeof ChessPieceColor]: {
		[k in keyof typeof ChessPieceType]: string;
	};
} = {
	[ChessPieceColor.WHITE]: {
		[ChessPieceType.KING]: '/chess/pieces/white/king.svg',
		[ChessPieceType.QUEEN]: '/chess/pieces/white/queen.svg',
		[ChessPieceType.ROOK]: '/chess/pieces/white/rook.svg',
		[ChessPieceType.BISHOP]: '/chess/pieces/white/bishop.svg',
		[ChessPieceType.KNIGHT]: '/chess/pieces/white/knight.svg',
		[ChessPieceType.PAWN]: '/chess/pieces/white/pawn.svg',
	},
	[ChessPieceColor.BLACK]: {
		[ChessPieceType.KING]: '/chess/pieces/black/king.svg',
		[ChessPieceType.QUEEN]: '/chess/pieces/black/queen.svg',
		[ChessPieceType.ROOK]: '/chess/pieces/black/rook.svg',
		[ChessPieceType.BISHOP]: '/chess/pieces/black/bishop.svg',
		[ChessPieceType.KNIGHT]: '/chess/pieces/black/knight.svg',
		[ChessPieceType.PAWN]: '/chess/pieces/black/pawn.svg',
	},
};
