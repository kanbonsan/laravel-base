<script lang="ts">
    import { Pane, Splitpanes } from "svelte-splitpanes";
    import GmapComponent from "$lib/GmapComponent.svelte";
    import StreetviewComponent from "$lib/StreetviewComponent.svelte";
    import ConsoleComponent from "$lib/ConsoleComponent.svelte";
    import TestComponent from "$lib/TestComponent.svelte";

    import MapsMarker from "$lib/MapsMarker.svelte";
    import MapsPolyline from "$lib/MapsPolyline.svelte";

    import ApiTestComponent from "$lib/ApiTestComponent.svelte"
</script>

<Splitpanes style="height:100%" dblClickSplitter={false}>
    <Pane size={50}>
        <Splitpanes horizontal>
            <Pane size={50}>
                <GmapComponent>
                    <MapsMarker></MapsMarker>
                    <MapsPolyline></MapsPolyline>
                </GmapComponent>
            </Pane>
            <Pane size={50}>
                <TestComponent></TestComponent>
            </Pane>
        </Splitpanes>
    </Pane>
    <Pane size={50}>
        <Splitpanes horizontal>
            <Pane size={50}>
                <StreetviewComponent></StreetviewComponent>
            </Pane>
            <Pane size={50}>
                <ApiTestComponent></ApiTestComponent>
            </Pane>
        </Splitpanes>
    </Pane>
</Splitpanes>
