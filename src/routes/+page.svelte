<script lang="ts">
    import Repositories from '$lib/components/home/Repositories.svelte';

    // Comes from +page.server.ts
    let { data = $bindable() }: { data: any } = $props();
</script>

<h1 class = "mb-4">Home</h1>
<div class="card p-3 pb-1">
    <Repositories data={data["data"]}/>
</div>
