<script lang="ts">
    export let data: any;
    import Search from '$lib/components/home/Search.svelte';
    import Repositories from '$lib/components/home/Repositories.svelte';
</script>

<h1 class = "mb-4">Home</h1>
<div class="card p-3 pb-1">
    <Search/>
    <Repositories bind:data={data}/>
</div>
