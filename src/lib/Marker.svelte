<script lang="ts">
    import { getContext } from "svelte";
    import {statusbar}from "$lib/store/statusBar.store.js"

    const { loader, map }: { loader: any; map: any } = getContext("gmap");

    (async () => {
        const { AdvancedMarkerElement } = await loader.importLibrary("marker");
        const m = new AdvancedMarkerElement({
            map: $map,
            position: { lat: 35.29147, lng: 137.06226 },
        });
        $statusbar = "marker set"
    })();
</script>
