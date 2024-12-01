<script lang="ts">
    import { getContext } from "svelte";
    import { statusbar } from "$lib/store/statusBar.store.js";
    const { loader, map }: { loader: any; map: any } = getContext("gmap");

    import { routePoints } from "$lib/store/points.store.js"

    let poly: google.maps.Polyline;

    (async function () {
        const { Polyline } = await loader.importLibrary("maps");
        poly = new Polyline({
            editable: false,
            clickable: true,
            map: $map,
            path: $routePoints
        });
        poly.addListener("mouseover", (ev:google.maps.PolyMouseEvent)=>console.log(ev))
        
    })();
</script>
