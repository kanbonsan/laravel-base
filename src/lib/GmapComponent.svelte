<script lang="ts">
    import { onMount, onDestroy, setContext } from "svelte";
    import { writable } from "svelte/store";
    import type { Snippet } from "svelte";
    import { loader } from "$lib/initGmap.js";
    import { statusbar } from "./store/statusBar.store.js";

    // google map を描画する div エレメント
    let mapElement: HTMLElement | undefined = $state();

    /**
     * google map マップオブジェクト
     * 　store にいれることでコンポーネントをまたいで利用する
     */
    let map = writable<google.maps.Map>();

    let promise = $state();

    type Props = {
        children: Snippet;
    };

    const { children }: Props = $props();

    setContext("gmap", { loader, map });

    onMount(() => {
        promise = (async () => {
            const { Map } = await loader.importLibrary("maps");
            $map = new Map(mapElement as HTMLElement, {
                center: { lat: 35.29147, lng: 137.06225 },
                zoom: 15,
                mapId: "4b9d08c3166f66cd",
            });
            $statusbar = "mapを描画しました";

            $map.addListener(
                "click",
                (
                    ev: google.maps.MapMouseEvent | google.maps.IconMouseEvent,
                ) => {
                    $statusbar = `map onclick ${ev.latLng!.lat()}:${ev.latLng!.lng()}`;
                },
            );
        })();
    });
</script>

<div bind:this={mapElement} style="position: relative; height:100%;"></div>
// デフォルトのスロット
{#await promise then}
    {#if children}
        {@render children()}
    {:else}
        <div>fallback</div>
    {/if}
{/await}
