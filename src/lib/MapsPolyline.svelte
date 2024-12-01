<script lang="ts">
    import { getContext } from "svelte";
    import { statusbar } from "$lib/store/statusBar.store.js";
    const { loader, map }: { loader: any; map: any } = getContext("gmap");
    let poly: google.maps.Polyline;

    (async function () {
        const { Polyline } = await loader.importLibrary("maps");
        poly = new Polyline();
        $statusbar = "poly ready";
    })();
</script>
