<script lang="ts">
    import { init } from "$lib/initApp.js";
    import { cuePointStore} from "$lib/store/cuepoints.store.js";
    init();
   
</script>

<div>
    {#each $cuePointStore as cue}
        <span>{cue.index} {cue.cue.name}</span>
    {/each}
</div>
