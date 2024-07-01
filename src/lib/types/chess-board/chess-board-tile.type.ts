import type {ChessPiece} from '../chess-piece/chess-piece.type';

export interface ChessBoardTile {
	piece: ChessPiece | null;
}
