<script lang="ts">
    import { onMount, setContext } from "svelte";
    import { writable } from "svelte/store";
    import type { Snippet } from "svelte";
    import { PUBLIC_GOOGLE_MAPS as MAPS_KEY } from "$env/static/public";
    import { Loader } from "@googlemaps/js-api-loader";

    let mapElement: HTMLElement | undefined = $state();

    let map = writable()

    type Props = {
        children: Snippet;
    };

    const { children }: Props = $props();

    const loader = new Loader({
        apiKey: MAPS_KEY,
        version: "weekly",
    });

    setContext("gmap", ({loader, map: ()=>$map}));

    onMount(async () => {
        const { Map } = await loader.importLibrary("maps");
        $map = new Map(mapElement as HTMLElement, {
            center: { lat: 35.29147, lng: 137.06225 },
            zoom: 15,
        });
    });
</script>

<div bind:this={mapElement} style="position: relative; height:100%;"></div>
// デフォルトのスロット
{#if children}
    {@render children()}
{:else}
    <div>fallback</div>
{/if}
