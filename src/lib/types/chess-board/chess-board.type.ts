import type {ChessBoardTile} from './chess-board-tile.type';
import type {ChessBoardColumn} from '../enum/chess-board-column.enum';
import type {ChessBoardRow} from '../enum/chess-board-row.enum';

export type ChessBoard = {
	[_ in keyof typeof ChessBoardRow]: {
		[_ in keyof typeof ChessBoardColumn]: ChessBoardTile;
	};
};
