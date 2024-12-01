<script lang="ts">
    import { getContext } from "svelte";
    import { statusbar } from "$lib/store/statusBar.store.js";

    const { loader, map }: { loader: any; map: any } = getContext("gmap");

    let infoContent: HTMLElement
    
    (async () => {
        const { AdvancedMarkerElement } = await loader.importLibrary("marker");
        const m = new AdvancedMarkerElement({
            map: $map,
            position: { lat: 35.29147, lng: 137.06226 },
        });
        m.addListener('click', async ()=>{
            const {InfoWindow} = await loader.importLibrary("maps")
            const info = new InfoWindow({
                content: infoContent,
            })
            info.open($map, m)
        })
        $statusbar = "marker set";
    })();
</script>

<div bind:this={infoContent}>
<p class="text-slate-800 font-bold">中身です</p>
<button>HELLO</button>
</div>
