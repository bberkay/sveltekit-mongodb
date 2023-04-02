<h1 class = "mb-4">Home</h1>
<div class="card p-3">
    <form method="POST" action="/search" class="text-start">
        <div class="mb-3">
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
          <!-- Search END -->
        </div>
    </form>
    <div class="card inner-card text-start">
        <div class="pt-2 ps-3 pe-3 card-header-section">
            <h5>Chess Engine <small><a href="/" class = "card-title-link ms-1" target="_blank"><span class="badge text-bg-primary">See</span></a></small></h5>
        </div>
        <div class = "border-div mt-1 mb-1"></div>
        <div class="pt-2 ps-3 pe-3 pb-2 card-content">
            <p class = "card-content-p">Chess engine with Pure Javascript, HTML and CSS</p>
            <small><span class = "badge bg-secondary">#HTML</span> <span class = "badge bg-secondary">#CSS</span> <span class = "badge bg-secondary">#JS</span> <span class = "badge bg-secondary">#CHESS</span></small>
        </div>
    </div>
</div>
