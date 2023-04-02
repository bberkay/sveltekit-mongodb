<script lang="ts">
    export let data:any;
</script>

{#each data["data"] as repository}
<div class="card inner-card text-start mb-4">
    <div class="pt-2 ps-3 pe-3 card-header-section">
        <h5>{repository.title}<small><a href={repository.link} class = "card-title-link ms-1" target="_blank"><span class="badge text-bg-primary">See</span></a></small></h5>
    </div>
    <div class = "border-div mt-1 mb-1"></div>
    <div class="pt-2 ps-3 pe-3 pb-3 card-content">
        <p class = "card-content-p">{repository.description}</p>
        <small>
        {#each repository.tags as tag}
            <span class = "badge bg-secondary me-1">{tag}</span>
        {/each}
        </small>
    </div>
</div>
{/each}