<script lang="ts">
    import { onMount, setContext } from "svelte";
    import { PUBLIC_GOOGLE_MAPS as MAPS_KEY } from "$env/static/public";
    import { Loader } from "@googlemaps/js-api-loader";

    let mapElement: HTMLElement = $state(undefined)
    let map = $state()

    onMount(async () => {
        const loader = new Loader({
            apiKey: MAPS_KEY,
            version: "weekly",
        });
        const { Map } = await loader.importLibrary("maps");
        const { Marker } = await loader.importLibrary("marker");

        map = new Map(mapElement, {
            center: { lat: -25.344, lng: 131.031 },
            zoom: 3,
        });

        setContext('gmap', {mapElement, Map, Marker})
    });

</script>

<div bind:this={mapElement} style="position: relative; height:100%;"></div>




