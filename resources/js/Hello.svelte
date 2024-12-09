<script lang="ts">
    let name = "Svelte";
</script>

<h1 class="text-4xl font-bold">Hello {name}</h1>

<button
    class="bg-blue-500 text-white px-4 py-2 rounded"
    on:click={() => (name = "Svelte" + Math.random())}>Change Name</button
>

<svelte:head>
    <title>Hello Svelte</title>
</svelte:head>
