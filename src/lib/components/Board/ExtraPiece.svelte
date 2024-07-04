<script lang="ts">
	import {onMount} from 'svelte';

	import {dragPiece, extraPiece} from '../../stores/chess-board.store';
	import {CHESS_PIECE_IMAGES} from '../../constants/chess-piece-images.constant';
	import type {ChessPieceColor} from '../../types/enum/chess-piece-color.enum';
	import type {ChessPieceType} from '../../types/enum/chess-piece-type.enum';

	export let color: ChessPieceColor;
	export let type: ChessPieceType;

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
		extraPiece.set({id: color[0] + type[0] + Date.now(), color, type});

		left = e.clientX - (rect.left + rect.right) / 2;
		top = e.clientY - (rect.top + rect.bottom) / 2;
	}

	function onMouseMove(e: MouseEvent) {
		if (moving) {
			left = e.clientX - (rect.left + rect.right) / 2;
			top = e.clientY - (rect.top + rect.bottom) / 2;
		}
	}

	function onMouseUp() {
		moving = false;

		left = 0;
		top = 0;
	}

	function onWindowResize() {
		rect = pieceElement.getBoundingClientRect();
	}
</script>

<div id="container">
	<img on:mousedown={onMouseDown} src={CHESS_PIECE_IMAGES[color][type]}
			 alt="{color} {type}"
			 style="left: calc(50% {left < 0 ? '-' : '+'} {Math.abs(left)}px); top: calc(50% {top < 0 ? '-' : '+'} {Math.abs(top)}px); z-index: {moving ? 2 : 1};"
			 bind:this={pieceElement} id="movable" />
	<img src={CHESS_PIECE_IMAGES[color][type]} alt="{color} {type}" id="stable" />
</div>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} on:resize={onWindowResize} />

<style>
		#container {
				position: relative;
		}

		#movable, #stable {
        width: calc((min(100vw, 100vh) - 72px) / 8);
        height: calc((min(100vw, 100vh) - 72px) / 8);
        padding: 8px;
        cursor: move;
        transform: translate(-50%, -50%);
        user-select: none;
		}

    #movable {
        position: relative;
    }

		#stable {
        position: absolute;
				top: 50%;
				left: 50%;
		}

    @media screen and (max-width: 720px) {
        #movable, #stable {
            padding: 4px;
        }
    }

    @media screen and (max-width: 360px) {
        #movable, #stable {
            padding: 2px;
        }
    }
</style>
