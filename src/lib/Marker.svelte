<script lang="ts">
    import { onMount, getContext } from "svelte";

    const { loader, map, test }: { loader: any; map: any; test: any } =
        getContext("gmap");

    onMount(async () => {
        //console.log(test, loader, $map);
        const { AdvancedMarkerElement } = await loader.importLibrary("marker");

        setTimeout(() => {
            console.log($map);
            const m = new AdvancedMarkerElement({
                map:$map,
                position: { lat: 35.29147, lng: 137.06225 },
            });
        }, 2000);
    });
</script>
