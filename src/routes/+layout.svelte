<div class = "container">
    <main class = "d-flex justify-content-center align-items-center vh-100">
        <div class="d-block text-center">
            <!-- Navbar -->
            <nav class = "ms-3">
                <a class = "btn bg-svelte me-2" href="/">Home</a>
                <a class = "btn bg-svelte me-2" href="/contact">Contact</a>
            </nav>
            <!-- Navbar END -->
            <div class="pt-4">
                <!-- Page Content -->
                <slot />
                <!-- Page Content END -->
            </div>
            <hr>
            <!-- Footer -->
            <footer class = "mt-2">
                <div class="d-flex justify-content-center align-items-center">
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png" class = "logo" alt="Svelte logo" width = "30" height = "38">
                    </div>
                    <div class = "ms-2 me-2">
                        <span style = "font-size:1.5rem;color:#383838">&#9679;</span>
                    </div>
                    <div>
                        <img src="https://www.svgrepo.com/show/331488/mongodb.svg" alt="Svelte logo" width="35" height="35" class = "logo">
                    </div>
                    <divc class = "ms-2 me-2">
                        <span style = "font-size:1.5rem;color:#383838;">&#9679;</span>
                    </divc>
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/480px-Typescript.svg.png" class = "logo" alt="Svelte logo" width="33" height="33">
                    </div>
                </div>
            </footer>
            <!-- Footer END -->
        </div>
    </main> 
</div>
