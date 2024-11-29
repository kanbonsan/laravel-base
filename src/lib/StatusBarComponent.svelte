<script lang="ts">
    import { onDestroy } from "svelte";
    import { statusbar } from "$lib/store/statusBar.store.js";

    let barMessage: string;

    const unsubscribe = statusbar.subscribe((mes) => {

        barMessage = mes

        const timeoutId = setTimeout(() => {
            barMessage = "BRMTOOL3";
        }, 2000);

        return () => clearTimeout(timeoutId);
    });

    onDestroy(unsubscribe);
</script>

<p class="bg-green-200">{barMessage}</p>
