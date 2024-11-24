<script lang="ts">
    
    import { Pane, Splitpanes } from "svelte-splitpanes";
    import GmapComponent from "$lib/GmapComponent.svelte";
</script>

<Splitpanes horizontal style="height:100%" dblClickSplitter={false}>
    <Pane size={50}>
        <GmapComponent>
            <Markers></Markers>
        </GmapComponent>
    </Pane>
    <Pane size={50}>
        <p>statusbar - and yet, another splitpane, same technique</p>
    </Pane>
</Splitpanes>
