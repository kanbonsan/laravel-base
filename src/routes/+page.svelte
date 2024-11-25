<script lang="ts">
    
    import { Pane, Splitpanes } from "svelte-splitpanes";
    import GmapComponent from "$lib/GmapComponent.svelte";
    import Marker from "$lib/Marker.svelte";
</script>

<Splitpanes horizontal style="height:100%" dblClickSplitter={false}>
    <Pane size={50}>
        <GmapComponent>
            <Marker></Marker>
        </GmapComponent>
    </Pane>
    <Pane size={50}>
        <p>Profile Map Area</p>
    </Pane>
</Splitpanes>
