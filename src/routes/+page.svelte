<script lang="ts">
    import {onMount}from "svelte"
    import { PUBLIC_GOOGLE_MAPS as MAPS_KEY } from "$env/static/public";
    import {Loader} from "@googlemaps/js-api-loader";
    
    let mapElement: any
    let map

    onMount(async () => {
		const loader = new Loader({
			apiKey: MAPS_KEY,
			version: 'weekly'
		});

		const { Map } = await loader.importLibrary('maps');
		const { Marker } = await loader.importLibrary('marker');

		map = new Map(mapElement, {
			center: { lat: -25.344, lng: 131.031 },
			zoom: 3
		}); 
	});

</script>

<h1>Welcome to your library project</h1>
<div bind:this={mapElement} class="h-96"></div>
<p>
    Create your package using @sveltejs/package and preview/showcase your work
    with SvelteKit
</p>
<p>
    Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
    documentation
</p>

<h1 class="box-border text-3xl text-right">Hello world!</h1>
<p>{MAPS_KEY}</p>
