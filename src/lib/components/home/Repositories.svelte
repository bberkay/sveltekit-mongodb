<script lang="ts">
    interface Repository {
        title: string;
        description: string;
        link: string;
        tags: string[];
    }

    // Comes from +page.svelte for repositories
    let { data = $bindable() }: { data: Repository[] } = $props();

    let skip = 1;
    async function increment(): Promise<void>
    {
        // Increment skip by 1
        if (skip < 3) {
            skip += 1;
            await paginateData();
        }
    }

    async function decrease(): Promise<void>
    {
        // Decrease skip by 1
        if (skip > 1) {
            skip -= 1;
            await paginateData();
        }
    }

    async function setPagination(n: number): Promise<void>
    {
        // Set skip to n
        skip = n;
        await paginateData();
    }

    async function paginateData(): Promise<void>
    {
        // Fetch data from server with skip then set to data
        const response = await fetch("/pagination?skip=" + (skip - 1));
        data = await response.json();
    }

    let search: string = $state("");
    let search_control: boolean = $state(false); // Control like onMount

    async function searchRepositories() {
        // Fetch data from server with search then set to data
        const response = await fetch("/search?search=" + search);
        data = await response.json();
    }

    // Search if search.length >= 3
    $effect(() => {
        if (search.length >= 3) {
            searchRepositories();
            search_control = true;
        } else if (search.length < 3 && search_control) {
            // If search.length < 3 and search_control is true then get page 1(skip 0) from server
            paginateData();
            search_control = false;
        }
    });
</script>

<!-- Search-->
<div class="mb-3">
    <input
        type="text"
        class="form-control"
        id="searchInput"
        aria-describedby="searchHelp"
        placeholder="Search for a repository"
        name="search"
        size="30"
        min="3"
        autocomplete="off"
        required
        bind:value={search}
    />
</div>
<!-- Search END -->

<!-- Repositories -->
{#each data as repository}
    <div class="card inner-card text-start mb-4">
        <div class="pt-2 ps-3 pe-3 card-header-section">
            <h5>
                {repository.title}<small>
                    <a
                        href={repository.link}
                        class="card-title-link ms-1"
                        target="_blank"
                        ><span class="badge text-bg-primary">See</span>
                    </a></small
                >
            </h5>
        </div>
        <div class="border-div mt-1 mb-1"></div>
        <div class="pt-2 ps-3 pe-3 pb-3 card-content">
            <p class="card-content-p">{repository.description}</p>
            <small>
                {#each repository.tags as tag}
                    <span class="badge bg-secondary me-1">{tag}</span>
                {/each}
            </small>
        </div>
    </div>
{/each}
<!-- Repositories END -->

<!-- Pagination -->
{#if search.length < 3}
<nav aria-label="Page navigation example" class="mx-auto">
    <ul class="pagination">
        <li class="page-item">
            <button
                class="page-link bg-svelte"
                onclick={decrease}
                aria-label="Previous"
            >
                <span aria-hidden="true">&laquo;</span>
            </button>
        </li>
        <li class="page-item">
            <button class="page-link" onclick={() => setPagination(1)}
                >1</button
            >
        </li>
        <li class="page-item">
            <button class="page-link" onclick={() => setPagination(2)}
                >2</button
            >
        </li>
        <li class="page-item">
            <button class="page-link" onclick={() => setPagination(3)}
                >3</button
            >
        </li>
        <li class="page-item">
            <button
                class="page-link bg-svelte"
                onclick={increment}
                aria-label="Next"
            >
                <span aria-hidden="true">&raquo;</span>
            </button>
        </li>
    </ul>
</nav>
{/if}
<!-- Pagination END -->
