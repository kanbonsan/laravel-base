<script lang="ts">
    import {onMount}from "svelte"

let svElement: HTMLElement | undefined = $state()

</script>

<div bind:this={svElement} style="position: relative; height:100%;"></div>

