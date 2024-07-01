<script lang="ts">
	import {onMount} from 'svelte';

	import {dragPiece} from '../../stores/chess-board.store';
	import {CHESS_PIECE_IMAGES} from '../../constants/chess-piece-images.constant';
	import type {ChessPiece} from '../../types/chess-piece/chess-piece.type';
	import type {ChessBoardRow} from '../../types/enum/chess-board-row.enum';
	import type {ChessBoardColumn} from '../../types/enum/chess-board-column.enum';

	export let piece: ChessPiece;
	export let row: ChessBoardRow;
	export let column: ChessBoardColumn;
	export let boardRect: DOMRect;

	let pieceElement: HTMLImageElement;
	let rect: DOMRect;
	let moving = false;
	let left = 0;
	let top = 0;

	onMount(() => {
			rect = pieceElement.getBoundingClientRect();
		},
	);

	function onMouseDown(e: MouseEvent) {
		e.preventDefault();

		moving = true;
		dragPiece.set({row, column});

		left = e.clientX - (rect.left + rect.right) / 2;
		top = e.clientY - (rect.top + rect.bottom) / 2;
	}

	function onMouseMove(e: MouseEvent) {
		if (moving) {
			let newLeft = e.clientX - (rect.left + rect.right) / 2;
			let newTop = e.clientY - (rect.top + rect.bottom) / 2;

			if (rect.top + newTop < boardRect.top)
				top = boardRect.top - rect.top;
			else if (rect.bottom + newTop > boardRect.bottom)
				top = boardRect.bottom - rect.bottom;
			else
				top = newTop;

			if (rect.left + newLeft < boardRect.left)
				left = boardRect.left - rect.left;
			else if (rect.right + newLeft > boardRect.right)
				left = boardRect.right - rect.right;
			else
				left = newLeft;
		}
	}

	function onMouseUp() {
		moving = false;

		left = 0;
		top = 0;
	}
</script>

<img on:mousedown={onMouseDown} src={CHESS_PIECE_IMAGES[piece.color][piece.type]}
		 alt="{piece.color} {piece.type}"
		 style="left: calc(50% {left < 0 ? '-' : '+'} {Math.abs(left)}px); top: calc(50% {top < 0 ? '-' : '+'} {Math.abs(top)}px); z-index: {moving ? 2 : 1};"
		 bind:this={pieceElement} />

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<style>
    img {
        position: absolute;
        width: calc(100%);
        height: calc(100%);
        padding: 8px;
        cursor: move;
        transform: translate(-50%, -50%);
        user-select: none;
    }

    @media screen and (max-width: 720px) {
        img {
            padding: 4px;
        }
    }

    @media screen and (max-width: 360px) {
        img {
            padding: 2px;
        }
    }
</style>
