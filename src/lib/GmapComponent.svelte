<script lang="ts">
    import { onMount, setContext } from "svelte";
    import { writable } from "svelte/store";
    import type { Snippet } from "svelte";
    import { PUBLIC_GOOGLE_MAPS as MAPS_KEY } from "$env/static/public";
    import { Loader } from "@googlemaps/js-api-loader";

    // google map を描画する div エレメント
    let mapElement: HTMLElement | undefined = $state();

    /** 
     * google map マップオブジェクト
     * 　store にいれることでコンポーネントをまたいで利用する
     */
    let map = writable();

    let promise = $state();

    type Props = {
        children: Snippet;
    };

    const { children }: Props = $props();

    const loader = new Loader({
        apiKey: MAPS_KEY,
        version: "weekly",
    });

    setContext("gmap", { loader, map });

    onMount(() => {
        promise = (async () => {
            const { Map } = await loader.importLibrary("maps");
            $map = new Map(mapElement as HTMLElement, {
                center: { lat: 35.29147, lng: 137.06225 },
                zoom: 15,
                mapId: "4b9d08c3166f66cd",
            });
            return "ok";
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
