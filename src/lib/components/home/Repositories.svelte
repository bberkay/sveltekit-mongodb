<script lang="ts">
    export let data: any;

    let skip = 0;
    async function increment() {
        if(skip < 3) {
            skip += 1;
            await paginateData();
        }
    }

    async function decrease() {
        if(skip > 1) {
            skip -= 1;
            await paginateData();
        }
    }

    async function setPagination(n: number) {
        skip = n;
        await paginateData();
    }

    async function paginateData(){
        const response = await fetch("?skip=" + (skip - 1));
        await response.json();
    }
    
</script>

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
                    </a></small>
            </h5>
        </div>
        <div class="border-div mt-1 mb-1" />
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

<nav aria-label="Page navigation example" class = "mx-auto">
    <ul class="pagination">
        <li class="page-item">
            <button class="page-link bg-svelte" on:click={decrease} aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </button>
        </li>
        <li class="page-item"><button class="page-link" on:click={() => setPagination(1)}>1</button></li>
        <li class="page-item"><button class="page-link" on:click={() => setPagination(2)}>2</button></li>
        <li class="page-item"><button class="page-link" on:click={() => setPagination(3)}>3</button></li>
        <li class="page-item">
            <button class="page-link bg-svelte" on:click={increment} aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </button>
        </li>
    </ul>
</nav>
