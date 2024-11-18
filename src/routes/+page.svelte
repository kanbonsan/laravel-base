<script lang="ts">
    import { PUBLIC_GOOGLE_MAPS as MAPS_KEY } from "$env/static/public";
    import { Loader } from "@googlemaps/js-api-loader"
    
    const loader = new Loader({
        apiKey: MAPS_KEY,
        version: "weekly"
    })

    loader.load().then(()=>{
        console.log('load')
    })
</script>

<h1>Welcome to your library project</h1>
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
