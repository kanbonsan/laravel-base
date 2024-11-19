<script lang="ts">
    import { onMount, setContext } from "svelte";
    import { PUBLIC_GOOGLE_MAPS as MAPS_KEY } from "$env/static/public";
    import { Loader } from "@googlemaps/js-api-loader";

    let mapElement;

    onMount(async()=>{
        const loader = new Loader({
            apiKey: MAPS_KEY,
            version: "weekly"
        })
        
    })

</script>

<div bind:this={mapElement}></div>
{#if map}
    <slot />
{/if}
