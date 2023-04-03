<script lang="ts">
    // Comes from +page.server.ts
    export let data: any;

    import Repositories from '$lib/components/home/Repositories.svelte';
</script>

<h1 class = "mb-4">Home</h1>
<div class="card p-3 pb-1">
    <Repositories bind:data={data["data"]}/>
</div>