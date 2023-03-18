<script>
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
</script>

<div class="layout px-4 md:px-6 max-w-7xl mx-auto">
    <Header/>
    <main class="max-w-7xl py-8">
        <slot />
    </main>
</div>

<style>
    .layout {
        display: grid;
        grid-template-rows: auto 1fr;
        min-height: 100vh;
    }
</style>
