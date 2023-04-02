<script lang="ts">
    import { pagination } from "$stores/pagination";

    function increment() {
        pagination.update((n) => n + 1);
    }

    function decrease() {
        pagination.update((n) => n - 1);
    }
</script>

<p>{pagination}</p>
<div class="input-group mb-3">
    <!-- Search and Pagination -->
    <button class="btn bg-svelte btn-pagination" on:click={decrease}>
        <span aria-hidden="true">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-double-left"
                viewBox="0 0 16 16"
            >
                <path
                    fill-rule="evenodd"
                    d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
                <path
                    fill-rule="evenodd"
                    d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
            </svg>
        </span>
    </button>
    <form method="POST" action="/search" class="text-start">
        <input
            type="text"
            class="form-control"
            id="searchInput"
            aria-describedby="searchHelp"
            placeholder="Search for a repository"
            name="search"
            size="30"
            required
        />
    </form>
    <button class="btn bg-svelte btn-pagination" on:click={increment}>
        <span aria-hidden="true">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-double-right"
                viewBox="0 0 16 16"
            >
                <path
                    fill-rule="evenodd"
                    d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
                />
                <path
                    fill-rule="evenodd"
                    d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
                />
            </svg>
        </span>
    </button>
    <!-- Search and Paginatino END -->
</div>
