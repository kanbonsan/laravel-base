<script lang="ts">
    import { onMount, setContext } from "svelte";
    import type { Snippet } from "svelte";
    import { PUBLIC_GOOGLE_MAPS as MAPS_KEY } from "$env/static/public";
    import { Loader } from "@googlemaps/js-api-loader";

    let mapElement: HTMLElement | undefined = $state();
    let map = $state();

    // type Props = {
    //     children: Snippet;
    // };

    const { children } = $props();

    onMount(async () => {
        const loader = new Loader({
            apiKey: MAPS_KEY,
            version: "weekly",
        });

        const { Map } = await loader.importLibrary("maps");
        const { Marker, AdvancedMarkerElement } =
            await loader.importLibrary("marker");

        map = new Map(mapElement as HTMLElement, {
            center: { lat: -25.344, lng: 131.031 },
            zoom: 3,
        });

        setContext("gmap", { mapElement, Map, Marker, AdvancedMarkerElement });
    });
</script>

<div bind:this={mapElement} style="position: relative; height:100%;"></div>
// デフォルトのスロット
<div>
    {@render children()}
</div>
