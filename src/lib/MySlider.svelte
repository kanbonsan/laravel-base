<script lang="ts">

    let { min = $bindable(), max = $bindable()} = $props()

</script>

<div>in My Slider</div>

<div>
    min: {min}, max: {max}
</div>

<input type="number" bind:value={min}/>