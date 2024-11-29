<script lang="ts">
    import { statusbar } from "$lib/store/statusBar.store.js";
    import { onDestroy } from "svelte";

    let messages: [string] = [];

    const unsubscribe = statusbar.subscribe((newMes) => {
        messages = [...messages, newMes];
    });
</script>

{#each messages as mes}
    <p>{mes}</p>
{/each}
