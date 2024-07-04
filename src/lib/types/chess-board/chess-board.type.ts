import type {ChessBoardTile} from './chess-board-tile.type';
import type {ChessBoardColumn} from '../enum/chess-board-column.enum';
import type {ChessBoardRow} from '../enum/chess-board-row.enum';
import type {ChessPieceColor} from '../enum/chess-piece-color.enum';

export type ChessBoard = {
	[_ in keyof typeof ChessBoardRow]: {
		[_ in keyof typeof ChessBoardColumn]: ChessBoardTile;
	};
} & {
	isGame: boolean;
	turn: ChessPieceColor;
};
