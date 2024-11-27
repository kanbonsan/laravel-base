<script lang="ts">
    import { Pane, Splitpanes } from "svelte-splitpanes";
    import GmapComponent from "$lib/GmapComponent.svelte";
    import Marker from "$lib/Marker.svelte";
</script>

<Splitpanes style="height:100%" dblClickSplitter={false}>
    <Pane size={50}>
        <Splitpanes horizontal>
            <Pane size={50}>
                <GmapComponent>
                    <Marker></Marker>
                </GmapComponent>
            </Pane>
            <Pane size={50}></Pane>
        </Splitpanes>
    </Pane>
    <Pane size={50}>
        <Splitpanes horizontal>
            <Pane size={50}>
                <p>streetview</p>
            </Pane>
            <Pane size={50}></Pane>
        </Splitpanes>
    </Pane>
</Splitpanes>
