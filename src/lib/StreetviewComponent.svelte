<script lang="ts">
    import { onMount, setContext } from "svelte";
    import type { Snippet } from "svelte";
    import { writable } from "svelte/store";
    import { loader } from "$lib/initGmap.js";

    let svElement: HTMLElement | undefined = $state();
    let sv = writable();
    let promise = $state();

    type Props = {
        children: Snippet;
    };

    const { children }: Props = $props();
    setContext("sv", { loader, sv });

    onMount(() => {
        promise = (async () => {
            const { StreetViewPanorama } =
                await loader.importLibrary("streetView");
            $sv = new StreetViewPanorama(svElement!, {
                position: { lat: 35.29147, lng: 137.06225 },
            });
        })();
    });
</script>

<div bind:this={svElement} style="position: relative; height:100%;"></div>
