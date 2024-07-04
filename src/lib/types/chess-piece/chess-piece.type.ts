import type {ChessPieceType} from '../enum/chess-piece-type.enum';
import type {ChessPieceColor} from '../enum/chess-piece-color.enum';

export interface ChessPiece {
	id: string;
	type: ChessPieceType;
	color: ChessPieceColor;
	moved: boolean;
}
