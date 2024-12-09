<script lang="ts">
    import MySlider from "$lib/MySlider.svelte"
    
    let min = $state(100)
    let max = $state(1000)

</script>

<p>my range slider test</p>

<div>in Parent</div>
<div>
    min: {min}, max:{max}
</div>

<MySlider bind:min={min} bind:max={max}></MySlider>