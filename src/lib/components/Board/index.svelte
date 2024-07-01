<script lang="ts">
	import {onMount} from 'svelte';

	import Tile from './Tile.svelte';
	import {ChessBoardRow} from '../../types/enum/chess-board-row.enum';
	import {ChessBoardColumn} from '../../types/enum/chess-board-column.enum';

	let container: HTMLDivElement;
	let rect: DOMRect;

	onMount(() => {
		rect = container.getBoundingClientRect();
	});
</script>

<div id="board-container" bind:this={container}>
	<div id="board-boarder">
		<div id="board">
			{#each Object.values(ChessBoardRow) as row, i}
				<div class="row">
					{#each Object.values(ChessBoardColumn) as column, j}
						<Tile {row} rowNumber="{8 - i}" {column} columnLetter="{String.fromCharCode(65 + j)}" boardRect={rect}
									class="tile" />
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
    #board-container {
        aspect-ratio: 1;
        width: calc(min(100vw, 100vh) - 40px);
        height: calc(min(100vw, 100vh) - 40px);
        margin: 20px;
    }

    #board-boarder {
        width: 100%;
        height: 100%;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #board {
        display: grid;
        grid-template-rows: repeat(8, 1fr);
        width: calc(100% - 32px);
        height: calc(100% - 32px);
        border-radius: 8px;
    }

    .row {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
    }

    .row:nth-child(odd) :global(.tile):nth-child(even), .row:nth-child(even) :global(.tile):nth-child(odd) {
        background: #f0d9b5;
    }

    .row:nth-child(odd) :global(.tile):nth-child(odd), .row:nth-child(even) :global(.tile):nth-child(even) {
        background: #b58863;
    }

    .row:nth-child(1) :global(.tile):nth-child(1) {
        border-radius: 8px 0 0 0;
    }

    .row:nth-child(1) :global(.tile):nth-child(8) {
        border-radius: 0 8px 0 0;
    }

    .row:nth-child(8) :global(.tile):nth-child(1) {
        border-radius: 0 0 0 8px;
    }

    .row:nth-child(8) :global(.tile):nth-child(8) {
        border-radius: 0 0 8px 0;
    }

    .row:nth-child(1) :global(.tile):before, .row:nth-child(8) :global(.tile):before,
    .row :global(.tile):nth-child(1):after, .row :global(.tile):nth-child(8):after {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        font-size: 12px;
        font-weight: bold;
    }

    @media screen and (max-width: 720px) {
        .row:nth-child(1) :global(.tile):before, .row:nth-child(8) :global(.tile):before,
        .row :global(.tile):nth-child(1):after, .row :global(.tile):nth-child(8):after {
            font-size: 10px;
        }
    }

    @media screen and (max-width: 360px) {
        .row:nth-child(1) :global(.tile):before, .row:nth-child(8) :global(.tile):before,
        .row :global(.tile):nth-child(1):after, .row :global(.tile):nth-child(8):after {
            font-size: 8px;
        }
    }

    .row:nth-child(1) :global(.tile):before, .row:nth-child(8) :global(.tile):before {
        content: attr(data-column);
        width: 100%;
        height: 16px;
    }

    .row:nth-child(1) :global(.tile):before {
        top: -16px;
    }

    .row:nth-child(8) :global(.tile):before {
        bottom: -16px;
    }

    .row :global(.tile):nth-child(1):after, .row :global(.tile):nth-child(8):after {
        content: attr(data-row);
        width: 16px;
        height: 100%;
    }

    .row :global(.tile):nth-child(1):after {
        left: -16px;
    }

    .row :global(.tile):nth-child(8):after {
        right: -16px;
    }

    :global(.tile) {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
</style>
