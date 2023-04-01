<div class = "container">
    <main class = "d-flex justify-content-center align-items-center vh-100">
        <div class="d-block text-center">
            <!-- Navbar -->
            <nav>
                <a class = "btn bg-svelte" href="/">Home</a>
                <a class = "btn bg-svelte" href="/contact">Contact</a>
            </nav>
            <!-- Navbar END -->
            <div class="pt-4">
                <!-- Page Content -->
                <slot />
                <!-- Page Content END -->
            </div>
        </div>
    </main> 
</div>
