<script lang="ts">
    import { onMount, getContext, hasContext } from "svelte";

    const { loader, map } = getContext("gmap");
    console.log(map());

    onMount(async () => {
        console.log(map)
        const { AdvancedMarkerElement } = await loader.importLibrary("marker");

        const m = new AdvancedMarkerElement({
            map,
            position: { lat: 35.29147, lng: 137.06225 },
        });
    });
</script>
