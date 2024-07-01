<script lang="ts">
	import Piece from './Piece.svelte';
	import {chessBoard, dragPiece} from '../../stores/chess-board.store.ts';
	import type {ChessBoardRow} from '../../types/enum/chess-board-row.enum';
	import type {ChessBoardColumn} from '../../types/enum/chess-board-column.enum';

	export let row: ChessBoardRow;
	export let rowNumber: string;
	export let column: ChessBoardColumn;
	export let columnLetter: string;
	export let boardRect: DOMRect;

	let tile: HTMLDivElement;

	function onMouseUp(e: MouseEvent) {
		const rect = tile.getBoundingClientRect();

		if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom)
			if ($dragPiece)
				chessBoard.movePiece($dragPiece, {row, column});
	}
</script>

<div class="{$$props.class}" data-column="{columnLetter}" data-row="{rowNumber}" bind:this={tile}>
	{#if $chessBoard[row][column].piece}
		<Piece piece={$chessBoard[row][column].piece} {row} {column} {boardRect}/>
	{/if}
</div>

<svelte:window on:mouseup={onMouseUp}/>
